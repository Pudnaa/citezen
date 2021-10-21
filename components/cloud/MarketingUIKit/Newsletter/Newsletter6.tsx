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
  AtomImage,
} from "@components/common/Atom";

export default function Newsletter6() {
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

  return (
    <div>
      {datasrc.map((item: any, index: number) => {
        return (
          <div key={index} id="modal" className="flex items-center justify-center py-12">
            <div className="w-10/12 items-center justify-center relative ">
              <img
                className="hidden md:block w-full h-full absolute rounded-md"
                src={renderPositionType(item, "position52", positionConfig)}
              />
              <div className="relative z-10 w-full">
                <div className="flex flex-row justify-center items-center py-12 px-6">
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    link=""
                    customStyle={{}}
                    customClassName="md:text-4xl text-2xl text-center font-bold text-white pb-4 md:pb-8"
                    truncateRow={2}
                  />
                  <img
                    className="w-20 h-12 rounded-r-3xl rounded-l-3xl ml-20 mb-5"
                    src={renderPositionType(item, "position2", positionConfig)}
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
