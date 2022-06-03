import { FC, useState, useEffect } from "react";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import useNumber from "@customhook/useNumber";
import _ from "lodash";
import { Select, Tooltip } from "antd";

type PropsType = {
  type?: "default" | "modern";
  item: Array<any>;
  offset: Number;
  total: Number;
  pageSize: Number;
  customClassName?: string;
  customStyle?: object;
  onChange?: any;
  buttonObject?: any;
  textObject?: any;
  pageSizeObject?: any;
  divNamePrefix?: string;
};

const MoleculePagination: FC<PropsType> = ({
  type = "default",
  item: myList,
  offset,
  total,
  pageSize,
  customClassName = "",
  customStyle = {},
  onChange,
  buttonObject,
  textObject,
  pageSizeObject,
  divNamePrefix = "",
}) => {
  const { number, setNumber } = useNumber(0, 0);

  return (
    <BlockDiv
      customClassName={`w-full ${customClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculePaginationOuter`}
    >
      <BlockDiv
        customClassName="w-full"
        divNumber={`${divNamePrefix}MoleculePaginationInner`}
      >
        <Pagination
          offset={offset}
          total={total}
          pageSize={pageSize}
          onChange={onChange}
          buttonObject={buttonObject}
          textObject={textObject}
          pageSizeObject={pageSizeObject}
        />
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculePagination;

/* ------------------------------------------------------ */
/*                       PAGINATION                       */
/* ------------------------------------------------------ */
const Pagination = ({
  offset,
  total,
  pageSize,
  onChange,
  buttonObject,
  textObject,
  pageSizeObject,
}) => {
  const maxPages = _.round(total / pageSize);

  const { number: currentPage, setNumber: setCurrentPage } = useNumber(
    offset,
    1,
    maxPages
  );
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;

  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;

  const showStartItem = offset * pageSize - pageSize + 1;
  let showEndItem = offset * pageSize;
  if (showEndItem > total) showEndItem = total;

  const pageList = _.range(leftSide, rightSide + 1);
  console.log("🚀 ~ pageList", pageList);

  useEffect(() => {
    onChange(currentPage, pageSize);
  }, [currentPage]);

  return (
    <BlockDiv
      customClassName="w-full flex flex-row items-center justify-center gap-x-5"
      divNumber="MoleculePaginationBlock"
    >
      <RenderAtom
        item={{
          value: `${total} бүтээгдэхүүнээс ${showStartItem}-${showEndItem} хэсгийг харуулж байна.`,
        }}
        defaultAtom="text"
        customClassName={textObject?.className}
        customStyle={textObject?.style}
      />

      <BlockDiv
        customClassName="flex flex-row items-center gap-x-2"
        divNumber="MoleculePaginationButtonBlock"
      >
        <RenderAtom
          item={{ value: "Өмнөх" }}
          customClassName={`${buttonObject?.className} ${
            currentPage === 1 && "text-gray-300 bg-gray-200"
          }`}
          customStyle={{
            width: "auto",
            height: "40px",
          }}
          defaultAtom="button"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        />
        {pageList.map((item: any, index: number) => {
          return (
            <BlockDiv
              key={item?.id || index}
              customClassName={`${buttonObject?.className} ${
                offset == item ? buttonObject?.active?.className : ""
              }`}
              customStyle={{
                width: "40px",
                height: "40px",
              }}
              onClick={() => {
                setCurrentPage(item);
              }}
            >
              {item}
            </BlockDiv>
          );
        })}

        <RenderAtom
          item={{ value: "Дараах" }}
          customClassName={`${buttonObject?.className} ${
            currentPage === maxPages && "text-gray-300 bg-gray-200"
          }`}
          customStyle={{
            width: "auto",
            height: "40px",
          }}
          defaultAtom="button"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        />
      </BlockDiv>

      <BlockDiv
        customClassName=""
        customStyle={{}}
        divNumber="MoleculePaginationPagesizeBlock"
      >
        <Tooltip title="Нэг хуудсанд харуулах барааны тоо">
          <Select
            defaultValue={pageSize}
            // style={{ width: 180 }}
            onChange={(value: any) => {
              onChange(currentPage, value);
            }}
          >
            {(pageSizeObject?.item).map((item: any, index: number) => {
              return (
                <Select.Option key={item?.id || index} value={item}>
                  <RenderAtom
                    item={{
                      value: item,
                      positionnemgoo: {
                        atom: {
                          type: "text",
                          className: "",
                          props: { maxLength: 30 },
                        },
                        tooltip: item?.tooltip,
                      },
                    }}
                    defaultAtom="text"
                    customClassName="w-full"
                  />
                </Select.Option>
              );
            })}
          </Select>
        </Tooltip>
      </BlockDiv>
    </BlockDiv>
  );
};
