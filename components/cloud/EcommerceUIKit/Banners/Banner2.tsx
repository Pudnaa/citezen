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

const Banner2 = () => {
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
      // console.log("Banner2 config", config);
      // console.log("Banner2 datasrc", datasrc);
      // console.log("Banner2 otherattr", otherattr);
      // console.log("Banner2 positionConfig", positionConfig);
    return (
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div className="flex justify-center items-strech flex-col lg:flex-row bg-gray-50 px-3 space-y-4 lg:space-y-0 lg:space-x-4 lg:pr-16">
                <div className="lg:w-1/2 flex flex-col md:flex-row items-strech md:space-x-5 lg:space-x-8">
                    <div className="w-1/6">
                        <img src="https://i.ibb.co/FXNVbNs/Group-1713-1.png" alt="Sale" />
                    </div>
                    <div className="lg:w-10/12 flex flex-col justify-end lg:justify-center pt-4">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800">Home Furniture</h1>
                        <p className="text-xl leading-normal text-gray-600 mt-3.5 lg:mt-2 2xl:w-10/12">It was a question of which of the two she preferred. On the one hand, the choice seemed simple.</p>
                    </div>
                </div>
                <div className="lg:w-1/2 py-4 w-full">
                    <img src="https://i.ibb.co/WWkxxqm/Group-1714.png" alt="a white sofa" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Banner2;
