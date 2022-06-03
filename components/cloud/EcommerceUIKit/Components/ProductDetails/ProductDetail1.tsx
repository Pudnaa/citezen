import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import { decode } from "html-entities";
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
} from "@components/common/Atom";

const Product1 = () => {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  //console.log("Card31 config", config);
  //console.log("Product1 readyDatasrc", readyDatasrc);
  //console.log("Card31 widgetnemgooReady", widgetnemgooReady);

  //console.log("Product1 positionConfig", positionConfig);

  let readyData = { ...readyDatasrc[0] };
  readyData.speclist1 = jsonParse(decode(readyDatasrc[0].speclist1));
  readyData.speclist2 = jsonParse(decode(readyDatasrc[0].speclist2));
  return (
    <>
      <div className="mx-auto container flex items-center justify-center 2xl:px-32 md:px-8 px-4">
        <div className="w-full md:flex justify-center py-6">
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <>
                <div className="xl:w-auto w-1/2 md:block hidden">
                  <div className="flex xl:flex-row flex-col w-full md:h-full xl:space-x-5">
                    <img
                      src={renderPositionType(
                        item,
                        "position2",
                        positionConfig
                      )}
                      className="xl:w-96 w-full lg:h-full h-72 object-cover object-center rounded"
                      alt="prodcut-inner"
                    />
                  </div>
                </div>
                <div className="xl:w-96 md:w-1/2 xl:ml-8 md:ml-6 md:pt-0 pt-5 pb-4 ">
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    link=""
                    customStyle={{}}
                    customClassName="lg:text-xl text-xl font-semibold leading-normal text-gray-800"
                    truncateRow={0}
                  />
                  <AtomText
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="md:text-sm text-base font-medium leading-none pt-3 text-gray-500 pb-6 "
                  />
                  <AtomList
                    list={readyData.speclist1}
                    customClassName="text-xs leading-5 pt-6 text-gray-600 "
                    valueClassName="font-semibold text-gray-700 "
                  />
                  <div className="mt-8 w-full">
                    <div className="flex items-center justifiy-between mt-5 gap-6 ">
                      <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded-lg text-white px-3 md:px-2 py-2 text-xs">
                        ХҮСЭЛТ ИЛГЭЭХ
                      </button>
                      <p className="lg:text-xs text-xl font-semibold leading-normal text-gray-800  flex gap-1 ">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        ХҮСЛИЙН ЖАГСААЛТАД НЭМЭХ
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product1;
