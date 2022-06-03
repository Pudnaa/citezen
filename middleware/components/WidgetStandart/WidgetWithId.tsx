import { FC } from "react";
import _ from "lodash";
import SectionWidgetChoose from "../Layout/SectionWidgetChoose";
import { useCloud } from "hooks/use-cloud";
import { usePage } from "hooks/use-page";

type PropsType = {
  widgetId: any;
  readyItem?: any;
};

const WidgetWithId: FC<PropsType> = ({ widgetId, readyItem }) => {
  const cloudContext = useCloud();
  const pageContext = usePage();

  const rawWidgetList = cloudContext.rawWidgetList;
  // const rawWidgetListPage = pageContext.rawWidgetList;
  const myWidgetConfig = _.find(rawWidgetList, { id: widgetId });
  // console.log("listConfig widgetId", widgetId);
  // console.log("listConfig cloudContext", cloudContext);
  // console.log("listConfig myWidgetConfig", myWidgetConfig);

  const listConfig = {
    ...myWidgetConfig,
    readyItem,
    widgetnemgooReady: {
      ...myWidgetConfig?.widgetnemgooReady,
      death: "0",
    },
  };
  // console.log("listConfig listConfig rawWidgetList", rawWidgetList);

  return <SectionWidgetChoose listConfig={listConfig} />;
};

export default WidgetWithId;
