import { FC } from "react";
import _ from "lodash";
import {
  AtomTitleV2,
  AtomImageV2,
  AtomTextV2,
  AtomNumberV2,
  AtomIconV2,
  AtomCurrencyV2,
  AtomButtonV2,
  AtomTagV2,
} from "@components/common/Atom";

type PropsType = {
  item?: any;
  defaultAtom?: string;
  customClassName?: any;
  customStyle?: any;
  customProps?: any;
};

export const RenderAtom: FC<PropsType> = ({
  item,
  defaultAtom = "text",
  customClassName,
  customStyle,
  customProps,
  ...props
}) => {
  const value = item?.value || "";
  const positionnemgoo = item?.positionnemgoo || {};

  // console.log(item);
  // Одоо энд tailwind override оруулж ирнэ.

  const atom = positionnemgoo?.atom || { type: defaultAtom };
  const atomClassName = `${customClassName} ${atom?.className || ""}`;
  const atomStyle = { ...customStyle, ...atom?.style };
  const atomProps = {
    ...customProps,
    item: item,
    customClassName: atomClassName,
    customStyle: atomStyle,
    ...(atom?.props || {}),
  };

  switch (atom?.type || defaultAtom) {
    case "title":
      return <AtomTitleV2 {...atomProps} />;
    case "text":
      return <AtomTextV2 {...atomProps} />;
    case "image":
      return <AtomImageV2 {...atomProps} />;
    case "button":
      return <AtomButtonV2 {...atomProps} />;
    case "currency":
      return <AtomCurrencyV2 {...atomProps} />;
    case "tag":
      return <AtomTagV2 {...atomProps} />;
    case "icon":
      return <AtomIconV2 {...atomProps} />;

    default:
      break;
  }

  return <>{props.children}</>;
};

export default RenderAtom;

// {
//   "url": {
//       "path": "/devcloud/16342674214531?id={itemid}"
//   },
//   "atom": {
//       "type": "title",
//       "className": "",
//       "style": {}
//   }
// }
