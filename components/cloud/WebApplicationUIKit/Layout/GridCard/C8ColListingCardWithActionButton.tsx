import React, { FC, useState } from "react";
import Link from "next/link";
import { positionToPath, renderPositionType, jsonParse } from "util/helper";
import MainImage from "@cloud/Custom/Image/MainImage";
import { AtomTitle } from "@components/common/Atom";
type PropsType = {
  config: any;
  datasrc: any;
  otherattr: any;
};

const C8ColListingCardWithActionButton: FC<PropsType> = ({
  config,
  datasrc,
  otherattr,
}) => {
  // console.log("C8ColListingCardWithActionButton config", config);
  // console.log("C8ColListingCardWithActionButton datasrc", datasrc);
  // console.log("C8ColListingCardWithActionButton otherattr", otherattr);

  const positionConfig = positionToPath(config.bpsectiondtl);

  return (
    <div
      className={`shadow-lg bg-gray-200 rounded-xl w-full flex flex-col justify-center ${otherattr.classname}`}
      style={{ ...otherattr.style }}
    >
      <AtomTitle
        item={otherattr.name || "Title "}
        link=""
        customStyle={otherattr.style}
        customClassName={otherattr.className}
        truncateRow={35}
      />
      <div className="flex flex-row flex-nowrap items-stretch mt-1">
        {datasrc &&
          datasrc.map((item: any, index: any) => {
            return otherattr.url && otherattr.url.type == "link" ? (
              <Link key={index} href={otherattr.url.action}>
                <a className="text-black">
                  <ItemBlock
                    key={index}
                    item={item}
                    otherattr={otherattr}
                    positionConfig={positionConfig}
                  />
                </a>
              </Link>
            ) : (
              <ItemBlock
                key={index}
                item={item}
                positionConfig={positionConfig}
                otherattr={otherattr}
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
  otherattr: any;
};

const ItemBlock: FC<PropsTypeItem> = ({ item, positionConfig, otherattr }) => {
  const link = otherattr?.url?.action || "";

  return (
    <div className="bg-white rounded-lg px-1 py-5 mr-3 w-24 h-auto flex flex-col items-center justify-baseline text-xs hover:text-white group cursor-pointer bg-gradient-to-br from-white to-white hover:from-sso hover:to-sso-gradientfinish">
      <div className="mb-3">
        <MainImage
          item={renderPositionType(item, "position2", positionConfig)}
          otherAttr={jsonParse(positionConfig["position2"]["otherattr"])}
        />
      </div>
      <div className="font-semibold text-center">
        {renderPositionType(item, "position1", positionConfig)}
      </div>
    </div>
  );
};

export default C8ColListingCardWithActionButton;
