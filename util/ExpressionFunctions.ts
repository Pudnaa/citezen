import { isEmpty } from "lodash";
// import {BottomModal} from "../components/popUp/BottomModal";
// import { getFunctionMetaDataId } from "../service/ServerFn";
import fetchJson from "lib/fetchJson";
import { searchJsonValueGet } from "./helper";
// import {nextState} from "./NextState";

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

// export const showpopdtl = () => {
//   BottomModal.show();
//   return;
// };

// export const repeatfunction(elemName:any, funcName:any) {
//   elemName = elemName.replace(/\[(.*?)\]/g, "");
//   var funcStr = getFunctioninString(funcName, $scope.varfncexpression.toLowerCase());
//   if (!isEmpty(funcStr)) {
//       eval(stringConvertToFunction('$rootScope.ItemDtlData.', funcStr, JSON.stringify($rootScope.ItemDtlData), "$rootScope.ProcessLabelValue"));
//       if (eval('typeof ' + funcName + '=="function"') && !isEmpty($rootScope.ItemDtlData) && eval('!isEmpty($rootScope.ItemDtlData.' + elemName + ')')) {
//           var functionString = eval(funcName + '.toString()');
//           var outSideVariable = {};
//           var object = eval('$rootScope.ItemDtlData.' + elemName.toLowerCase());
//           angular.forEach(object, function (item, index) {
//               if (!isObject(item) && typeof item != 'function' && item != "hide" && item != "disable" && item != "enable" && item != "show" && item != "hideShow") {
//                   outSideVariable[index] = item;
//               }
//           })
//           angular.forEach(Object.keys(object), function (key, index) {
//               var item = object[key];
//               if (!isNaN(key) && isObject(item)) {
//                   //var convertFn = angular.copy(functionString.replaceAll(elemName, '$rootScope.ItemDtlData.' + elemName + '[' + index + ']'));
//                   var convertFn = angular.copy(functionString.replaceAll(elemName + '.', '' + elemName + '[' + index + '].').replaceAll("checkedtype", "checkedType").replaceAll('detailrowremove(element', 'detailrowremove($rootScope.ItemDtlData.' + elemName + '[' + index + '],' + index + ',"' + elemName + '"'));
//                   item = mergeJsonObjs(angular.copy(outSideVariable), item);
//                   eval('$rootScope.ItemDtlData.' + elemName + '[' + index + ']=' + JSON.stringify(item));
//                   eval(convertFn + '; ' + funcName + '();');

//               }
//           });
//       }
//   }
//   return;
// }

// export const getFunctioninString(name:any, str:any) {
//   var functionName = "function " + name;
//   var functionNameAsync = "async function " + name;
//   var indexAsync = str.indexOf(functionNameAsync);
//   if (indexAsync != -1) {
//       functionName = functionNameAsync;
//   }
//   var index = str.indexOf(functionName);
//   var functionBody = "";
//   if (index != -1) {
//       index += functionName.length;
//       functionBody = functionName;

//       var charArray = str.split('');
//       var isFoundOpenBracket = 0;
//       var bracketCount = 0;
//       for (i = index; i < charArray.length; i++) {
//           var char = charArray[i];
//           functionBody += char;

//           if (char == '{') {
//               isFoundOpenBracket = 1;
//               bracketCount += 1;
//           } else if (char == '}') {
//               bracketCount -= 1;
//           } if (isFoundOpenBracket == 1 && bracketCount == 0) {
//               break;
//           }
//       }
//       return functionBody;
//   }
//   return null
// }
