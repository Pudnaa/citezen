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

const Highlight8 = () => {
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
  // console.log("Highlight8 config", config);
  // console.log("Highlight8 datasrc", datasrc);
  // console.log("Highlight8 otherattr", otherattr);
  // console.log("Highlight8 positionConfig", positionConfig);
  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 py-9">
      <div className="overflow-hidden bg-gray-800">
        {/* <marquee behavior="scroll" direction="left" scrollamount="20">
          <div className="lg:py-8 lg:px-20 md:p-6 py-6 px-4 flex lg:space-x-20 space-x-12">
            <p className="flex-none text-base leading-4 font-normal text-white">
              Worldwide Delivery
            </p>
            <p className="flex-none text-base leading-4 font-normal text-white">
              Cruelty Free
            </p>
            <p className="flex-none text-base leading-4 font-normal text-white">
              Drug Free
            </p>
            <p className="flex-none text-base leading-4 font-normal text-white">
              Recycleable
            </p>
            <p className="flex-none text-base leading-4 font-normal text-white">
              money-Back Guarantee
            </p>
            <p className="flex-none text-base leading-4 font-normal text-white">
              No side Effects
            </p>
          </div>
        </marquee> */}
      </div>
    </div>
  );
};

export default Highlight8;
