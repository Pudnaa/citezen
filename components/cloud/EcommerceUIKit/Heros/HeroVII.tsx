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

const HeroVII = () => {
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
      
    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    if (isEmpty(datasrc)) return null;
      // console.log("HeroVII config", config);
      // console.log("HeroVII datasrc", datasrc);
      // console.log("HeroVII otherattr", otherattr);
      // console.log("HeroVII positionConfig", positionConfig);

    const toggleSlides = (value:any) => {
        switch (value) {
            case "1":
                setShow(true);
                setShow2(false);
                setShow3(false);
                break;

            case "2":
                setShow(false);
                setShow2(true);
                setShow3(false);
                break;
            case "3":
                setShow(false);
                setShow2(false);
                setShow3(true);
                break;

            default:
                break;
        }
    };

    return (
        <div className="dark:bg-gray-800 bg-white lg:px-20 md:px-6 px-4 md:py-12 py-8" style={{ overflowX: "hidden" }}>
            <div className="dark:bg-gray-800 bg-white 2xl:container 2xl:mx-auto">
                <div className="flex flex-col lg:flex-row items-strech justify-center">
                    <div className="lg:w-96 flex flex-col justify-center lg:py-64">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold dark:text-white text-gray-800">Amoire</h1>
                        <p className="text-base mt-4 lg:mt-5 leading-6 dark:text-gray-300 text-gray-600 md:w-9/12 lg:w-full">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                        <div className="relative hidden lg:block">
                            <button className="dark:hover:text-gray-300 flex items-center justify-between mt-8 text-lg font-medium leading-none dark:text-white text-gray-800 w-full p-6 bg-white dark:bg-gray-900 relative z-20 border border-gray-800 dark:border-white focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none hover:bg-gray-300">
                                Discover More
                                <svg className="fill-stroke" width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66675 7H20.3334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 12.3333L20.3333 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 1.66699L20.3333 7.00033" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="text-lg font-medium leading-none text-white w-full py-8 mt-11 bg-transparent border absolute ml-2 top-0 z-0 border-gray-800 dark:border-white focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"></div>
                        </div>
                    </div>
                    <div className="hidden w-1/2 ml-28 lg:flex flex-col justify-center relative">
                        <img id="slide1" src="https://i.ibb.co/hf3xQxS/aaron-huber-G7s-E2-S4-Lab4-unsplash-1-2.png" alt="A sofa with a side drawer" className={"absolute w-full h-full object-center object-fill hidden lg:block " + (show ? "transform-visible" : "transform-hidden")} />
                        <img id="slide2" src="https://i.ibb.co/hf3xQxS/aaron-huber-G7s-E2-S4-Lab4-unsplash-1-2.png" alt="A sofa with a side drawer" className={"absolute w-full h-full object-center object-fill hidden lg:block " + (show2 ? "transform-visible" : "transform-hidden")} />
                        <img id="slide3" src="https://i.ibb.co/hf3xQxS/aaron-huber-G7s-E2-S4-Lab4-unsplash-1-2.png" alt="A sofa with a side drawer" className={"absolute w-full h-full object-center object-fill hidden lg:block " + (show3 ? "transform-visible" : "transform-hidden")} />
                    </div>

                    <div className="lg:hidden mt-6 md:mt-8 flex relative">
                        <div className="h-96">
                            <img id="mdslide1" src="https://i.ibb.co/tHqLL5Z/aaron-huber-G7s-E2-S4-Lab4-unsplash-1-3.png" alt="A sofa with a side drawer" className={"absolute lg:hidden w-full h-full object-center object-fill " + (show ? "transform-visible" : "transform-hidden")} />
                            <img id="mdslide2" src="https://i.ibb.co/tHqLL5Z/aaron-huber-G7s-E2-S4-Lab4-unsplash-1-3.png" alt="A sofa with a side drawer" className={"absolute lg:hidden w-full h-full object-center object-fill " + (show2 ? "transform-visible" : "transform-hidden")} />
                            <img id="mdslide3" src="https://i.ibb.co/tHqLL5Z/aaron-huber-G7s-E2-S4-Lab4-unsplash-1-3.png" alt="A sofa with a side drawer" className={"absolute lg:hidden w-full h-full object-center object-fill " + (show3 ? "transform-visible" : "transform-hidden")} />
                        </div>
                    </div>
                    <div className="lg:hidden flex space-x-7 md:space-x-12 mt-3 md:mt-7">
                        <button aria-label="page 1" onClick={(e) => toggleSlides("1")} className="text-gray-800 dark:text-white text-xl md:text-3xl flex flex-col lg:flex-row items-center focus:outline-none focus:ring-2 focus:ring-white hover:opacity-60">
                            01
                            <div className="w-10 lg:w-full">
                                <div id="mdp1" className={"lg:ml-1.5 " + (show ? "block" : "hidden")}>
                                    <svg className="fill-stroke" width="42" height="1" viewBox="0 0 42 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="-4.37114e-08" y1="0.5" x2="42" y2="0.499996" stroke="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                        <button aria-label="page 2" onClick={(e) => toggleSlides("2")} className="text-gray-800 dark:text-white text-xl md:text-3xl flex flex-col lg:flex-row items-center focus:outline-none focus:ring-2 focus:ring-white hover:opacity-60">
                            02
                            <div className="w-10 lg:w-full">
                                <div id="mdp2" className={"lg:ml-1.5 " + (show2 ? "block" : "hidden")}>
                                    <svg className="fill-stroke" width="42" height="1" viewBox="0 0 42 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="-4.37114e-08" y1="0.5" x2="42" y2="0.499996" stroke="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                        <button aria-label="page 3" onClick={(e) => toggleSlides("3")} className="text-gray-800 dark:text-white text-xl md:text-3xl flex flex-col lg:flex-row items-center focus:outline-none focus:ring-2 focus:ring-white hover:opacity-60">
                            03
                            <div className="w-10 lg:w-full">
                                <div id="mdp3" className={"lg:ml-1.5 " + (show3 ? "block" : "hidden")}>
                                    <svg className="fill-stroke" width="42" height="1" viewBox="0 0 42 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="-4.37114e-08" y1="0.5" x2="42" y2="0.499996" stroke="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="hidden lg:flex flex-col justify-end lg:ml-8 space-y-4">
                        <button aria-label="page 1" onClick={(e) => toggleSlides("1")} className="text-gray-800 dark:text-white text-xl md:text-3xl flex flex-col lg:flex-row items-center focus:outline-none focus:ring-2 focus:ring-white hover:opacity-60">
                            01
                            <div className="w-full">
                                <div id="lgp1" className={"lg:ml-1.5 " + (show ? "block" : "hidden")}>
                                    <svg className="fill-stroke" width="42" height="1" viewBox="0 0 42 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="-4.37114e-08" y1="0.5" x2="42" y2="0.499996" stroke="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                        <button aria-label="page 2" onClick={(e) => toggleSlides("2")} className="text-gray-800 dark:text-white text-xl md:text-3xl flex flex-col lg:flex-row items-center focus:outline-none focus:ring-2 focus:ring-white hover:opacity-60">
                            02
                            <div className="w-10 lg:w-full">
                                <div id="lgp2" className={"lg:ml-1.5 " + (show2 ? "block" : "hidden")}>
                                    <svg className="fill-stroke" width="42" height="1" viewBox="0 0 42 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="-4.37114e-08" y1="0.5" x2="42" y2="0.499996" stroke="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                        <button aria-label="page 3" onClick={(e) => toggleSlides("3")} className="text-gray-800 dark:text-white text-xl md:text-3xl flex flex-col lg:flex-row items-center focus:outline-none focus:ring-2 focus:ring-white hover:opacity-60">
                            03
                            <div className="w-10 lg:w-full">
                                <div id="lgp3" className={"lg:ml-1.5 " + (show3 ? "block" : "hidden")}>
                                    <svg className="fill-stroke" width="42" height="1" viewBox="0 0 42 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="-4.37114e-08" y1="0.5" x2="42" y2="0.499996" stroke="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="relative lg:hidden">
                        <button className="flex items-center justify-between mt-5 md:mt-9 text-base md:text-lg font-medium leading-none text-white w-full p-5 md:p-6 bg-gray-900 relative z-20 border border-white focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none hover:bg-gray-700">
                            Discover More
                            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.66675 7H20.3334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 12.3333L20.3333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 1.66699L20.3333 7.00033" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="text-lg font-medium leading-none text-white w-full py-7 md:py-8 mt-7 md:mt-14 bg-transparent border absolute ml-1.5 md:ml-2 top-0 z-0 border-white focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"></div>
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

			@keyframes transformScale {
				from {
					transform: scale(0.1);
					opacity: 0;
				}

				to {
					transform: scale(1);
					opacity: 1;
				}
			}`}
            </style>
        </div>
    );
};

export default HeroVII;
