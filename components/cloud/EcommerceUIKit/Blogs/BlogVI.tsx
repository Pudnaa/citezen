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
export default function BlogVI() {
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
      // console.log("BlogVI config", config);
      // console.log("BlogVI datasrc", datasrc);
      // console.log("BlogVI otherattr", otherattr);
      // console.log("BlogVI positionConfig", positionConfig);
    return (
        <div>
            <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4  sm:block flex justify-center items-center flex-col sm:w-full xs:w-96 w-auto mx-auto">
                <div className=" text-center">
                    <h2 className=" md:w-full w-10/12 mx-auto font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Weekly Fashion Journal</h2>
                    <p className=" md:w-full w-10/12 mx-auto font-normal text-base md:leading-4 leading-6 text-gray-600 mt-4">Dive deep into the world of fashion with our latest blogs</p>
                </div>
                <div className=" mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-6">
                    <div className="w-full h-full">
                        <img className=" w-full lg:block hidden" src="https://i.ibb.co/rvWR1z3/malvestida-magazine-u79wy47kv-Vs-unsplash-1.png" alt="Set of women accessories" />
                        <img className=" w-full lg:hidden block" src="https://i.ibb.co/sgYdgQh/pexels-felipe-tavares-5085861.png" alt="Set of women accessories" />
                        <div className=" bg-gray-800 text-white lg:p-8 py-8 px-4 text-center">
                            <p className=" font-noraml text-sm leading-3 text-white">23 July 2021</p>
                            <h3 className=" font-semibold lg:text-2xl text-xl lg:leading-8 leading-7 text-white mt-2 mx-auto w-full sm:w-64 lg:w-auto">Top 10 Fashion item from Amazon</h3>
                            <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2  border-2 border-white text-white bg-none hover:bg-white hover:text-gray-800 duration-150 text-base font-medium leading-4 mt-6 lg:w-auto w-full py-3 px-4">Read Story</button>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <img className=" w-full lg:block hidden" src="https://i.ibb.co/qyYM0Dc/laura-chouette-KL-SE98-J4-0-unsplash-1.png" alt="A handbag and a camera" />
                        <img className=" w-full lg:hidden block" src="https://i.ibb.co/LppkPKQ/pexels-thi-u-ho-ng-ph-c-4008493.png" alt="A handbag and a camera" />
                        <div className=" bg-gray-800 text-white lg:p-8 py-8 px-4 text-center">
                            <p className=" font-noraml text-sm leading-3 text-white">23 July 2021</p>
                            <h3 className=" font-semibold lg:text-2xl text-xl lg:leading-8 leading-7 text-white mt-2 mx-auto w-full sm:w-64 lg:w-auto">Most Shopped Bags of Year 2021</h3>
                            <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-white text-white bg-none hover:bg-white hover:text-gray-800 duration-150 text-base font-medium leading-4 mt-6 lg:w-auto w-full py-3 px-4">Read Story</button>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <img className=" w-full lg:block hidden" src="https://i.ibb.co/tb8gcZ9/khaled-ghareeb-q-CCa-BQ8b6l-M-unsplash-1.png" alt="A model posing" />
                        <img className=" w-full lg:hidden block" src="https://i.ibb.co/9rMWyqt/pexels-h-ng-xu-n-vi-n-3298445.png" alt="A model posing" />
                        <div className=" bg-gray-800 text-white lg:p-8 py-8 px-4 text-center">
                            <p className=" font-noraml text-sm leading-3 text-white">23 July 2021</p>
                            <h3 className=" font-semibold lg:text-2xl text-xl lg:leading-8 leading-7 text-white mt-2 mx-auto w-full sm:w-64 lg:w-auto p-0 lg:px-1">Latest from Paris Fashion Week</h3>
                            <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2  border-2 border-white text-white bg-none hover:bg-white hover:text-gray-800 duration-150 text-base font-medium leading-4 mt-6 lg:w-auto w-full py-3 px-4">Read Story</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
