import React, { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
} from "@components/common/Atom";
import DataviewJ1InsideWidget from "./DataviewJ1InsideWidget";

function DataviewJ1() {
  const {
    config,
    datasrc,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  // console.log("DataviewJ1 config", config);
  // console.log("DataviewJ1 datasrc", datasrc);
  // console.log("DataviewJ1 widgetnemgoo", widgetnemgoo);
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
            key={index}
            item={item.processname}
            type="primary-border"
            icon={`far ${item.iconname}`}
            customClassName="rounded-full"
          />
        ))}
      </div>

      <DataviewJ1InsideWidget config={config} widgetnemgoo={widgetnemgoo} />
    </>
  );
}
export default DataviewJ1;
