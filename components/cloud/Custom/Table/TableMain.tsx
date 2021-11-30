import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
  toBoolean,
} from "util/helper";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomCurrency,
} from "@components/common/Atom";
import MainImage from "@cloud/Custom/Image/MainImage";
import FieldItem from "@cloud/Custom/Item/FieldItem";

const TableMain = () => {
  const {
    config,
    datasrc: ddd,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const datasrc = ddd.slice(0, 5);

  //console.log("TableMain datasrc", datasrc);
  //console.log("TableMain pathConfig", pathConfig);
  let readyColumn = _.orderBy(
    _.filter(pathConfig, (item) => {
      return (
        item?.isshow === "1" &&
        !item?.fieldpath.includes(".") &&
        item?.datatype !== "group"
      );
    }) || [],
    ["displayorder"],
  );
  // const tdKeys = _.keys(_.head(datasrc));

  //console.log("readyColumn", readyColumn);

  const starContainer = (classname: string, num: number, color: string) => {
    return (
      <div className={`cursor-pointer flex space-x-2 ${classname}`}>
        <svg
          width='13'
          height='12'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z'
            fill={num >= 1 ? color : "#D1D5DB"}
          />
        </svg>
        <svg
          width='13'
          height='12'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z'
            fill={num >= 2 ? color : "#D1D5DB"}
          />
        </svg>
        <svg
          width='13'
          height='12'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z'
            fill={num >= 3 ? color : "#D1D5DB"}
          />
        </svg>
        <svg
          width='13'
          height='12'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z'
            fill={num >= 4 ? color : "#D1D5DB"}
          />
        </svg>
        <svg
          width='13'
          height='12'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z'
            fill={num >= 5 ? color : "#D1D5DB"}
          />
        </svg>
      </div>
    );
  };

  return (
    <div
      className={`w-full overflow-y-auto scrollbar scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full`}
    >
      <div className='mt-5 ml-2 flex items-center relative hidden'></div>
      <table className='w-full table-auto border-collapse text-sm ml-3 '>
        <thead className='whitespace-nowrap font-bold'>
          <tr className='text-sm leading-none text-gray-400 h-14'>
            {readyColumn.map((item: any, index: number) => {
              return index === 0 ? (
                ""
              ) : (
                <th
                  key={index}
                  className={`font-bold ${
                    index === datasrc.length ? "text-center" : "text-left"
                  } pr-4 break-all`}
                >
                  {item.labelname}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className='w-full font-medium'>
          {datasrc.map((trItem: any, index: number) => {
            const tdRows = _.values(trItem);
            const icon = readyColumn[0].fieldpath.toLowerCase();
            const name = readyColumn[1].fieldpath.toLowerCase();
            const industry = readyColumn[2].fieldpath.toLowerCase();
            const organization = readyColumn[3].fieldpath.toLowerCase();
            const status = readyColumn[4].fieldpath.toLowerCase();
            const price = readyColumn[5].fieldpath.toLowerCase();
            return (
              <tr
                key={index}
                className='h-20 text-sm leading-none text-gray-800  border-b border-t border-gray-100'
              >
                <td className='whitespace-wrap'>
                  <div className=' grid grid-flow-col auto-cols-max gap-3'>
                    <div className='w-10 h-10  border   items-center align-middle pt-1 rounded-lg text-center '>
                      <AtomIcon
                        // item={item.icon}
                        item={trItem?.[icon]}
                        checked={false}
                        color={widgetAllaround.color}
                        hoverSolid={true}
                        customClassName='text-lg text-green-600'
                      />
                    </div>
                    <div className='max-w-xs flex items-center pr-2'>
                      {trItem?.[name]}
                    </div>
                  </div>
                </td>
                <td className='whitespace-nowrap'>
                  {" "}
                  <span className='mr-3'>{trItem?.[industry]}</span>
                </td>
                <td className=''>
                  <span className='mr-3'>{trItem?.[organization]}</span>{" "}
                </td>
                <td className='whitespace-nowrap'>
                  {!isNaN(trItem?.[status]) ? (
                    <div className=' flex flex-row justify-between mr-3'>
                      {starContainer("", trItem?.[status], "#FFBB00")}
                    </div>
                  ) : (
                    <div
                      className={`py-2 px-3 mr-3 border rounded-2xl w-auto inline-block bg-${
                        trItem?.[status] === "Амжилттай"
                          ? "green-200"
                          : trItem?.[status] === "Хүлээгдэж байгаа"
                          ? "yellow-200"
                          : trItem?.[status] === "Төлбөр хийгдээгүй"
                          ? "blue-200"
                          : trItem?.[status] === "Хугацаа хэтэрсэн"
                          ? "pink-200"
                          : ""
                      } text-${
                        trItem?.[status] === "Амжилттай"
                          ? "green-600"
                          : trItem?.[status] === "Хүлээгдэж байгаа"
                          ? "yellow-600"
                          : trItem?.[status] === "Төлбөр хийгдээгүй"
                          ? "blue-600"
                          : trItem?.[status] === "Хугацаа хэтэрсэн"
                          ? "pink-600"
                          : ""
                      }`}
                    >
                      {trItem?.[status]}
                    </div>
                  )}
                </td>
                <td className=''>
                  <div className='flex items-center'>
                    <AtomCurrency
                      type='mnt'
                      item={trItem?.[price]}
                      customClassName='mr-4'
                    />
                    <AtomIcon
                      // item={item.icon}
                      item={
                        !isNaN(trItem?.[status])
                          ? "fas fa-ellipsis-h"
                          : "fa fa-trash-alt"
                      }
                      checked={false}
                      color={widgetAllaround.color}
                      hoverSolid={true}
                      customClassName='text-lg cursor-pointer mr-3'
                    />
                  </div>
                </td>
                {/*readyColumn.map((itemColumn: any, index2: number) => {
                  const fieldpath = itemColumn.fieldpath.toLowerCase();
                  return (
                    <td
                      key={index2}
                      className="font-normal text-left pl-4 break-all w-48 overflow-hidden border border-gray-200"
                    >
                      {/* <FieldItem
                                            item={trItem?.[fieldpath]}
                                            config={itemColumn}
                                          /> */}
                {/*trItem?.[fieldpath]}
                    </td>
                  );
                })*/}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableMain;
