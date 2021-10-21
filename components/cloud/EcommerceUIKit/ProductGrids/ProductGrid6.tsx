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
  AtomImage,
  AtomSlider5,
} from "@components/common/Atom";
import WeeklyCard2 from "@cloud/Custom/Card/WeeklyCard2";

export default function ProductGrid6() {
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
  // console.log("ProductGrid6 config", config);
  //console.log("ProductGrid6 datasrc", datasrc);
  // console.log("ProductGrid6 otherattr", otherattr);
  //console.log("ProductGrid6 positionConfig", positionConfig);

  return (
    <>
      <AtomSlider5 customClassName="container mx-auto">
        {datasrc.map((item: any, index: number) => (
          <div key={index}>
            <div className="w-60 mr-7">
              <WeeklyCard2 item={item} customClassName="w-full h-full" />
            </div>
          </div>
        ))}
      </AtomSlider5>
    </>
  );
}
