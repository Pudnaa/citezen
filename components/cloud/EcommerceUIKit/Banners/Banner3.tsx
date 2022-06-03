import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomFade,
  AtomImage,
} from "@components/common/Atom";

export default function Banner3() {
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

  // console.log("Banner3 config", config);
  //console.log("Banner3 readyDatasrc", readyDatasrc);
  // console.log("Banner3 widgetnemgooReady", widgetnemgooReady);
  //console.log("Banner3 positionConfig", positionConfig);

  return (
    <>
      {readyDatasrc &&
        readyDatasrc.map((item: any, index: number) => {
          return (
            <div key={item?.id || index} className="relative">
              <AtomImage
                item={item.mainimage}
                customClassName="hidden md:block object-center object-fill w-full h-48 md:h-full rounded-lg"
                alt="background-img"
              />
              <AtomImage
                item={item.logo}
                customClassName="md:hidden object-center object-fill w-full h-48 md:h-full"
                alt="background-img"
              />
              <div className="absolute w-full flex flex-col justify-center h-full inset-0 px-4 md:px-10 lg:px-24">
                <AtomTitle
                  item={item.title}
                  customClassName="text-xl md:text-3xl lg:text-4xl leading-5 md:leading-7 lg:leading-9 font-semibold text-white"
                />
                <AtomText
                  item={item.description}
                  customClassName="w-11/12 text-base md:text-xl lg:text-2xl leading-6 md:leading-5 font-normal lg:leading-6 text-white mt-2"
                />
              </div>
            </div>
          );
        })}
    </>
  );
}
