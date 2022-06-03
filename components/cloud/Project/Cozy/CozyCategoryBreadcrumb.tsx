import React, { useContext } from "react";
import _ from "lodash";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";

import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";

export default function CozyCategoryBreadcrumb() {
  const {
    config,
    readyDatasrc,
    defaultValue,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  // console.log("🚀 ~ CozyCategoryBreadcrumb ~ readyDatasrc", readyDatasrc);

  const firstElement = {
    name: "Нүүр",
    position1: {
      pathname: "name",
      value: "Нүүр",
      positionnemgoo: {
        atom: {
          type: "text",
          className: "",
          style: {},
          props: {
            color: "cozy",
          },
        },
        url: {
          path: "/",
        },
      },
    },
  };
  const myList = [...readyDatasrc, firstElement];

  return (
    <BlockDiv customClassName="w-full" divNumber="CozyCategoryBreadcrumbOuter">
      <BlockDiv
        customClassName="flex flex-row items-center"
        divNumber="CozyCategoryBreadcrumbInner"
      >
        {_.reverse(myList).map((item: any, index: number) => {
          return (
            <React.Fragment key={item?.id || index}>
              <RenderAtom item={item.position1} defaultAtom="text" />
              {myList.length - 1 !== index && (
                <RenderAtom
                  item={{ value: "&nbsp;/&nbsp;" }}
                  defaultAtom="text"
                />
              )}
            </React.Fragment>
          );
        })}
      </BlockDiv>
    </BlockDiv>
  );
}
