import { useContext } from "react";
import useSWR from "swr";
import { decode } from "html-entities";
import { CopyBlock, dracula } from "react-code-blocks";

import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType, prepareIsOpen, htmlDecode } from "util/helper";
import parseHtml from "html-react-parser";
import _ from "lodash";

import TreeMain from "@components/cloud/Custom/Tree/TreeMain";
import { useCloud } from "hooks/use-cloud";

export default function QuestionSingle() {
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

  return (
    <>
      <div className="2xl:container ">
        <div className="">
          <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
            <div className="flex items-center">
              <span className="focus:outline-none pl-2">
                {renderPositionType(
                  readyDatasrc[0],
                  "position5",
                  positionConfig
                )}
              </span>
            </div>
            <div className="sm:pt-0 pt-3 flex items-center">
              <span className="border border-green-600 px-4 py-2  rounded-lg ">
                {renderPositionType(
                  readyDatasrc[0],
                  "position42",
                  positionConfig
                )}
              </span>
            </div>
          </div>
        </div>
        <div className=" p-2 w-full">
          <h2 className=" w-full font-bold text-gray-600 lg:text-3xl text-3xl lg:leading-10 leading-9 mt-2">
            {renderPositionType(readyDatasrc[0], "position1", positionConfig)}
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            {renderPositionType(readyDatasrc[0], "position3", positionConfig)}
          </p>
          <div className="content-wrap">
            {parseHtml(
              decode(
                renderPositionType(
                  readyDatasrc[0],
                  "position22",
                  positionConfig
                )
              )
            )}
          </div>
        </div>
        <div>
          {/* <ul className="flex py-4 gap-2">
            <a href="javascript:void(0)">
              <li className="w-10 h-10 rounded-full bg-blue-600 text-center align-middle text-white">
                <span className="fab fa-facebook-f pt-1 text-lg"></span>
              </li>
            </a>
            <a href="javascript:void(0)">
              <li className="w-10 h-10 rounded-full bg-blue-400 text-center align-middle text-white">
                <span className="fab fa-twitter pt-1 text-lg"></span>
              </li>
            </a>
            <a href="javascript:void(0)">
              <li className="w-10 h-10 rounded-full bg-red-500 text-center align-middle text-white">
                <span className="fab fa-google pt-1 text-lg"></span>
              </li>
            </a>
          </ul> */}
        </div>
      </div>
    </>
  );
}
