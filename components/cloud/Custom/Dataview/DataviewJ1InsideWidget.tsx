import { FC } from "react";
import WidgetStandart from "middleware/components/WidgetStandart/WidgetStandart";

type PropsType = {
  config: any;
  widgetnemgoo: any;
};

const DataviewJ1InsideWidget: FC<PropsType> = ({ config, widgetnemgoo }) => {
  const listWidget = widgetnemgoo?.listWidget || {
    widgetcode: "ProductGrid4",
    componentpath: "EcommerceUIKit/ProductGrids",
  };

  const listConfig = {
    ...config,
    widgetnemgoo: config.otherattr, //энд байгаа widgetnemgoo ньJSONParse хийгдэж JSON болсон тул болохгүй байна.
    ...listWidget,
  };

  // console.log("🚀 ~ listConfig", listConfig);

  return <WidgetStandart listConfig={listConfig} />;
};
export default DataviewJ1InsideWidget;
