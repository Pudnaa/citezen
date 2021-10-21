import * as ExpressionFuntions from "./ExpressionFunctions";
import { isEmpty } from "./helper";

const { hidebutton, runprocessvalue } = ExpressionFuntions;

// export var experssionFunctions:any={};
export const runExpression = (
  type: string,
  processExpression: any,
  config: any,
  formDataInitData: any
) => {
  if (type == "all") {
    // experssionFunctions={};
    // experssionFunctions.type={};
    try {
      var varfnc: any = expressionConvert(
        JSON.stringify(processExpression),
        config.varfncexpressionstring,
        "formDataInitData.",
        JSON.stringify(formDataInitData),
        "config.meta_process_param_attr_link_mobile"
      );
      eval(varfnc);
      var load: any = expressionConvert(
        JSON.stringify(processExpression),
        config.loadexpressionstring,
        "formDataInitData.",
        JSON.stringify(formDataInitData),
        "config.meta_process_param_attr_link_mobile"
      );
      eval(load);
      var event: any = expressionConvert(
        JSON.stringify(processExpression),
        config.eventexpressionstring,
        "formDataInitData.",
        JSON.stringify(formDataInitData),
        "config.meta_process_param_attr_link_mobile"
      );
      eval(event);
      return processExpression;
    } catch (error) {
      console.log("error", error);
    }
  }
};
export const expressionConvert = (
  expression: any,
  strfunctions: any,
  dataField: any,
  json: any,
  LabelValueName: any
) => {
  strfunctions = getFullExpressionArrayConvert(
    strfunctions
      .toString()
      .replace(/\t/g, "")
      .replaceAll("&quot;", '"')
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
  );
  var fun = convertToCalcFunctions(strfunctions.toLowerCase());
  fun = ExpressionRunprocessConvert(fun, "formDataInitData.", LabelValueName);
  var lastStr = removeCommentsExpression(fun);
  lastStr = checkvariable(lastStr, json, "value");

  lastStr = checkvariable(lastStr, expression, "expression");
  var GGG = convertToChangeEvent(lastStr);
  GGG = convertToControl(GGG);
  var exper = convertToMessege(GGG);
  exper = convertEvents(exper, "processExpression.");
  exper = convertHideShow(exper, "processExpression.");

  var widthEvent = exper
    .replaceAll("parseint", "parseInt")
    .replaceAll("getfullyear", "getFullYear")
    .replaceAll("thisclickbutton('save')", "$scope.SaveBtn()")
    .replaceAll("close(this)", "$scope.backbutton()")
    .replaceAll("hideprocessdialog()", "")
    .replaceAll("[", dataField)
    .replaceAll(".trigger(", "function(")
    .replaceAll(".run()", "function()")
    .replaceAll("subkpi.save()", "value.subkpifunction=function()")
    .replaceAll("]", "")
    .replaceAll(".val()", "")
    .replaceAll(";;", ";");
  widthEvent = widthEvent
    .replaceAll("new date(", "new Date(")
    .replaceAll("toisostring(", "toISOString(");
  widthEvent = widthEvent
    .replaceAll("setlocal(", "localStorage.setItem(")
    .replaceAll("getlocal(", "localStorage.getItem(");
  return widthEvent;
};

