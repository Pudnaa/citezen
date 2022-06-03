import { useState } from "react";
import { toBoolean } from "../../util/helper";

const useToggle = (init: any = false) => {
  const [toggle, setToggleState] = useState(toBoolean(init));

  const setToggle = (value: any) => {
    setToggleState(toBoolean(value) && !toggle);
  };

  return { toggle, setToggle };
};

export default useToggle;
