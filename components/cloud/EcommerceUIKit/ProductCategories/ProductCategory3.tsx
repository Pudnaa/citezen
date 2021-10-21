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
export default function ProductCategory3() {
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
      // console.log("ProductCategory3 config", config);
      // console.log("ProductCategory3 datasrc", datasrc);
      // console.log("ProductCategory3 otherattr", otherattr);
      // console.log("ProductCategory3 positionConfig", positionConfig);
    return (
        <div className="mx-auto container py-12">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-y-6">
                <div className="px-6 md:px-0 cursor-pointer group bg-white flex justify-center items-center relative border-gray-300 xl:border-r">
                    <img className="w-full h-full opacity-0 transition duration-500 group-hover:opacity-100" src="https://i.ibb.co/PNrqxT6/pexels-gabriela-guerino-1839904-1.png" alt="pexels-gabriela-guerino-1839904-1" />
                    <div className="absolute border-white border-b-2 group-hover:border-b-2">
                        <p className="transition duration-500 text-gray-800 text-2xl font-semibold leading-normal group-hover:text-white">Women</p>
                    </div>
                </div>
                <div className="px-6 md:px-0 cursor-pointer group bg-white flex justify-center items-center relative border-gray-300 xl:border-r">
                    <img className="w-full h-full opacity-0 transition duration-500 group-hover:opacity-100" src="https://i.ibb.co/B6VTjN6/majid-akbari-Egj4-Dg107kc-unsplash-1.png" alt="pexels-gabriela-guerino-1839904-1" />
                    <div className="absolute border-white border-b-2 group-hover:border-b-2">
                        <p className="transition duration-500 text-gray-800 text-2xl font-semibold leading-normal group-hover:text-white">Men</p>
                    </div>
                </div>
                <div className="px-6 md:px-0 cursor-pointer group bg-white flex justify-center items-center relative">
                    <img className="w-full h-full opacity-0 transition duration-500 group-hover:opacity-100" src="https://i.ibb.co/34rG2vY/pexels-victoria-borodinova-1620760-1.png" alt="pexels-gabriela-guerino-1839904-1" />
                    <div className="absolute border-white border-b-2 group-hover:border-b-2">
                        <p className="transition duration-500 text-gray-800 text-2xl font-semibold leading-normal group-hover:text-white">Kids</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
