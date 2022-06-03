import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import { signIn, useSession, signOut } from "next-auth/react";
export default function CozyHeaderUserMenuList() {
  // console.log("heartList :>> ", heartList);

  return (
    <BlockDiv customClassName="flex flex-col divide-y divide-gray-200 divide-solid">
      {userMenuList.map((item: any, index: number) => {
        return (
          <BlockDiv
            key={item?.id || index}
            customClassName="flex flex-row items-center py-2 gap-x-2"
            divNumber="CozyHeaderUserMenuListItemBlock"
          >
            <RenderAtom
              item={{ value: item?.icon }}
              defaultAtom="icon"
              customClassName={`text-gray-500 hover:text-gray-800 w-5`}
            />
            <RenderAtom
              item={{
                value: item?.title,
                positionnemgoo: {
                  atom: {
                    type: "text",
                    className: "",
                    props: { maxLength: 20 },
                  },
                  // tooltip: { text: item?.title },
                  url: item.url,
                },
              }}
              defaultAtom="text"
            />
          </BlockDiv>
        );
      })}
      <BlockDiv
        customClassName="flex flex-row items-center py-2 gap-x-2"
        divNumber="CozyHeaderUserMenuListItemBlock"
      >
        <RenderAtom
          item={{ value: "far fa-sign-out" }}
          defaultAtom="icon"
          customClassName={`text-gray-500 hover:text-gray-800 w-5`}
        />
        <span className="cursor-pointer" onClick={() => signOut()}>
          Гарах
        </span>
      </BlockDiv>
    </BlockDiv>
  );
}

const userMenuList = [
  {
    title: "Миний профайл",
    icon: "far fa-user",
    url: {
      path: "/profile",
    },
  },
  {
    title: "Миний захиалга",
    icon: "far fa-shopping-bag",
    url: {
      path: "/profile",
    },
  },
];
