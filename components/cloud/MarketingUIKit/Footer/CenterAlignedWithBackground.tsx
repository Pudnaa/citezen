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
    otherattr,
    positionConfig,
    renderPositionType,
    widgetDefault,
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

  return datasrc.map((item: any, index: number) => {
    return (
      <div
        key={index}
        className="bg-black py-16 flex flex-col items-center justify-center f-f-l text-white"
      >
        <AtomImage
          item={renderPositionType(item, "position2", positionConfig)}
          customClassName="w-44"
        />

        <div className="flex items-center py-12">
          {item.social.map((socialItem: any, socialIndex: number) => {
            return (
              <a
                key={socialIndex}
                className="cursor-pointer px-5"
                href="javascript:void(0)"
              >
                <AtomIcon
                  item={socialItem.icon}
                  customClassName="text-white text-2xl"
                  color={widgetDefault.color}
                  link={socialItem.link}
                />
              </a>
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
                    color={widgetDefault.color}
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
