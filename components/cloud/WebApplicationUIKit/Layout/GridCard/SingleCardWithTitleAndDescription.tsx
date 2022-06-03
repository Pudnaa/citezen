import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  AtomTitle,
  AtomList,
  AtomIcon,
  AtomModal,
} from "@components/common/Atom";
import { isEmpty } from "lodash";

import { jsonParse } from "util/helper";
import { decode } from "html-entities";
import JSONPretty from "react-json-pretty";
import RenderWidgetProcess from "middleware/components/WidgetForm/RenderWidgetProcess";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
// import "react-json-pretty/themes/monikai.css";

const SingleCardWithTitleAndDescription = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("SingleCardWithTitleAndDescription config", config);
  // console.log("SingleCardWithTitleAndDescription readyDatasrc", readyDatasrc);
  // console.log("SingleCardWithTitleAndDescription widgetnemgooReady", widgetnemgooReady);

  let readyData = { ...readyDatasrc[0] };
  readyData.speclist1 = jsonParse(decode(readyDatasrc[0].speclist1));
  readyData.speclist2 = jsonParse(decode(readyDatasrc[0].speclist2));
  const [show, setShow] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [content, setContent] = useState<any>();

  const handlerCloseClick = (e: any) => {
    setVisibleModal(false);
  };
  const handlerClick = (e: any) => {
    const param = { ...e, metadataid: "1450927491361" };
    setContent(<RenderWidgetProcess dialog={true} listConfig={param} />);
    setVisibleModal(true);
  };

  const body = () => {
    return (
      <form className="flex flex-wrap items-center ">
        {readyData.speclist1 &&
          readyData.speclist1.map((item: any, index: number) => {
            return (
              <div
                key={item?.id || index}
                className={`w-1/2 mb-5 ${index % 2 == 0 ? "pr-3" : "pl-3"}`}
              >
                <label
                  htmlFor="fname"
                  className="block font-medium text-gray-500 text-sm"
                >
                  {" "}
                  {item.label}
                </label>
                <input
                  id={item.label}
                  placeholder={item.label}
                  value={item.value}
                  className="w-full block focus:outline-none mt-2 placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                />
              </div>
            );
          })}
      </form>
    );
  };
  const footer = () => {
    return (
      <div className="items-center float-right pb-2">
        <button className="text-bld text-sm text-white py-3 px-7 bg-gray-600 rounded-lg">
          Хадгалах
        </button>
      </div>
    );
  };

  return (
    <div className="relative">
      <ModalView
        visible={visibleModal}
        modalOptions={{
          width: 800,
        }}
        onClose={handlerCloseClick}
        modelContent={content}
      />
      <div
        className={`w-7 h-7 absolute -top-12 -right-1 rounded-3xl bg-white items-center flex justify-center cursor-pointer`}
        onClick={(e) => handlerClick(e)}
      >
        <AtomIcon
          // item={item.icon}
          item="far fa-pencil"
          checked={false}
          hoverSolid={true}
          customClassName="text-sm"
        />
      </div>
      <AtomList
        list={readyData.speclist1}
        customClassName="mt-5"
        valueClassName="font-semibold text-gray-700"
      />
    </div>
  );
};

export default SingleCardWithTitleAndDescription;
/*
[{"label": "Овог", "value": "Хангарьд"},
{"label": "Нэр", "value": "Анударь"},
{"label": "Утас", "value": "+976 8810 5689"},
{"label": "И-мэйл", "value": "anudari@gmail.com"},
{"label": "Иргэншил", "value": "Монгол"},
{"label": "Сошиал", "value": ["far fa-facebook", "far fa-twitter", "far fa-instagram"]},
{"label": "Овог", "value": "Анударь"}]
*/
