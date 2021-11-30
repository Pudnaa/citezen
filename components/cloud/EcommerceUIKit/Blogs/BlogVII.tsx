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
export default function BlogVII() {
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
  // console.log("BlogVII config", config);
  // console.log("BlogVII datasrc", datasrc);
  // console.log("BlogVII otherattr", otherattr);
  // console.log("BlogVII positionConfig", positionConfig);
  const item = datasrc;
  return (
    <div>
      <div className="flex justify-center items-center lg:px-20 md:px-6 py-12 px-4 2xl:container 2xl:mx-auto">
        <div className="w-96 md:w-auto flex justify-center items-center flex-col  space-y-10">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-900">
              Our Blogs
            </h1>
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-stretch xl:space-x-8  ">
            <div className="flex w-full justify-between items-stretch  flex-col space-y-8">
              <div className="border flex-col md:flex-row space-x-4 md:space-x-8 w-full border-gray-200 flex justify-between item-center">
                <div className=" w-full  flex justify-center">
                  <AtomImage
                    item={renderPositionType(
                      item[0],
                      "position2",
                      positionConfig
                    )}
                    customClassName="w-full"
                    alt={renderPositionType(
                      item[0],
                      "position1",
                      positionConfig
                    )}
                  />
                </div>
                <div className=" my-6 md:py-0 flex flex-col justify-center items-start ">
                  <AtomTitle
                    item={renderPositionType(
                      item[0],
                      "position1",
                      positionConfig
                    )}
                    customClassName="text-2xl font-semibold leading-6 text-gray-800"
                  />{" "}
                  <AtomText
                    item={renderPositionType(
                      item[0],
                      "position3",
                      positionConfig
                    )}
                    customClassName="md:w-96 pr-5 mt-4 text-base leading-6 text-gray-600"
                  />
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none focus:text-gray-500  mt-6 text-base font-medium leading-4 hover:underline text-gray-800"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="border flex-col md:flex-row space-x-4 md:space-x-8 w-full  border-gray-200 flex justify-center item-center">
                <div className="w-full flex justify-center">
                  <AtomImage
                    item={renderPositionType(
                      item[1],
                      "position2",
                      positionConfig
                    )}
                    customClassName="w-full"
                    alt={renderPositionType(
                      item[1],
                      "position1",
                      positionConfig
                    )}
                  />
                </div>
                <div className="py-6 md:py-0 flex flex-col justify-center items-start ">
                  <AtomTitle
                    item={renderPositionType(
                      item[1],
                      "position1",
                      positionConfig
                    )}
                    customClassName="text-2xl font-semibold leading-6 text-gray-800"
                  />{" "}
                  <AtomText
                    item={renderPositionType(
                      item[1],
                      "position3",
                      positionConfig
                    )}
                    customClassName="md:w-96 pr-5 mt-4 text-base leading-6 text-gray-600"
                  />
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none focus:text-gray-500  mt-6 text-base font-medium leading-4 hover:underline text-gray-800"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="border mt-8 xl:mt-0 xl:w-8/12 flex-col md:flex-row xl:flex-col border-gray-200 flex justify-center xl:justify-between space-x-4 md:space-x-8 xl:space-x-0 xl:space-y-12  item-center">
              <div className="w-full">
                <AtomImage
                  item={renderPositionType(
                    item[2],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full"
                  alt={renderPositionType(item[2], "position1", positionConfig)}
                />
              </div>
              <div className=" my-6 md:py-0 xl:pb-14 xl:px-8 flex flex-col justify-center items-start ">
                <AtomTitle
                  item={renderPositionType(
                    item[2],
                    "position1",
                    positionConfig
                  )}
                  customClassName="text-2xl font-semibold leading-6 text-gray-800"
                />{" "}
                <AtomText
                  item={renderPositionType(
                    item[2],
                    "position3",
                    positionConfig
                  )}
                  customClassName="md:w-96 pr-5 mt-4 text-base leading-6 text-gray-600"
                />
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:text-gray-500  mt-6 text-base font-medium leading-4 hover:underline text-gray-800"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
