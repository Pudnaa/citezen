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
const Banner4 = () => {
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
      // console.log("Banner4 config", config);
      // console.log("Banner4 datasrc", datasrc);
      // console.log("Banner4 otherattr", otherattr);
      // console.log("Banner4 positionConfig", positionConfig);
    return (
        <div className="container mx-auto py-9 md:py-12 lg:py-14 px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-strech bg-gradient-to-r from-gray-50 to-gray-200 py-8 lg:py-12 px-4 md:px-10 lg:px-16">
                <div className="flex items-center">
                    <div className="w-full">
                        <img src="https://i.ibb.co/WDXZ01P/image-1-1.png" alt="Apple. Logo" />
                        <h1 className="mt-7 md:mt-5 lg:mt-4 text-3xl lg:text-4xl font-semibold leading-9 text-gray-900">Introducing</h1>
                        <p className="md:mt-2 text-xl leading-5 text-gray-900">Exclusive goodies for your apple watch</p>
                        <button className="w-full sm:w-auto mt-10 bg-gray-800 py-3 px-5 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700 leading-4">Shop now</button>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 mx-auto md:mx-0">
                    <img src="https://i.ibb.co/GkNHgNC/11873-removebg-preview-2-1.png" alt="A smart watch" />
                </div>
            </div>
        </div>
    );
};

export default Banner4;
