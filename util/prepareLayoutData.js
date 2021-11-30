import { serverData } from "service/Service";
// import * as Constants from "@constants/metaConstants";
import { metaConfig } from "config/metaConfig";
import { jsonParse } from "util/helper";
import _ from "lodash";

//*jagaa
//layout Data Prepare functions
const prepareWithBody = async (rawLayoutConfig, ourMetaConstant) => {
  const thisLayoutNemgoo = jsonParse(rawLayoutConfig["layoutnemgoo"]);
  const thisLayout = thisLayoutNemgoo?.layout;
  // const { metaid, sectionCode: masterSectionCode } = thisLayoutNemgoo?.master;
  const metaid = thisLayoutNemgoo?.master?.metaid || undefined;
  if (!metaid) return [rawLayoutConfig, thisLayout];

  const masterLayoutConfig =
    (
      await serverData(
        ourMetaConstant.serverUrl,
        metaConfig.COMMAND_LAYOUT,
        {
          filtermetadataid: metaid,
        },
        ourMetaConstant
      )
    )?.result || {};

  const masterLayoutNemgoo = jsonParse(masterLayoutConfig["layoutnemgoo"]);
  const masterLayout = masterLayoutNemgoo?.layout;
  // console.log("🚀 ~ prepareWithBody ~ masterLayout", masterLayout);
  // console.log("🚀 ~ prepareWithBody ~ thisLayout", thisLayout);
  // console.log("🚀 ~ prepareWithBody ~ masterSectionCode", masterSectionCode);

  findBodyAndUpdate(masterLayout, "body", thisLayout);

  return [masterLayoutConfig, masterLayout];
};

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
            metaConfig.COMMAND_LAYOUT,
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

export default async function prepareLayoutData(ourMetaConstant, layoutid) {
  //ERP-аас тухайн Page Layout-ийн бүх тохиргоо ирнэ. Том JSON байгаа.
  const pageLayoutConfig =
    (
      await serverData(ourMetaConstant.serverUrl, metaConfig.COMMAND_LAYOUT, {
        filtermetadataid: layoutid,
      })
    )?.result || [];

  //body Master пэйж байвал түүнтэй нэгтгэж нэг том Page Layout гаргаж авна.
  const [mergedLayoutConfig, mergedLayout = []] = await prepareWithBody(
    pageLayoutConfig,
    ourMetaConstant
  );

  //Цаашид React даяар ашиглах боломжтой бэлэн Page Layout-ийн том JSON гаргаж авна.
  const readyMergedLayoutConfig = await prepareSectionList(
    mergedLayoutConfig,
    ourMetaConstant
  );

  //Нэг Widget буюу адилхан байвал дахин нэмэх хэрэггүй.
  let meta_bp_layout_section = [
    ...readyMergedLayoutConfig.meta_bp_layout_section,
  ];
  const eded = _.values(pageLayoutConfig.meta_bp_layout_section);
  if (readyMergedLayoutConfig.meta_bp_layout_section[0]?.id !== eded[0]?.id) {
    meta_bp_layout_section = [...meta_bp_layout_section, ...eded];
  }

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
