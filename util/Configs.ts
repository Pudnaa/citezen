// import { getWidgetDV, getWidgets } from "../renderComponent/GetWidgets";
import { getLookUpData } from "../service/ServerFn";
import { serverData } from "../service/Service";
// import {Page} from "../views/Home";
// import {loginUserInfo} from "../views/Login";
import {
  getDefaultValue,
  isEmpty,
  objectToArray,
  removeAggregate,
} from "util/helper";
//DataView Config parse
export const listConfigTransform = async (
  result: any,
  metaDataId: any,
  calendarView: any
) => {
  if (!isEmpty(result)) {
    var DataViewCriteria: any = [];
    var DataViewCriteriaAdvanced: any = [];
    var DataViewCriteriaJson: any = {};
    var DataViewProcessDtlBtns: any = [];
    var DataViewConfigShowColumn: any = [];
    var DataViewConfigShowButton: any = [];
    var DataViewConfigShowImg: any = [];
    var DataViewFooter: any = [];
    var ProcessHeaderBtn: any = [];
    var gridMetaValueId: any = null;
    var gridMetaParentId: any = null;
    var treeGrid: any = false;
    var ViewSubHeaderFilterCount: any = 0;
    var ViewSubHeader: any = false;
    var DataViewStyle: any = result.meta_group_grid_options_mobile;
    var DataViewGroupLink: any = result.meta_group_link_mobile;
    var mainMetaDataCode: any = result.code;
    var name: any = result.name;
    var DataViewgridlayout: any = result.metagroupgridlayoutmobile;
    var fields: any = result.meta_group_config_mobile;
    var DataViewDrillDown: any = DataViewStyle.meta_dm_drilldown_dtl_mobile;
    var DataViewFooterShow: any = DataViewStyle.pagination;

    var widget = null;
    var widget2 = null;
    var templateSubheader = null;
    let loginUserInfo: any = null;
    // if (!calendarView && DataViewStyle.detaultviewer != "gmap") {
    //   widget = getWidgetDV(DataViewStyle.mobiletheme);
    // } else if (
    //   !isEmpty(DataViewStyle.detaultviewer) &&
    //   DataViewStyle.detaultviewer != "detail"
    // ) {
    //   widget = getWidgets("map");
    // }
    if (!isEmpty(DataViewStyle.mobiletheme2)) {
      // widget2 = getWidgets(DataViewStyle.mobiletheme2);
    }
    if (!isEmpty(DataViewStyle.groupfield)) {
      DataViewStyle.groupfield = DataViewStyle.groupfield.toLowerCase();
    }
    if (!isEmpty(DataViewStyle.meta_dm_process_dtl_mobile)) {
      DataViewProcessDtlBtns = Object.keys(
        DataViewStyle.meta_dm_process_dtl_mobile
      )
        .filter(function (key) {
          return (
            DataViewStyle.meta_dm_process_dtl_mobile[key].isworkflow == "0" ||
            DataViewStyle.meta_dm_process_dtl_mobile[key].isworkflow == ""
          );
        })
        .map(function (id) {
          return DataViewStyle.meta_dm_process_dtl_mobile[id];
        });
      // ProcessHeaderBtn = getHeaderBtns(DataViewProcessDtlBtns);
    }
    if (!isEmpty(DataViewStyle.pagesize)) {
      // Page.pageSize = DataViewStyle.pagesize;
    }
    if (!isEmpty(DataViewStyle.pagenumber)) {
      // Page.pageNumber = DataViewStyle.pagenumber;
    }
    let DvConfig: any = [];
    if (!isEmpty(fields)) {
      Object.keys(fields).forEach((key: any) => {
        DvConfig.push(fields[key]);
      });
      DvConfig.forEach(async (item: any, index: any) => {
        // item = getFieldTypes(item);
        item.paramrealpath = item.fieldpath;
        if (!item.parampath) {
          item.parampath = item.paramrealpath;
        }
        if (!isEmpty(item.defaultvalue)) {
          item.defaultvalue = getDefaultValue(item.defaultvalue, loginUserInfo);
        }
        if (
          (item.ismandatorycriteria == "1" || item.iscriteria == "1") &&
          item.isadvanced != "1"
        ) {
          if (item.ismandatorycriteria == "1") {
            ViewSubHeaderFilterCount += 1;
          }
          var criRowCriteria = {
            0: { operator: "=", operand: item.defaultvalue.toString() },
          };
          if (
            isEmpty(item.lookuptype) &&
            (item.datatype == "string" || item.datatype == "number")
          ) {
            criRowCriteria = {
              0: {
                operator: "LIKE",
                operand: "%" + item.defaultvalue.toString() + "%",
              },
            };
          }
          DataViewCriteriaJson[item.fieldpath.toLowerCase()] = criRowCriteria;
          if (item.lookuptype == "combo") {
            // var copItem = angular.copy(item);
            var copItem = item;
            copItem.defaultvalueName = "";
            if (!isEmpty(copItem.defaultvalue)) {
              var getJson: any = {};
              getJson.systemmetagroupid = item.lookupmetadataid;
              getJson[item.valuefield.toLowerCase()] = item.defaultvalue;
              getJson.ignorePermission = 1;
              var comboDef: any = await serverData(
                "",
                "PL_MDVIEW_004",
                getJson
              );
              if (!isEmpty(comboDef[1][0])) {
                copItem.defaultvalueName =
                  comboDef[item.displayfield.toLowerCase()];
              }
            }
            item.defaultvalue = {};
            item.defaultvalue.id = copItem.defaultvalue;
            item.defaultvalue.name = copItem.defaultvalueName;
          }
          DataViewCriteria.push(item);
        }
        if (item.isadvanced == "1" && item.iscriteria == "1") {
          if (!isEmpty(item.lookupmetadataid)) {
            var getJson: any = {};
            getJson.systemmetagroupid = item.lookupmetadataid;
            getJson.ignorePermission = 1;
            var comboDatas = await serverData("", "PL_MDVIEW_004", getJson);
            item.lookupdata = comboDatas[1];
          }
          var criRowCriteria = {
            0: { operator: "=", operand: item.defaultvalue },
          };
          DataViewCriteriaJson[item.fieldpath.toLowerCase()] = criRowCriteria;
          DataViewCriteriaAdvanced.push(item);
        }
        if (item.inputname == "META_VALUE_ID") {
          gridMetaValueId = item;
        } else if (item.inputname == "PARENT_ID") {
          gridMetaParentId = item;
        }
        if (item.isshow == "1") {
          // if (item.datatype == "file" || item.datatype == "base64") {
          //   DataViewConfigShowImg.push(item);
          // }
          //  else if (item.datatype == "button") {
          //   DataViewConfigShowButton.push(item);
          // } else {
          item.paramrealpath = item.paramrealpath.toLowerCase();
          DataViewConfigShowColumn.push(item);
          // }
        }
        if (!isEmpty(item.columnaggregate)) {
          // item.ordernumberbyMobile = index;
          DataViewFooter.push(item);
        }
      });
    }
    DataViewConfigShowColumn = Object.keys(DataViewConfigShowColumn)
      .map(function (k) {
        return DataViewConfigShowColumn[k];
      })
      .sort(function (a, b) {
        return a.displayorder - b.displayorder;
      });
    DataViewConfigShowImg = Object.keys(DataViewConfigShowImg)
      .map(function (k) {
        return DataViewConfigShowImg[k];
      })
      .sort(function (a, b) {
        return a.displayorder - b.displayorder;
      });
    DataViewCriteria = Object.keys(DataViewCriteria)
      .map(function (k) {
        return DataViewCriteria[k];
      })
      .sort(function (a, b) {
        return a.displayorder - b.displayorder;
      });

    if (!isEmpty(gridMetaValueId) && !isEmpty(gridMetaParentId)) {
      treeGrid = true;
    }
    return {
      CriteriaAdvanced: DataViewCriteriaAdvanced,
      Criteria: DataViewCriteria,
      CriteriaJson: DataViewCriteriaJson,
      ProcessDtlBtns: DataViewProcessDtlBtns,
      ShowColumn: DataViewConfigShowColumn,
      ShowButton: DataViewConfigShowButton,
      ShowImg: DataViewConfigShowImg,
      title: name,
      Footer: DataViewFooter,
      Style: DataViewStyle,
      GroupLink: DataViewGroupLink,
      mainMetaDataCode: mainMetaDataCode,
      fields: DvConfig,
      DrillDown: DataViewDrillDown,
      FooterShow: DataViewFooterShow,
      widget: widget,
      widget2: widget2,
      templateSubheader: templateSubheader,
      ViewSubHeader: ViewSubHeader,
      ProcessHeaderBtn: ProcessHeaderBtn,
      gridMetaValueId: gridMetaValueId,
      gridMetaParentId: gridMetaParentId,
      treeGrid: treeGrid,
      gridlayout: DataViewgridlayout,
      pageSize: DataViewStyle.pagesize,
      pageNumber: DataViewStyle.pagenumber,
      isDataView: "1",
      metadataid: DataViewGroupLink.metadataid,
    };
  }
};
//Process Config parse
export const processConfigTransform = async (conf: any) => {
  var attrLink = conf.meta_process_param_attr_link_mobile;
  var processLabelButton: any = [];
  var processLabelButtonBarcode: any = [];
  var processGroupNames: any = [];
  var processFileFeilds: any = [];
  var processLabelMultiFile: any = [];
  var processLookupMap: any = [];
  var processLookupParamConfig: any = [];
  var processTabNames: any = [];
  var processShowLabel: any = [];
  var offlineShowLabels: any = [];
  var comboFieldsPaths: any = [];
  var defualtValues: any = {};
  let loginUserInfo: any = null;
  // const widget = getWidgets(conf.mobiletheme);
  const widget = null;
  processLookupMap = conf.meta_process_lookup_map;
  processLookupParamConfig = conf.lookupparamconfig;
  //exprestions

  for (var key in Object.keys(attrLink)) {
    var item = attrLink[key];
    item.paramrealpath = item.paramrealpath.toLowerCase();
    // item.style = processWidget1;
    if (!isEmpty(item.defaultvalue)) {
      try {
        if (
          item.lookuptype == "combo" ||
          item.lookuptype == "popup" ||
          item.lookuptype == "combo_with_popup"
        ) {
          setDefualtValueLookUp(item, "", defualtValues);
        } else {
          defualtValues[item.paramrealpath.toLowerCase()] = getDefaultValue(
            item.defaultvalue,
            loginUserInfo
          );
        }
      } catch (ex) {}
    }
    if (
      item.lookuptype == "combo" ||
      item.lookuptype == "popup" ||
      item.lookuptype == "combo_with_popup"
    ) {
      comboFieldsPaths.push(item);
    } else if (item.lookuptype == "label" || item.lookuptype == "radio") {
      var getJson: any = {};
      getJson.systemmetagroupid = item.lookupmetadataid;
      var result = await getLookUpData("PL_MDVIEW_004", getJson);
      if (!isEmpty(result[1])) {
        item.labelData = removeAggregate(result[1]);
      }
    } else if (item.datatype == "button") {
      processLabelButton.push(item);
    } else if (item.datatype == "barcode" || item.datatype == "qrcode") {
      processLabelButtonBarcode.push(item);
    } else if (item.datatype == "group" && item.isshow == 1) {
      processGroupNames.push(item);
    } else if (item.datatype == "multi_file" && item.isshow == 1) {
      processLabelMultiFile.push(item);
    } else if (item.datatype == "file" || item.datatype == "base64") {
      processFileFeilds.push(item);
    } else if (item.datatype == "group" && item.isshow == 1) {
      processGroupNames.push(item);
    }
    if (
      !isEmpty(item.tabname) &&
      item.datatype != "group" &&
      item.isshow == 1
    ) {
      processTabNames.push(item);
    }
    if (item.isshow == 1) {
      processShowLabel.push(item);
    }
  }
  if (
    conf.metadataid == "16257527374121" ||
    conf.metadataid == "1627985440733124" ||
    conf.metadataid == "1631763681332597" ||
    conf.metadataid == "16254668984001"
  ) {
    const sendButton = {
      defaultSave: "1",
      datatype: "button",
      parampath: "sendbutton",
      paramrealpath: "sendbutton",
      paramname: "sendbutton",
      isshow: "1",
      themepositionno: "4",
    };
    processShowLabel.push(sendButton);
  }
  if (conf.metadataid == "16253377543211") {
    const sendButton = {
      defaultSave: "1",
      datatype: "button",
      parampath: "sendbutton",
      paramrealpath: "sendbutton",
      paramname: "sendbutton",
      isshow: "1",
      themepositionno: "5",
    };
    processShowLabel.push(sendButton);
  }
  if (
    conf.metadataid == "16253517589481" ||
    conf.metadataid == "16253533360431"
  ) {
    const sendButton = {
      defaultSave: "1",
      datatype: "button",
      parampath: "sendbutton",
      paramrealpath: "sendbutton",
      paramname: "sendbutton",
      isshow: "1",
      themepositionno: "12",
    };
    processShowLabel.push(sendButton);
  }
  const getProcessValue: any = {};
  let getProcessParams: any = {};
  if (!isEmpty(conf.meta_process_default_get)) {
    Object.keys(conf.meta_process_default_get).forEach((key: any) => {
      item = conf.meta_process_default_get[key];
      if (item.code != undefined) {
        const newrows: any = { operator: "=" };
        newrows.operand = getDefaultValue(
          item.fieldpath.toLowerCase(),
          loginUserInfo
        );
        getProcessValue[item.parampath.toLowerCase()] = { 0: newrows };
      }
    });
    getProcessParams = {
      processid: conf.metadataid,
      criteria: getProcessValue,
    };
  }
  return {
    attrLink: objectToArray(attrLink),
    metadatacode: conf.metadatacode,
    metadataid: conf.metadataid,
    title: conf.processname,
    LookupMap: conf.meta_process_lookup_map,
    LookupParamConfig: conf.lookupparamconfig,
    labelButton: processLabelButton,
    barCode: processLabelButtonBarcode,
    groupNames: processGroupNames,
    multiFile: processLabelMultiFile,
    filesFeilds: processFileFeilds,
    tabNames: processTabNames,
    showFields: processShowLabel,
    offlineShowLabels: offlineShowLabels,
    widget: widget,
    mobiletheme: conf.mobiletheme,
    getdataprocessid: conf.getdataprocessid,
    getDataProcessCode: conf.getdataprocesscode,
    getDataProcessParam: getProcessParams,
    varfncexpression: conf.varfncexpressionstring,
    loadexpressionstring: conf.loadexpressionstring,
    eventexpressionstring: conf.eventexpressionstring,
    saveexpressionstring: conf.saveexpressionstring,
  };
};

