import React, { FC, useState } from "react";
import { positionToPath } from "util/helper";
import { useUser } from "hooks/use-user";
import { Atom_string } from "@components/common/Atom/Form";

type PropsType = {
  listConfig: any;
  data: any;
};

const citizenErpWidgetAtom: FC<PropsType> = ({ listConfig, data }) => {
  return (
    <div className="processRender">
      <form className="container mx-auto bg-white shadow rounded">
        <div>
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex items-center w-11/12 mx-auto">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Жишээ{" "}
              </p>
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <div className="container mx-auto py-4">
              <div className="my-8 mx-auto xl:w-full xl:mx-0">
                <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                  {/* <Atom_string item={Item} /> */}
                  <Atom_string config={Item} />
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="City"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      City
                    </label>
                    <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                      <select
                        data-type="text"
                        name="city"
                        required
                        id="City"
                        className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded"
                      >
                        <option value="Switzerland">Switzerland</option>
                        <option value="America">America</option>
                        <option value="Australia">Australia</option>
                      </select>
                      <div
                        className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                                    dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                      >
                        {/* <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                                <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default citizenErpWidgetAtom;

const Item = {
  columnaggregate: "",
  processgetparampath: "",
  mandatorycriteria: "",
  labelname: "Системийн дугаар",
  separatortype: "",
  isshowmultiple: "",
  isshowdelete: "",
  isshowadd: "",
  issave: "",
  isrefresh: "0",
  sidebarname: "",
  isfreeze: "0",
  stylecriteria: "",
  isbutton: "",
  groupingname: "",
  paramrealpathid: "",
  columnwidth: "",
  visiblecriteria: "",
  valuecriteria: "",
  enablecriteria: "",
  validationcriteria: "",
  featurenum: "",
  tabname: "",
  fractionrange: "",
  getprocessmetadataid: "",
  globecode: "",
  id: "1631842870415541",
  processmetadataid: "1631774077623775",
  groupmetadataid: "",
  parammetadataid: "",
  isshow: "0",
  isrequired: "0",
  minvalue: "",
  maxvalue: "",
  defaultvalue: "",
  recordtype: "",
  choosetype: "",
  displayfield: "",
  lookupmetadataid: "",
  lookuptype: "",
  patternid: "",
  valuefield: "",
  parampath: "id",
  parentid: "",
  isinput: "1",
  paramname: "id",
  paramrealpath: "id",
  expressionstring: "",
  isuserconfig: "0",
  fileextension: "",
  themepositionno: "",
  dtltheme: "",
  datatype: "long",
  lookupkeymetadataid: "",
  ordernumber: "1",
  pagingconfig: "",
  isfirstrow: "",
  iconname: "",
  rendertype: "",
  offline_order: "",
  placeholdername: "placeholdername",
  patterntext: "",
  globemessage: "",
};
