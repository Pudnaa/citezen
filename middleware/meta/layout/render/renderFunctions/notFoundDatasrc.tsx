import React,{FC,useState} from "react";
import { Atom_string, Atom_number, Atom_date, Atom_combo, Atom_radio, Atom_range_slider } from "@components/common/Atom/Form";

type PropsType = {
    listConfig: any
}

const NotFoundDatasrc: FC<PropsType> = ({listConfig}) => {   
    return <div className="m-2 p-5 w-full bg-gray-100">
        <span className="font-semibold mr-2">
        Widget data source not found!
        </span>
        (metadataid is undefined)
        <br />
        widgetcode:{" "}
        <span className="text-red-500 font-semibold">
        {listConfig.widgetcode}
        </span>
        <br />
        componentpath:{" "}
        <span className="text-green-500 font-semibold">
        {listConfig.componentpath}
        </span>
    </div>
}
export default NotFoundDatasrc