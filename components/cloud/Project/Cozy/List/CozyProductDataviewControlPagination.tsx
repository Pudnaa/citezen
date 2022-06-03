import React, { useEffect } from "react";
import useDidMountEffect from "util/useDidMountEffect";
import { useRouter } from "next/router";
import _ from "lodash";
import { Pagination } from "antd";
import useGoLink from "@customhook/useGoLink";
import { useCloud } from "hooks/use-cloud";

import RenderMolecule from "@components/common/Molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";
import useNumber from "@customhook/useNumber";

const CozyProductDataviewControlPagination = ({ paging }) => {
  const router = useRouter();
  const cloudContext = useCloud();

  const { number: offset, setNumber: setOffset } = useNumber(
    Number(cloudContext.cloudURL?.listOption?.paging?.offset),
    0
  );
  const { number: pageSize, setNumber: setPageSize } = useNumber(
    Number(cloudContext.cloudURL?.listOption?.paging?.pagesize)
  );

  const total: number = Number(paging?.totalcount) || 1;
  // const pageSize: number = Number(paging?.pagesize) || 10;

  // console.log("🚀 ~ CozyProductDataviewControlPagination ~ paging", paging);
  useDidMountEffect(() => {
    useGoLink(router, {
      query: {
        offset: offset,
        pagesize: pageSize,
      },
      props: {
        shallow: true,
        keepQuery: true,
      },
    });
  }, [offset, pageSize]);

  // console.log("🚀 ~ CozyProductDataviewControlPagination ~ offset", offset);
  // console.log("🚀 ~ dddddddddddd", cloudContext.cloudURL?.listOption?.paging);

  return (
    <BlockDiv
      customClassName="w-full"
      divNumber="CozyProductDataviewControlPaginationOuter"
    >
      <BlockDiv
        customClassName="flex flex-row items-center gap-x-3"
        divNumber="CozyProductDataviewControlPaginationInner"
      >
        {/* <Pagination
          current={offset}
          total={total}
          pageSize={pageSize}
          showSizeChanger
          showTitle
          showTotal={(total, range) => `${range[0]}-${range[1]} (${total})`}
          pageSizeOptions={["8", "16", "24"]}
          onChange={(current, size) => {
            if (current !== offset) setOffset(current);
            if (size !== pageSize) setPageSize(size);
          }}
        /> */}

        <RenderMolecule
          moleculeConfig={{
            type: "MoleculePagination",
            className: "my-5",
            style: {},
            props: {
              offset: offset,
              total: total,
              pageSize: pageSize,
              onChange: (current: number, size: number) => {
                if (current !== offset) setOffset(current);
                if (size !== pageSize) setPageSize(size);
              },
              textObject: {
                className: "text-[#3C3C3C] text-[14px]",
              },
              buttonObject: {
                className:
                  "bg-white rounded-full py-1 px-3 flex items-center justify-center cursor-pointer text-[#3C3C3C] border border-[#E6E6E6] border-solid",
                active: { className: "bg-cozy text-white" },
              },
              pageSizeObject: {
                className: "",
                item: ["8", "16", "24"],
              },
            },
          }}
        />
      </BlockDiv>
    </BlockDiv>
  );
};

export default CozyProductDataviewControlPagination;
