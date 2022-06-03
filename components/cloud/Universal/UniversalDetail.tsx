import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";

export default function UniversalDetail() {
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
    <>
      {readyDatasrc.map((item: any, index: number) => {
        return (
          <RenderMolecule
            key={item?.id || index}
            moleculeConfig={{
              type: "MoleculeDetail",
              className: "",
              props: {},
            }}
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
    </>
  );
}
