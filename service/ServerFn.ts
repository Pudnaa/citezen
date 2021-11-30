// import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
// import { isZip, selectedLanguage } from "../../constants";
import { listConfigTransform, processConfigTransform } from "@util/Configs";
import { isEmpty, searchJsonValueGet } from "@util/helper";
import { metaConfig } from "@config/metaConfig";
// import {loginUserInfo} from "../views/Login";
// import {getLocalStorage, setLocalStorage} from "./LocalBase";
import { request, serverData } from "./Service";
//логин хийх хүсэлт
// export const loginRequest = async (userName: string, password: string) => {
//   const json = {
//     command: "login",
//     ismobile: "1",
//     isCustomer: 1,
//     zip: isZip.value,
//     parameters: {username: userName.trim(), password: password, isCustomer: "1"},
//   };
//   const data = await request(json);
//   const response = data.response;
//   if (response.status === "error") {
//     return response;
//   } else {
//     const result = response.result;
//     result.userkeys = [{id: result.departmentid}];
//     setLocalStorage("loginUser", result);
//     return response;
//     //connectClient(result);
//   }
// };

// хэрэглэгчтэй холбогдох хүсэлт
const connectClient = async (result: any) => {
  if (result) {
    const body = {
      // zip: isZip.value,
      command: "connectClient",
      sessionId: result.sessionid,
      parameters: { userKeyId: result.userkeys[0].id },
    };
    const res = await request("", body);
    return res.response;
  }
};

// lookup дата авна
export const getLookUpData = (
  metaDataId: string,
  criteria?: any,
  sortname?: string,
  sortorder?: string,
  pagesize?: any,
  pageNum?: any,
  config?: any
) => {
  var json: any = {};
  json.systemmetagroupid = metaDataId;
  json.ignorePermission = "1";
  json.criteria = criteria;
  json.paging = {};
  json.paging.sortcolumnnames = {};
  json.paging.offset = pageNum;
  json.paging.pageSize = pagesize;
  json.paging.sortcolumnnames[sortname!] = { sorttype: sortorder };
  // check treeGrid
  if (!isEmpty(config) && config.treeGrid == true) {
    var parent = config.gridMetaParentId.fieldpath;
    if (isEmpty(json.criteria[parent.toLowerCase()])) {
      json.criteria[parent.toLowerCase()] = {
        0: { operator: "IS NULL", operand: "" },
      };
    }
    json.treegrid = "1";
  }
  // json.criteria = checkDVCriteria(json.criteria);
  return serverData(metaConfig.serverUrl, metaConfig.dataview, json);
};

// процессийн config авна
export const getProcessConfig = async (config: any) => {
  const ProcessConfig = await processConfigTransform(config);
  return ProcessConfig;
};

// процессийн утгуудыг авна
export const getProcessValue = async (command: any, body: any) => {
  var res: any = await serverData(metaConfig.serverUrl, command, body);
  if (
    !isEmpty(res) &&
    !isEmpty(res.response) &&
    res.response.status == "success"
  ) {
    return res.response.result;
  } else if (res.response.status == "error") {
    // CustomAlert.show(res.response.text, "Алдаа", "alert", Colors.RED);
    return {};
  }
};

// List-ийн config-ийг дуудна
// export const getDataViewConfig = async (metaDataId: string) => {
//   const body: any = {
//     id: metaDataId,
//     langName: selectedLanguage,
//   };
//   var DataViewConfig: any = await getLocalStorage("Dataviewconfig", metaDataId);
//   if (!DataViewConfig) {
//     const dataView: any = await serverData("META_DATA_MOBILE_004", body);
//     if (
//       !isEmpty(dataView) &&
//       !isEmpty(dataView.response) &&
//       dataView.response.status == "success"
//     ) {
//       const result = dataView.response.result;
//       const dvConfig = await listConfigTransform(result, metaDataId, false);
//       await setLocalStorage("Dataviewconfig" + metaDataId, dvConfig);
//       DataViewConfig = dvConfig;
//     } else if (dataView.response.status == "error") {
//       // CustomAlert.show(dataView.response.text, "Алдаа", "alert", Colors.RED);
//     }
//   }
//   return DataViewConfig;
// };

