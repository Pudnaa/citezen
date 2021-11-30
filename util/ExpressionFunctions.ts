import { values } from "lodash";
// import {BottomModal} from "../components/popUp/BottomModal";
// import { getFunctionMetaDataId } from "../service/ServerFn";
import fetchJson from "lib/fetchJson";
import {
  searchJsonValueGet,
  getRowItems,
  isObject,
  mergeJsonObjs,
  isEmpty,
  functionNameReplace,
} from "./helper";
import { expressionConvert } from "./expression";

//======================================== Expressions Functions  ===========================
// export const callprocess = async (metacode: any, parameter: any) => {
//   parameter = parameter.split("|");
//   var json = "";
//   // for (var a in parameter) {
//   //   var q = parameter[a].split('@');
//   //   var long = q[0].split(".");
//   //   if (long.length == 1) {
//   //     if ($rootScope.ItemDtlData[q[0]] != undefined) {
//   //       json = json + '"' + q[1] + '":"' + $rootScope.ItemDtlData[q[0]].toString() + '",';
//   //     }
//   //   } else {
//   //     if ($rootScope.selectDataViewItemValue[long[1]] != undefined) {
//   //       json = json + '"' + q[1] + '":"' + $rootScope.selectDataViewItemValue[long[1]].toString() + '",';
//   //     }
//   //   }
//   // }
//   // if (!isEmpty(json)) {
//   //   var jsonp = JSON.parse("{" + json.substr(0, json.length - 1) + "}");
//   //   $stateParams.item = { defualtgetValue: jsonp };
//   // }
//   // else {
//   //   $stateParams.item = "";
//   // }
//   // var metaID = await getFunctionMetaDataId(metacode);
//   var value = { actionmetatypeid: "200101010000011", actionmetadataid: metaID };
//   // nextState(value);
// };

export function hidebutton(type: any) {
  return;
}

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
      var asd = eval("item." + q[0].toLowerCase());
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
    let returnValue = "";
    var jsonp = "{" + json.substr(0, json.length - 1) + "}";
    const result: any = await fetchJson(
      `/api/get-process?processcode=${command}&parameters=${jsonp}`
    );
    if (result && get) {
      returnValue = result[get] ? result[get] : "";
    } else {
      returnValue = "";
    }
    return returnValue;
  } else {
    return "";
  }
};

export const getprocessparam = async (
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
      try {
        var asd = eval("item." + q[0].toLowerCase());
      } catch (error) {}
      if (asd != undefined) {
        json = json + '"' + q[1] + '":"' + asd + '",';
      } else if (!isEmpty(q[0])) {
        json = json + '"' + q[1] + '":"' + q[0] + '",';
      }
    }
  }
  let returnValue = "";
  var jsonp = encodeURIComponent("{" + json.substr(0, json.length - 1) + "}");
  const result: any = await fetchJson(
    `/api/get-process?processcode=${command}&parameters=${jsonp}`
  );
  if (result) {
    returnValue = result;
  } else {
    returnValue = "";
  }
  return returnValue;
};

export const fillgroupbydata = async (
  data: any,
  grouppath: any,
  parameter: any,
  type: any,
  item: any,
  attr: any,
  setFormDataInitData: any
) => {
  let field: any = [];
  field.paramrealpath = grouppath.toLowerCase();
  const listConfig = getRowItems(field, attr);

  let __dataElement = listConfig.reduce(function (map: any, item: any) {
    map[item.paramname.toLowerCase()] = item.defaultvalue;
    return map;
  }, {});

  parameter = parameter.split("|");
  values(data).forEach((row: any) => {
    let __dataElement2 = { ...__dataElement };
    for (var a in parameter) {
      var q = parameter[a].split("@");
      let q2 = q[1].split(".");

      if (!isNaN(parseFloat(q[0]))) {
        __dataElement2[q2[1]] = q[0];
      } else {
        try {
          var asd = eval("item." + q[0].toLowerCase());
        } catch (error) {}
        if (asd != undefined) {
          __dataElement2[q2[1]] = asd;
        } else if (!isEmpty(q[0])) {
          __dataElement2[q2[1]] = row[q[0]];
        }
      }
    }

    item[field.paramrealpath] = [
      ...(values(item[field.paramrealpath]) || []),
      __dataElement2,
    ];
  });
  setFormDataInitData(item);
};

