import React, { FC } from "react";
import _ from "lodash";
import { decode } from "html-entities";
import parseHtml from "html-react-parser";
import { overrideTailwindClasses } from "tailwind-override";
import BlockDiv from "@components/common/Block/BlockDiv";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
type PropsType = {
  item: any;
  link?: string;
  color?: string;
  customStyle?: any;
  customClassName?: string;
  truncateRow?: number;
  maxLength?: number;
  onClick?: any;
  showSample?: boolean;
  customDivNumber?: string;
  divNamePrefix?: string;
  children?: any;
};

const AtomTextV2: FC<PropsType> = ({
  item,
  color = "sso",
  customClassName = "",
  customStyle,
  truncateRow = 0,
  maxLength = 9007199254740991,
  onClick = null,
  showSample = false,
  customDivNumber = "DivText",
  divNamePrefix = "",
  children,
}) => {
  const value: string = !showSample ? item?.value || "" : "Sample Text";
  const valueClassName = item?.className || "";

  //main хэсэг эхэлж байна.
  if (_.isEmpty(value)) return null;

  // const myValue = parseHtml(decode(value.substring(0, maxLength)));
  const content = decode(value.substring(0, maxLength));

  const MyValue = () => {
    return (
      <>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ p: React.Fragment }}
        >
          {value}

          {/* #Hello, *world*! Just a link: https://reactjs.com. */}
        </ReactMarkdown>
      </>
    );
  };

  return (
    <>
      <BlockDiv
        customClassName={overrideTailwindClasses(
          ` ${customClassName} ${valueClassName}`
        )}
        customStyle={customStyle}
        divNumber={`${divNamePrefix}${customDivNumber}`}
        type="span"
        onClick={onClick}
      >
        <span className={`line-clamp-${truncateRow}`}>
          {/* {parseHtml(decode(value.substring(0, maxLength)))} */}
          {/* <MyValue /> */}
          <ReactMarkdown
            children={content}
            rehypePlugins={[rehypeRaw]}
            components={{ p: React.Fragment }}
          />
          {children}
        </span>
      </BlockDiv>
    </>
  );
};

export default AtomTextV2;
