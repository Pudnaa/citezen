import { useContext, useState } from "react";
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
const BestSeller9 = () => {
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

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const list = [show, show2, show3, show4];
  const listset = [setShow, setShow2, setShow3, setShow4];
  if (isEmpty(datasrc)) return null;
  // console.log("BestSeller9 config", config);
  // console.log("BestSeller9 datasrc", datasrc);
  // console.log("BestSeller9 otherattr", otherattr);
  // console.log("BestSeller9 positionConfig", positionConfig);

  return (
    <div className="2xl:mx-auto 2xl:container flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-start flex-col">
        <div className="">
          <p className="text-4xl font-semibold leading-9 text-gray-800">
            Recommended
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 justify-items-between gap-y-4 md:gap-y-8 lg:gap-y-0 gap-x-8">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div className="group">
                  <div
                    onMouseOver={() => listset[index](true)}
                    onMouseOut={() => listset[index](false)}
                    className="group-hover:shadow relative cursor-pointer"
                  >
                    <AtomImage
                      item={renderPositionType(
                        item,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-auto"
                      alt={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                    />
                    <div className="flex justify-start flex-col absolute bottom-0 w-full">
                      <div className="ml-6">
                        <AtomTitle
                          item={renderPositionType(
                            item,
                            "position1",
                            positionConfig
                          )}
                          customClassName="text-base font-bold leading-4 text-white"
                        />
                      </div>
                      <div className="mt-3 ml-6 mb-6">
                        <AtomText
                          item={
                            "$" +
                            renderPositionType(
                              item,
                              "position4",
                              positionConfig
                            )
                          }
                          customClassName="text-base font-medium leading-4 text-white"
                        />
                      </div>
                      <button
                        id="btn1"
                        className={
                          "bg-white w-full text-base tracking-tight font-medium leading-none text-gray-800 py-4 " +
                          (list[index] ? "block" : "hidden")
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller9;
