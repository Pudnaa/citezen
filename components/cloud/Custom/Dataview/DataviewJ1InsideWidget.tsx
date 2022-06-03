import { FC } from "react";
import SectionWidgetChoose from "middleware/components/Layout/SectionWidgetChoose";

type PropsType = {
  config: any;
  widgetnemgooReady: any;
};

const DataviewJ1InsideWidget: FC<PropsType> = ({
  config,
  widgetnemgooReady,
}) => {
  const listWidget = widgetnemgooReady?.listWidget || {
    widgetcode: "ProductGrid4",
    componentpath: "EcommerceUIKit/ProductGrids",
  };

  const listConfig = {
    ...config,
    widgetnemgooReady: widgetnemgooReady, //энд байгаа widgetnemgooReady ньJSONParse хийгдэж JSON болсон тул болохгүй байна.
    ...listWidget,
  };

  // console.log("🚀 ~ listConfig", listConfig);

  return <SectionWidgetChoose listConfig={listConfig} />;
};
export default DataviewJ1InsideWidget;
