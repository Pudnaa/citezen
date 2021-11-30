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
import RenderAtom from "@components/common/Atom/RenderAtom";

const FooterIIIWeeklyLanding = () => {
    const {
        config,
        readyDatasrc,
        datasrc,
        otherattr,
        positionConfig,
        metaConfig,
        gridJsonConfig,
        pathConfig,
        Title,
      } = useContext(WidgetWrapperContext);
      if (isEmpty(datasrc)) return null;
      // console.log("FooterIIIWeeklyLanding config", config);
    //   console.log("FooterIIIWeeklyLanding readyDatasrc", readyDatasrc);
      // console.log("FooterIIIWeeklyLanding otherattr", otherattr);
      // console.log("FooterIIIWeeklyLanding positionConfig", positionConfig);
    return (
        
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 bg-black">
            <div className="py-14  flex flex-col-4 items-center justify-between sm:space-y-10 lg:space-y-0 ">
                <div className="w-full grid grid-cols-4 items-start justify-between ">
                {
              readyDatasrc.map((item: any, index: number) => {
              return (
                <div className="w-full  ">
              <RenderAtom
                 item={item?.position1}
                  defaultAtom="title"
                  customClassName="text-sm font-medium leading-tight text-white pb-7"
                   />
                  <a href="">
                  {/* <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Payment methods</p> */}
                  {item?.position31?.value.map((item1:any,index1:number)=>{
                      return(
                          <div key={index1} className="pb-6 cursor-pointer text-sm leading-4 text-white">
                              {item1?.title}
                          </div>
                      )
                  })}
                  
                  </a>
              </div>
                   ); 
                   })}
                </div>
            </div>
            <div className="flex w-full justify-between ">
                <a href="/" className="cursor-pointer">
                    <img src="https://www.bigcommerce.com/assets/svg/bc-logo-bright.svg" alt="" />
                </a>
                <div className="flex flex-col" >
                <p className="text-sm text-center text-white ">Twitter Facebook LinkedIn YouTube Instagram</p>
                <p className="text-sm text-center text-gray-500 pt-3">©Copyright 2003 - 2021 BigCommerce Pty. Ltd.</p>
                </div>
            </div>
        </div>
    );
};

export default FooterIIIWeeklyLanding;
