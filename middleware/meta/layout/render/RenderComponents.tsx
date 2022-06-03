import React from "react";
import { jsonParse } from "util/helper";
// import RenderWidget from "./renderFunctions/RenderWidget";

export const RenderComponent = (
  configs: any,
  layoutTitle: string,
  processSection: any
) => {
  let body: any = [];

  for (var key in configs) {
    let otherAttr = jsonParse(configs[key]["otherattr"]);
    body.push(
      <div
        data-dataviewid={`${configs[key]["metadataid"]}`}
        data-widgetcode={`${configs[key]["widgetcode"]}`}
        className={`${otherAttr?.className || "col-span-12"}`}
      >
        {/* {RenderWidget(configs[key], layoutTitle, processSection)} */}
      </div>
    );
  }
  let returnView = <>{body}</>;
  return returnView;
};
