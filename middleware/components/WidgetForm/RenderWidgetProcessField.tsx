import _ from "lodash";
import { useContext, useEffect, useState, FC } from "react";
import useSWR from "swr";
import RenderField from "./RenderField";
import LayoutSection from "../Layout/LayoutSection";
import { jsonParse } from "util/helper";

type PropsType = {
  listConfig?: any;
  processSection?: any;
};

const RenderWidgetProcessField: FC<PropsType> = ({
  listConfig,
  processSection,
}) => {
  const parameters = `&parameters=${JSON.stringify({
    filtermetadataid: processSection.metadataid,
  })}`;
  const { data } = useSWR(
    `/api/get-process?processcode=layoutHdr_004${parameters}`
  );
  const listConfigParse = {
    ...listConfig,
    otherattr: jsonParse(listConfig?.otherattr),
  };

  if (data) {
    if (!listConfig) {
      const otherattr = jsonParse(data["otherattr"]);
      const layout = otherattr?.layout || [];

      return (
        <LayoutSection
          mergedLayout={layout}
          processSection={processSection}
          meta_bp_layout_section={data.meta_bp_layout_section}
        />
      );
    }

    const sectionGroupByCode = _.groupBy(
      _.values(data.meta_bp_layout_param),
      function (n) {
        return n.sectioncode;
      }
    );

    let attr = _.values(processSection.meta_process_param_attr_link_mobile);

    return (
      <div className="shadow-citizen bg-white rounded-lg p-5 h-full w-full">
        <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 pb-3">
          <p className="text-lg text-gray-800 dark:text-gray-100">
            {listConfig.title}
          </p>
        </div>
        <div
          className={`grid grid-cols-${listConfig.columncount || 0} gap-4 mt-4`}
        >
          {sectionGroupByCode[listConfig["code"]].map((item, index) => {
            let fieldRow = _.find(attr, {
              paramrealpath: item["paramrealpath"].toLowerCase(),
            });
            if (fieldRow) {
              return (
                <RenderField
                  field={fieldRow}
                  attr={attr}
                  sectionConfig={listConfigParse}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }

  return <></>;
};

export default RenderWidgetProcessField;