// List-ийн утгуудыг дуудна
export const getDataViewData = async (
  metaDataId: string,
  pageNum?: any,
  pagesize?: any,
  sortname?: any,
  sortorder?: any,
  criteria?: any,
  config?: any
) => {
  var data: any = [];
  var json: any = {};
  json.systemmetagroupid = metaDataId;
  json.criteria = criteria;
  json.paging = {};
  json.paging.sortcolumnnames = {};
  json.paging.offset = pageNum;
  json.paging.pageSize = pagesize;
  if (!isEmpty(sortname)) {
    json.paging.sortcolumnnames[sortname] = { sorttype: sortorder };
  }
  // check treeGrid
  if (!isEmpty(config) && config.treeGrid == true) {
    var parent = config.gridMetaParentId.fieldpath;
    if (isEmpty(json.criteria[parent.toLowerCase()])) {
      json.criteria[parent.toLowerCase()] = {
        0: { operator: "IS NULL", operand: "" },
      };
    }
    json.treegrid = "1";
  }
  // json.criteria = checkDVCriteria(json.criteria);
  const res: any = await serverData(
    metaConfig.serverUrl,
    metaConfig.dataview,
    json
  );
  if (
    !isEmpty(res) &&
    res.response.status == "success" &&
    !isEmpty(res.response.result)
  ) {
    const dvData = res.response.result;
    Object.keys(dvData).forEach((key: any, index: any) => {
      dvData[key].rowsIndex = index;
      data.push(dvData[key]);
    });
    return data;
  } else if (res.response.status == "error") {
    // CustomAlert.show(res.response.text, "Алдаа", "alert", Colors.RED);
  }
};
// Bottom Menu-ийн утгуудыг дуудна
// export const getBottomMenu = async (metadataid: any) => {
//   const param: any = {menuId: metadataid};
//   if (!_.isEmpty(loginUserInfo) && !_.isEmpty(loginUserInfo.userkeys[0].id)) {
//     param.userId = loginUserInfo.userkeys[0].id;
//   }
//   var BottomMenuConfig: any = await getLocalStorage("BottomMenuConfig", metadataid);
//   if (!BottomMenuConfig) {
//     const res: any = await serverData("child_menus", param);
//     if (!isEmpty(res) && res.response.status == "success") {
//       await setLocalStorage("BottomMenuConfig" + metadataid, res);
//       BottomMenuConfig = res;
//     } else if (res.response.status == "error") {
//       // CustomAlert.show(res.response.text, "Алдаа", "alert", Colors.RED);
//     }
//   }
//   return BottomMenuConfig;
// };
// // Side Menu-ийн утгуудыг дуудна
// export const getSideMenu = async (metadataid: any) => {
//   const param: any = {menuId: metadataid};
//   if (!_.isEmpty(loginUserInfo) && !_.isEmpty(loginUserInfo?.userkeys[0].id)) {
//     param.userId = loginUserInfo.userkeys[0].id;
//   }
//   const res: any = await serverData("child_menus", param);
//   if (!isEmpty(res) && res.response.status == "success") {
//     await setLocalStorage("SideMenuConfig" + metadataid, res);
//     return res;
//   } else if (res.response.status == "error") {
//     // CustomAlert.show(res.response.text, "Алдаа", "alert", Colors.RED);
//   }
// };
// Workspace-ийн тохиргоо
export const getWorkSpaceConfig = async (metadataid: any) => {
  const body: any = {
    id: metadataid,
  };
  var WorkSpaceConfig: any;
  // = await getLocalStorage("WorkSpaceConfig", metadataid);
  if (!WorkSpaceConfig) {
    const workSpace: any = await serverData(
      metaConfig.serverUrl,
      "META_WORKSPACE_LINK_MOBILE_004",
      body
    );
    if (
      !isEmpty(workSpace) &&
      !isEmpty(workSpace.response) &&
      workSpace.response.status == "success"
    ) {
      const workSpaceConfig = workSpace.response.result;
      // await setLocalStorage("WorkSpaceConfig" + metadataid, workSpaceConfig);
      WorkSpaceConfig = workSpaceConfig;
    } else if (workSpace.response.status == "error") {
      // CustomAlert.show(workSpace.response.text, "Алдаа", "alert", Colors.RED);
    }
  }
  return WorkSpaceConfig;
};
// WorkSpace Menu-ийн тохиргоо
export const getWorkSpaceMenuConfig = async (linkId: any) => {
  const body: any = {
    id: linkId,
  };
  var WorkSpaceMenuConfig: any;
  // = await getLocalStorage("WorkSpaceMenuConfig", linkId);
  if (!WorkSpaceMenuConfig) {
    const workSpaceMenu: any = await serverData(
      metaConfig.serverUrl,
      "workspace_child_menus",
      body
    );
    if (
      !isEmpty(workSpaceMenu) &&
      !isEmpty(workSpaceMenu.response) &&
      workSpaceMenu.response.status == "success"
    ) {
      const workSpaceConfig = workSpaceMenu.response.result;
      // await setLocalStorage("WorkSpaceMenuConfig" + linkId, workSpaceConfig);
      WorkSpaceMenuConfig = workSpaceConfig;
    } else if (workSpaceMenu.response.status == "error") {
    }
    // CustomAlert.show(workSpaceMenu.response.text, "Алдаа", "alert", Colors.RED);
  }
  return WorkSpaceMenuConfig;
};

