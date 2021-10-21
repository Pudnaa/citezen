import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import TableMain from "@cloud/Custom/Table/TableMain";
import { isEmpty } from "lodash";

const Table3 = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;

  // console.log("Table3 config", config);
  // console.log("Table3 datasrc", datasrc);
  // console.log("Table3 otherattr", otherattr);
  // console.log("Table3 pathConfig", pathConfig);

  return <TableMain />;
};

export default Table3;
