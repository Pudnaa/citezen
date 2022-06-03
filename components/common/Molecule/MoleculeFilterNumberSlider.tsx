import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import { Slider } from "antd";
import BlockDiv from "@components/common/Block/BlockDiv";
import _ from "lodash";

type PropsType = {
  item: any;
  rows?: Array<any>;
  filterNemgoo?: any;
  defaultValues?: any;
  onChange?: any;
  type?: "default" | "modern";
  slider?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeFilterNumberSlider: FC<PropsType> = ({
  item = {},
  rows = [],
  filterNemgoo = {},
  defaultValues,
  onChange,
  type = "default",
  slider = { className: "", style: {} },
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  // console.log("MoleculeFilterNumberSlider ~ rows", rows);
  // console.log("MoleculeFilterNumberSlider ~ item", item);
  // console.log("MoleculeFilterNumberSlider ~ filterNemgoo", filterNemgoo);
  // console.log("MoleculeFilterNumberSlider ~ defaultValues", defaultValues);

  const columnMin = `dvc${item.columnname}~min`;
  const columnMax = `dvc${item.columnname}~max`;

  const min = Number(filterNemgoo.min || 0);
  const max = Number(filterNemgoo.max || 100);
  const step = Number(filterNemgoo.step || 10);

  const onChangeLocal = (value: any) => {
    console.log("ddddd onChangeLocal", value);
  };

  const onAfterChange = (value: any) => {
    // [20, 85] -- гэсэн утга ирдэг.
    const query = {
      [columnMin]: value[0] !== min ? value[0] : "removeIt",
      [columnMax]: value[1] !== max ? value[1] : "removeIt",
    };
    onChange(query);
  };

  return (
    <BlockDiv
      customClassName={`${customClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeFilterNumberSliderItemOuter`}
    >
      <Slider
        // onChange={onChangeLocal}
        onAfterChange={onAfterChange}
        range={{ draggableTrack: true }}
        defaultValue={[
          defaultValues[columnMin] || min,
          defaultValues[columnMax] || max,
        ]}
        min={min}
        max={max}
        step={step}
        tooltipPlacement="top"
        tipFormatter={(value: any) => {
          return (
            <RenderAtom
              item={{ value: String(value) }}
              defaultAtom="currency"
            />
          );
        }}
        disabled={false}
        trackStyle={[
          {
            height: 3,
            backgroundColor: "#54ACAE",
          },
        ]}
        handleStyle={[
          {
            height: "18px",
            width: "18px",
            marginTop: "-8px",
            backgroundColor: "#FFFFFF",
            borderColor: "#54ACAE",
          },
          {
            height: "18px",
            width: "18px",
            marginTop: "-8px",
            backgroundColor: "#FFFFFF",
            borderColor: "#54ACAE",
          },
        ]}
      />
      <BlockDiv
        customClassName="flex flex-row items-center justify-between w-full"
        divNumber={`${divNamePrefix}MoleculeFilterNumberSliderFooter`}
      >
        <RenderAtom item={{ value: String(min) }} defaultAtom="currency" />
        <RenderAtom item={{ value: String(max) }} defaultAtom="currency" />
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeFilterNumberSlider;
