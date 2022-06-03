import { FC, useContext, useMemo } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import _ from "lodash";
import { toBoolean } from "util/helper";
import RenderAtomPosition from "./RenderAtomPosition";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import AtomLinkV2 from "./V2/AtomLinkV2";
import AtomTooltipV2 from "./V2/AtomTooltipV2";

type PropsType = {
  item?: any;
  defaultAtom?: string;
  customClassName?: any;
  customStyle?: any;
  customProps?: any;
  onClick?: any;
  customDivNumber?: string;
  divNamePrefix?: string;
  props?: any;
};

export const RenderAtom: FC<PropsType> = ({
  item,
  defaultAtom = "text",
  customClassName,
  customStyle,
  customProps,
  onClick,
  customDivNumber = undefined,
  divNamePrefix = "",
  ...props
}) => {
  const { widgetnemgooReady } = useContext(WidgetWrapperContext);
  const router = useRouter();

  //showposition=1 гэсэн механизмыг хэрэгжүүлэхийн тулд эхлүүлэв.
  const showPositionUrl = toBoolean(router?.query?.showposition || "0");
  const showPosition =
    toBoolean(widgetnemgooReady?.showPosition || false) || showPositionUrl;
  //showsample=1 гэсэн механизмыг хэрэгжүүлэхийн тулд эхлүүлэв.
  const showSample = toBoolean(router?.query?.showsample || "0");

  //main хэсэг эхэлж байна.
  const positionnemgoo = item?.positionnemgoo || {};

  const atom = positionnemgoo?.atom || { type: defaultAtom };
  const value = atom?.value ? atom?.value : item?.value;
  const className = atom?.classname ? atom?.classname : item?.classname;
  const atomClassName = `${customClassName} ${atom?.className || ""}`;
  const atomStyle = { ...customStyle, ...atom?.style };
  const atomProps = {
    ...customProps,
    item: { ...item, value: value, className: className },
    customClassName: atomClassName,
    customStyle: atomStyle,
    onClick: onClick,
    showSample: showSample,
    customDivNumber: customDivNumber,
    divNamePrefix: divNamePrefix,
    ...(atom?.props || {}),
  };

  //showposition=1 байвал position байрлал харуулаад дуусгана.
  if (showPosition)
    return (
      <RenderAtomPosition
        item={{ value: item?.rawConfig?.positionname }}
        customClassName={atomClassName}
      />
    );

  const atomList: any = {
    title: "V2/AtomTitleV2",
    text: "V2/AtomTextV2",
    image: "V2/AtomImageV2",
    img: "V2/AtomImageV3",
    button: "V2/AtomButtonV2",
    currency: "V2/AtomCurrencyV2",
    tag: "V2/AtomTagV2",
    icon: "V2/AtomIconV2",
    number: "V2/AtomNumberV2",
    input: "V2/AtomInputV2",
    imagemagnify: "V2/AtomImageMagnifyV2",
    avatar: "V2/AtomAvatarV2",
    line: "V2/AtomLineV2",
    forminput: "HookForm/AtomFormInputV2",
    forminputerror: "HookForm/AtomInputErrorTextV2",
  };

  const RenderComponent = useMemo(
    () =>
      dynamic(() =>
        import(
          `@components/common/Atom/${atomList?.[atom?.type] || "AtomTextV2"}`
        ).catch((err) => {
          return () => <>{props.children}</>;
        })
      ),
    []
  );

  return (
    <AtomLinkV2 item={positionnemgoo?.url} color={atomProps.color}>
      <AtomTooltipV2 item={positionnemgoo?.tooltip}>
        <RenderComponent {...atomProps}>{props.children}</RenderComponent>
      </AtomTooltipV2>
    </AtomLinkV2>
  );
};

export default RenderAtom;

// {
//   "url": {
//       "path": "/devcloud/16342674214531",
//       "query": {
//          "id":"{id}"
//       }
//   },
//   "atom": {
//       "type": "title",
//       "className": "",
//       "style": {}
//   },
//   "tooltip": {
//      "text": "Энд Tooltip харагдана"
//   }
// }
