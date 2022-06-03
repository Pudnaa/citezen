import cn from "classnames";
import React, { FC, useEffect } from "react";
import { jsonParse } from "util/helper";
import RenderLayout from "./render";
import _ from "lodash";
import { RenderComponent } from "./render/RenderComponents";
import s from "./Layout.module.css";

type PropsType = {
  layoutConfig: any;
};

const Layout: FC<PropsType> = ({ layoutConfig }) => {
  let ottrAttr = jsonParse(layoutConfig["otherattr"]);
  let sectionDtl = _.values(layoutConfig.meta_bp_layout_section);

  // console.log("ottrAttr", ottrAttr);

  if (ottrAttr.column1) {
    return (
      <div className={cn(s.root)}>
        <main className="fit px-6" style={ottrAttr.style}>
          <section style={{ color: "#000" }}>
            <div className={`my-2 grid grid-cols-12`}>
              {sectionDtl.map((item: any, index: any) => {
                let attr = jsonParse(item["otherattr"]);
                if (attr.isHeader) {
                  return RenderComponent([item], layoutConfig.description, "");
                }
              })}
            </div>
          </section>
          <section>
            <div className={`grid grid-cols-12 gap-6`}>
              <div className={`col-span-2`}>
                {sectionDtl.map((item: any, index: any) => {
                  let attr = jsonParse(item["otherattr"]);
                  if (attr.isLeftSidebar) {
                    return RenderComponent(
                      [item],
                      layoutConfig.description,
                      ""
                    );
                  }
                })}
              </div>
              <div className={`col-span-10`}>
                <RenderLayout
                  key={layoutConfig.id}
                  layoutCode={layoutConfig.layoutcode}
                  layout={layoutConfig}
                  section={layoutConfig.meta_bp_layout_section}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return (
      <div className={cn(s.root)}>
        <main className="fit" style={ottrAttr.style}>
          {/* {children} */}
          <RenderLayout
            key={layoutConfig.id}
            layoutCode={layoutConfig.layoutcode}
            layout={layoutConfig}
            section={layoutConfig.meta_bp_layout_section}
          />
        </main>
      </div>
    );
  }
};
export default Layout;
