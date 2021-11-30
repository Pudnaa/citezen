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
import { Atom_date } from "@components/common/Atom/Form";

const BlogI = () => {
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
  // console.log("BlogI config", config);
  // console.log("BlogI datasrc", datasrc);
  // console.log("BlogI otherattr", otherattr);
  // console.log("BlogI positionConfig", positionConfig);
  const item = datasrc;
  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
            This Week Blogs
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            If you_re looking for random paragraphs, you_ve come to the right
            place. When a random word or a random sentence isn_t quite enough
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative">
                <div>
                  <AtomText
                    item={renderPositionType(
                      item[0],
                      "position5",
                      positionConfig
                    )}
                    customClassName="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                  />
                  <div className="absolute bottom-0 left-0 p-6">
                    <AtomTitle
                      item={renderPositionType(
                        item[0],
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-xl font-semibold 5 text-white"
                    />
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-base leading-4 text-white mt-2"
                    />
                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <AtomImage
                  item={renderPositionType(
                    item[0],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full"
                  alt={renderPositionType(item[0], "position2", positionConfig)}
                />
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div>
                  <AtomText
                    item={renderPositionType(
                      item[1],
                      "position5",
                      positionConfig
                    )}
                    customClassName="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                  />
                  <div className="absolute bottom-0 left-0 p-6">
                    <AtomTitle
                      item={renderPositionType(
                        item[1],
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-xl font-semibold 5 text-white"
                    />
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-base leading-4 text-white mt-2"
                    />
                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <AtomImage
                  item={renderPositionType(
                    item[1],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full"
                  alt={renderPositionType(item[1], "position2", positionConfig)}
                />
              </div>
            </div>
            <div className="relative">
              <div>
                <AtomText
                  item={renderPositionType(
                    item[2],
                    "position5",
                    positionConfig
                  )}
                  customClassName="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                />
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <AtomTitle
                    item={renderPositionType(
                      item[2],
                      "position1",
                      positionConfig
                    )}
                    customClassName="text-xl font-semibold 5 text-white"
                  />
                  <AtomText
                    item={renderPositionType(
                      item[2],
                      "position3",
                      positionConfig
                    )}
                    customClassName="text-base leading-4 text-white mt-2"
                  />
                  <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <AtomImage
                item={renderPositionType(item[2], "position2", positionConfig)}
                customClassName="w-full mt-8 md:mt-6 block"
                alt={renderPositionType(item[2], "position2", positionConfig)}
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <div>
                <AtomText
                  item={renderPositionType(
                    item[3],
                    "position5",
                    positionConfig
                  )}
                  customClassName="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                />
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <AtomTitle
                    item={renderPositionType(
                      item[3],
                      "position1",
                      positionConfig
                    )}
                    customClassName="text-xl font-semibold 5 text-white"
                  />
                  <AtomText
                    item={renderPositionType(
                      item[3],
                      "position3",
                      positionConfig
                    )}
                    customClassName="text-base leading-4 text-white mt-2"
                  />
                  <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <AtomImage
                item={renderPositionType(item[3], "position2", positionConfig)}
                customClassName="w-full block"
                alt={renderPositionType(item[3], "position2", positionConfig)}
              />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <div>
                  <AtomText
                    item={renderPositionType(
                      item[4],
                      "position5",
                      positionConfig
                    )}
                    customClassName="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                  />
                  <div className="absolute bottom-0 left-0 p-6">
                    <AtomTitle
                      item={renderPositionType(
                        item[4],
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-xl font-semibold 5 text-white"
                    />
                    <AtomText
                      item={renderPositionType(
                        item[4],
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-base leading-4 text-white mt-2"
                    />
                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <AtomImage
                  item={renderPositionType(
                    item[4],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full"
                  alt={renderPositionType(item[4], "position2", positionConfig)}
                />
              </div>
              <div className="relative w-full sm:mt-0 mt-4">
                <div>
                  <AtomText
                    item={renderPositionType(
                      item[5],
                      "position5",
                      positionConfig
                    )}
                    customClassName="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
                  />
                  <div className="absolute bottom-0 left-0 p-6">
                    <AtomTitle
                      item={renderPositionType(
                        item[5],
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-xl font-semibold 5 text-white"
                    />
                    <AtomText
                      item={renderPositionType(
                        item[5],
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-base leading-4 text-white mt-2"
                    />
                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <AtomImage
                  item={renderPositionType(
                    item[5],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-full"
                  alt={renderPositionType(item[5], "position2", positionConfig)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogI;
