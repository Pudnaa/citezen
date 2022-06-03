import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useNumber from "@customhook/useNumber";
import _ from "lodash";

type PropsType = {
  item: any;
  rows?: Array<any>;
  filterNemgoo?: any;
  defaultValues?: any;
  onChange?: any;
  type?: "default" | "modern";
  input?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeFilterMultiCheckbox: FC<PropsType> = ({
  item = {},
  rows = [],
  filterNemgoo = {},
  defaultValues,
  onChange,
  type = "default",
  input = { className: "", style: {} },
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  const sizeClassName = "w-5 h-5";
  //fold - section
  const fold = filterNemgoo?.fold || {};
  const truncateRow = Number(fold?.truncateRow || "9007199254740991");
  const { number, setNumber } = useNumber(truncateRow); //Бүгдийг харах
  const columnName = `dvc${item.columnname}`;

  const onChangeLocal = (value: any) => {
    onChange({
      // [columnName]: !_.isEmpty(value) && defaultValues[columnName] != value
      [columnName]:
        !_.isEmpty(value) && defaultValues[columnName] != value
          ? value
          : "removeIt",
    });
  };

  return (
    <BlockDiv
      customClassName={`w-full ${customClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeFilterMultiCheckboxOuter`}
    >
      <BlockDiv
        customClassName="relative flex flex-col"
        divNumber={`${divNamePrefix}MoleculeFilterMultiCheckboxBody`}
      >
        {rows.map((item: any, index: number) => {
          if (index <= number - 1) {
            const active = defaultValues[columnName] == item.position0.value;

            return (
              <CheckboxItem
                key={item?.id || index}
                item={item}
                sizeClassName={sizeClassName}
                divNamePrefix={divNamePrefix}
                active={active}
                onChange={onChangeLocal}
              />
            );
          }
        })}
      </BlockDiv>

      <BlockDiv
        customClassName=""
        divNumber={`${divNamePrefix}MoleculeFilterMultiCheckboxFooter`}
      >
        {number !== 9007199254740991 ? (
          <RenderAtom
            item={{ value: fold?.fold?.title || "Бүгдийг харах" }}
            customClassName={`mt-4 block float-right text-cozy cursor-pointer ${fold?.fold?.className}`}
            customStyle={fold?.fold?.style}
            onClick={() => setNumber(9007199254740991)}
          />
        ) : (
          <RenderAtom
            item={{ value: fold?.unFold?.title || "Хумих" }}
            customClassName={`mt-4 block float-right text-cozy cursor-pointer ${fold?.unFold?.className}`}
            customStyle={fold?.unFold?.style}
            onClick={() => setNumber(truncateRow)}
          />
        )}
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeFilterMultiCheckbox;

/* ------------------------------------------------------ */
/*                      CHECKBOXITEM                      */
/* ------------------------------------------------------ */
const CheckboxItem = ({
  item,
  sizeClassName,
  divNamePrefix,
  active,
  onChange,
}) => {
  return (
    <div
      className={`flex flex-row gap-x-3 items-center p-1 cursor-pointer hover:bg-gray-50 rounded-md`}
      onClick={() => onChange(item.position0.value)}
    >
      <BlockDiv customClassName={`flex-none ${sizeClassName}`}>
        {active ? (
          <RenderAtom
            item={{ value: "far fa-check" }}
            defaultAtom="icon"
            customClassName={`bg-cozy border-cozy text-white rounded-sm text-center w-full h-full`}
            divNamePrefix={divNamePrefix}
          />
        ) : (
          <input
            type="checkbox"
            className={`border border-gray-200 rounded-sm w-full h-full`}
          />
        )}
      </BlockDiv>

      <BlockDiv customClassName={`shrink w-full overflow-hidden`}>
        <RenderAtom
          item={item.position1}
          defaultAtom="text"
          customClassName="truncate"
          customProps={{
            truncateRow: 1,
          }}
          divNamePrefix={divNamePrefix}
        />
      </BlockDiv>
    </div>
  );
};