function getFullExpressionArrayConvert(str: any) {
  const a: any = str.match(/\[(.*?)\(\)/g);
  if (!isEmpty(a)) {
    Object.keys(a).forEach((key) => {
      var notLower = a[key];
      a[key] = a[key].toLowerCase();
      str = str.replaceAll(notLower, a[key]);
      var sa = a[key].match(/\]\.(.*?)\(\)/g);
      if (!isEmpty(sa)) {
        var functionName = sa[0]
          .replace("]", "")
          .replace("(", "")
          .replace(")", "")
          .replace(".", "");
        var relVariable = a[key].match(/\[(.*?)\]/g);
        for (let index in relVariable) {
          if (
            relVariable[index].match(/,/g) !== undefined &&
            relVariable[index].match(/,/g) !== null &&
            relVariable[index].match(/,/g).length > 0
          ) {
            var change = relVariable[index]
              .replace("[", "")
              .replace("]", "")
              .replace(";", "")
              .split(",");
            var ass = change.map(function (v: any) {
              var vs =
                "[" +
                v
                  .replace("." + functionName, "")
                  .replace("(", "")
                  .replace(")", "")
                  .trim() +
                "=]'" +
                functionName +
                "';";
              return vs;
            });
            str = str.replace(
              relVariable[index] + "" + sa[0].replace("]", ""),
              ass.toString().replace(/,/g, "")
            );
          }
        }
      }
    });
    str.replace();
  }
  return str;
}
// Calc
function convertToCalcFunctions(str: any) {
  let sums = str.match(/sum\(\[(.*?)\]\)/g);
  if (!isEmpty(sums)) {
    sums.forEach((data: any) => {
      var repVal = data.replaceAll("[", '"').replaceAll("]", '"');
      str = str.replaceAll(data, repVal);
    });
  }
  if (!isEmpty(sums)) {
    var avg = str.match(/avg\(\[(.*?)\]\)/g);
    avg.forEach((data: any) => {
      var repVal = data.replaceAll("[", '"').replaceAll("]", '"');
      str = str.replaceAll(data, repVal);
    });
  }
  return str;
}
//Expressions Run Processes
function ExpressionRunprocessConvert(str: any, value: any, atterlinks: any) {
  var runs = str.match(/runprocessvalue(.*?)\)/g);
  if (
    str.match(/runprocessvalue(.*?)\)/g) !== undefined &&
    runs !== null &&
    runs.length > 0
  ) {
    for (var s in runs) {
      var old = runs[s];
      var newVal = runs[s]
        .replace("runprocessvalue", "runprocessvalue")
        .replace(
          ")",
          "," + value.substr(0, value.length - 1) + "," + atterlinks + ")"
        );
      str = str.replace(old, newVal.toString());
    }
  }

  var getpram = str.match(/getprocessparam(.*?)\)/g);
  if (
    str.match(/getprocessparam(.*?)\)/g) !== undefined &&
    getpram !== null &&
    getpram.length > 0
  ) {
    for (var s2 in getpram) {
      var old2 = getpram[s2];
      var newVal2 = getpram[s2]
        .replace("getprocessparam", "getprocessparam")
        .replace(
          ")",
          "," + value.substr(0, value.length - 1) + "," + atterlinks + ")"
        );
      str = str.replace(old2, newVal2.toString());
    }
  }
  return str;
}
// Expressions Kpi
function kpiExpressionConvert(arraName: any, str: any, convertExp: any) {
  var functionName = "function=function()";
  str = getFullExpressionArrayConvert(
    str
      .toString()
      .replaceAll("&quot;", '"')
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
  );
  var newstr = removeCommentsExpression(str);
  newstr = checkvariable(newstr, convertExp, "");
  newstr = convertToMessege(newstr);
  return newstr
    .replaceAll("[", arraName)
    .replaceAll(".kpichange()", functionName)
    .replaceAll("]", "");
}
function removeCommentsExpression(str: any) {
  var newstr = str.replace(/\/\*(.*?)\*\//g, "");
  return newstr;
}
function checkvariable(str: any, json: any, type: string) {
  var oldstr = str;
  var headerVariable = "";
  var subVariable = "";
  var v = str.match(/\[(.*?)\]/g);
  if (!isEmpty(v)) {
    v.forEach((item: any) => {
      if (item.split(".").length > 1) {
        item = item.split(".");
        for (var qe = item.length - 1; qe > 0; qe--) {
          var newvariable = "";
          if (type == "expression") {
            newvariable =
              "processExpression." +
              item.slice(0, qe).toString().replace(/,/g, ".").replace("[", "") +
              "]={};";
          } else if (type == "value") {
            newvariable =
              "[" +
              item.slice(0, qe).toString().replace(/,/g, ".").replace("[", "") +
              "]={};";
          }
          var checkPath = "[" + item[qe - 1].replace("[", "") + "]={};";
          // var jsonCheck = json.includes(checkPath.replace("[", "").replace("]={};", "").toLowerCase());
          // var jsonCheck = checkJsonPath(
          //   JSON.parse(json),
          //   newvariable.replace("[", "").replace("]={};", "").toLowerCase()
          // );
          // if (jsonCheck) {
          //   jsonCheck = json.includes(
          //     checkPath.replace("[", "").replace("]={};", "").toLowerCase() +
          //       '":{'
          //   );
          // }
          let jsonCheck = json.includes(
            checkPath.replace("[", "").replace("]={};", "").toLowerCase() +
              '":{'
          );
          var funcCheck = oldstr.includes(newvariable);

          if (funcCheck === false && jsonCheck === false) {
            oldstr = newvariable + oldstr;
            if (qe === 0) {
              headerVariable = headerVariable + newvariable;
            } else {
              subVariable = subVariable + newvariable;
            }
          }
        }
      }
    });
  }
  var subVariableArray = subVariable.split(";");
  subVariableArray.sort((a, b): any => {
    if (a && b) return a.split(".").length - b.split(".").length;
  });
  var newVariables = subVariableArray.toString().replace(/,/g, ";");
  return headerVariable + newVariables + str;
}
function checkvariableFunction(str: any, json: any) {
  var oldstr = str;
  var headerVariable = "";
  var subVariable = "";
  var v = str.match(/\[(.*?)\]/g);
  if (!isEmpty(v)) {
    v.forEach((item: any) => {
      if (item.split(".").length > 1) {
        item = item.split(".");
        for (var qe = item.length - 1; qe > 0; qe--) {
          var newvariable =
            "[" +
            item.slice(0, qe).toString().replace(/,/g, ".").replace("[", "") +
            "]={};";
          var checkPath = "[" + item[qe - 1].replace("[", "") + "]={};";
          // var jsonCheck = json.includes(checkPath.replace("[", "").replace("]={};", "").toLowerCase());
          var jsonCheck = checkJsonPath(
            json,
            newvariable.replace("[", "").replace("]={};", "").toLowerCase()
          );
          if (jsonCheck) {
            jsonCheck = json.includes(
              checkPath.replace("[", "").replace("]={};", "").toLowerCase() +
                '":{'
            );
          }
          var funcCheck = oldstr.includes(newvariable);

          if (funcCheck === false && jsonCheck === false) {
            oldstr = newvariable + oldstr;
            if (qe === 0) {
              headerVariable = headerVariable + newvariable;
            } else {
              subVariable = subVariable + newvariable;
            }
          }
        }
      }
    });
  }
  var subVariableArray = subVariable.split(";");
  subVariableArray.sort((a, b): any => {
    if (a && b) return a.split(".").length - b.split(".").length;
  });
  var newVariables = subVariableArray.toString().replace(/,/g, ";");
  return headerVariable + newVariables + str;
}
function checkJsonPath(obj: any, path: any) {
  var args = path.split(".");
  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}
function convertToMessege(str: any) {
  var a = str.match(/message(\(.*?)\)/g);
  for (let ind in a) {
    var b = a[ind].match(/(\((.*)+\))/g);
    var old = b[0];
    var newstr = b[0].replace("(", "").replace(")", "").split(",");
    var newstrnew =
      '("' + newstr[0].toString() + '","' + newstr[1].toString() + '")';
    str = str.replace(old, newstrnew);
  }
  return str;
}
function convertToChangeEvent(strFn: any) {
  let str = strFn.match(/.change(\(.*?)\}/g);
  if (!isEmpty(str)) {
    str.forEach((event: any) => {
      let variables = event.match(/\[(.*?)\]/g);
      for (var ind in variables) {
        let variable = variables[ind];
        let old = variable;
        strFn = strFn.replace(old, variable);
      }
    });
  }
  return strFn;
}
function convertToControl(strFn: any) {
  var str = strFn.match(/.control(\(.*?)\)/g);
  var strLabel = strFn.match(/.label(\(.*?)\)/g);
  if (!isEmpty(str)) {
    str.forEach((event: any) => {
      strFn = strFn.replace(
        event,
        event.replace(".control(", "style=").replace(")", "")
      );
    });
  }
  if (!isEmpty(strLabel)) {
    strLabel.forEach((label: any) => {
      strFn = strFn.replace(
        label,
        label.replace(".label(", "stylelabel=").replace(")", "")
      );
    });
  }
  return strFn;
}

function convertEvents(str: any, functionName: string) {
  var event = str.match(
    /\[[\w.]+\].click\(\)|\[[\w.]+\].change\(\)|\[[\w.]+\].delete\(\)/g
  );
  event?.forEach((el: any) => {
    var eventName = el.replace("[", functionName);
    var funcName = eventName
      .replaceAll(".click()", "function=function()")
      .replaceAll(".delete()", "function=function()")
      .replaceAll(".change()", "function=function()");
    str = str.replaceAll(el, funcName);
  });
  return str;
}

function convertHideShow(str: any, expression: string) {
  str = str
    .replaceAll("=]'show'", "].show()")
    .replaceAll("=]'hide'", "].hide()");
  str = str
    .replaceAll("=]'disable'", "].disable()")
    .replaceAll("=]'enable'", "].enable()");
  str = str
    .replaceAll("=]'required'", "].required()")
    .replaceAll("=]'nonrequired'", "].nonrequired()");

  var event = str.match(
    /\[[\w.]+\].hide\(\)|\[[\w.]+\].show\(\)|\[[\w.]+\].disable\(\)|\[[\w.]+\].enable\(\)|\[[\w.]+\].required\(\)|\[[\w.]+\].nonrequired\(\)/g
  );
  event?.forEach((el: any) => {
    var eventName = el.replace("[", expression);
    var funcName = eventName
      .replaceAll(".show()", 'hideShow="show"')
      .replaceAll(".hide()", 'hideShow="hide"')
      .replaceAll(".disable()", 'disable="disable"')
      .replaceAll(".enable()", 'disable="enable"')
      .replaceAll(".required()", "isrequired='1'")
      .replaceAll(".nonrequired()", "isrequired='0'");

    str = str.replaceAll(el, funcName);
  });
  return str;
}
