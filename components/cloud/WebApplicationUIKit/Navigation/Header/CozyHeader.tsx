import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import useScrollTop from "@customhook/useScrollTop";

export default function CozyHeader() {
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
  const { isTop, setIsTop } = useScrollTop(true);

  const header = widgetnemgooReady?.header || {};
  // const headerTopConfig = header?.top;

  const item = readyDatasrc[0] || {};

  console.log("item", item);

  return (
    <>
      <BlockDiv
        // customClassName={`fixed top-0 inset-x-0 w-full h-16 flex items-center ${
        //   isTop ? "bg-transparent" : "bg-black bg-opacity-80 shadow-lg"
        // } transition ease-in-out`}
        customClassName={`fixed top-0 inset-x-0 w-full h-16 bg-white flex items-center ${
          isTop ? header?.top?.className : header?.standard?.className
        } transition ease-in-out`}
        divNumber="divHeaderOuter"
      >
        <BlockDiv
          customClassName="container mx-auto flex flex-row items-center gap-x-5"
          divNumber="divHeaderInner"
        >
          <BlockDiv
            customClassName="flex-none w-48"
            divNumber="divHeaderZone01"
          >
            <RenderAtom
              item={item.position2}
              defaultAtom="image"
              customClassName="w-auto h-10 object-contain object-center"
            />
          </BlockDiv>
          <BlockDiv customClassName="grow" divNumber="divHeaderZone02">
            <BlockDiv
              customClassName="flex flex-row items-center justify-center gap-x-8 mr-10"
              divNumber="divBetween"
            >
              <RenderMolecule
                moleculeConfig={{
                  type: "MoleculeSearch",
                  className: "",
                  props: {},
                }}
                {...{
                  item: {
                    ...item,
                  },
                }}
              />
            </BlockDiv>
          </BlockDiv>
          <BlockDiv customClassName="flex-none" divNumber="divHeaderZone03">
            <BlockDiv
              customClassName="flex gap-x-3 items-center"
              divNumber="divHeader501"
            >
              <RenderAtom
                item={{ value: "far fa-gift" }}
                defaultAtom="icon"
                customClassName="text-xl"
              />
              <RenderAtom
                item={{ value: "far fa-heart" }}
                defaultAtom="icon"
                customClassName="text-xl"
              />
              <RenderAtom
                item={{ value: "far fa-wallet" }}
                defaultAtom="icon"
                customClassName="text-xl"
              />
            </BlockDiv>
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  );
}