// $scope.fillGroupByDv = function (metaDataCode, processRowsPath, criteria, map, type) {
//   //type append or Empty
//   $rootScope.ShowLoader();
//   var masterData = JSON.parse(localStorage.getItem('masterData' + metaDataCode));
//   var result = "";
//   var rowsIndex = -1;
//   if ((isEmpty(masterData) || isEmpty(masterData[1])) && isNaN(metaDataCode)) {
//       var res = serverjQuery.requestFull("PL_MDVIEW_004", { "systemmetagroupid": "1544082958292969", "ignorePermission": "1", "metaDataCode": metaDataCode });
//       if (!isEmpty(res)) {
//           var metaid = res[1];
//           if (!isEmpty(metaid) && !isEmpty(metaid[0].id)) {
//               var metaDataId = metaid[0].id;
//               //ServerDataFunctions.getFunctionMetaDataId(metaDataCode).then(function (metaDataId) {
//               try {
//                   var criteriaRows = {};
//                   var inputParamsArr = criteria.split('|');
//                   var mappingParamsArr = map.split('|');
//                   var mappingParamsData = [];
//                   if (!isEmpty(inputParamsArr)) {
//                       for (var i = 0; i < inputParamsArr.length; i++) {
//                           var fieldPathArr = inputParamsArr[i].split('@');
//                           var fieldPath = fieldPathArr[0];
//                           var inputPath = fieldPathArr[1];
//                           var fieldValue = '';

//                           var rowsdataCheck = eval('$rootScope.ItemDtlData.' + fieldPath.toLowerCase());

//                           if (!isEmpty(rowsdataCheck)) {
//                               fieldValue = rowsdataCheck;
//                           } else {
//                               fieldValue = fieldPath;
//                           }
//                           criteriaRows[inputPath] = { 0: { 'operator': '=', 'operand': fieldValue } };
//                       }
//                   }
//                   if (type == "empty") {
//                       if (isEmpty(eval('$rootScope.ItemDtlData.' + processRowsPath))) {
//                           eval('$rootScope.ItemDtlData.' + processRowsPath + '=[]');
//                       }
//                       else {
//                           var rowsData = eval('$rootScope.ItemDtlData.' + processRowsPath);
//                           var newRowsData = {};
//                           angular.forEach(Object.keys(rowsData), function (key) {
//                               if (isNaN(key)) {
//                                   newRowsData[key] = rowsData[item];
//                               }
//                           });
//                           eval('$rootScope.ItemDtlData.' + processRowsPath + "=" + newRowsData);
//                       }
//                   }
//                   else {
//                       var rowsData = eval('$rootScope.ItemDtlData.' + processRowsPath);
//                       angular.forEach(Object.keys(rowsData), function (key) {
//                           if (!isNaN(key)) {
//                               rowsIndex = key;
//                           }
//                       });
//                   }
//                   for (var j = 0; j < mappingParamsArr.length; j++) {
//                       var mappingPathArr = mappingParamsArr[j].split('@');
//                       var dataviewPath = mappingPathArr[0].toLowerCase();
//                       var processPath = mappingPathArr[1].toLowerCase();
//                       var realpath = processPath.replaceAll(processRowsPath.toLowerCase() + ".", "")
//                       mappingParamsData.push({ dataviewPath: dataviewPath.toLowerCase(), processPath: realpath });
//                   }
//               }
//               catch (ex) { }
//               var getJson = {};
//               getJson.ignorePermission = '1';
//               getJson.criteria = criteriaRows;
//               getJson.systemmetagroupid = metaDataId;
//               result = serverjQuery.requestFull("PL_MDVIEW_004", getJson);
//           }
//       }
//   }
//   else if (!isNaN(metaDataCode) && !isEmpty(masterData)) {
//       // var metaid = metaDataCode serverjQuery.requestFull("PL_MDVIEW_004", { "systemmetagroupid": "1544082958292969", "ignorePermission": "1", "metaDataCode": metaDataCode })[1];
//       //if (!isEmpty(metaid) && !isEmpty(metaid[0].id)) {
//       var metaDataId = metaDataCode; //metaid[0].id;
//       //ServerDataFunctions.getFunctionMetaDataId(metaDataCode).then(function (metaDataId) {
//       try {
//           var criteriaRows = {};
//           var inputParamsArr = criteria.split('|');
//           var mappingParamsArr = map.split('|');
//           var mappingParamsData = [];
//           if (!isEmpty(inputParamsArr)) {
//               for (var i = 0; i < inputParamsArr.length; i++) {
//                   var fieldPathArr = inputParamsArr[i].split('@');
//                   var fieldPath = fieldPathArr[0];
//                   var inputPath = fieldPathArr[1];
//                   var fieldValue = '';

