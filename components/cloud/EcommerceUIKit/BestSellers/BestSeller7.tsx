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
const BestSeller7 = () => {
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
      // console.log("BestSeller7 config", config);
      // console.log("BestSeller7 datasrc", datasrc);
      // console.log("BestSeller7 otherattr", otherattr);
      // console.log("BestSeller7 positionConfig", positionConfig);
    return (
        <div>
            <h1 className="font-semibold text-gray-800 text-3xl lg:text-4xl leading-7 lg:leading-9">Top Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 md:mt-12 lg:mt-24">
                <div className="p-5">
                    <div className="flex justify-center items-center">
                        <img src="https://i.ibb.co/x8HCsj8/Rectangle-33watch.png" alt="Apple Watch Series 5" />
                    </div>

                    <h5 className="mt-12 text-xl font-semibold leading-4 text-gray-800">Apple Watch Series 5</h5>
                    <div className="flex justify-between items-center mt-4 mb-3">
                        <p className="text-gray-600 font-medium text-xl">$1,725</p>
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex justify-center items-center">
                        <img src="https://i.ibb.co/F8GjGS6/Rectangle-33speaker.png" alt="Wonderboom wireless Speaker" />
                    </div>
                    <h5 className="mt-12 text-xl font-semibold leading-4 text-gray-800">Wonderboom wireless</h5>
                    <div className="flex justify-between items-center mt-4 mb-3">
                        <p className="text-gray-600 font-medium text-xl">$1,725</p>
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82802 20.995L7.00702 14.122L2.00702 9.255L8.90702 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#6B7280" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex justify-center items-center">
                        <img src="https://i.ibb.co/68bYP1C/Rectangle-33headset.png" alt="K-240 HD headset" />
                    </div>

                    <h5 className="mt-12 text-xl font-semibold leading-4 text-gray-800">K-240 HD headset</h5>
                    <div className="flex justify-between items-center mt-4 mb-3">
                        <p className="text-gray-600 font-medium text-xl">$1,725</p>
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82796 20.995L7.00696 14.122L2.00696 9.255L8.90696 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82802 20.995L7.00702 14.122L2.00702 9.255L8.90702 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#6B7280" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.75L5.82802 20.995L7.00702 14.122L2.00702 9.255L8.90702 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z" fill="#6B7280" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller7;
