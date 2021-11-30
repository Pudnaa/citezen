import _ from "lodash";
import { getDefaultValue } from "util/helper";

export const processTransform = (params: any) => {
  try {
    let attrArr = _.values(params.meta_process_param_attr_link_mobile);
    let i = 0,
      // paramsAttr = _.orderBy(attrArr, ["ordernumber"]),
      paramsAttr = _.sortBy(attrArr, [
        function (o) {
          return Number(o.ordernumber);
        },
      ]),
      paramsLength = paramsAttr.length,
      header = [],
      __lookupParamConfig = {},
      __groupPath = {},
      details = [];

    params["meta_process_param_attr_link_mobile"] = paramsAttr;

    __groupPath = _.groupBy(paramsAttr, function (n) {
      return n.paramrealpath.toLowerCase();
    });

    let __dataElement: any = {};

    for (i; i < paramsLength; i++) {
      if (paramsAttr[i]["paramrealpath"].indexOf(".") < 0) {
        paramsAttr[i]["paramrealpath"] =
          paramsAttr[i]["paramrealpath"].toLowerCase();
        header.push(paramsAttr[i]);

        if (paramsAttr[i]["datatype"] == "group") {
          __dataElement[paramsAttr[i]["paramrealpath"]] = [];
        } else {
          __dataElement[paramsAttr[i]["paramrealpath"]] = getDefaultValue(
            paramsAttr[i]["defaultvalue"],
            {}
          );
        }
      } else {
        paramsAttr[i]["paramrealpath"] =
          paramsAttr[i]["paramrealpath"].toLowerCase();
        details.push(paramsAttr[i]);
      }
    }

    if (params.lookupparamconfig) {
      __lookupParamConfig = _.groupBy(
        _.values(params.lookupparamconfig),
        function (n) {
          return n.parampath.toLowerCase();
        }
      );
    }

    return {
      ...params,
      header,
      details,
      __dataElement,
      __lookupParamConfig,
      __groupPath,
    };
  } catch (err) {
    console.log("Aldaa: ", err);
  }
};
