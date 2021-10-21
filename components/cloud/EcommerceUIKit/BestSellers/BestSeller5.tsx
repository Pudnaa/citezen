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
const BestSeller5 = () => {
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
      // console.log("BestSeller5 config", config);
      // console.log("BestSeller5 datasrc", datasrc);
      // console.log("BestSeller5 otherattr", otherattr);
      // console.log("BestSeller5 positionConfig", positionConfig);
    return (
        <div className="container mx-auto">
            <div className="mx-4 md:mx-6 py-9 md:py-12 flex flex-col lg:flex-row justify-center items-strech lg:space-x-8">
                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <div className="py-2 md:py-24">
                        <h1 className="w-60 lg:w-72 text-3xl lg:text-4xl font-semibold leading-10 text-gray-800">Best Selling Products</h1>
                    </div>
                    <div className="bg-white shadow flex justify-center">
                        <img src="https://i.ibb.co/bHrG941/vincent-botta-J41ff-LK-OSM-unsplash-removebg-preview-1-1.png" alt="A white chair" />
                    </div>
                    <div className="bg-white shadow flex justify-center">
                        <img src="https://i.ibb.co/xCnkmFp/pexels-mikhail-nilov-6707629-1-removebg-preview-1-1.png" alt="A black leather chair" />
                    </div>
                    <div className="bg-white shadow flex justify-center">
                        <img src="https://i.ibb.co/SwPKXv1/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="A gray chair with wooden legs" />
                    </div>
                </div>
                <div className="w-full h-64 md:h-auto lg:w-1/2 bg-white shadow flex justify-center mt-6 lg:mt-0">
                    <img className="object-cover object-center h-full" src="https://i.ibb.co/tCLQ5c6/jean-philippe-delberghe-Ry9-WBo3qmoc-unsplash-removebg-preview-1-1.png" alt="A set of hanging lamps" />
                </div>
            </div>
        </div>
    );
};

export default BestSeller5;
