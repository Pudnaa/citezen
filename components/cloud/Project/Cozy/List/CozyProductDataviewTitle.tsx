import React, { useContext } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useGetProcessC009 from "../useGetProcessC009";

export default function CozyProductDataviewTitle() {
  const router = useRouter();

  const { dvList, dvListMutate } = useGetProcessC009(
    router?.query,
    "cozyCategory"
  );
  const item = dvList[0];

  return (
    <BlockDiv customClassName="" divNumber="CozyProductDataviewTitleOuter">
      <BlockDiv
        customClassName="flex flex-row items-center"
        divNumber="CozyProductDataviewTitleInner"
      >
        <RenderAtom
          item={{ value: item?.name || "Бараа" }}
          defaultAtom="text"
          customClassName="normal-case text-left font-normal"
          customStyle={{
            fontSize: "20px",
            lineHeight: "23px",
            color: "#3C3C3C",
          }}
        />
      </BlockDiv>
    </BlockDiv>
  );
}
