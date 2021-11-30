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

const Banner5 = () => {
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
  // console.log("Banner5 config", config);
  // console.log("Banner5 datasrc", datasrc);
  // console.log("Banner5 otherattr", otherattr);
  // console.log("Banner5 positionConfig", positionConfig);
  return (
    <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <div className="flex flex-col md:flex-row justify-between items-strech bg-gray-50 py-8 md:py-11 lg:py-10 px-4 md:px-8 lg:px-16">
              <div className="flex items-center">
                <div className="w-full">
                  <AtomText
                    item={item.description}
                    customClassName="text-xl text-gray-800 leading-5"
                  />
                  <AtomTitle
                    item={item.title}
                    customClassName="text-3xl leading-9 font-bold text-gray-800"
                  />
                  <AtomButton
                    item={item.button}
                    customClassName="w-full sm:w-auto mt-12 md:mt-10 bg-gray-800 py-3 px-6 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700"
                    color=""
                  />
                </div>
              </div>
              <div className="mt-8 md:mt-0 mx-auto md:mx-0">
                <AtomImage item={item.mainimage} alt={item.title} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Banner5;