//                   var rowsdataCheck = eval('$rootScope.ItemDtlData.' + fieldPath.toLowerCase());

//                   if (!isEmpty(rowsdataCheck)) {
//                       fieldValue = rowsdataCheck;
//                   } else {
//                       fieldValue = fieldPath;
//                   }
//                   criteriaRows[inputPath] = { 0: { 'operator': '=', 'operand': fieldValue } };
//               }
//           }
//           if (type == "empty") {
//               if (isEmpty(eval('$rootScope.ItemDtlData.' + processRowsPath))) {
//                   eval('$rootScope.ItemDtlData.' + processRowsPath + '=[]');
//               }
//               else {
//                   var rowsData = eval('$rootScope.ItemDtlData.' + processRowsPath);
//                   var newRowsData = {};
//                   angular.forEach(Object.keys(rowsData), function (key) {
//                       if (isNaN(key)) {
//                           newRowsData[key] = rowsData[item];
//                       }
//                   });
//                   eval('$rootScope.ItemDtlData.' + processRowsPath + "=" + newRowsData);
//               }
//           }
//           else {
//               var rowsData = eval('$rootScope.ItemDtlData.' + processRowsPath);
//               angular.forEach(Object.keys(rowsData), function (key) {
//                   if (!isNaN(key)) {
//                       rowsIndex = key;
//                   }
//               });
//           }
//           for (var j = 0; j < mappingParamsArr.length; j++) {
//               var mappingPathArr = mappingParamsArr[j].split('@');
//               var dataviewPath = mappingPathArr[0].toLowerCase();
//               var processPath = mappingPathArr[1].toLowerCase();
//               var realpath = processPath.replaceAll(processRowsPath.toLowerCase() + ".", "")
//               mappingParamsData.push({ dataviewPath: dataviewPath.toLowerCase(), processPath: realpath });
//           }
//       }
//       catch (ex) { }
//       var getJson = {};
//       getJson.ignorePermission = '1';
//       getJson.criteria = criteriaRows;
//       getJson.systemmetagroupid = metaDataId;
//       result = serverjQuery.requestFull("PL_MDVIEW_004", getJson);
//       //}
//   }
//   else if (!isNaN(metaDataCode) && !isEmpty(masterData)) {
//       var criteria = checkDVCriteria(criteria);
//       var returnVlaue = [];
//       angular.forEach(masterData[1], function (item) {
//           var keys = Object.keys(criteria);
//           var checked = true;
//           angular.forEach(keys, function (cri) {
//               var value = eval('criteria.' + cri + '[0].operand');
//               if (value != "%%" && !isEmpty(value)) {
//                   if (item[cri] == value && checked) {
//                       checked = true;
//                   }
//                   else {
//                       checked = false;
//                   }
//               }
//               else {
//                   checked = true;
//               }
//           })
//           if (checked) {
//               returnVlaue.push(item);
//           }
//       })
//       result = []
//       result[0] = "success";
//       result[1] = returnVlaue;
//   }

