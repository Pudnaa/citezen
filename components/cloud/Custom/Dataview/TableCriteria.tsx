import React, { useContext, FC, useRef } from "react";
import FormMetaContext from "context/Meta/FormMetaContext";
import { fieldDisableEnable, fieldHideShow, getAtomValue } from "util/helper";
import fetchJson from "lib/fetchJson";
import _ from "lodash";
type PropsType = {
  filterItem: any;
  dataid: any;
};

const TableCriteria: FC<PropsType> = ({ filterItem, dataid }) => {
  if (!filterItem) return <></>;
  const { handleChangeContextTest, formDataInitData } =
    useContext(FormMetaContext);

  const handlerChangeEvent = (e: any, i: any) => {
    // console.log(i.paramname, e.target.value);
    // handleChangeContextTest({
    //   name: i.paramname,
    //   value: e.target.value,
    // });
  };

  let form = useRef();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form_data = new FormData(form.current);
    const payload: any = {};
    form_data.forEach(function (value: any, key: string) {
      payload[key] = value;
    });
    handleFilterData(payload);
  };

  const handleFilterData = async (payload: any) => {
    let data = await fetchJson(
      `/api/get-data?metaid=${dataid}&pagingwithoutaggregate=1&criteria=${JSON.stringify(
        payload,
      )}`,
    );
    delete data.aggregatecolumns;
    delete data.paging;
    data = _.values(data);
    console.log(data);
    return data;
  };

  return (
    <>
      {/* ref={form} */}
      <form onSubmit={handleSubmit}>
        <div>
          <div className="shadow rounded mb-6">
            <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
              <div className="flex items-center w-11/12 mx-auto">
                <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                  Шүүлтүүр
                </p>
              </div>
            </div>
            <div className="w-full mx-auto">
              <div className="mx-auto xl:w-full p-6 xl:mx-0">
                <div className="xl:flex lg:flex md:flex justify-between gap-6">
                  {filterItem.map((i: any, key: any) => (
                    <div className="flex-auto" key={key}>
                      <label
                        htmlFor={i.id}
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        {i.labelname}
                      </label>
                      <div className="flex ">
                        <input
                          type="text"
                          id={i.id}
                          name={i.paramname}
                          className={` rounded border-gray-400 focus:ring-0 self-center focus:border-black`}
                          // onChange={handlerChangeEvent}
                          onChange={(e) => handlerChangeEvent(e, i)}
                        />
                        <select
                          id={i.id}
                          className="border  border-gray-300 dark:border-gray-700  shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                        >
                          <option value="=">Тэнцүү</option>
                          <option value="!=">Ялгаатай</option>
                          <option value="like">Төстэй</option>
                          <option value="start">Эхлэсэн</option>
                          <option value="end">Төгссөн</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
              {/* <button className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out">
                Цэвэрлэх
              </button> */}
              <button
                type="submit"
                name="Шүүх"
                className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                // onClick={() => handlerClick()}
              >
                Шүүх
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default TableCriteria;
