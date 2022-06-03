import { FC, createContext, useState } from "react";
import _ from "lodash";

type PropsContextType = {
  rawWidgetList?: any;
  setRawWidgetList?: any;
};

const PageContext = createContext<PropsContextType>({});
type PropsType = {};

export const PageStore: FC<PropsType> = ({ ...props }) => {
  const [rawWidgetList, setRawWidgetList] = useState({});
  //   console.log("PAGECONTEXT ~ rawWidgetList", rawWidgetList);

  return (
    <PageContext.Provider
      value={{
        rawWidgetList,
        setRawWidgetList,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContext;
