import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";

export default function CozyGeneralMenu() {
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

  const [active, setActive] = useState<number>();

  return (
    <>
      <BlockDiv
        customClassName={`w-full h-full rounded-l-xl`}
        customStyle={{
          background: "#F5F5F5",
        }}
        divNumber="CozyGeneralMenuOuter"
      >
        <BlockDiv
          customClassName="flex flex-col py-2"
          divNumber="CozyGeneralMenuInner"
        >
          <BlockDiv
            customClassName="flex flex-row items-center gap-x-3 px-4"
            divNumber="CozyGeneralMenuTitle"
          >
            <RenderAtom
              item={{ value: "far fa-bars" }}
              defaultAtom="icon"
              customClassName=""
            />
            <RenderAtom
              item={{ value: "Ангилал" }}
              defaultAtom="title"
              customClassName="font-bold"
            />
          </BlockDiv>
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <BlockDiv
                key={item?.id || index}
                customClassName={`flex flex-row overflow-hidden items-center gap-x-3 cursor-pointer px-4 py-0 rounded-l-xl ${
                  active === index
                    ? "bg-cozy text-white"
                    : "hover:text-blue-300"
                }`}
                divNumber="CozyGeneralMenuItem"
                onClick={() => setActive(index)}
              >
                <RenderAtom
                  item={item.position49}
                  defaultAtom="icon"
                  customClassName=""
                />
                <RenderAtom
                  key={item?.id || index}
                  item={item.position1}
                  defaultAtom="title"
                  customClassName="font-normal whitespace-nowrap"
                />
              </BlockDiv>
            );
          })}
        </BlockDiv>
      </BlockDiv>
    </>
  );
}
