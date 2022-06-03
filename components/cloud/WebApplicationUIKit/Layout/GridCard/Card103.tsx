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
const Card103 = () => {
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

  // console.log("Card103 config", config);
  // console.log("Card103 readyDatasrc", readyDatasrc);
  // console.log("Card103 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card103 positionConfig", positionConfig);
  return (
    <>
      <div className="max-w-sm w-full p-6 relative rounded shadow bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/3k6DYks/image.png"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="sm:text-lg text-xs font-semibold leading-4 text-indigo-700">
              Martin Luther
            </p>
            <p className="text-sm leading-4 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolorr
            </p>
          </div>
        </div>
        <p className="sm:text-lg text-base font-bold text-gray-800 dark:text-gray-100 mt-6">
          Do we know what Lorem ipsum dolor really means?
        </p>
        <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 mt-3">
          Cras tempor orci et ullamcorper pellentesque. Ut sollicitudin ultrices
          lectus. Sed bibendum felis sed metus congue, vitae congue eros
          rhoncus. Proin mattis nec odio et pharetra. Mauris ut odio finibus,
          mollis elit ac, fermentum lacus. Quisque eleifend ac nunc id
          tristique.
        </p>
        <img
          src="https://i.ibb.co/YQcgRBk/image4.png"
          alt="rally"
          className="my-4"
        />
        <p className="text-xs font-semibold leading-loose text-gray-500 dark:text-gray-400">
          2 hours ago
        </p>
      </div>
    </>
  );
};
export default Card103;
