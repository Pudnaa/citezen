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

export default function ProductCategory2() {
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
      // console.log("ProductCategory2 config", config);
      // console.log("ProductCategory2 datasrc", datasrc);
      // console.log("ProductCategory2 otherattr", otherattr);
      // console.log("ProductCategory2 positionConfig", positionConfig);
    return (
        <div className="mx-auto container px-4 md:px-6 py-8 flex flex-col items-center justify-center">
            <p className="text-4xl font-semibold leading-9 text-gray-800 text-center pt-16">Filter by designers</p>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 lg:gap-x-8 mt-16 pb-24 2xl:w-5/6 w-11/12">
                <div className="hover:bg-white cursor-pointer hover:shadow w-full flex items-center border border-gray-600 md:mt-6 lg:mt-0 sm:mt-6 mt-6 mr-0 border-opacity-20">
                    <img src=" https://cdn.tuk.dev/assets/components/misc/feature-img5.png" alt="profile" className="w-20 h-20" />
                    <div className="pl-6">
                        <p className="text-base font-semibold leading-4 text-gray-800">Lane Ford</p>
                        <p className="text-sm leading-4 mt-2 text-gray-600">Textile</p>
                    </div>
                </div>
                <div className="hover:bg-white cursor-pointer hover:shadow w-full border flex items-center lg:mt-0 md:mt-6 sm:mt-6 mt-6 border-gray-600 mr-0 border-opacity-20">
                    <img src="  https://cdn.tuk.dev/assets/components/misc/feature-img3.png" alt="profile" className="w-20 h-20" />
                    <div className="pl-6">
                        <p className="text-base font-semibold leading-4 text-gray-800">Torrance Smith</p>
                        <p className="text-sm leading-4 mt-2 text-gray-600">Patterns</p>
                    </div>
                </div>
                <div className="hover:bg-white cursor-pointer hover:shadow w-full border flex items-center xl:mr-0 mr-0 lg:mt-6 xl:mt-0 mt-6 border-gray-600 border-opacity-20">
                    <img src=" https://cdn.tuk.dev/assets/components/misc/feature-img1.png" alt="profile" className="w-20 h-20" />
                    <div className="pl-6">
                        <p className="text-base font-semibold leading-4 text-gray-800">Abigayle</p>
                        <p className="text-sm leading-4 mt-2 text-gray-600">Leather</p>
                    </div>
                </div>
                <div className="hover:bg-white cursor-pointer hover:shadow w-full border flex items-center border-gray-600 mr-0 border-opacity-20 mt-6">
                    <img src=" https://cdn.tuk.dev/assets/components/misc/feature-img6.png" alt="profile" className="w-20 h-20" />
                    <div className="pl-6">
                        <p className="text-base font-semibold leading-4 text-gray-800">Rachel James</p>
                        <p className="text-sm leading-4 mt-2 text-gray-600">Fashion</p>
                    </div>
                </div>
                <div className="hover:bg-white cursor-pointer hover:shadow w-full border flex items-center border-gray-600 mr-0 border-opacity-20 mt-6">
                    <img src="https://cdn.tuk.dev/assets/components/misc/feature-img4.png" alt="profile" className="w-20 h-20" />
                    <div className="pl-6">
                        <p className="text-base font-semibold leading-4 text-gray-800">Casimer Webber</p>
                        <p className="text-sm leading-4 mt-2 text-gray-600">Garments</p>
                    </div>
                </div>
                <div className="hover:bg-white cursor-pointer hover:shadow w-full border flex items-center border-gray-600 xl:mr-0 mr-0 border-opacity-20 mt-6">
                    <img src="  https://cdn.tuk.dev/assets/components/misc/feature-img2.png" alt="profile" className="w-20 h-20" />
                    <div className="pl-6">
                        <p className="text-base font-semibold leading-4 text-gray-800">Levi Jones</p>
                        <p className="text-sm leading-4 mt-2 text-gray-600">Accessories</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
