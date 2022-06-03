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

export default function About() {
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

  // console.log("About config", config);
  // console.log("About readyDatasrc", readyDatasrc);
  // console.log("About widgetnemgooReady", widgetnemgooReady);
  // console.log("About positionConfig", positionConfig);
  return (
    <>
      <div className="xl:container xl:mx-auto">
        <div className=" flex flex-col md:flex-row items-strech justify-center">
          <div className="md:w-3/5 relative">
            <img
              src="https://i.ibb.co/2Y2W5h2/florian-klauer-mk7-D-4-UCfmg-unsplash-1.png"
              alt="A typewriter"
              role="img"
              className="absolute inset-0 object-cover object-center w-full h-full hidden lg:block rounded"
            />
            <img
              src="https://i.ibb.co/PZRDh0s/florian-klauer-mk7-D-4-UCfmg-unsplash-1-1-1.png"
              alt="A typewriter"
              role="img"
              className="absolute inset-0 object-cover object-center w-full h-full lg:hidden rounded"
            />
            <img
              src="https://i.ibb.co/CsYRYtk/florian-klauer-mk7-D-4-UCfmg-unsplash-1-1.png"
              alt="A typewriter"
              role="img"
              className="object-cover object-center w-full h-full md:hidden rounded"
            />
          </div>
          <div className="md:w-2/5 flex justify-center items-center -mt-14 md:-mt-0 md:-ml-12 lg:-ml-16 md:py-24 lg:py-36 relative z-10 mx-4 md:mx-0">
            <div className="bg-gray-800 p-8 lg:p-10">
              <p
                role="heading"
                className="text-base leading-none lg:text-xl lg:leading-tight text-white"
              >
                About us
              </p>
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold md:leading-10 text-white mt-6 md:mt-4 lg:mt-8">
                Here is all you need to know about us
              </p>
              <p className="text-base leading-normal text-white mt-4 lg:mt-6">
                Whether article spirits new her covered hastily sitting her.
                Money witty books nor son add. Chicken age had evening believe
                but proceed pretend mrs.
                <br className="lg:hidden" />
                <br className="lg:hidden" />
                At missed advice my it no sister. Miss told ham dull knew see
                she spot near can. Spirit her entire her called.No opinions
                answered oh felicity is resolved hastened. Produced it friendly
                my if opinions humoured. Enjoy is wrong folly no taken.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
