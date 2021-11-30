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
const Breadcrumb1 = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;
  // console.log("Breadcrumb1 config", config);
  // console.log("Breadcrumb1 datasrc", datasrc);
  // console.log("Breadcrumb1 otherattr", otherattr);
  // console.log("Breadcrumb1 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center text-xs">
        {datasrc.map((item: any, index: number) => {
          return (
            <div key={index} className="flex items-center">
              <AtomTitle
                item={item.title}
                link="#"
                customClassName="text-xs font-normal"
                color={widgetAllaround.color}
              />
              {index != datasrc.length - 1 && <span className="mx-4"> • </span>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumb1;
