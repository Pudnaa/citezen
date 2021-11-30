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
export default function BlogVIII() {
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
  // console.log("BlogVIII config", config);
  // console.log("BlogVIII datasrc", datasrc);
  // console.log("BlogVIII otherattr", otherattr);
  // console.log("BlogVIII positionConfig", positionConfig);
  const item = datasrc;
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto py-12 lg:px-20 2xl:px-0 md:px-6 px-4 flex justify-center items-center">
        <div className="sm:w-8/12 lg:w-full flex flex-col justify-center items-center space-y-10 ">
          <div className="flex flex-col text-center space-y-4 justify-center items-center">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-900">
              Our News Articles
            </p>
            <p className="text-base leading-6 lg:leading-4 text-center text-gray-600">
              Read our blogs to catch on latest furniture trends of the year
            </p>
          </div>
          <div className="flex  flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 items-stretch ">
            <div className="flex justify-center items-center flex-col space-y-6">
              <AtomImage
                item={renderPositionType(item[0], "position2", positionConfig)}
                customClassName="w-full"
                alt={renderPositionType(item[0], "position1", positionConfig)}
              />
              <div className="flex flex-col justify-start w-full items-start ">
                <AtomTitle
                  item={renderPositionType(
                    item[0],
                    "position1",
                    positionConfig
                  )}
                  customClassName="text-2xl text-left font-semibold leading-6 text-gray-800"
                />
                <AtomText
                  item={renderPositionType(
                    item[0],
                    "position3",
                    positionConfig
                  )}
                  customClassName="mt-4 text-base leading-6 text-gray-600"
                />
                <button className=" mt-6 text-base font-medium leading-4 py-3 px-4 hover:bg-black bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none text-white">
                  Read Story
                </button>
              </div>
            </div>
            <div className="flex 2xl:w-full justify-start items-center  flex-col space-y-8 lg:space-y-10">
              <div className="w-full flex justify-center items-center flex-col space-y-6">
                <AtomImage
                  item={renderPositionType(
                    item[1],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full"
                  alt={renderPositionType(item[1], "position1", positionConfig)}
                />
                <div className="flex flex-col justify-start w-full items-start ">
                  <AtomTitle
                    item={renderPositionType(
                      item[1],
                      "position1",
                      positionConfig
                    )}
                    customClassName="text-2xl text-left font-semibold leading-6 text-gray-800"
                  />
                  <AtomText
                    item={renderPositionType(
                      item[1],
                      "position3",
                      positionConfig
                    )}
                    customClassName="mt-4 text-base leading-6 text-gray-600"
                  />
                  <button className=" mt-6 text-base font-medium leading-4 py-3 px-4 hover:bg-black bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none text-white">
                    Read Story
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center items-center flex-col space-y-6">
                <AtomImage
                  item={renderPositionType(
                    item[2],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full"
                  alt={renderPositionType(item[2], "position1", positionConfig)}
                />
                <div className="flex flex-col justify-start w-full items-start ">
                  <AtomTitle
                    item={renderPositionType(
                      item[2],
                      "position1",
                      positionConfig
                    )}
                    customClassName="text-2xl text-left font-semibold leading-6 text-gray-800"
                  />
                  <AtomText
                    item={renderPositionType(
                      item[2],
                      "position3",
                      positionConfig
                    )}
                    customClassName="mt-4 text-base leading-6 text-gray-600"
                  />
                  <button className=" mt-6 text-base font-medium leading-4 py-3 px-4 hover:bg-black bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none text-white">
                    Read Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
