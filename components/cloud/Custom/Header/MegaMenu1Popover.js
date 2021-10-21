import { useState } from "react";
// import MotoButton3 from "components/Moto/MotoSmalls/MotoButton3";
import { isEmpty } from "lodash";

export default function MegaMenu1Popover({
  data = {
    title: "Ангилал",
  },
  defaultClassName = "",
  defaultStyle = {},
}) {
  const item = data;
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <li
        className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex items-center"
        // onClick={() => {
        //   setShow(!show);
        // }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <i className={`fal fa-${item.icon}`}></i>
        <span className="ml-3 font-normal whitespace-nowrap">{item.title}</span>
      </li>

      {show && <SubPopover setShow={setShow} data={item.sub} />}
    </div>
  );
}

const SubPopover = ({ data = [], setShow }) => {
  return (
    <>
      {/*! <div
        className="fixed inset-0 bg-yellow-200 bg-opacity-20 overflow-y-auto h-full w-full z-30"
        onClick={() => {
          setShow(false);
        }}
      ></div> */}

      <div
        className="transform translate-x-0 transition duration-700 absolute top-0 left-full border bg-white h-96 rounded shadow-xl z-30 overflow-y-auto"
        style={{ width: "700px" }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {isEmpty(data) && <EmptyStore />}

        {/* <div className="p-3 grid grid-cols-3 grid-flow-col-dense gap-x-5 gap-y-1 "> */}
        <div className="p-3" style={{ columnCount: "3" }}>
          {data.map((item, index) => {
            return (
              <div key={index} className="cursor-pointer hover:text-weekly p-1">
                {/* <i className={`fal fa-${item.icon} mr-2`} /> */}
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const EmptyStore = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center px-10 py-7 border rounded-lg border-dashed border-gray-300">
        <div className="mb-2">
          <i className="far fa-person-dolly-empty text-2xl text-gray-500" />
        </div>
        <div className="text-gray-700">Хоосон байна</div>
      </div>
    </div>
  );
};
