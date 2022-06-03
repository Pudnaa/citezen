import React, { FC, useEffect, useState, useMemo, useContext } from "react";
// import RenderField from "@middleware/components/WidgetForm/RenderField";
import _ from "lodash";
import { Radio, Switch, Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import useSWR from "swr";

import {
	Atom_long,
	Atom_date,
	Atom_combo,
	Atom_radio,
	Atom_range_slider,
	Atom_combo_multi,
	Atom_range_slider_maxmin,
} from "@components/common/Atom/Form";

type PropsType = {
	type: any;
	config?: any;
};

const LookUpData: FC<PropsType> = ({ type, config }) => {
	const { lookupmetadataid, lookupcriteria, showtype, templatedtlid } = config;
	const [metaId, setMetaId] = useState<any>(lookupmetadataid);

	const valuefield = lookupcriteria.split("=");
	let criteria = {
		[valuefield[0]]: [
			{
				operator: "=",
				operand: valuefield[1],
			},
		],
	};
	const { data: LoopdataSrc, error } = useSWR(
		`/api/get-data?metaid=${metaId}&criteria=${JSON.stringify(criteria)}`,
	);
	delete LoopdataSrc?.aggregatecolumns;
	delete LoopdataSrc?.paging;
	const dataSrc = _.values(LoopdataSrc);

	const comboDataTransform = (data: any) => {
		return data.map((item: any, key: any) => {
			// let displayfield = item[config.displayfield.toLowerCase()];
			// let valuefield = item[config.valuefield.toLowerCase()];
			return { label: item.name, value: item.id };
		});
	};
	switch (type) {
		case "radio":
			return (
				<div className="mt-2 ">
					<Radio.Group name="radiogroup" defaultValue={1}>
						{dataSrc.map((item: any, index: any) => {
							return <Radio value={item.id}>{item.name}</Radio>;
						})}
					</Radio.Group>
					<style>
						{`
							.ant-checkbox-inner{
								border-radius: 0px
							}
						`}
					</style>
				</div>
			);
		case "multicheck":
			const options = comboDataTransform(dataSrc);
			return (
				<div className="mt-2 ">
					<Checkbox.Group options={options} />
				</div>
			);

		default:
			return type;
	}
};

export default LookUpData;
