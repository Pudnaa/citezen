import { serverData } from "service/Service";
// import * as Constants from "@constants/metaConstants";
import { meta, devMeta, cloudMeta } from "config/service";
import { jsonParse } from "util/helper";
import _ from "lodash";

//*jagaa
//layout Data Prepare functions
export const prepareWithBody = async (rawLayoutConfig) => {
  const thisLayoutNemgoo = jsonParse(rawLayoutConfig["layoutnemgoo"]);
  const thisLayout = thisLayoutNemgoo?.layout;
  // const { metaid, sectionCode: masterSectionCode } = thisLayoutNemgoo?.master;
  const metaid = thisLayoutNemgoo?.master?.metaid || undefined;
  if (!metaid) return [rawLayoutConfig, thisLayout];

  const masterLayoutConfig =
    (
      await serverData(devMeta.serverUrl, meta.COMMAND_LAYOUT, {
        filtermetadataid: metaid,
      })
    )?.result || {};

  const masterLayoutNemgoo = jsonParse(masterLayoutConfig["layoutnemgoo"]);
  const masterLayout = masterLayoutNemgoo?.layout;
  // console.log("🚀 ~ prepareWithBody ~ masterLayout", masterLayout);
  // console.log("🚀 ~ prepareWithBody ~ thisLayout", thisLayout);
  // console.log("🚀 ~ prepareWithBody ~ masterSectionCode", masterSectionCode);

  findBodyAndUpdate(masterLayout, "body", thisLayout);

  return [masterLayoutConfig, masterLayout];
};

const findBodyAndUpdate = (object, findObject, thisLayout) => {
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

export const prepareSectionList = async (mergedLayoutConfig) => {
  const sectionList =
    _.values(mergedLayoutConfig?.meta_bp_layout_section) || [];

  let readySectionList = [];
  for (let item of sectionList) {
    if (
      item.metatypeid === meta.METATYPE_BUSINESSPROCESS &&
      item.islayout === "1"
    ) {
      // console.log("ЭНИЙГ ХАРААЧ", item.widgetcode);

      const layoutConfig =
        (
          await serverData(devMeta.serverUrl, meta.COMMAND_LAYOUT, {
            filtermetadataid: item.metadataid,
          })
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
