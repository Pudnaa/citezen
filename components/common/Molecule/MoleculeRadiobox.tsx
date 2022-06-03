import { FC, useState } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import _ from "lodash";

type PropsType = {
  type?: "default" | "modern";
  item: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeRadiobox: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  const sizeClassName = "w-5 h-5";
  const [selectedId, setSelectedId] = useState();
  // console.log("🚀 ~ selectedId", selectedId);

  return (
    <BlockDiv
      customClassName="w-full relative flex flex-col"
      divNumber={`${divNamePrefix}MoleculeRadioboxItemOuter`}
    >
      {item.map((item: any, index: number) => {
        return (
          <RadioboxItem
            key={item?.id || index}
            item={item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            sizeClassName={sizeClassName}
            divNamePrefix={divNamePrefix}
          />
        );
      })}
    </BlockDiv>
  );
};

export default MoleculeRadiobox;

/* ------------------------------------------------------ */
/*                      RADIOBOXITEM                      */
/* ------------------------------------------------------ */
const RadioboxItem = ({
  item,
  selectedId,
  setSelectedId,
  sizeClassName,
  divNamePrefix,
}) => {
  return (
    <div
      className="flex items-center p-1 cursor-pointer hover:bg-gray-50 rounded-md"
      onClick={() => setSelectedId(item?.id)}
    >
      {item?.id === selectedId ? (
        <RenderAtom
          item={{ value: "fas fa-circle-small" }}
          defaultAtom="icon"
          customClassName={`bg-cozy border-cozy text-white rounded-full text-center align-middle ${sizeClassName}`}
          divNamePrefix={divNamePrefix}
        />
      ) : (
        <input
          type="checkbox"
          className={`border border-gray-200 rounded-full ${sizeClassName}`}
        />
      )}

      <RenderAtom
        item={{ value: item.title }}
        defaultAtom="text"
        customClassName="ml-2"
        divNamePrefix={divNamePrefix}
      />
    </div>
  );
};
