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
const ProductDetail1 = () => {
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
  // console.log("ProductDetail1 config", config);
  console.log("ProductDetail1 datasrc", datasrc);
  // console.log("ProductDetail1 otherattr", otherattr);
  // console.log("ProductDetail1 positionConfig", positionConfig);

  const item = datasrc[0];
  const colors = renderPositionType(
    renderPositionType(item, "position31", positionConfig)[1],
    "position31",
    positionConfig
  );
  const details = renderPositionType(item, "position32", positionConfig);
  return (
    <div className="mx-auto container flex items-center justify-center 2xl:px-32 md:px-8 px-4">
      <div className="w-full md:flex justify-center py-6">
        <div className="xl:w-auto w-1/2 md:block hidden">
          <div className="flex xl:flex-row flex-col w-full md:h-1/2 xl:space-x-5 mt-5">
            <AtomImage
              item={renderPositionType(
                renderPositionType(
                  renderPositionType(item, "position31", positionConfig)[0],
                  "position31",
                  positionConfig
                )[0],
                "position2",
                positionConfig
              )}
              customClassName="xl:w-96 w-full lg:h-full h-72 object-cover object-center"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
            <AtomImage
              item={renderPositionType(
                renderPositionType(
                  renderPositionType(item, "position31", positionConfig)[0],
                  "position31",
                  positionConfig
                )[1],
                "position2",
                positionConfig
              )}
              customClassName="xl:w-96 w-full lg:h-full h-72 object-cover object-center xl:pt-0 pt-5"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
          </div>
          <div className="flex xl:flex-row flex-col w-full md:h-1/2 xl:space-x-5 mt-5">
            <AtomImage
              item={renderPositionType(
                renderPositionType(
                  renderPositionType(item, "position31", positionConfig)[0],
                  "position31",
                  positionConfig
                )[2],
                "position2",
                positionConfig
              )}
              customClassName="xl:w-96 w-full lg:h-full h-72 object-cover object-center"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
            <AtomImage
              item={renderPositionType(
                renderPositionType(
                  renderPositionType(item, "position31", positionConfig)[0],
                  "position31",
                  positionConfig
                )[3],
                "position2",
                positionConfig
              )}
              customClassName="xl:pt-0 pt-5 xl:w-96 w-full lg:h-full h-72 object-cover object-center"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
          </div>
        </div>

        {/* Mobile preview */}

        <div className="md:hidden">
          <AtomImage
            item={renderPositionType(
              renderPositionType(
                renderPositionType(item, "position31", positionConfig)[0],
                "position31",
                positionConfig
              )[0],
              "position2",
              positionConfig
            )}
            customClassName="w-full"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
          <div className="flex items-center justify-between mt-3 space-x-3">
            <AtomImage
              item={renderPositionType(
                //s
                renderPositionType(
                  renderPositionType(item, "position31", positionConfig)[0],
                  "position31",
                  positionConfig
                )[1],
                "position2",
                positionConfig
              )}
              customClassName="w-1/4"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
            <AtomImage
              item={renderPositionType(
                renderPositionType(
                  renderPositionType(item, "position31", positionConfig)[0],
                  "position31",
                  positionConfig
                )[2],
                "position2",
                positionConfig
              )}
              customClassName="w-1/4"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
            <AtomImage
              item={renderPositionType(
                renderPositionType(
                  renderPositionType(item, "position31", positionConfig)[0],
                  "position31",
                  positionConfig
                )[3],
                "position2",
                positionConfig
              )}
              customClassName="w-1/4"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
          </div>
        </div>

        {/* Mobile preview */}

        <div className="xl:w-96 md:w-1/2 xl:ml-8 md:ml-6 md:pt-0 pt-5 pb-4">
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="lg:text-2xl text-xl font-semibold leading-normal text-gray-800"
          />
          <AtomCurrency
            item={renderPositionType(item, "position4", positionConfig)}
            type="mnt"
            customClassName="md:text-lg text-base font-medium leading-none pt-3 text-gray-800 pb-6"
          />
          <div className="border-b flex items-center justify-between border-t py-4 border-gray-200">
            <p className="text-base leading-none text-gray-800">Colours</p>
            <div className="flex items-center">
              {colors.map((item1: any, index1: number) => {
                return (
                  <div
                    key={index1}
                    className={`w-4 h-4 bg-${renderPositionType(
                      item1,
                      "position1",
                      positionConfig
                    )}-500 shadow rounded-full cursor-pointer mr-3`}
                  ></div>
                );
              })}
            </div>
          </div>

          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName="text-base leading-5 pt-6 text-gray-600"
          />
          <div className="mt-8 w-full">
            <button className="text-base leading-none text-white w-full py-5 bg-gray-800 focus:outline-none hover:bg-opacity-90">
              Add to cart
            </button>
            <div className="flex items-center justifiy-between mt-4">
              <button className="text-base w-1/2 leading-none text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white flex items-center justify-center py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler mr-2 icon-tabler-map-pin"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="11" r="3"></circle>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
                Find in store
              </button>
              <button className="ml-4 text-base w-1/2 leading-none text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white flex items-center justify-center py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 icon icon-tabler icon-tabler-heart"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                </svg>
                Favourite
              </button>
            </div>
            <p className="lg:text-xl text-lg font-semibold leading-5 text-gray-800 pt-10">
              Product Information
            </p>
            {renderPositionType(item, "position33", positionConfig).map(
              (item1: any, index1: number) => {
                return (
                  <p
                    key={index1}
                    className="text-base leading-normal text-gray-600 pt-5 pb-4"
                  >
                    <AtomText
                      item={renderPositionType(
                        item1,
                        "position1",
                        positionConfig
                      )}
                      customClassName=""
                    />
                    :
                    <AtomText
                      key={index1}
                      item={
                        " " +
                        renderPositionType(
                          details[index1],
                          "position1",
                          positionConfig
                        )
                      }
                      customClassName=""
                    />
                  </p>
                );
              }
            )}
            <p className="lg:text-xl text-lg pt-4 font-semibold leading-5 text-gray-800">
              Contact Support
            </p>
            <div className="mt-2">
              <a
                href="/"
                className=" text-base leading-4 cursor-pointer focus:outline-none focus:underline hover:underline  text-blue-800"
              >
                +92 0394 982734
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail1;
