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

const FeatureXI = () => {
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
      // console.log("FeatureXI config", config);
      // console.log("FeatureXI datasrc", datasrc);
      // console.log("FeatureXI otherattr", otherattr);
      // console.log("FeatureXI positionConfig", positionConfig);
    return (
        <div className="container mx-auto py-9 md:py-12">
            <div className="mx-4">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">Disover the crib</h1>
                </div>
                <div className="flex flex-col space-y-8 md:space-y-10 lg:flex-row lg:space-y-0 lg:space-x-8 justify-center items-center mt-6 md:mt-8 lg:mt-10">
                    <div>
                        <img src="https://i.ibb.co/cC8rvTg/pexels-max-vakhtbovych-6434607-1-1.png" alt="A bedroom with hanging lamps" />
                        <h2 className="text-xl font-medium text-gray-800 mt-4 md:mt-6">Wooden Interior</h2>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/5kHqbfP/pexels-taryn-elliott-4099354-1-1.png" alt="A bathtub with candles and bottles" />
                        <h2 className="text-xl font-medium text-gray-800 mt-4 md:mt-6">Bathroom accessories</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureXI;
