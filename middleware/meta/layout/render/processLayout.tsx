"use strict";
import cn from "classnames";
import { FC, ReactNode, Component, useRef, Children } from "react";
import { jsonParse } from "util/helper";
import groupBy from "lodash/groupBy";
import { isEmpty } from "lodash";
import { RenderComponent } from "./RenderComponents";

const RenderLayout = (props: any) => {
  const { layoutCode, section, layout, processSection } = props;
  const cc = LayoutLoop(section, layoutCode, processSection);

  return (
    <div className={`main-layout layout-${layoutCode ? layoutCode : ""}`}>
      {cc}
    </div>
  );
};

function LayoutLoop(props: any, layoutCode: string, processSection: any) {
  const rows = [];
  const section = groupBy(props, function (n) {
    return n.code.split('.')[0];
  });

  for (var key in section) {
    if (section.hasOwnProperty(key)) {
      const ottrAttr = jsonParse(section[key][0]["otherattr"]);

      if (!ottrAttr.isHeader && !ottrAttr.isLeftSidebar) {
        rows.push(
          <section style={{ color: "#000" }}>
            <div
              className={`my-5 gap-x-5 grid grid-cols-12 ${
                ottrAttr?.section?.className || ""
              }`}
              style={{ ...ottrAttr?.section?.style }}
            >
              {RenderComponent(section[key], "", processSection)}
            </div>
          </section>
        );
      }
    }
  }
  return rows;
}

export default RenderLayout;
