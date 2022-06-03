import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";

export default function UniversalGrid() {
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

  const colNumber = readyDatasrc.length > 12 ? "12" : readyDatasrc.length + "";

  return (
    <BlockDiv customClassName="w-full" divNumber="div10">
      <BlockDiv
        customClassName={`grid grid-cols-${colNumber} gap-4`}
        divNumber="divGridNumber"
      >
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <RenderMolecule
              key={item?.id || index}
              moleculeConfig={widgetnemgooReady?.children?.[0]}
              {...{
                item: {
                  title: item?.position1,
                  image: item?.position2,
                  description: item?.position3,
                  button: item?.position10,
                },
              }}
            />
          );
        })}
      </BlockDiv>
    </BlockDiv>
  );
}
