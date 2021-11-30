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

export default function Wishlist3() {
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
  // console.log("Wishlist3 config", config);
  // console.log("Wishlist3 datasrc", datasrc);
  // console.log("Wishlist3 otherattr", otherattr);
  // console.log("Wishlist3 positionConfig", positionConfig);
  return (
    <div className="2xl:mx-auto 2xl:container xl:px-20 md:px-12 px-4 py-12">
      <h1 className="text-4xl font-semibold leading-9 text-gray-800">
        Wishlist
      </h1>
      <p className="text-base leading-4 text-gray-600 mt-3">
        Home &gt; Wishlist
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-6">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <div key={index} className="bg-gray-50 p-6">
                <div className="flex items-center justify-end gap-x-4">
                  <button
                    aria-label="remove"
                    className=" focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full focus:ring-offset-2 w-12 h-12 cursor-pointer hover:bg-gray-100  bg-white shadow flex items-center justify-center"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33325 5.83337H16.6666"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.33325 9.16663V14.1666"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.6667 9.16663V14.1666"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16675 5.83337L5.00008 15.8334C5.00008 16.2754 5.17568 16.6993 5.48824 17.0119C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0119C14.8245 16.6993 15.0001 16.2754 15.0001 15.8334L15.8334 5.83337"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="view"
                    className=" focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full focus:ring-offset-2 w-12 h-12 cursor-pointer hover:bg-gray-100  bg-white shadow flex items-center justify-center"
                  >
                    <svg
                      width={20}
                      height={14}
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.98676 1.375C6.94223 1.375 3.81918 3.13711 1.36058 6.66133C1.29041 6.76303 1.25195 6.88325 1.25007 7.0068C1.24819 7.13035 1.28298 7.25168 1.35004 7.35547C3.2391 10.3125 6.32035 12.625 9.98676 12.625C13.6133 12.625 16.7578 10.3055 18.6504 7.3418C18.7159 7.24004 18.7507 7.12159 18.7507 7.00059C18.7507 6.87958 18.7159 6.76113 18.6504 6.65937C16.7536 3.72969 13.586 1.375 9.98676 1.375Z"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.125C11.7259 10.125 13.125 8.72589 13.125 7C13.125 5.27411 11.7259 3.875 10 3.875C8.27411 3.875 6.875 5.27411 6.875 7C6.875 8.72589 8.27411 10.125 10 10.125Z"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="cart"
                    className=" focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full focus:ring-offset-2 w-12 h-12 cursor-pointer hover:bg-gray-100  bg-white shadow flex items-center justify-center"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="w-auto"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                </div>
                <div>
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName="text-xl font-semibold leading-5 text-gray-800"
                  />
                  <AtomCurrency
                    type="mnt"
                    item={renderPositionType(item, "position4", positionConfig)}
                    customClassName="text-lg leading-5 mt-2 text-gray-600"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
