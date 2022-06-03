import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";

export default function UniversalHalf() {
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

  return (
    <BlockDiv customClassName="w-full" divNumber="div10">
      {readyDatasrc.map((item: any, index: number) => {
        return (
          <BlockDiv
            key={item?.id || index}
            customClassName="flex w-full h-full"
            divNumber={`div20-${index}`}
          >
            <BlockDiv
              customClassName={`w-1/2 order-1 ${item?.position25?.value || ""}`}
              divNumber="div100"
            >
              {/* БҮтээгд */}
              {/* <AtomTitle item="БҮтээгд" type="" /> */}
              {/* name = {
              title:"dfdf",
              dddd:"7879789"
            }

              {
                dsfdf: "df dsf dsf",
                ...name
              }


              {
                dsfdf: "df dsf dsf",
                title:"dfdf",
                dddd:"7879789"
              } */}
              <RenderMolecule
                moleculeConfig={widgetnemgooReady?.children?.[0]}
                {...{
                  item: {
                    title: item?.position1,
                    image: null,
                    description: item?.position3,
                    button: item?.position10,
                  },
                }}
              />
            </BlockDiv>
            <BlockDiv
              customClassName={`w-1/2 order-2 ${item?.position27?.value || ""}`}
              divNumber="div200"
            >
              <RenderMolecule
                moleculeConfig={widgetnemgooReady?.children?.[1]}
                {...{
                  item: {
                    title: null,
                    image: item?.position2,
                    description: null,
                    button: null,
                  },
                  AtomFadeProps: { opacityClass: "bg-opacity-0" },
                }}
              />
            </BlockDiv>
          </BlockDiv>
        );
      })}
    </BlockDiv>
  );
}
