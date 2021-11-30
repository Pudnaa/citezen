import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
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

export default function Banner3Orgil() {
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

  if (isEmpty(datasrc)) return null;
  // console.log("Banner3 config", config);
  //console.log("Banner3 datasrc", datasrc);
  // console.log("Banner3 otherattr", otherattr);
  //console.log("Banner3 positionConfig", positionConfig);

  return (
    <>
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <div key={index} className="relative mt-20">
               <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="hidden md:block object-center object-fill w-full h-48 md:h-full"
                  />
                     {/* <AtomImage
                    item={renderPositionType(item, "position52", positionConfig)}
                    customClassName="md:hidden object-center object-fill w-full h-48 md:h-full"
                  />
              <div className="absolute w-full flex flex-col justify-center h-full inset-0 px-4 md:px-10 lg:px-24">
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                customClassName="text-xl lg:text-2xl font-bold leading-5 xl:leading-6 text-gray-900 "
              />
              </div> */}
            </div>
          );
        })}
    </>
  );
}
