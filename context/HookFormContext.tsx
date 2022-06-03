import { FC, createContext, useState } from "react";
import _ from "lodash";

type PropsContextType = {
  formList?: any;
  setFormList?: any;
};

const HookFormContext = createContext<PropsContextType>({});
type PropsType = {};

export const HookFormStore: FC<PropsType> = ({ ...props }) => {
  const [formList, setFormList] = useState({});
  // console.log("FORMCONTEXT ~ formList", formList);

  return (
    <HookFormContext.Provider
      value={{
        formList,
        setFormList,
      }}
    >
      {props.children}
    </HookFormContext.Provider>
  );
};

export default HookFormContext;
