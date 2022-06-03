import RenderAtom from "@atom/RenderAtom";
import CozyHeartList from "./CozyHeartList";
import { Popover } from "antd";
import useProcessHeartList from "./useProcessHeartList";

export default function CozyHeartControl() {
  const { heartList, heartMutate } = useProcessHeartList();

  const icon = heartList.length > 0 ? "fas fa-heart" : "far fa-heart";
  const className = heartList.length > 0 ? "text-pink-700" : "";

  return (
    <>
      <Popover
        content={<CozyHeartList />}
        title="Хүслийн жагсаалт"
        trigger="hover"
        placement="bottom"
      >
        <div className="w-full h-full">
          <RenderAtom
            item={{
              value: icon,
              positionnemgoo: {
                tooltip: { text: "Хүслийн жагсаалт" },
              },
            }}
            defaultAtom="icon"
            customClassName={`text-xl block ${className}`}
          />
        </div>
      </Popover>
    </>
  );
}
