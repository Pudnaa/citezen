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
function IndigoWithNameAndTitle() {
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

  // console.log("IndigoWithNameAndTitle config", config);
  // console.log("IndigoWithNameAndTitle readyDatasrc", readyDatasrc);
  // console.log("IndigoWithNameAndTitle widgetnemgooReady", widgetnemgooReady);
  // console.log("IndigoWithNameAndTitle positionConfig", positionConfig);
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-2/5 mx-auto sm:max-w-xs relative mb-16 xl:max-w-sm lg:w-1/2">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <img
                  src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                  className="h-full w-full overflow-hidden object-cover rounded-tl rounded-tr"
                />
              </div>
              <div className="py-4 bg-indigo-700 flex flex-col justify-center rounded-br rounded-bl">
                <p className="text-2xl text-center font-semibold text-white pb-1">
                  Andres <span className="font-light">Berlin</span>
                </p>
                <p className="text-center text-white font-bold">
                  Chief Executive Officer
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-2/5 mx-auto sm:max-w-xs relative mb-16 xl:max-w-sm lg:w-1/2">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <img
                  src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                  className="h-full w-full overflow-hidden object-cover rounded-tl rounded-tr"
                />
              </div>
              <div className="py-4 bg-indigo-700 flex flex-col justify-center rounded-br rounded-bl">
                <p className="text-2xl text-center font-semibold text-white pb-1">
                  Silene
                  <span className="font-light">Tokyo</span>
                </p>
                <p className="text-center text-white font-bold">
                  Product Design Head
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-2/5 mx-auto sm:max-w-xs relative mb-16 xl:max-w-sm lg:w-1/2">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <img
                  src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                  className="h-full w-full overflow-hidden object-cover rounded-tl rounded-tr"
                />
              </div>
              <div className="py-4 bg-indigo-700 flex flex-col justify-center rounded-br rounded-bl">
                <p className="text-2xl text-center font-semibold text-white pb-1">
                  Annibal
                  <span className="font-light">Rio</span>
                </p>
                <p className="text-center text-white font-bold">
                  Chief Operation Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndigoWithNameAndTitle;
