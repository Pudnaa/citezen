import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import { isEmpty, toLower } from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomImage,
  AtomIcon,
  AtomButton,
  AtomInput,
} from "@components/common/Atom";

export default function CenterAlignedWithBackground() {
  const {
    config,
    datasrc,
    readyDatasrc,
    otherattr,
    widgetnemgoo,
    positionConfig,
    renderPositionType,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;

  // console.log("CenterAlignedWithBackground config", config);
  // console.log("CenterAlignedWithBackground datasrc", datasrc);
  // console.log("CenterAlignedWithBackground otherattr", otherattr);
  // console.log("CenterAlignedWithBackground positionConfig", positionConfig);
  // console.log(
  //   "CenterAlignedWithBackground XXXXXXX",
  //   renderPositionType(datasrc[0], "position2", positionConfig)
  // );

  return readyDatasrc.map((item: any, index: number) => {
    // const widgetClassName = widgetnemgoo?.className;
    // const widgetStyle = widgetnemgoo?.style;
    return (
      <div
        key={index}
        className={`py-16 flex flex-col items-center justify-center`}
      >
        <AtomImage
          item={renderPositionType(item, "position2", positionConfig)}
          customClassName="w-44"
        />

        <div className="flex items-center py-12">
          {item.social.map((socialItem: any, socialIndex: number) => {
            return (
              <AtomIcon
                key={socialIndex}
                item={socialItem.icon}
                customClassName="text-white text-2xl cursor-pointer px-5"
                color={widgetAllaround.color}
                link={socialItem.link}
              />
            );
          })}
        </div>
        <div>
          <ul className="flex">
            {item.menu.map((menuItem: any, menuIndex: number) => {
              return (
                <li
                  key={menuIndex}
                  className="lg:text-lg text-sm leading-5 lg:mr-10 mr-5 text-white relative font-normal cursor-pointer hover:text-indigo-600"
                >
                  <AtomText
                    item={menuItem.title}
                    link={menuItem.link}
                    color={widgetAllaround.color}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-16 flex lg:items-start items-center">
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName="lg:text-base text-xs text-white leading-5"
          />
        </div>
      </div>
    );
  });
}
