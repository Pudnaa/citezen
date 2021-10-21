import React, { FC, useContext, useState } from "react";
import FormMetaContext from "context/Meta/FormMetaContext";
import useSWR from "swr";
import { Slider, Upload, message } from "antd";
import _ from "lodash";
import { jsonParse } from "@util/jsonParse";
import Atom_label from "./Atom_label";

type PropsType = {
  config: any;
};

const Atom_range_slider: FC<PropsType> = ({ config }) => {
  const [rangedata, setFormData] = useState();
  const { processExpression, formDataInitData, handleChangeContext } =
    useContext(FormMetaContext);

  let { data } = useSWR(`/api/get-data?metaid=${config.lookupmetadataid}`);
  if (!data) return <div>Loading...</div>;
  delete data.aggregatecolumns;
  delete data.paging;
  data = _.values(data);
  let dataLength = data.length;

  const obj: any = {};
  for (let i = 0; i < data.length; i++) {
    const displayfield = config.displayfield.toLowerCase();
    const valuefield = config.valuefield.toLowerCase();
    obj[data[i][valuefield]] = data[i][displayfield];
  }
  const handlerChange = (e: any) => {
    const { paramrealpath } = config;
    handleChangeContext({
      name: paramrealpath,
      value: e,
    });
  };

  return (
    <>
      <div
        className={`${
          config.isshow == "0"
            ? "hidden"
            : processExpression[config.paramrealpath + "hideShow"] === "hide" &&
              "hidden"
        }`}
      >
        <Atom_label
          labelName={config.labelname}
          className=""
          isrequired={config.isrequired}
          styles=""
          sectionConfig=""
        />
        <Slider
          marks={obj}
          // dots={true}
          range={false}
          defaultValue={formDataInitData[config.paramrealpath]}
          max={dataLength}
          onChange={handlerChange}
        />
      </div>
    </>
  );
};

export default Atom_range_slider;
