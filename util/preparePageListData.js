import { serverData, callServerPageList } from "service/callERPServices";
// import * as Constants from "@constants/metaConstants";
import { metaConfig } from "config/metaConfig";
import { jsonParse } from "util/helper";
import _ from "lodash";

/* ------------------- prepareWithBody ------------------ */
//*jagaa
//layout Data Prepare functions

const prepareWithBody = async (thisPageConfig, ourMetaConstant) => {
  const thisPageNemgoo = jsonParse(thisPageConfig["layoutnemgoo"]);
  const thisPageLayout = thisPageNemgoo?.layout;
  // const { metaid, sectionCode: masterSectionCode } = thisPageNemgoo?.master;
  const metaid = thisPageNemgoo?.master?.metaid || undefined;
  if (!metaid) return [thisPageConfig, thisPageLayout];

  const masterPageConfig =
    (
      await serverData(
        ourMetaConstant.serverUrl,
        metaConfig.COMMAND_PAGECONFIG,
        {
          filtermetadataid: metaid,
        },
        ourMetaConstant
      )
    )?.result || {};

  // console.log("ЧЧЧЧЧ ~ domainname", thisPageConfig.domainname);
  // console.log("ЧЧЧЧЧ slugname", thisPageConfig.slugname);
  // console.log("ЧЧЧЧЧ hostname", thisPageConfig.hostname);

  const masterPageNemgoo = jsonParse(masterPageConfig["layoutnemgoo"]);
  const masterPageLayout = masterPageNemgoo?.layout;

  findBodyAndUpdate(masterPageLayout, "body", thisPageLayout);

  return [
    {
      ...masterPageConfig,
      readyPageNemgoo: jsonParse(masterPageConfig.layoutnemgoo),
      thisPageConfig: {
        ...thisPageConfig,
        readyHostname: jsonParse(thisPageConfig.hostname),
      },
    },
    masterPageLayout,
  ];
};

/* ------------------ findBodyAndUpdate ----------------- */
const findBodyAndUpdate = (object = [], findObject, thisLayout) => {
  let myObject;

  for (let item of object) {
    // let ddd = _.find(item, findObject);
    let ddd = item.sectionCode === findObject ? item : undefined;
    if (ddd) {
      myObject = ddd;
      item.children = [...thisLayout];
      break;
    }
    if (item.children)
      ddd = findBodyAndUpdate(item.children, findObject, thisLayout);
    if (ddd) {
      myObject = ddd;
      // item.children = [{ title: "hahahaha" }];
      break;
    }
  }

  return myObject;
};

/* ----------------- prepareSectionList ----------------- */
const prepareSectionList = async (mergedLayoutConfig, ourMetaConstant) => {
  const sectionList =
    _.values(mergedLayoutConfig?.meta_bp_layout_section) || [];

  let readySectionList = [];
  for (let item of sectionList) {
    if (
      item.metatypeid === metaConfig.METATYPE_BUSINESSPROCESS &&
      item.islayout === "1"
    ) {
      // console.log("ЭНИЙГ ХАРААЧ", item.widgetcode);

      const layoutConfig =
        (
          await serverData(
            ourMetaConstant.serverUrl,
            metaConfig.COMMAND_PAGECONFIG,
            {
              filtermetadataid: item.metadataid,
            },
            ourMetaConstant
          )
        )?.result || {};

      const deepLayoutConfig = (await prepareSectionList(layoutConfig)) || {};
      readySectionList.push({
        ...item,
        children: { ...deepLayoutConfig },
        thisislayout: true,
      });
    } else {
      readySectionList.push({ ...item, thisislayout: false });
    }
  }

  const readyLayoutConfig = {
    ...mergedLayoutConfig,
    meta_bp_layout_section: readySectionList,
    thisislayout: true,
  };

  return readyLayoutConfig;
};

/* ---------------- preparePositionNemgoo --------------- */
const preparePositionNemgoo = (bpsectiondtl) => {
  let array_bpsectiondtl = _.values(bpsectiondtl);
  array_bpsectiondtl.map((item, index) => {
    array_bpsectiondtl[index].positionnemgooReady = jsonParse(item.otherattr);
  });

  return array_bpsectiondtl;
};

/* ------------------------------------------------------ */
/*                     PREPARE PAGE DATA                    */
/* ------------------------------------------------------ */
export default async function preparePageListData(ourMetaConstant, pageid) {
  //ERP-аас тухайн Page Layout-ийн бүх тохиргоо ирнэ. Том JSON байгаа.
  const thisPageConfig = await callServerPageList(
    {
      filtermetadataid: pageid,
    },
    ourMetaConstant
  );

  //body Master пэйж байвал түүнтэй нэгтгэж нэг том Page Layout гаргаж авна.
  const [mergedPageConfig, mergedLayout = []] = await prepareWithBody(
    thisPageConfig,
    ourMetaConstant
  );

  //Цаашид React даяар ашиглах боломжтой бэлэн Page Layout-ийн том JSON гаргаж авна.
  const readyMergedLayoutConfig = await prepareSectionList(
    mergedPageConfig,
    ourMetaConstant
  );

  //Нэг Widget буюу адилхан байвал дахин нэмэх хэрэггүй.
  let meta_bp_layout_section = [
    ...readyMergedLayoutConfig.meta_bp_layout_section,
  ];
  const eded = _.values(thisPageConfig.meta_bp_layout_section);
  if (readyMergedLayoutConfig.meta_bp_layout_section[0]?.id !== eded[0]?.id) {
    meta_bp_layout_section = [...meta_bp_layout_section, ...eded];
  }

  //бүх widget-ийн nemgoog- jsonParse хийж авъя.
  //бас бүх positionNemgoo буюу bpsectiondtl-ийг jsonParse хийж авъя.
  meta_bp_layout_section.map((item, index) => {
    meta_bp_layout_section[index].widgetnemgooReady =
      jsonParse(item?.widgetnemgoo) || {};
    meta_bp_layout_section[index].rawPositionList = preparePositionNemgoo(
      meta_bp_layout_section[index].bpsectiondtl
    );
  });

  //Page даяар ажиллах General Nemgoo-г Master Пэйжийн layoutNemgoo-оос олж авах ёстой.
  const readyMergedLayoutNemgoo = jsonParse(
    readyMergedLayoutConfig.layoutnemgoo
  );
  const generalConfig = readyMergedLayoutNemgoo?.config || {};

  return {
    mergedLayout,
    readyMergedLayoutConfig,
    meta_bp_layout_section,
    generalConfig,
    ourMetaConstant,
  };
}
