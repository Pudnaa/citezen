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
const Partners2 = () => {
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
      // console.log("Partners2 config", config);
      // console.log("Partners2 datasrc", datasrc);
      // console.log("Partners2 otherattr", otherattr);
      // console.log("Partners2 positionConfig", positionConfig);
    return (
        <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 px-4 py-9">
            <h1 aria-level={1} className="text-gray-800 lg:text-4xl text-3xl
             lg:leading-9 leading-7 font-semibold">
                Our Partners
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 md:gap-12 gap-10 lg:mt-14 mt-12">
                <div className="flex lg:flex-row flex-col xl:space-x-6 lg:space-x-3 lg:space-y-0 space-y-4">
                  
                    <p id="Review" className=" text-gray-600 text-base leading-7 font-normal xl:w-10/12 lg:w-9/12 md:w-10/12">
                      gggg
                    </p>
                </div>

                <div className="flex lg:flex-row flex-col xl:space-x-6 lg:space-x-3 lg:space-y-0 space-y-4">
                     icon 0
                    <p className=" text-gray-600 text-base leading-7 font-normal lg:w-8/12 md:w-10/12 lg:pr-0 md:pr-4">main</p>
                </div>

                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4">
                     icon
                    <p className=" text-gray-600 text-base leading-7 font-normal lg:w-9/12 md:w-10/12">ddddd</p>
                </div>
            </div>
        </div>
    );
};

export default Partners2;
