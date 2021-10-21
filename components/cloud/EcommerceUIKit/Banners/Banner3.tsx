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

export default function Banner3() {
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
    <div>
      {datasrc.map((item: any, index: number) => {
        return (
          <div key={index} className="flex items-center justify-center py-12">
            <div className="w-full items-center justify-center relative ">
              <AtomImage
                item={renderPositionType(item, "position52", positionConfig)}
                customClassName="w-full h-full absolute inset-0 object-cover object-center"
              />
              <AtomFade />
              <div className="relative z-10 w-full">
                <div className="flex flex-row justify-center items-center py-12 px-6">
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    link=""
                    customStyle={{}}
                    customClassName="md:text-4xl text-2xl text-center font-bold text-white pb-4 md:pb-8"
                    truncateRow={2}
                  />
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="w-20 h-12 rounded-r-3xl rounded-l-3xl ml-20 mb-5"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
