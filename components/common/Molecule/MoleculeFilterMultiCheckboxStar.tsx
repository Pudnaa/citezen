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

const MoleculeFilterMultiCheckboxStar: FC<PropsType> = ({
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
  const columnName = `dvc${item.columnname}`;
  const sizeClassName = "w-5 h-5";
  //fold - section
  const fold = filterNemgoo?.fold || {};
  const truncateRow = Number(fold?.truncateRow || "9007199254740991");
  const { number, setNumber } = useNumber(truncateRow); //Бүгдийг харах

  const onChangeLocal = (value: any) => {
    onChange({
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
      divNumber={`${divNamePrefix}MoleculeFilterMultiCheckboxStarOuter`}
    >
      <BlockDiv
        customClassName="relative flex flex-col"
        divNumber={`${divNamePrefix}MoleculeFilterMultiCheckboxStarBody`}
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
                index={index}
                active={active}
                onChange={onChangeLocal}
              />
            );
          }
        })}
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeFilterMultiCheckboxStar;

/* ------------------------------------------------------ */
/*                      CHECKBOXITEM                      */
/* ------------------------------------------------------ */
const CheckboxItem = ({
  item,
  sizeClassName,
  divNamePrefix,
  active,
  onChange,
  index,
}) => {
  // console.log("VVVVVV", item);

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
        <BlockDiv customClassName="flex flex-row gap-x-1">
          {starList[index].map((itemStar, index) => {
            // console.log("EEEE itemStar", itemStar);
            const myClassName = itemStar === 1 ? "fas fa-star" : "far fa-star";

            return (
              <RenderAtom
                key={item?.id || index}
                item={{ value: myClassName }}
                defaultAtom="icon"
                customClassName="text-yellow-500"
                customProps={{}}
                divNamePrefix={divNamePrefix}
              />
            );
          })}
        </BlockDiv>
      </BlockDiv>
    </div>
  );
};

const starList = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
];
