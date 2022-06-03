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
const SimpleListWithCta = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
    Title,
  } = useContext(WidgetWrapperContext);

  // console.log("SimpleListWithCta config", config);
  // console.log("SimpleListWithCta readyDatasrc", readyDatasrc);
  // console.log("SimpleListWithCta widgetnemgooReady", widgetnemgooReady);
  // console.log("SimpleListWithCta positionConfig", positionConfig);
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="max-w-4xl w-full">
          <div className="p-6 border-b border-gray-300 dark:border-gray-700">
            <div className="lg:flex items-center">
              <div className="lg:w-1/4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  12-14 July
                </p>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-lg text-gray-800 dark:text-gray-100">
                  Barcelona Design Conference
                </h4>
              </div>
              <div className="lg:w-1/4">
                <p className="lg:text-right text-sm text-gray-600 dark:text-gray-400">
                  Tickets from $50
                </p>
              </div>
            </div>
            <div className="lg:flex items-center mt-4">
              <div className="lg:w-1/4">
                <p className="text-sm text-yellow-500">678/700 tickets sold</p>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Virtual event starting at 9:00pm
                </p>
              </div>
              <div className="lg:w-1/4 lg:flex justify-end">
                <a className="lg:text-right text-red-500 underline cursor-pointer">
                  View Event
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 border-b border-gray-300 dark:border-gray-700">
            <div className="lg:flex items-center">
              <div className="lg:w-1/4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  12-14 July
                </p>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-lg text-gray-800 dark:text-gray-100">
                  Barcelona Design Conference
                </h4>
              </div>
              <div className="lg:w-1/4">
                <p className="lg:text-right text-sm text-gray-600 dark:text-gray-400">
                  Tickets from $50
                </p>
              </div>
            </div>
            <div className="lg:flex items-center mt-4">
              <div className="lg:w-1/4">
                <p className="text-sm text-yellow-500">678/700 tickets sold</p>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Virtual event starting at 9:00pm
                </p>
              </div>
              <div className="lg:w-1/4 lg:flex justify-end">
                <a className="lg:text-right text-red-500 underline cursor-pointer">
                  View Event
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 border-b border-gray-300 dark:border-gray-700">
            <div className="lg:flex items-center">
              <div className="lg:w-1/4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  12-14 July
                </p>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-lg text-gray-800 dark:text-gray-100">
                  Barcelona Design Conference
                </h4>
              </div>
              <div className="lg:w-1/4">
                <p className="lg:text-right text-sm text-gray-600 dark:text-gray-400">
                  Tickets from $50
                </p>
              </div>
            </div>
            <div className="lg:flex items-center mt-4">
              <div className="lg:w-1/4">
                <p className="text-sm text-yellow-500">678/700 tickets sold</p>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Virtual event starting at 9:00pm
                </p>
              </div>
              <div className="lg:w-1/4 lg:flex justify-end">
                <a className="lg:text-right text-red-500 underline cursor-pointer">
                  View Event
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 border-b border-gray-300 dark:border-gray-700">
            <div className="lg:flex items-center">
              <div className="lg:w-1/4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  12-14 July
                </p>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-lg text-gray-800 dark:text-gray-100">
                  Barcelona Design Conference
                </h4>
              </div>
              <div className="lg:w-1/4">
                <p className="lg:text-right text-sm text-gray-600 dark:text-gray-400">
                  Tickets from $50
                </p>
              </div>
            </div>
            <div className="lg:flex items-center mt-4">
              <div className="lg:w-1/4">
                <p className="text-sm text-yellow-500">678/700 tickets sold</p>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Virtual event starting at 9:00pm
                </p>
              </div>
              <div className="lg:w-1/4 lg:flex justify-end">
                <a className="lg:text-right text-red-500 underline cursor-pointer">
                  View Event
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimpleListWithCta;
