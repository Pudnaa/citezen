import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import TableMain from "@cloud/Custom/Table/TableMain";
import { isEmpty } from "lodash";

const Table3 = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("Table3 config", config);
  // console.log("Table3 readyDatasrc", readyDatasrc);
  // console.log("Table3 widgetnemgooReady", widgetnemgooReady);
  // console.log("Table3 pathConfig", pathConfig);

  return <TableMain />;
};

export default Table3;
