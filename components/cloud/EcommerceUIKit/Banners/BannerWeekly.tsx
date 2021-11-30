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
import RenderAtom from "@components/common/Atom/RenderAtom";
const BannerWeekly = () => {
  const {
    config,
    readyDatasrc,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(readyDatasrc)) return null;
  // console.log("BannerWeekly config", config);
  // console.log("BannerWeekly readyDatasrc", readyDatasrc);
  // console.log("BannerWeekly otherattr", otherattr);
  // console.log("BannerWeekly positionConfig", positionConfig);
  return (
    <div className="container mx-auto ">
      {readyDatasrc &&
        readyDatasrc.map((item: any, index: number) => {
          return (
            <div className="w-full">
                <RenderAtom
               item={item?.position2}
               defaultAtom="image"
               customClassName="w-full h-16 rounded-b-lg"
              />
            </div>
          );
        })}
    </div>
  );
};

export default BannerWeekly;
