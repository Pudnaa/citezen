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

const FeatureXIV = () => {
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
    const [image, setImage] = useState(true);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [btn, setBtn] = useState(false);
    const [btn2, setBtn2] = useState(true);
    const [btn3, setBtn3] = useState(true);

    if (isEmpty(datasrc)) return null;
    // console.log("FeatureXIV config", config);
    // console.log("FeatureXIV datasrc", datasrc);
    // console.log("FeatureXIV otherattr", otherattr);
    // console.log("FeatureXIV positionConfig", positionConfig);

    const toggleImage = (value:any) => {
        switch (value) {
            case "1":
                setImage(true);
                setImage2(false);
                setImage3(false);

                setBtn(false);
                setBtn2(true);
                setBtn3(true);
                break;
            case "2":
                setImage(false);
                setImage2(true);
                setImage3(false);

                setBtn(true);
                setBtn2(false);
                setBtn3(true);
                break;
            case "3":
                setImage(false);
                setImage2(false);
                setImage3(true);

                setBtn(true);
                setBtn2(true);
                setBtn3(false);
                break;
            default:
                break;
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-strech justify-center py-12 mx-6">
                <div className="relative lg:w-3/5  flex justify-center image-height">
                    <img id="slide3" src="https://i.ibb.co/nsCYdYs/jason-wang-Nx-Awry-Abt-Iw-unsplash-2-1.png" alt="A gray sofa with wooden legs" className={image3 ? "transform-visible block absolute w-full h-full" : "transform-hidden"} />
                    <img id="slide2" src="https://i.ibb.co/Dr50Fts/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1-1.png" alt="A green two seater sofa with wooden legs" className={image2 ? "transform-visible block absolute w-full h-full" : "transform-hidden"} />
                    <img id="slide1" src="https://i.ibb.co/RHPbCWB/pexels-martin-p-chy-1866149-2-1.png" alt="A mustard colored two seater sofa with wooden legs" className={image ? "transform-visible block absolute w-full h-full" : "transform-hidden"} />
                </div>
                <div className="relative lg:w-2/5 flex flex-col-reverse lg:flex-col justify-center lg:ml-8">
                    <div className="mt-10 lg:mt-0">
                        <p className="text-2xl">
                            From <span className="text-yellow-600 font-bold">$90.99</span>
                        </p>
                        <p className="text-base leading-normal text-gray-600 mt-6 lg:w-10/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div>
                            <button className="bg-gray-800 py-4 px-8 text-base font-medium text-center text-white mt-10 lg:mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-600 w-full md:w-auto">Shop Now</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-6 lg:mt-12">
                        <button onClick={() => toggleImage("1")} className={"flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-70 " + (btn ? "block" : "hidden")}>
                            <img src="https://i.ibb.co/cYLGj4g/pexels-martin-p-chy-1866149-2-1.png" alt="A mustard colored two seater sofa" />
                        </button>
                        <button onClick={() => toggleImage("2")} className={"flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-70 " + (btn2 ? "block" : "hidden")}>
                            <img src="https://i.ibb.co/B6QDKN6/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-2-1.png" alt="A green two seater with wooden legs" />
                        </button>
                        <button onClick={() => toggleImage("3")} className={"flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-70 " + (btn3 ? "block" : "hidden")}>
                            <img src="https://i.ibb.co/t23VskV/jason-wang-Nx-Awry-Abt-Iw-unsplash-2-1.png" alt="A gray sofa chair with wooden legs" />
                        </button>
                    </div>
                </div>
            </div>
            <style>
                {`
                .transform-hidden {
                transform: scale(0.1);
                opacity: 0;
            }

            .transform-visible {
                animation: transformScale 0.7s ease-in-out;
                transform: scale(1);
                opacity: 1;
            }
            .image-height {
                height: 581px;
            }
             @keyframes transformScale {
                from {
                    transform: scale(0.1);
                    opacity: 0;
                }

                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            
            `}
            </style>
        </div>
    );
};

export default FeatureXIV;
