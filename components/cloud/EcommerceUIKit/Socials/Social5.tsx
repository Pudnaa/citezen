import { useContext,useState } from "react";
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
export default function Social5() {
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
    const [show, setShow] = useState(false);
    
    if (isEmpty(datasrc)) return null;
    // console.log("Social5 config", config);
    // console.log("Social5 datasrc", datasrc);
    // console.log("Social5 otherattr", otherattr);
    // console.log("Social5 positionConfig", positionConfig);

    return (
        <div>
            <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 sm:block flex justify-center items-center flex-col sm:w-full xs:w-96 w-auto mx-auto">
                <div className="sm:px-0 px-1">
                    <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ">Shop Instagram</h2>
                    <p className=" font-normal text-base md:leading-4 leading-6 text-gray-600 mt-4">
                        Follow us on instagram @<span className=" underline cursor-pointer">followusoninsta</span> and tagus to get featured on our timeline
                    </p>
                </div>
                <div className=" flex sm:flex-row flex-col lg:space-x-8 md:space-x-6 sm:space-x-4 space-0 md:mt-10 mt-6">
                    <div className=" sm:w-6/12 w-full md:mb-0 sm:mb-0 mb-4">
                        {/* Large/Desktop/Laptop Screen Image */}
                        <img className=" hidden lg:block  w-full h-full " src="https://i.ibb.co/tYq6nyj/adria-tormo-Vtppx-C-Gf-Zs-unsplash.png" alt="Ceiling Lamp" />
                        {/* Medium/Table Screen Image */}
                        <img className=" hidden md:block lg:hidden w-full h-full " src="https://i.ibb.co/Tqx60C9/adria-tormo-Vtppx-C-Gf-Zs-unsplash-1.png" alt="Ceiling Lamp" />
                        {/* Smaller/Phone Screen Image */}
                        <img className=" block md:hidden w-full h-full h-max" src="https://i.ibb.co/HNsyZ70/adria-tormo-Vtppx-C-Gf-Zs-unsplash-1.png" alt="Ceiling Lamp" />
                    </div>
                    <div className="sm:w-6/12 w-full">
                        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4">
                            <div>
                                {/* Large/Desktop/Laptop Screen Image */}
                                <img className=" hidden lg:block w-full h-full" src="https://i.ibb.co/BCZV0zQ/natalia-y-R-q-Wn-GTa-Ay-U-unsplash.png" alt="3 ceiling Lamps" />
                                {/* Medium/Table Screen Image */}
                                <img className=" hidden md:block lg:hidden w-full h-full" src="https://i.ibb.co/F7vw138/natalia-y-R-q-Wn-GTa-Ay-U-unsplash-1.png" alt="3 ceiling Lamps" />
                                {/* Smaller/Phone Screen Image */}
                                <img className=" block md:hidden w-full h-full" src="https://i.ibb.co/64Dcxvd/adria-tormo-Vtppx-C-Gf-Zs-unsplash-1.png" alt="3 ceiling Lamps" />
                            </div>
                            <div>
                                {/* Large/Desktop/Laptop Screen Image */}
                                <img className=" hidden lg:block w-full h-full" src="https://i.ibb.co/2dk65Gb/benjamin-voros-X63-FTIZFb-Z o-unsplash-1.png" alt="A small clock on the table" />
                                {/* Medium/Table Screen Image */}
                                <img className=" hidden md:block lg:hidden w-full h-full" src="https://i.ibb.co/xjNxCqD/benjamin-voros-X63-FTIZFb-Zo-unsplash-1-1.png" alt="A small clock on the table" />
                                {/* Smaller/Phone Screen Image */}
                                <img className=" block md:hidden w-full h-full" src="https://i.ibb.co/z6w0Yjw/adria-tormo-Vtppx-C-Gf-Zs-unsplash-1.png" alt="A small clock on the table" />
                            </div>
                            <div>
                                {/* Large/Desktop/Laptop Screen Image */}
                                <img className=" hidden lg:block w-full h-full" src="https://i.ibb.co/85wh2L6/farhad-fallahzad-Vt-QMBG-Ljc0-unsplash.png" alt="2 chairs and a table" />
                                {/* Medium/Table Screen Image */}
                                <img className=" hidden md:block lg:hidden w-full h-full" src="https://i.ibb.co/Xt4s13v/natalia-y-R-q-Wn-GTa-Ay-U-unsplash-2.png" alt="2 chairs and a table" />
                                {/* Smaller/Phone Screen Image */}
                                <img className=" block md:hidden w-full h-full" src="https://i.ibb.co/6HcjFdf/adria-tormo-Vtppx-C-Gf-Zs-unsplash-1.png" alt="2 chairs and a table" />
                            </div>
                            <div>
                                {/* Large/Desktop/Laptop Screen Image */}
                                <img className=" hidden lg:block w-full h-full" src="https://i.ibb.co/Wnjnjmd/jean-philippe-delberghe-lr-Ra-EBn-R79-Y-unsplash.png" alt="A night lamp on the table" />
                                {/* Medium/Table Screen Image */}
                                <img className=" hidden md:block lg:hidden w-full h-full" src="https://i.ibb.co/TrZhJTg/benjamin-voros-X63-FTIZFb-Zo-unsplash-1-2.png" alt="A night lamp on the table" />
                                {/* Smaller/Phone Screen Image */}
                                <img className=" block md:hidden w-full h-full" src="https://i.ibb.co/jHWxrrP/adria-tormo-Vtppx-C-Gf-Zs-unsplash-1.png" alt="A night lamp on the table" />
                            </div>
                            <div>
                                {/* Large/Desktop/Laptop Screen Image */}
                                <img className=" hidden lg:block w-full h-full" src="https://i.ibb.co/XbBGvGF/claudio-schwarz-hd-Ixmq-Yyinw-unsplash.png" alt="A wall lamp and the chair" />
                                {/* Medium/Table Screen Image */}
                                <img className=" hidden md:block lg:hidden w-full h-full" src="https://i.ibb.co/xLxHBvS/natalia-y-R-q-Wn-GTa-Ay-U-unsplash-3.png" alt="A wall lamp and the chair" />
                                {/* Smaller/Phone Screen Image */}
                                <img className=" block md:hidden w-full h-full" src="https://i.ibb.co/zNnvfyQ/adria-tormo-Vtppx-C-Gf-Zs-unsplash-1.png" alt="A wall lamp and the chair" />
                            </div>
                            <div>
                                {/* Large/Desktop/Laptop Screen Image */}
                                <img className=" hidden lg:block w-full h-full" src="https://i.ibb.co/M8MdTqw/rumman-amin-zu-E9jsa-VHu-A-unsplash.png" alt="A small flask contains plant" />
                                {/* Medium/Table Screen Image */}
                                <img className=" hidden md:block lg:hidden w-full h-full" src="https://i.ibb.co/JkxC0jB/benjamin-voros-X63-FTIZFb-Zo-unsplash-1-3.png" alt="A small flask contains plant" />
                                {/* Smaller/Phone Screen Image */}
                                <img className=" block md:hidden w-full h-full" src="https://i.ibb.co/JkS1CXV/adria-tormo-Vtppx-C-Gf-Zs-unsplash-1.png" alt="A small flask contains plant" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" sm:px-0 px-1  flex justify-center items-center">
                    <button className=" hover:bg-gray-700 duration-100 cursor-pointer focus:ring focus:ring-offset-2 focus:ring-gray-800 text-white bg-gray-800 py-5 px-16 sm:py-3 sm:px-10 md:py-5 md:px-16 sm:w-auto w-full lg:mt-16 mt-10">Load More</button>
                </div>
            </div>
        </div>
    );
}
