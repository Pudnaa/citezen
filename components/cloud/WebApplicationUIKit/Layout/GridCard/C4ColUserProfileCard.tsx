import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import Link from "next/link";
import { isEmpty } from "lodash";
import { useUser } from "hooks/use-user";
import AtomAvatar from "@components/common/Atom/AtomAvatar";
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

const C4ColUserProfileCard = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const userContext = useUser();
  // console.log(userContext);

  return (
    <>
      {/* Card is full width. Use in 4 col grid for best view. */}
      {/* Card code block start */}
      <div
        className={`mx-auto bg-white dark:bg-gray-800  flex flex-col items-center p-8  w-full px-6  ${widgetnemgooReady.className}`}
      >
        <div className="h-16 w-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-1 relative inline-block">
          <img
            src={
              userContext.userData
                ? "https://dev.veritech.mn/" + userContext.userData.emppicture
                : ""
            }
            className="h-full w-full object-cover overflow-hidden rounded-full"
          />
          {/* <AtomAvatar /> */}
          <div className="absolute bottom-0 right-0 inline-block w-6 h-6 bg-green-400 border-2 border-white rounded-full ">
            <AtomIcon
              // item={item.icon}
              item="fa fa-pencil"
              checked={false}
              hoverSolid={true}
              customClassName="ml-1 text-white"
            />
          </div>
        </div>
        <p className="mb-1 text-gray-800 text-sm font-medium">
          {" "}
          {userContext.userData ? userContext.userData.username : ""}
        </p>
        <p className="mb-6 text-gray-600 text-xs font-normal">
          {userContext.userData ? userContext.userData.email : ""}
        </p>
        <div className="flex flex-wrap w-full w-full mb-3">
          <div className="flex flex-col items-center w-1/2 p-3 mb-2 bg-gray-200 rounded-l-lg">
            <div className="w-full text-center font-bold text-gray-800">
              1000
            </div>
            <div className="w-full text-center text-gray-600">Миний оноо</div>
          </div>
          <div className="flex flex-col items-center w-1/2 mb-2 p-3 bg-gray-200 rounded-r-lg">
            <div className="w-full text-center font-bold text-gray-800">5</div>
            <div className="w-full text-center text-gray-600">Салбар</div>
          </div>
          <div className="flex flex-col items-center w-1/2 p-3 border-r mb-2">
            <div className="w-full text-center font-bold text-gray-800">12</div>
            <div className="w-full text-center text-gray-600">Гишүүнчлэл</div>
          </div>
          <div className="flex flex-col items-center p-3 w-1/2 mb-2">
            <div className="w-full text-center font-bold text-gray-800">2</div>
            <div className="w-full text-center text-gray-600">Идэвхтэй</div>
          </div>
        </div>
        <button className="bg-gray-600 py-3 px-4 rounded-lg text-white text-sm font-bold">
          Анкет засах
        </button>
      </div>
      {/* Card code block end */}
    </>
  );
};
export default C4ColUserProfileCard;