//   //ServerData.getDataViewData(metaDataId, "", "", "", "", criteriaRows).then(function (result) {
//   if (!isEmpty(result) && !isEmpty(result[1])) {
//       try {
//           $scope.DvAggregateColumns = result[1].aggregatecolumns;
//           $scope.DvPaging = result[1].paging;
//           delete result[1].aggregatecolumns;
//           delete result[1].paging;
//           var data = result[1];
//           var rowsValue = "";
//           if ($rootScope.ItemDtlData[processRowsPath]) {
//               rowsValue = $rootScope.ItemDtlData[processRowsPath];
//           }
//           var ddd = {};
//           angular.forEach(Object.keys(rowsValue), function (key) {
//               if (typeof rowsValue[key] == 'function' || !isEmpty(rowsValue[key]) && isEmpty(rowsValue[key].parentitemid)) {
//                   ddd[key] = rowsValue[key];
//               }
//           })
//           $rootScope.ItemDtlData[processRowsPath] = ddd;
//           var rowsData = eval('$rootScope.ItemDtlData.' + processRowsPath);
//           angular.forEach(Object.keys(rowsData), function (key) {
//               if (!isNaN(key)) {
//                   rowsIndex = key;
//               }
//           });
//           angular.forEach(data, function (item, index) {
//               angular.forEach(mappingParamsData, function (map) {
//                   item[map.processPath] = item[map.dataviewPath];
//               })
//               if (type == "empty") {
//                   eval('$rootScope.ItemDtlData.' + processRowsPath + "[" + index + "]=" + JSON.stringify(item));
//               }
//               else {
//                   rowsIndex++;
//                   item.realindex = rowsIndex
//                   var rowsValue = $rootScope.ItemDtlData[processRowsPath];

//                   var checkedValue = false;
//                   var newIndex = 0;
//                   angular.forEach(rowsValue, function (row) {
//                       if (!isEmpty(row) && !isEmpty(row.parentitemid) && row.parentitemid == item.parentitemid && row.itemid == item.itemid) {
//                           row = item
//                           checkedValue = true;
//                       }
//                   })
//                   if (!checkedValue) {
//                       eval('$rootScope.ItemDtlData.' + processRowsPath + "[" + rowsIndex + "]=" + JSON.stringify(item));
//                   }

//               }
//           })
//       }
//       catch (ex) { }
//       $ionicLoading.hide();
//   }
//   else {
//       $ionicLoading.hide();
//   }
//   //}, function (err) { });
//   //}, function (er) {});

// }

export const getauthlogin = async (
  str: any,
  path: any,
  process: any,
  parameter: any,
  item: any,
  attr: any,
  setFormDataInitData: any
) => {
  const authWindow = window.open(str, "myWindow", "width=500,height=450");
  if (authWindow) {
    parameter = parameter.split("|");
    var json = "";
    for (var a in parameter) {
      var q = parameter[a].split("@");
      if (!isNaN(parseFloat(q[0]))) {
        json = json + '"' + q[1] + '":"' + q[0] + '",';
      } else {
        try {
          var asd = eval("item." + q[0].toLowerCase());
        } catch (error) {}
        if (asd != undefined) {
          json = json + '"' + q[1] + '":"' + asd + '",';
        } else if (!isEmpty(q[0])) {
          json = json + '"' + q[1] + '":"' + q[0] + '",';
        }
      }
    }

    var popupTick = setInterval(async function () {
      if (authWindow.closed) {
        clearInterval(popupTick);
        if (localStorage) {
          const checkPage: any = localStorage.getItem("authcallbacklink");
          const code: any = /\?state=(.+)\&scope=(.+)$/.exec(checkPage);
          const scope: any = /\&scope=(.+)$/.exec(checkPage);
          if (code && scope) {
            // const response = { state: code[1], scope: scope[1] };
            json = json.replace(':"scope"', ":" + '"' + scope[1] + '"');
            json = json.replace(':"state"', ":" + '"' + code[1] + '"');
            var jsonp = encodeURIComponent(
              "{" + json.substr(0, json.length - 1) + "}"
            );
            const getResult = await fetchJson(
              `/api/get-process?processcode=${process}&parameters=${jsonp}`
            );
            // .then((e) => {
            //   item[path] = e.balancell[0].amount.value;
            // setFormDataInitData(item);
            // console.log(`item`, item);
            // eval("setFormDataInitData(item)");
            // });
            item[path] = getResult.balancell[0].amount.value;
            setFormDataInitData(item);
          } else {
            console.log("no auth");
          }
        }
      }
    }, 1000);
  }
};
