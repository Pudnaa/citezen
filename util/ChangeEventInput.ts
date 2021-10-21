import { isEmpty, functionNameReplace, isObject } from "@util/helper";
import * as ExpressionFuntions from "util/ExpressionFunctions";

const { hidebutton, runprocessvalue } = ExpressionFuntions;

const ChangeEventInput = (
  item: any, // field config
  screenKey: any,
  selectedItem: any, // selected row data dataview
  formDataInitData: any, // formDataInitData
  config: any, // bp config
  processExpression: any,
  mainContext: any
) => {
  if (!isEmpty(item) && !isEmpty(item)) {
    var pathArr = item.split(".");
    if (
      pathArr.length > 1 &&
      !isObject(eval("processExpression." + pathArr[0].toLowerCase()))
    ) {
      eval("processExpression." + pathArr[0].toLowerCase() + "={}");
    }
    if (
      pathArr.length > 1 &&
      eval(
        "typeof processExpression." +
          item.toLowerCase() +
          "function != undefined"
      ) &&
      eval(
        "typeof processExpression." +
          item.toLowerCase() +
          'function != "undefined"'
      )
    ) {
      var paramrealpathArray = item.split(".");
      var functionString = eval(
        "processExpression." + item.toLowerCase() + "function.toString()"
      );
      functionString = functionNameReplace(functionString);
      functionString = functionString
        .replace("function(){", "function DrillDownFunction(){")
        .replaceAll(
          pathArr[0] + ".",
          pathArr[0] + "[" + item.rowsIndex + "]" + "."
        );
      functionString =
        functionString.substr(0, functionString.lastIndexOf("}")) +
        "mainContext(processExpression);} ";
      eval(functionString + ";DrillDownFunction()");
    } else if (
      eval(
        "typeof processExpression." +
          item.toLowerCase() +
          "function != undefined"
      ) &&
      eval(
        "typeof processExpression." +
          item.toLowerCase() +
          'function != "undefined"'
      )
    ) {
      var paramrealpathArray = item.split(".");
      var functionString = eval(
        "processExpression." + item.toLowerCase() + "function.toString()"
      );
      functionString = functionNameReplace(functionString);
      functionString =
        functionString.substr(0, functionString.lastIndexOf("}")) +
        "mainContext(processExpression);} ";
      if (functionString.includes("runprocessvalue")) {
        functionString = functionString.replace(
          "function(){",
          "async function DrillDownFunction(){"
        );
        functionString = functionString.replace(
          "runprocessvalue",
          "await runprocessvalue"
        );
      } else {
        functionString = functionString.replace(
          "function(){",
          "function DrillDownFunction(){"
        );
      }
      eval(functionString + "; DrillDownFunction();");
    }
  }
};

export default ChangeEventInput;
