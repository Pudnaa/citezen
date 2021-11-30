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
export default function BlogIX() {
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
  // console.log("BlogIX config", config);
  // console.log("BlogIX datasrc", datasrc);
  // console.log("BlogIX otherattr", otherattr);
  // console.log("BlogIX positionConfig", positionConfig);
  const item = datasrc;
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container  py-12 xl:px-20 md:px-6 px-4 flex justify-center items-center w-full flex-col">
        <div className="sm:w-96 md:w-8/12 xl:w-full space-y-10">
          <div className="text-center flex flex-col justify-center items-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">
              Latest Fashion Blogs
            </h1>
            <p className="text-base leading-6 md:leading-4 text-center text-gray-600">
              Dive deep into the world of fashion with our lastest blogs
              updates.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-6 xl:space-y-8">
            <div className="w-full relative">
              <AtomImage
                item={renderPositionType(item[0], "position2", positionConfig)}
                customClassName="w-full object-cover"
                alt={renderPositionType(item[0], "position1", positionConfig)}
              />
              <div className="absolute bottom-2 md:bottom-8 inset-x-2 md:inset-x-8 xl:left-8 xl:right-1/2 bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                <AtomText
                  item={renderPositionType(
                    item[0],
                    "position5",
                    positionConfig
                  )}
                  customClassName="text-sm leading-none text-gray-600"
                />
                <AtomTitle
                  item={renderPositionType(
                    item[0],
                    "position1",
                    positionConfig
                  )}
                  customClassName="mt-2 text-2xl font-semibold leading-6 text-gray-800"
                />
                <AtomText
                  item={renderPositionType(
                    item[0],
                    "position3",
                    positionConfig
                  )}
                  customClassName="mt-4 text-base leading-6 text-gray-600"
                />
                <a
                  href="javascript:void(0)"
                  className="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800"
                >
                  Read Story
                </a>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row w-full justify-center items-center  space-y-6 xl:space-y-0 xl:space-x-8">
              <div className="w-full relative">
                <AtomImage
                  item={renderPositionType(
                    item[1],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full object-cover"
                  alt={renderPositionType(item[1], "position1", positionConfig)}
                />{" "}
                <div className="absolute bottom-2 md:bottom-8 inset-x-2 md:inset-x-8  bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                  <AtomText
                    item={renderPositionType(
                      item[1],
                      "position5",
                      positionConfig
                    )}
                    customClassName="text-sm leading-none text-gray-600"
                  />
                  <AtomTitle
                    item={renderPositionType(
                      item[1],
                      "position1",
                      positionConfig
                    )}
                    customClassName="mt-2 text-2xl font-semibold leading-6 text-gray-800"
                  />
                  <AtomText
                    item={renderPositionType(
                      item[1],
                      "position3",
                      positionConfig
                    )}
                    customClassName="mt-4 text-base leading-6 text-gray-600"
                  />
                  <a
                    href="javascript:void(0)"
                    className="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800"
                  >
                    Read Story
                  </a>
                </div>
              </div>
              <div className="w-full relative">
                <AtomImage
                  item={renderPositionType(
                    item[2],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full object-cover"
                  alt={renderPositionType(item[2], "position1", positionConfig)}
                />{" "}
                <div className="absolute md:bottom-8 bottom-2 inset-x-2 md:inset-x-8  bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                  <AtomText
                    item={renderPositionType(
                      item[2],
                      "position5",
                      positionConfig
                    )}
                    customClassName="text-sm leading-none text-gray-600"
                  />
                  <AtomTitle
                    item={renderPositionType(
                      item[2],
                      "position1",
                      positionConfig
                    )}
                    customClassName="mt-2 text-2xl font-semibold leading-6 text-gray-800"
                  />
                  <AtomText
                    item={renderPositionType(
                      item[2],
                      "position3",
                      positionConfig
                    )}
                    customClassName="mt-4 text-base leading-6 text-gray-600"
                  />{" "}
                  <a
                    href="javascript:void(0)"
                    className="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800"
                  >
                    Read Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
                .bg-blur {
                    background: linear-gradient(91.25deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 99.82%);
                backdrop-filter: blur(25px);
            }
            `}
      </style>
    </div>
  );
}
