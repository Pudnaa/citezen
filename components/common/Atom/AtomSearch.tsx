import { FC, useState, useContext } from "react";
import { isEmpty } from "lodash";
import AtomLinkV2 from "./V2/AtomLinkV2";
import { Modal } from "antd";
import _ from "lodash";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
type PropsType = {
  item: any;
  settings?: any;
  color?: string;
  customClassName?: string;
  customStyle?: any;
  truncateRow?: number;
};

const AtomSearch: FC<PropsType> = ({
  item,
  color = "citizen",
  customClassName = "",
  customStyle,
  settings,
  truncateRow = 0,
}) => {
  const value = item?.value || "";
  const positionnemgoo = item?.positionnemgoo || {};
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const matchingValuesData = item.filter(function (item: any) {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const resultList = matchingValuesData.map((item: any, index: number) => {
    const url = {
      path: "",
      query: {
        label: "id",
        value: item.id,
      },
    };
    // console.log(item);
    return (
      <AtomLinkV2 item={url}>
        <li
          key={item?.id || index}
          className="p-2 bg-gray-100 my-2 cursor-pointer rounded hover:bg-gray-200 w-11/12"
        >
          {item.category && item.category} <br /> {item.name}
        </li>
      </AtomLinkV2>
    );
  });

  const className = `${
    !customClassName.includes("text-") && "text-lg leading-6"
  } ${!customClassName.includes("font-") && "font-bold"} ${customClassName}`;
  const style = {
    ...customStyle,
  };

  return (
    <>
      <div className="w-full border bg-white border-gray-300 rounded-lg my-4 ">
        <button
          type="button"
          className="flex justify-between text-gray-600 items-center pl-4 hover:text-gray-600 transition-colors duration-200 w-full py-1 cursor-pointer"
          onClick={showModal}
        >
          Мэдлэг хайх...
          <svg
            width="30"
            height="30"
            fill="none"
            className="text-gray-700 group-hover:text-gray-500 transition-colors duration-200 pt-1 "
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>

      <Modal
        visible={visible}
        width={650}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="bg-gray-200">
          <div className="flex items-center justify-center">
            <div className="relative w-full dark:bg-gray-800 bg-white">
              <div className="flex flex-col items-center justify-center">
                <div className=" border-b border-gray-300 flex items-center w-full dark:bg-gray-900 ">
                  <button className="focus:outline-none cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.0207 11.078L14.876 13.9327L13.9327 14.876L11.078 12.0207C10.0159 12.8722 8.69471 13.3353 7.33338 13.3334C4.02137 13.3334 1.33337 10.6454 1.33337 7.33337C1.33337 4.02137 4.02137 1.33337 7.33338 1.33337C10.6454 1.33337 13.3334 4.02137 13.3334 7.33337C13.3353 8.69471 12.8722 10.0159 12.0207 11.078ZM10.6834 10.5834C11.5295 9.7133 12.002 8.54699 12 7.33337C12 4.75471 9.91138 2.66671 7.33338 2.66671C4.75471 2.66671 2.66671 4.75471 2.66671 7.33337C2.66671 9.91137 4.75471 12 7.33338 12C8.547 12.002 9.7133 11.5294 10.5834 10.6834L10.6834 10.5834Z"
                        fill="#000"
                      />
                    </svg>
                  </button>
                  <input
                    className="text-lg text-gray-600 bg-transparent w-full focus:outline-none py-3 pl-2"
                    placeholder="Хайх ..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>
              <ul>{searchValue.length > 0 ? resultList : ""}</ul>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AtomSearch;
