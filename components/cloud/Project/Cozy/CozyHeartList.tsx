import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import { Empty } from "antd";
import BlockDiv from "@components/common/Block/BlockDiv";
import useProcessHeartList from "./useProcessHeartList";

export default function CozyHeartList() {
  const { heartList, heartMutate } = useProcessHeartList();

  // console.log("heartList :>> ", heartList);
  if (heartList.length === 0)
    return <Empty description="Хүслийн жагсаалт хоосон байна." />;

  return (
    <BlockDiv customClassName="flex flex-col divide-y divide-gray-200 divide-solid">
      {heartList.map((item, index) => {
        return (
          <BlockDiv
            key={item?.id || index}
            customClassName="flex flex-row items-center py-2 gap-x-2"
            divNumber="CozyHeartListItemBlock"
          >
            <RenderAtom
              item={{ value: item?.photo }}
              defaultAtom="image"
              customClassName="w-10 h-10"
            />
            <RenderAtom
              item={{
                value: item?.name,
                positionnemgoo: {
                  atom: {
                    type: "text",
                    className: "",
                    props: { maxLength: 20 },
                  },
                  tooltip: { text: item?.name },
                  url: {
                    path: "/product/detail",
                    query: {
                      id: item.id,
                    },
                  },
                },
              }}
              defaultAtom="text"
            />
          </BlockDiv>
        );
      })}
    </BlockDiv>
  );
}
