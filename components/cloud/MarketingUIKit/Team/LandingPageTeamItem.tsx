import { useContext, useState , FC} from "react";
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
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

import { Pagination } from "swiper";
import BlockDiv from "@components/common/Block/BlockDiv";
import Render from "@middleware/meta/layout/render";

type PropsTypes = {
    item : any;
    active: any;
    setActive: any;
    index: any;
};

const  LandingPageTeamItem : FC<PropsTypes> = ({item, active , setActive, index}) => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    widgetnemgooReady,
    pathConfig,
  } = useContext(WidgetWrapperContext);
//   const [active , setActive] =useState();
  // console.log("LandingPageTeam config", config);
  // console.log("LandingPageTeam widgetnemgooReady", widgetnemgooReady);
  // console.log("LandingPageTeam positionConfig", positionConfig);
//   const item = readyDatasrc[0];
//   console.log(item);
  // const [style, setStyle] = useState({ display: "none" });
  return (
        <div className="bg-black/50 relative cursor-pointer h-[400px] w-[300px]" onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)}>
              <RenderAtom 
              item={{value:item?.mainimage}}
              defaultAtom="image"
              customClassName={"w-full h-full"}
              />
              <div className="bottom-0 left-0 bg-white/60 absolute w-full text-center">
                  <RenderAtom 
                  item={{value:"Eloanar Font"}}
                  defaultAtom="title"
                  customClassName={""}
                  />
                  <RenderAtom 
                  item={{value:"Sumo founder"}}
                  defaultAtom="text"
                  customClassName={""}
                  />
              </div>
          <div className={`bg-[#615BED]/70 absolute top-0 left-0 bottom-0 w-full h-full flex flex-col items-center justify-center ${active === index ? "flex" : " hidden"}`}>
            <div className="flex justify-around w-1/2">
           {data.map((item, index) => (
             <RenderAtom 
             key={index}
             item={{value:item.icon}}
             defaultAtom="icon"
             customClassName={"text-white"}
             />
           ))}
           </div>
           <div className="w-1/2 h-[1px] my-6 bg-white"></div>
           <RenderAtom 
           item={{value:"Dylan Meringue"}}
           defaultAtom="title"
           customClassName={"text-white font-bold"}
           />
           <RenderAtom 
           item={{value:"App Designer"}}
           defaultAtom="text"
           customClassName={"text-white"}
           />
          </div>
        </div>
     
  );
}
export default LandingPageTeamItem;
const data = [
  {
    icon:"fa-brands fa-facebook-square",
  },
  {
    icon:'fa-brands fa-instagram-square',
  },
  {
    icon:"fa-brands fa-google-plus-g",
  },
  {
    icon:'fa-brands fa-twitter',
  },
  {
    icon:'fa-brands fa-linkedin-in',
  },
]