import { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { decode } from "html-entities";
import { CopyBlock, dracula } from "react-code-blocks";
import { Modal } from "antd";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { metaConfig } from "config/metaConfig";
import { jsonParse, listToTree, prepareIsOpen } from "util/helper";
import Tree from "@naisutech/react-tree";
import parseHtml from "html-react-parser";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from "@components/common/Atom";
import TreeMain from "@components/cloud/Custom/Tree/TreeMain";
import { useCloud } from "hooks/use-cloud";

export default function BlogSingle() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  return (
    <>
      <div className="container mx-auto ">
        <div className="mb-12 xl:w-full w-11/12 mx-auto">
          <h1 className="xl:text-2xl pt-4 xl:pt-0 text-gray-800 xl:text-left font-extrabold mb-2 text-xl">
            Шинэ мэдээ
          </h1>
        </div>
        <div className="">
          <div className="w-100 flex sm:mx-auto mb-2 items-center">
            <div className="h-20 w-1/3">
              <img
                src="https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                className="h-full w-full object-cover overflow-hidden rounded"
              />
            </div>
            <div className="w-2/3 pt-3 pb-3 pl-5 pr-5">
              <p className="text-base text-gray-800 pb-2">
                handle a car, is an exprion of my inner feeling.
              </p>
              <p className="text-xs text-gray-600">May 13, 2019</p>
            </div>
          </div>
          <div className="w-100 flex sm:mx-auto mb-2 items-center">
            <div className="h-20 w-1/3">
              <img
                src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                className="h-full w-full object-cover overflow-hidden rounded"
              />
            </div>
            <div className="w-2/3 pt-3 pb-3 pl-5 pr-5">
              <p className="text-base text-gray-800 pb-2">
                I'm a greater believer in luck,
              </p>
              <p className="text-xs text-gray-600">May 13, 2019</p>
            </div>
          </div>
          <div className="w-100 flex sm:mx-auto mb-2 items-center">
            <div className="h-20 w-1/3">
              <img
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                className="h-full w-full object-cover overflow-hidden rounded"
              />
            </div>
            <div className="w-2/3 pt-3 pb-3 pl-5 pr-5">
              <p className="text-base text-gray-800 pb-2">
                Productivity is being able to do things that you
              </p>
              <p className="text-xs text-gray-600">May 13, 2019</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
