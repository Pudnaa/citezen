import { useContext, useState } from "react";
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
const AboutUs6 = () => {
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

  // console.log("AboutUs6 config", config);
  // console.log("AboutUs6 readyDatasrc", readyDatasrc);
  // console.log("AboutUs6 widgetnemgooReady", widgetnemgooReady);
  // console.log("AboutUs6 positionConfig", positionConfig);
  return (
    <div className="px-4 py-9 md:py-12 md:px-6 lg:py-16 lg:px-20">
      <div className="grid lg:grid-flow-row lg:grid-cols-2 lg:gap-6 ">
        <h1 className="text-center md:text-left lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800 pb-4">
          About Us
        </h1>
        <p className=" text-center md:text-left text-base leading-normal text-gray-600">
          Generating random paragraphs can be an excellent way for writers to
          get their creative flow going at the beginning of the day. The writer
          has no idea what topic the random paragraph will be about when it
          appears.{" "}
        </p>
      </div>
      <div className="md:px-24 lg:px-0 place-items-center pt-8 pb-8 md:pb-10 lg:pb-14 grid lg:items-end md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-6">
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/8xPszDj/Rectangle-105.png"
          alt="a guy in glasses"
        />
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/LS0jnRY/Rectangle-110.png"
          alt="a guy sitting on a chair"
        />
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/N2cFW2t/Rectangle-109.png"
          alt="a guy looking outside a window"
        />
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/zPqXjgM/Rectangle-111.png"
          alt="a guy looking side ways"
        />

        <img
          className="lg:hidden"
          src="https://i.ibb.co/r5m9cmb/Rectangle-105-1.png"
          alt="a guy in glasses"
        />
        <img
          className="lg:hidden"
          src="https://i.ibb.co/xXPjCnL/Rectangle-110-1.png"
          alt="a guy sitting on a chair "
        />
        <img
          className="lg:hidden"
          src="https://i.ibb.co/Z1b4Ssg/Rectangle-109-1.png"
          alt="a guy looking outside a window "
        />
        <img
          className="lg:hidden"
          src="https://i.ibb.co/zn0JYBv/Rectangle-111-1.png"
          alt="a guy looking sideways "
        />
      </div>
      <div className="grid lg:grid-flow-row lg:grid-cols-2 gap-6 md:gap-8 lg:gap-6">
        <div>
          <h1 className="text-center md:text-left lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800 lg:pb-6 pb-4">
            Our Mission
          </h1>
          <p className=" text-center md:text-left text-base leading-normal text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis elit
            adipiscing mattis tincidunt bibendum gravida eu non libero. Pretium
            nunc, justo, malesuada ac. Feugiat turpis lobortis interdum non vel.
            Eu sollicitudin iaculis tincidunt sed imperdiet volutpat.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="hidden lg:block xl:hidden"
            src="https://i.ibb.co/9220t1S/Rectangle-115.png"
            alt="a guy"
          />
          <img
            className="hidden sm:block lg:hidden xl:block "
            src="https://i.ibb.co/FxT529H/Rectangle-115-1.png"
            alt="a guy"
          />
          <img
            className="sm:hidden"
            src="https://i.ibb.co/xXPjCnL/Rectangle-110-1.png"
            alt="a guy sitting on a chair"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs6;
