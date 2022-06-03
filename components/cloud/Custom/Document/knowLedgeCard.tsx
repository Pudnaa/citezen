import { useState, useContext } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { CartItemList } from "@components/cloud/Custom/Card";
import { renderPositionType } from "util/helper";
import { Tooltip } from "antd";
import Link from "next/link";
import _ from "lodash";
import { isEmpty, replace } from "lodash";
import ReactPaginate from "react-paginate";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomLink,
} from "@components/common/Atom";
import AtomPaginate from "@components/common/Paginate/AtomPaginate";
import { useCloud } from "hooks/use-cloud";

export default function knowLedgeCard() {
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
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(router.query?.layoutid);
  //
  const [show, setShow] = useState(null);
  const [length, setlength] = useState(readyDatasrc.length);
  // console.log(
  //   "readyDatasrc",
  //   config.metaConfig.meta_group_grid_options_mobile.pagesize,
  // );
  return (
    <>
      <div className="xl:w-2/4 2xl:w-3/5 w-full mx-auto bg-white p-4 rounded-lg ">
        <div className="px-2 py-4 border-b border-gray-300">
          <div className="flex items-start justify-between w-full">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Бүх асуултууд
            </p>
            <div>
              <Link href="/ask">
                <a
                  className={`focus:outline-none md:text-xs lg:text-sm 2xl:text-base leading-none  uppercase px-4 py-2 text-white  border bg-blue-700 rounded-lg border-gray-200  flex justify-center items-center `}
                >
                  Асуулт нэмэх
                </a>
              </Link>
            </div>
          </div>
          <div className="flex  justify-between items-center w-full pt-6">
            <p className="text-base">Нийт : {length} </p>
            <div>
              <div className="hidden lg:flex items-center w-full 2xl:w-2/3 lg:justify-center 2xl:justify-start">
                <button
                  className={`focus:outline-none md:text-xs lg:text-sm 2xl:text-base leading-none  px-4 py-2  border border-gray-200  flex justify-center items-center `}
                >
                  Шинэ
                </button>

                <button
                  className={`focus:outline-none md:text-xs lg:text-sm 2xl:text-base leading-none hover:text-black-800 focus:text-gray-50  px-4 py-2 dark:focus:bg-brand dark:hover:bg-brand   border border-gray-200 flex justify-center items-center `}
                >
                  Хариулагдаагүй
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-2 pb-5 ">
          <div>
            {/* <div className="h-screen overflow-y-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200  hover:scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full"> */}
            <AtomPaginate
              items={readyDatasrc}
              itemsPerPage={
                config?.metaConfig?.meta_group_grid_options_mobile?.pagesize
              }
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
