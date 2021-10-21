import _ from "lodash";
import { useContext, useEffect, useState, FC } from "react";
import { Tabs } from "antd";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { processTransform } from "util/processTransform";
import { getProcessConfig } from "service/ServerFn";
import FormWrapper, { FormSectionWrapper } from "./FormWrapper";
import RenderField from "./RenderField";
import RenderWidgetProcessField from "./RenderWidgetProcessField";
import { FormMetaContextProvider as MetaStore } from "context/Meta/FormMetaContext";
import { runExpression } from "@util/expression";
import Skeleton from "@components/common/Skeleton/Skeleton";
import { objectToArray, jsonParse } from "util/helper";

type PropsType = {
  listConfig: any;
};

const { TabPane } = Tabs;

const RenderWidgetProcess: FC<PropsType> = ({ listConfig }) => {
  const parameters = `&parameters=${JSON.stringify({
    id: listConfig.metadataid,
  })}`;
  const listConfigParse = {
    ...listConfig,
    otherattr: jsonParse(listConfig?.otherattr),
  };

  const { data: processConfig, error } = useSWR(
    `/api/get-config-process?processcode=META_BUSINESS_PROCESS_LINK_BP_GET_004${parameters}`
  );
  if (error)
    return (
      <div>META_BUSINESS_PROCESS_LINK_BP_GET_004 дуудахад алдаа гарлаа!</div>
    );
  if (!processConfig) return <Skeleton type="loading" />;

  let processParams: any = {},
    processExpression: any = {},
    formDataInitData: any = {};

  processParams = processTransform(processConfig.result);
  formDataInitData = processParams.__dataElement;
  if (processConfig.getData) {
    formDataInitData = processConfig.getData;
  }

  runExpression("all", processExpression, processParams, formDataInitData);

  if (processConfig.result.iswithlayout == "1") {
    return (
      <MetaStore
        formInitData={formDataInitData}
        formExpression={processExpression}
        processConfig={processParams}
      >
        <FormSectionWrapper>
          <RenderWidgetProcessField processSection={processConfig.result} />
        </FormSectionWrapper>
      </MetaStore>
    );
  } else {
    const { header } = processParams;

    const groupByTabname = _.groupBy(header, function (n) {
      return n.tabname;
    });

    return (
      <MetaStore
        formInitData={formDataInitData}
        formExpression={processExpression}
        processConfig={processParams}
      >
        <FormWrapper title={`${processConfig.result.metadataname}`}>
          <div
            className={`grid gap-4 grid-cols-${
              processConfig.result.columncount || 2
            }`}
          >
            {header.map((item: any, index: number) => {
              if (!item.tabname && item.datatype !== "group") {
                return (
                  <RenderField
                    field={item}
                    attr={processParams.details}
                    sectionConfig={listConfigParse}
                  />
                );
              }
            })}
          </div>
          {header.map((item: any, index: number) => {
            if (!item.tabname && item.datatype === "group") {
              return (
                <RenderField
                  field={item}
                  attr={processParams.details}
                  sectionConfig={listConfigParse}
                  formDataInitData={formDataInitData}
                  className= ""
                  style=""
                  rowIndex = "any"
                  labelClassName= ""
                />
              );
            }
          })}
          <Tabs>
            {header.map((item: any, index: number) => {
              if (item.tabname) {
                let isContent = _.filter(
                  groupByTabname[item.tabname],
                  (item2) => {
                    return item2.isshow === "1";
                  }
                );

                if (isContent.length)
                  return (
                    <TabPane tab={item.tabname} key={index}>
                      <RenderField
                        field={item}
                        attr={processParams.details}
                        formDataInitData={formDataInitData}
                        sectionConfig={listConfigParse}
                      />
                    </TabPane>
                  );
              }
            })}
          </Tabs>
        </FormWrapper>
      </MetaStore>
    );
  }
};

export default RenderWidgetProcess;
