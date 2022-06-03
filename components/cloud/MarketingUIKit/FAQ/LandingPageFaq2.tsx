import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import Faq from "./Faq";

export default function LandingPageFaq2() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    widgetnemgooReady,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext);
  const [box1, setBox1] = useState(false);

  // console.log("Faq2 config", config);
  // console.log("Faq2 readyDatasrc", readyDatasrc);
  // console.log("Faq2 widgetnemgooReady", widgetnemgooReady);
  // console.log("Faq2 positionConfig", positionConfig);
  const item = readyDatasrc[0];
  console.log(widgetnemgooReady.title);
  return (
    <div className="lg:max-w-lpcontainer xs:w-full mx-auto flex items-center flex-col justify-evenly lg:py-[100px] lg:px-[90px] xs:py-10 xs:px-4">
      <div className="flex w-full justify-between items-center">
     <RenderAtom 
     item={{value:widgetnemgooReady.title}}
     defaultAtom="title"
     customClassName={"text-[44px]"}
     />
     <RenderAtom 
     item={{value:"search"}}
     defaultAtom="input"
     customClassName={"w-[200px] border-1 border-black-100 rounded-md opacity-50"}
     />
     </div>
    </div>
  );
}
const data =["Account Overview", "Subscription Subs" , "Payment Options", "Notification Setting" ,"Profile Preferences" , "Privaty and Cookies"]
// const FAQComponent = () => {
//   const [open, setOpen] = useState(false);
//   return <>dfdfdf</>;
// };
