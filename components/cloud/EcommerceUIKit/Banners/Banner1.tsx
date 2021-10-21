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
const Banner1 = () => {
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
      // console.log("Banner1 config", config);
      // console.log("Banner1 datasrc", datasrc);
      // console.log("Banner1 otherattr", otherattr);
      // console.log("Banner1 positionConfig", positionConfig);
    return (
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div className="bg-gray-800 py-8 md:py-20 px-5 md:px-24">
                <div className="w-full md:border-8 md:border-white md:pt-11 lg:pt-12 md:pl-7 lg:pl-12">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-white uppercase">Life is too short for boring furniture</h1>
                    <p className="mt-4 md:mt-2 text-2xl font-medium leading-normal text-white">Avail the discount offer now!!!</p>
                    <div className="flex justify-center md:justify-end mt-10 md:mt-9 md:-mr-11 lg:-mr-14 xl:-mr-20 2xl:-mr-24 md:-mb-12 lg:-mb-14 xl:-mb-16 2xl:-mb-24">
                        <img className="w-full md:w-10/12 lg:w-8/12 2xl:w-9/12" src="https://i.ibb.co/9b2znHf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png" alt="A white Sofa" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;
