import { useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import useScrollTop from "@customhook/useScrollTop";
import ChildrenChoose from "@components/common/ChildrenChoose";

export default function UniversalHeader() {
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
        customClassName={`fixed top-0 inset-x-0 w-full h-16 bg-gray-600 flex items-center ${
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
            <ChildrenChoose
              childrenConfig={widgetnemgooReady?.children?.[0]}
              item={item?.position2}
            />
            {/* <RenderMolecule
              moleculeConfig={widgetnemgooReady?.children?.[0]}
              {...{
                item: {
                  title: item?.position1,
                  image: null,
                  description: item?.position3,
                  button: item?.position10,
                },
              }}
            /> */}
            {/* <RenderAtom
              item={item?.position2}
              defaultAtom="image"
              customClassName="w-full h-full object-cover object-center"
            /> */}
          </BlockDiv>
          <BlockDiv customClassName="grow" divNumber="divHeaderZone02">
            <BlockDiv
              customClassName="flex flex-row items-center justify-end gap-x-8 mr-10"
              divNumber="divMenu"
            >
              <RenderAtom
                item={{ value: "Платформ" }}
                defaultAtom="text"
                customClassName="text-white text-lg"
              />
              <RenderAtom
                item={{ value: "Шийдэл" }}
                defaultAtom="text"
                customClassName="text-white text-lg"
              />
              <RenderAtom
                item={{ value: "Салбар" }}
                defaultAtom="text"
                customClassName="text-white text-lg"
              />
            </BlockDiv>
          </BlockDiv>
          <BlockDiv customClassName="flex-none" divNumber="divHeaderZone03">
            <RenderAtom
              item={{ value: "fal fa-user" }}
              defaultAtom="icon"
              customClassName="text-2xl text-white"
            />
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  );
}
