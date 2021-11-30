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
  AtomImage,
} from "@components/common/Atom";

export default function ProductGrid3() {
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
  // console.log("ProductGrid3 config", config);
  // console.log("ProductGrid3 datasrc", datasrc);
  // console.log("ProductGrid3 otherattr", otherattr);
  // console.log("ProductGrid3 positionConfig", positionConfig);
  let arr = [
    " text-white",
    " text-white",
    " text-black",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
  ];

  const [stars, setStars] = useState(arr);

  const setStarsValue = (val: any) => {
    const newArr = [...stars];
    if (newArr[val] === " text-white") {
      newArr[val] = " text-black";
    } else {
      newArr[val] = " text-white";
    }
    setStars(newArr);
  };

  const item = datasrc[0];
  const list = renderPositionType(item, "position31", positionConfig);
  return (
    <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <div className="flex flex-col justify-start items-start">
        <div className="">
          <p className="text-sm leading-none font-normal text-gray-600">
            Home - {renderPositionType(item, "position41", positionConfig)}
          </p>
        </div>
        <div className="mt-4 flex justify-between items-end w-full">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div>
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                customClassName="text-3xl lg:text-4xl tracking-tight font-semibold lg:leading-9 leading-7 text-gray-800"
              />
            </div>
            <div className="flex justify-start items-end mb-1 mt-2 sm:mt-0">
              <span className="text-base leading-none font-normal text-gray-600">
                ({renderPositionType(item, "position4", positionConfig)}{" "}
                Products)
              </span>
            </div>
          </div>
          <button className="hover:opacity-75 relative py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 rounded-sm flex jusitfy-center item-center">
            <p className="text-base leading-3 text-gray-600 font-normal">
              Filters
            </p>
            <div className="absolute top-0.5 right-2 flex jusitfy-center items-center">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3334 10.6666L21.3334 5.33325L16.0001 5.33325L16.0001 10.6666L21.3334 10.6666Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.6666 8L21.3332 8"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8L5.33333 8"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3335 18.6666L13.3335 13.3333L8.00011 13.3333L8.00011 18.6666L13.3335 18.6666Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.6665 16L13.3332 16"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 16L5.33333 16"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.3334 26.6666L25.3334 21.3333L20.0001 21.3333L20.0001 26.6666L25.3334 26.6666Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.6665 24L25.3332 24"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 24L5.33333 24"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-12 grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8 md:gap-x-6 md:gap-y-10 2xl:flex 2xl:flex-wrap justify-between">
          {list &&
            list.map((item1: any, index1: number) => {
              return (
                <div className="flex justify-center flex-col">
                  <div className="relative group flex justify-center items-center">
                    <AtomImage
                      item={renderPositionType(
                        item1,
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
                    <div>
                      <button className="opacity-0 group-hover:opacity-100 py-4 w-10/12 sm:w-11/12 md:w-10/12 xl:w-11/12 flex justify-center items-center bg-white absolute bottom-6 inset-x-6 sm:inset-x-3 md:inset-x-6 lg:inset-x-5 xl:inset-x-4  shadow">
                        <p className="text-base text-center font-medium leading-4 text-gray-800 flex flex-shrink-0">
                          Quick View
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between w-full">
                    <div>
                      <AtomTitle
                        item={renderPositionType(
                          item1,
                          "position1",
                          positionConfig
                        )}
                        customClassName="text-2xl font-semibold leading-6 text-gray-800"
                      />
                    </div>
                    <div className="focus:text-black">
                      <svg
                        id="heart"
                        onClick={() => setStarsValue(0)}
                        className={`cursor-pointer fill-current ${stars[0]}`}
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 17.75L5.82802 20.995L7.00702 14.122L2.00702 9.25495L8.90702 8.25495L11.993 2.00195L15.079 8.25495L21.979 9.25495L16.979 14.122L18.158 20.995L12 17.75Z"
                          stroke="#1F2937"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-2">
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position41",
                        positionConfig
                      )}
                      customClassName="text-base leading-none text-gray-800"
                    />
                  </div>
                  <div className="mt-6 flex justify-between w-full">
                    <div>
                      <AtomCurrency
                        type="mnt"
                        item={renderPositionType(
                          item,
                          "position4",
                          positionConfig
                        )}
                        customClassName="text-2xl font-semibold leading-normal text-gray-600"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
