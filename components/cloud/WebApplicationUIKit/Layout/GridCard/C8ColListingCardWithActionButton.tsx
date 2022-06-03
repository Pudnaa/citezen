import React, { FC, useState } from "react";
import Link from "next/link";
import { positionToPath, renderPositionType, jsonParse } from "util/helper";
import MainImage from "@cloud/Custom/Image/MainImage";
import { AtomTitle } from "@components/common/Atom";
type PropsType = {
  config: any;
  readyDatasrc: any;
  widgetnemgooReady: any;
};

const C8ColListingCardWithActionButton: FC<PropsType> = ({
  config,
  readyDatasrc,
  widgetnemgooReady,
}) => {
  // console.log("C8ColListingCardWithActionButton config", config);
  // console.log("C8ColListingCardWithActionButton readyDatasrc", readyDatasrc);
  // console.log("C8ColListingCardWithActionButton widgetnemgooReady", widgetnemgooReady);

  const positionConfig = positionToPath(config.bpsectiondtl);

  return (
    <div
      className={`shadow-lg bg-gray-200 rounded-xl w-full flex flex-col justify-center ${widgetnemgooReady.classname}`}
      style={{ ...widgetnemgooReady.style }}
    >
      <AtomTitle
        item={widgetnemgooReady.name || "Title "}
        link=""
        customStyle={widgetnemgooReady.style}
        customClassName={widgetnemgooReady.className}
        truncateRow={3}
      />
      <div className="flex flex-row flex-nowrap items-stretch mt-1">
        {readyDatasrc &&
          readyDatasrc.map((item: any, index: any) => {
            return widgetnemgooReady.url &&
              widgetnemgooReady.url.type == "link" ? (
              <Link key={item?.id || index} href={widgetnemgooReady.url.action}>
                <a className="text-black">
                  <ItemBlock
                    key={item?.id || index}
                    item={item}
                    widgetnemgooReady={widgetnemgooReady}
                    positionConfig={positionConfig}
                  />
                </a>
              </Link>
            ) : (
              <ItemBlock
                key={item?.id || index}
                item={item}
                positionConfig={positionConfig}
                widgetnemgooReady={widgetnemgooReady}
              />
            );
          })}
      </div>
    </div>
  );
};

type PropsTypeItem = {
  item: any;
  positionConfig: any;
  widgetnemgooReady: any;
};

const ItemBlock: FC<PropsTypeItem> = ({
  item,
  positionConfig,
  widgetnemgooReady,
}) => {
  const link = widgetnemgooReady?.url?.action || "";

  return (
    <div className="bg-white rounded-lg px-1 py-5 mr-3 w-24 h-auto flex flex-col items-center justify-baseline text-xs hover:text-white group cursor-pointer bg-gradient-to-br from-white to-white hover:from-citizen hover:to-citizen-gradientfinish">
      <div className="mb-3">
        <MainImage
          item={renderPositionType(item, "position2", positionConfig)}
          positionnemgooReady={jsonParse(
            positionConfig["position2"]["widgetnemgooReady"]
          )}
        />
      </div>
      <div className="font-semibold text-center">
        {renderPositionType(item, "position1", positionConfig)}
      </div>
    </div>
  );
};

export default C8ColListingCardWithActionButton;
