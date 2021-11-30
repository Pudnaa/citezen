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

export default function Wishlist2() {
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
  // console.log("Wishlist2 config", config);
  // console.log("Wishlist2 datasrc", datasrc);
  // console.log("Wishlist2 otherattr", otherattr);
  // console.log("Wishlist2 positionConfig", positionConfig);
  return (
    <div className=" py-12">
      {/* Desktop Responsive Start */}
      <div className="hidden sm:flex flex-col justify-start items-start">
        <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Favourites
          </h1>
          <p className="text-base leading-4 text-gray-600 pb-1">
            ({datasrc.length + " "} Items)
          </p>
        </div>
        <table className="w-full mt-16 whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
          >
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                ТАНЫ БҮТЭЭГДЭХҮҮН
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                НЭР
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                ҮНЭ
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                MORE OPTIONS
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
            </tr>
          </thead>
          <tbody className="w-full text-left">
            {datasrc &&
              datasrc.map((item: any, index: number) => {
                return (
                  <tr key={index} className="border-gray-200 border-b  ">
                    <th>
                      <AtomImage
                        item={renderPositionType(
                          item,
                          "position2",
                          positionConfig
                        )}
                        customClassName="my-10 pl-4 lg:pl-10 2xl:pl-20 w-auto"
                        alt={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                      />
                    </th>
                    <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                      <AtomTitle
                        item={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                        customClassName="w-36 text-base leading-6 text-gray-800"
                      />
                    </th>
                    <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                      <AtomCurrency
                        type="mnt"
                        item={renderPositionType(
                          item,
                          "position4",
                          positionConfig
                        )}
                      />
                    </th>
                    <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                      <a
                        href="javascript:void(0)"
                        className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline"
                      >
                        View details
                      </a>
                    </th>
                    <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                      <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
                        <p>Remove Item</p>
                      </button>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* Desktop Responsive End */}
      {/* Mobile Responsive Start */}
      <div className=" flex justify-center items-center">
        <div className="sm:hidden flex flex-col justify-start items-start ">
          <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
            <p className="text-4xl font-semibold leading-9 text-gray-800">
              Favourites
            </p>
            <p className="text-base leading-4 text-gray-600 pb-1">
              ({datasrc.length + " "} Items)
            </p>
          </div>
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div key={index} className="border-gray-200 border-b pb-10">
                  <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                    <div>
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
                    </div>
                  </div>
                  <div className="px-4 mt-6 flex justify-between w-full  jusitfy-center items-center">
                    <div>
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                        customClassName="w-36 text-base leading-6 text-gray-800"
                      />
                    </div>
                    <div>
                      <AtomCurrency
                        type="mnt"
                        item={renderPositionType(
                          item,
                          "position4",
                          positionConfig
                        )}
                        customClassName="text-base font-semibold leading-4 text-gray-800"
                      />
                    </div>
                  </div>
                  <div className="px-4 mt-6 flex justify-between w-full  jusitfy-center items-center">
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"
                      >
                        {" "}
                        View details
                      </a>
                    </div>
                    <div>
                      <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                        <p>Remove Item</p>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* Mobile Responsive End */}
    </div>
  );
}
