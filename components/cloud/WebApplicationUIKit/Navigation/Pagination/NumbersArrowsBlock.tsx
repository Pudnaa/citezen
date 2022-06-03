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
} from "@components/common/Atom";
const NumbersArrowsBlock = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("NumbersArrowsBlock config", config);
  // console.log("NumbersArrowsBlock readyDatasrc", readyDatasrc);
  // console.log("NumbersArrowsBlock widgetnemgooReady", widgetnemgooReady);
  // console.log("NumbersArrowsBlock positionConfig", positionConfig);
  const number = 10;
  const items = [];
  for (let index = 1; index <= number; index++) {
    items.push(1);
  }
  const pageNum = 6;
  return (
    <div>
      <div className="max-w-8xl mx-auto container py-10 ml-4">
        <ul
          className={`flex ${
            widgetnemgooReady.type === "cars" ? "" : "justify-center"
          } items-center`}
        >
          <li>
            <span className="p-1 flex rounded cursor-pointer transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-moto focus:outline-none mr-1 sm:mr-3">
              <i className="fas fa-chevron-left"></i>
            </span>
          </li>
          {}
          {items.map((item: any, index: number) => {
            return (
              <li key={item?.id || index} className="mx-1">
                <span
                  className={`cursor-pointer w-7 h-7 font-bold text-sm items-center flex justify-center rounded-3xl border
                    ${
                      pageNum === index + 1
                        ? "bg-moto border-moto text-white"
                        : "border-gray-500 text-gray-500"
                    }
                  hover:bg-moto
                  hover:border-moto hover:text-white`}
                >
                  {index + 1}
                </span>
              </li>
            );
          })}
          <li>
            <span className="flex rounded cursor-pointer transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-moto p-1 focus:outline-none ml-1 sm:ml-3">
              <i className="fas fa-chevron-right"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NumbersArrowsBlock;