//expression run processes
export const runprocessvalue = async (
  command: any,
  parameter: any,
  get: any,
  item: any,
  label: any
) => {
  parameter = parameter.split("|");
  var json = "";
  var isEmptyJson = true;
  for (var a in parameter) {
    var q = parameter[a].split("@");
    var itemType = searchJsonValueGet(label, "paramrealpath", q[1]);
    if (!isEmpty(itemType) && itemType[0].lookuptype == "combo") {
      item[q[1]] = item[q[1] + "combo"].id;
      isEmptyJson = false;
    }
    if (!isNaN(parseFloat(q[0]))) {
      json = json + '"' + q[1] + '":"' + q[0] + '",';
      isEmptyJson = false;
    } else {
      var asd = eval("item." + q[0]);
      if (asd != undefined) {
        json = json + '"' + q[1] + '":"' + asd + '",';
        isEmptyJson = false;
      } else if (!isEmpty(parseFloat(q[0]))) {
        json = json + '"' + q[1] + '":"' + q[0] + '",';
        isEmptyJson = false;
      }
    }
  }
  if (!isEmptyJson) {
    var jsonp = JSON.parse("{" + json.substr(0, json.length - 1) + "}");
    const result: any = await serverData(metaConfig.serverUrl, command, jsonp);
    if (result != null) {
      if (result[0] == "success") {
        if (!isEmpty(get)) {
          if (result[1][get]) return result[1][get];
          else return "";
        } else return result;
      } else {
        return "";
      }
    } else {
      return "";
    }
  } else {
    return "";
  }
};
export const getprocessparamAjax = async (
  command: any,
  parameter: any,
  item: any,
  label: any
) => {
  parameter = parameter.split("|");
  var json = "";
  for (var a in parameter) {
    var q = parameter[a].split("@");
    if (!isNaN(parseFloat(q[0]))) {
      json = json + '"' + q[1] + '":"' + q[0] + '",';
    } else {
      var asd = eval("item." + q[0]);
      if (asd != undefined) {
        json = json + '"' + q[1] + '":"' + asd + '",';
      } else if (!isEmpty(parseFloat(q[0]))) {
        json = json + '"' + q[1] + '":"' + q[0] + '",';
      }
    }
  }
  var jsonp = JSON.parse("{" + json.substr(0, json.length - 1) + "}");
  const result: any = await serverData(metaConfig.serverUrl, command, jsonp);
  if (!isEmpty(result) && result[0] == "success") {
    return result[1];
  } else {
    return "";
  }
};

//get Process Meta Data Code
export const getFunctionMetaDataId = async (metadataid: any) => {
  const result: any = await serverData(
    metaConfig.serverUrl,
    metaConfig.dataview,
    {
      systemmetagroupid: "1544082958292969",
      ignorePermission: "1",
      metaDataCode: metadataid,
    }
  );
  if (result.response.status == "success") {
    var metaid = result.response.result;
    return metaid[0].id;
  } else {
    return "metaDataID олдсонгүй";
  }
};
