import { useRouter } from "next/router";
import _ from "lodash";
import { Select } from "antd";
import useGoLink from "@customhook/useGoLink";
import { useCloud } from "hooks/use-cloud";

import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useNumber from "@customhook/useNumber";

const CozyProductDataviewControlSort = () => {
  const router = useRouter();
  const cloudContext = useCloud();

  const myIndex = _.findIndex(controlSortList, (e: any) => {
    return (
      e.sortcolumnnames ===
        cloudContext.cloudURL?.listOption?.sorting?.sortcolumnnames &&
      e.sorttype === cloudContext.cloudURL?.listOption?.sorting?.sorttype
    );
  });

  const { number, setNumber } = useNumber(myIndex || 2, 0);

  return (
    <BlockDiv
      customClassName=""
      divNumber="CozyProductDataviewControlSortOuter"
    >
      <BlockDiv
        customClassName="flex flex-row items-center gap-x-3"
        divNumber="CozyProductDataviewControlSortInner"
      >
        <Select
          defaultValue={controlSortList[number]?.title}
          style={{ width: 180 }}
          onChange={(value: any, option: any) => {
            setNumber(Number(option?.key));
            useGoLink(router, {
              query: {
                sortcolumnnames: option?.sortcolumnnames,
                sorttype: option?.sorttype,
              },
              props: {
                shallow: true,
                keepQuery: true,
              },
            });
          }}
        >
          {controlSortList.map((item: any, index: number) => {
            return (
              <Select.Option
                key={item?.id || index}
                sortcolumnnames={item?.sortcolumnnames}
                sorttype={item?.sorttype}
                value={item?.title}
              >
                <RenderAtom
                  item={{
                    value: item?.title,
                    positionnemgoo: {
                      atom: {
                        type: "text",
                        className: "",
                        props: { maxLength: 30 },
                      },
                      tooltip: item?.tooltip,
                      // url: {
                      //   query: {
                      //     viewsort: index,
                      //   },
                      //   props: {
                      //     shallow: true,
                      //   },
                      // },
                    },
                  }}
                  defaultAtom="text"
                  customClassName="w-full"
                />
              </Select.Option>
            );
          })}
        </Select>
      </BlockDiv>
    </BlockDiv>
  );
};

export default CozyProductDataviewControlSort;

const controlSortList = [
  {
    title: "Онцгой",
    sortcolumnnames: "featured",
    sorttype: "desc",
    tooltip: {
      text: "Онцгой бараа эхэндээ",
    },
  },
  {
    title: "Хямдралтай",
    sortcolumnnames: "issale",
    sorttype: "desc",
    tooltip: {
      text: "Хямдралтай бараа эхэндээ",
    },
  },
  {
    title: "Шинэ",
    sortcolumnnames: "createddate",
    sorttype: "desc",
    tooltip: {
      text: "Шинэ бараа эхэндээ",
    },
  },
  {
    title: "Үнэ өсөхөөр",
    sortcolumnnames: "saleprice",
    sorttype: "asc",
    tooltip: {
      text: "Хямд бараа эхэндээ",
    },
  },
  {
    title: "Үнэ буурахаар",
    sortcolumnnames: "saleprice",
    sorttype: "desc",
    tooltip: {
      text: "Үнэтэй бараа эхэндээ",
    },
  },
];
