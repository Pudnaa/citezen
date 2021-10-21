import React,{useMemo,useContext} from 'react'
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import Table from './makeData'
import _ from "lodash";

function DataView() {
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

  let headerItem = _.orderBy(
    _.filter(pathConfig, (item) => {
      return (
        item?.isshow === "1" &&
        !item?.fieldpath.includes(".") &&
        item?.datatype !== "group"
      );
    }) || [],
    ["displayorder"]
  );

  const headerItems = [];
  let column = headerItem.map(obj => {
    var grouped = _.mapValues(_.groupBy(headerItem, 'sidebarname'));
    
    console.log("grouped",grouped);
    return { 
      Header: obj.labelname,
      accessor: obj.fieldpath.toLowerCase(),
      style:{
        texttransform:obj.texttransform,
        color:obj.textcolor,
        fontWeight:obj.textweight,
        width:obj.columnwidth
      }
    }
  });

 
  const columns = useMemo(() => column, [])
  const data = useMemo(() => datasrc, [])
 
  // const tracksByIdMongo = _.groupBy(headerItem, "sidebarname");
  return (<>
        <div className="w-full overflow-y-auto scrollbar scrollbar-thumb-sso scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-sso-dark scrollbar-thumb-rounded-full">
          <Title/>
          <Table 
            columns={columns}
            data={data}   
           />
        </div>
      </>
  )
}
export default DataView