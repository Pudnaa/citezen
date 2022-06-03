import React from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useNumber from "@customhook/useNumber";

const CozyProductDataviewControlViewType = () => {
  const router = useRouter();

  const { number, setNumber } = useNumber(
    Number(router.query?.viewtype || 2),
    0,
    2
  );

  return (
    <BlockDiv
      customClassName=""
      divNumber="CozyProductDataviewControlViewTypeOuter"
    >
      <BlockDiv
        customClassName="flex flex-row items-center gap-x-3"
        divNumber="CozyProductDataviewControlViewTypeInner"
      >
        {controlViewTypeList.map((item: any, index: number) => {
          return (
            <RenderAtom
              key={item?.id || index}
              item={{
                value: item?.icon,
                positionnemgoo: {
                  atom: {
                    type: "icon",
                    className: "",
                  },
                  tooltip: item?.tooltip,
                  url: {
                    // path: "",
                    query: {
                      viewtype: index,
                    },
                    props: {
                      shallow: true,
                    },
                    keepQuery: true,
                  },
                },
              }}
              defaultAtom="icon"
              customClassName={`${
                number === index ? "text-[#3C3C3C]" : "text-gray-400"
              }`}
              onClick={() => {
                setNumber(index);
              }}
            />
          );
        })}
      </BlockDiv>
    </BlockDiv>
  );
};

export default CozyProductDataviewControlViewType;

const controlViewTypeList = [
  {
    icon: "fas fa-list",
    tooltip: {
      text: "Жагсаалт хэлбэрээр харах",
    },
  },
  {
    icon: "fas fa-grid-2",
    tooltip: {
      text: "Зураг хэлбэрээр харах",
    },
  },
  {
    icon: "fas fa-grid",
    tooltip: {
      text: "Карт хэлбэрээр харах",
    },
  },
];
