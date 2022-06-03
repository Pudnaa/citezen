import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import { AtomSliderV2 } from "@components/common/Atom";
import { SwiperSlide } from "swiper/react";
import RenderMolecule from "@molecule/RenderMolecule";

export default function UniversalSlider() {
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
    <BlockDiv customClassName="w-full text-center" divNumber="div11">
      <AtomSliderV2
        {...widgetnemgooReady?.props}
        className={widgetnemgooReady?.className}
        style={widgetnemgooReady?.style}
        div-name="AtomSliderV2"
      >
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <SwiperSlide key={item?.id || index}>
              <RenderMolecule
                moleculeConfig={widgetnemgooReady?.children?.[0]}
                {...{
                  item: {
                    title: item?.position1,
                    image: item?.position2,
                    description: item?.position3,
                    button: item?.position10,
                    leftclass: item?.position25,
                    rightclass: item?.position27,
                  },
                }}
              />
            </SwiperSlide>
          );
        })}
      </AtomSliderV2>
    </BlockDiv>
  );
}
