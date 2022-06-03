import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import CozyProductCard from "@components/cloud/Project/Cozy/List/CozyProductCard";
import CozyProductDataviewTitle from "./CozyProductDataviewTitle";
import CozyProductDataviewControlViewType from "./CozyProductDataviewControlViewType";
import CozyProductDataviewControlSort from "./CozyProductDataviewControlSort";
import CozyProductDataviewControlPagination from "./CozyProductDataviewControlPagination";

export default function CozyDataview() {
  const {
    config,
    readyDatasrc,
    paging,
    aggregatecolumns,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("🚀 ~ CozyDataview ~ readyDatasrc", readyDatasrc);

  return (
    <BlockDiv customClassName="w-full" divNumber="CozyDataviewOuter">
      <BlockDiv customClassName="w-full" divNumber="CozyDataviewInner">
        {/* Header */}
        <BlockDiv
          customClassName="w-full flex flex-row items-center justify-between"
          customStyle={{
            height: "60px",
          }}
          divNumber="CozyDataviewHeader"
        >
          {/* Title */}
          <CozyProductDataviewTitle />
          <BlockDiv
            customClassName="flex flex-row items-center gap-x-5"
            divNumber="CozyDataviewHeaderControlBlock"
          >
            {/* Card Type */}
            <CozyProductDataviewControlViewType />
            {/* Sort */}
            <CozyProductDataviewControlSort />
          </BlockDiv>
        </BlockDiv>

        {/* Body */}
        <BlockDiv
          customClassName="w-full grid grid-cols-4 gap-5"
          divNumber="CozyDataviewBody"
        >
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <CozyProductCard
                key={item?.id || index}
                item={item}
                customClassName="col-span-1"
                divNamePrefix="dv"
              />
            );
          })}
        </BlockDiv>

        <BlockDiv
          customClassName="w-full py-3 flex flex-row items-center justify-center mt-5"
          divNumber="CozyDataviewFooter"
        >
          {/* Pagination */}
          <CozyProductDataviewControlPagination paging={paging} />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
}
