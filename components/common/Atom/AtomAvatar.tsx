import { FC } from "react";
import { useUser } from "hooks/use-user";
import RenderAtom from "@components/common/Atom/RenderAtom";

type PropsType = {
  item?: string;
  type?: "simple" | "square";
  customClassName?: string;
  customStyle?: object;
};

const AtomAvatar: FC<PropsType> = ({
  item = "simple",
  customStyle = {},
  customClassName = "",
}) => {
  const userContext = useUser();
  const userData = userContext.userData;

  // console.log("userData", userData);

  return (
    <>
      <RenderAtom
        item={{
          // value: "https://dev.veritech.mn/" + userData?.emppicture,
          value: userData?.emppicture,
        }}
        defaultAtom="image"
        customClassName="w-10 h-10 rounded-full object-cover"
      />
    </>
  );
};

export default AtomAvatar;
