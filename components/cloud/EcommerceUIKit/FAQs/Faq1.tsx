import { useContext, useState, Fragment } from "react";
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
const Faq1 = () => {
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
  //speclist1 array-n тоогоор зарлана уу 4 бол доорх шиг 4
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const list = [show, show2, show3, show4];
  const setlist = [setShow, setShow2, setShow3, setShow4];
  if (isEmpty(datasrc)) return null;
  // console.log("Faq1 config", config);
  // console.log("Faq1 datasrc", datasrc);
  // console.log("Faq1 otherattr", otherattr);
  // console.log("Faq1 positionConfig", positionConfig);
  const item = datasrc[0]; //eswel datasrc[0]
  return (
    <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <AtomTitle
        item={renderPositionType(item, "position1", positionConfig)}
        customClassName="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800"
      />
      <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
        <div className=" ">
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 "
          />
        </div>
        <div className=" border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full ">
          <input
            placeholder="Search"
            type="text"
            aria-label="Search"
            className="lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4 "
          />
          <svg
            className=" cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z"
              stroke="#4B5563"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14L10 10"
              stroke="#4B5563"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className=" md:w-5/12 lg:w-4/12 w-full ">
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="w-full"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
        </div>
        <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
          {renderPositionType(item, "position31", positionConfig).map(
            (item1: any, index1: number) => {
              return (
                <>
                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <AtomTitle
                        item={renderPositionType(
                          item1,
                          "position1",
                          positionConfig
                        )}
                        customClassName="font-semibold text-xl leading-5 text-gray-800"
                      />
                      <button
                        aria-label="too"
                        className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => setlist[index1](!list[index1])}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={list[index1] ? "hidden" : "block"}
                            d="M10 4.1665V15.8332"
                            stroke="#1F2937"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="#1F2937"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <br />
                    <AtomText
                      item={renderPositionType(
                        item1,
                        "position3",
                        positionConfig
                      )}
                      customClassName={
                        list[index1]
                          ? "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12"
                          : "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 hidden"
                      }
                    />
                  </div>
                  <hr className=" my-7 bg-gray-200" />
                </>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq1;
