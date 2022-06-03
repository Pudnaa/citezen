import React, { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import { AtomButton } from "@components/common/Atom";
import DataviewJ1InsideWidget from "./DataviewJ1InsideWidget";

function DataviewJ1() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext);

  // console.log("DataviewJ1 config", config);
  // console.log("DataviewJ1 readyDatasrc", readyDatasrc);
  // console.log("DataviewJ1 widgetnemgooReady", widgetnemgooReady);
  // console.log("DataviewJ1 positionConfig", positionConfig);
  console.log("DataviewJ1 metaConfig", metaConfig);

  const dataviewProcessList = _.values(
    config.metaConfig.meta_group_grid_options_mobile?.meta_dm_process_dtl_mobile
  );

  console.log("🚀 ~ DataviewJ1 ~ dataviewProcessList", dataviewProcessList);

  return (
    <>
      <div className="flex flex-row space-x-4 my-5">
        {dataviewProcessList.map((item: any, index: number) => (
          <AtomButton
            key={item?.id || index}
            item={item.processname}
            type="primary-border"
            icon={`far ${item.iconname}`}
            customClassName="rounded-full"
          />
        ))}
      </div>

      <DataviewJ1InsideWidget
        config={config}
        widgetnemgooReady={widgetnemgooReady}
      />
    </>
  );
}
export default DataviewJ1;
