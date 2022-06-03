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
function LeftAlignedImageWithSingleCta() {
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

  // console.log("LeftAlignedImageWithSingleCta config", config);
  // console.log("LeftAlignedImageWithSingleCta readyDatasrc", readyDatasrc);
  // console.log("LeftAlignedImageWithSingleCta widgetnemgooReady", widgetnemgooReady);
  // console.log("LeftAlignedImageWithSingleCta positionConfig", positionConfig);
  return (
    <section className="max-w-8xl pt-16 mx-auto container bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 px-4 md:px-2 lg:px-12 py-10 flex items-center">
          <img
            className="rounded"
            src="https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3367&q=80"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12">
          <div className="pl-4">
            <h3 className="text-xl  xl:text-4xl font-bold lg:leading-tight text-gray-800">
              Beautiful Hand Crafted Library for busy devs
            </h3>
            <p className="text-base xl:text-xl text-gray-600 xl:leading-normal pt-4">
              Icons are designed to work best with CSS components, but they’ll
              work in any project. They’re SVGs, so they scale quickly and
              easily, can be implemented in several ways, and can be styled with
              CSS.
            </p>
            <button className="my-4 lg:my-8 lg:mb-0 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none rounded text-white py-2 px-4  xl:px-8 xl:py-4 text-base xl:text-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftAlignedImageWithSingleCta;
