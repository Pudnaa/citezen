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
export default function Social3() {
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
      // console.log("Social3 config", config);
      // console.log("Social3 datasrc", datasrc);
      // console.log("Social3 otherattr", otherattr);
      // console.log("Social3 positionConfig", positionConfig);
    return (
        <div className=" 2xl:container 2xl:mx-auto md:py-12 py-9">
            <div className="relative grid md:grid-cols-4 grid-cols-2 bg-gray-50 lg:py-12 lg:px-28 py-8 md:px-16 px-4 gap-0">
                <div>
                    <img src="https://i.ibb.co/QcBhCYw/nathan-fertig-FBXu-Xp57e-M0-unsplash-1.png" alt="Sofa and a Table" className="w-full" />
                </div>
                <div>
                    <img src="https://i.ibb.co/t8RhySg/jens-kreuter-ng-Mts-E5r9e-I-unsplash-1.png" alt="A LED on the stand" className="w-full" />
                </div>
                <div>
                    <img src="https://i.ibb.co/SBDD1wh/pexels-lina-kivaka-1813502-1.png" alt="A table and a chair" className="w-full" />
                </div>
                <div>
                    <img src="https://i.ibb.co/VmqjpZZ/pexels-atbo-245208-1.png" alt="Small cupboard" className="w-full" />
                </div>
                {/* Promotion Box */}
                <div className=" w-full h-full absolute top-0 left-0 flex justify-center items-center">
                    <div className=" bg-gray-800 bg-opacity-80 flex justify-center items-center flex-col lg:px-16 lg:py-8 py-4 px-8">
                        <p className=" lg:text-2xl font-semibold lg:leading-6 text-xl leading-5 text-white cursor-pointer">@thecribbb</p>
                        <p className=" font-noraml lg:text-xl lg:leading-5 text-base leading-4 text-white lg:mt-3 mt-3.5">Follow us on instagram</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