//WorkSpace Config parse
export const workSpaceConfigTransform = async (conf: any) => {
  const wsParamMap = conf.meta_workspace_param_map_mobile;
};
const setDefualtValueLookUp = async (item: any, rowIndex: any, value: any) => {
  if (!isEmpty(item.lookupmetadataid)) {
    // var defualValue = getDefaultValue(item.defaultvalue, loginUserInfo);
    var defualValue = getDefaultValue(item.defaultvalue, null);
    var getJson: any = {};
    getJson.criteria = {};
    getJson.systemmetagroupid = item.lookupmetadataid;
    getJson.ignorePermission = "1";
    getJson.criteria[item.valuefield] = {
      0: { operator: "=", operand: defualValue },
    };

    var result = await getLookUpData("PL_MDVIEW_004", getJson);
    if (!isEmpty(result[1])) {
      var value = result[1];
      var lookupVal = value[0];
      if (!isEmpty(rowIndex)) {
        lookupVal = value[rowIndex];
      }
      if (!isEmpty(lookupVal)) {
        var path = item.paramrealpath.toLowerCase().split(".");
        if (path.length < 1) {
          lookupVal[path[0]] = defualValue;
          lookupVal["rowdata"] = lookupVal;
          lookupVal.name = lookupVal[item.displayfield.toLowerCase()];
          value[item.paramrealpath.toLowerCase()] = lookupVal;
        }
      }
    }
  }
};
