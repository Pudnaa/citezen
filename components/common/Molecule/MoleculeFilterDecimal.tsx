import { FC, useState } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import _ from "lodash";

type PropsType = {
  item: string;
  type?: "default" | "modern";
  input?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeFilterDecimal: FC<PropsType> = ({
  item,
  type = "default",
  input = { className: "", style: {} },
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  // console.log("Filter Text ~ item", item);
  const [sss, setSss] = useState(0);

  const onChange = (e: any) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
      setSss(amount);
    }
  };

  return (
    <BlockDiv
      customClassName={customClassName}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeFilterDecimalItemOuter`}
    >
      <input
        className={input?.className}
        style={input?.style}
        type="number"
        onChange={onChange}
        value={sss}
      />
    </BlockDiv>
  );
};

export default MoleculeFilterDecimal;
