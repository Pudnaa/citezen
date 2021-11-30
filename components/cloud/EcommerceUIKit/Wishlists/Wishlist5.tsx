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

export default function Wishlist5() {
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
  // console.log("Wishlist5 config", config);
  // console.log("Wishlist5 datasrc", datasrc);
  // console.log("Wishlist5 otherattr", otherattr);
  // console.log("Wishlist5 positionConfig", positionConfig);
  return (
    <div className="2xl:mx-auto 2xl:container md:py-12 py-9 lg:px-20 px-4 md:px-6 flex justify-center items-center flex-col space-y-8">
      <div className="w-full sm:px-20 md:px-0 text-left">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Wishlist
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:px-20 md:px-0 md:grid-cols-2 xl:grid-cols-3 w-full justify-items-center gap-x-6 lg:gap-x-8 gap-y-12 xl:gap-y-0">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex w-full flex-col justify-center items-start space-y-4"
              >
                <div className="group relative w-full flex justify-center items-center">
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="w-auto"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <button className="z-30 p-2 rounded-full bg-white absolute top-4 right-4 hover:text-red-600 text-gray-600">
                    <svg
                      className="fill-stroke "
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 8.75H25"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5 13.75V21.25"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 13.75V21.25"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.25 8.75L7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75L23.75 8.75"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 8.75V5C11.25 4.66848 11.3817 4.35054 11.6161 4.11612C11.8505 3.8817 12.1685 3.75 12.5 3.75H17.5C17.8315 3.75 18.1495 3.8817 18.3839 4.11612C18.6183 4.35054 18.75 4.66848 18.75 5V8.75"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="opacity-0 hover:text-black z-10 group-hover:opacity-100 transition duration-200 absolute bg-white flex justify-center items-center   text-center py-3 text-base font-medium leading-4 bottom-8 w-5/6  text-gray-800">
                    Add to cart
                  </button>
                  <div className=" w-full h-full opacity-0 group-hover:opacity-25 transition duration-200 bg-gradient-to-t z-0 from-gray-800 to-opacity-0 absolute bottom-0" />
                </div>
                <div className=" text-left">
                  <AtomText
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="text-sm leading-3 text-gray-600"
                  />
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName="mt-1 text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800"
                  />
                </div>
                <div className="text-left">
                  <AtomCurrency
                    type="mnt"
                    item={renderPositionType(item, "position4", positionConfig)}
                    customClassName="text-xl font-medium leading-5 text-gray-600"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
