import { FC } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";

type PropsType = {
  item: string;
  link?: string;
  color?: string;
  customClassName?: string;
  customStyle?: any;
  truncateRow?: number;
};

const AtomTitle: FC<PropsType> = ({
  item,
  link,
  color = "sso",
  customStyle,
  customClassName = "",
  truncateRow = 0,
}) => {
  return (
    <div
      className={`${
        !customClassName.includes("text-") && "text-lg leading-6"
      } ${
        !customClassName.includes("font-") && "font-bold"
      } ${customClassName}`}
      style={{
        ...customStyle,
      }}
    >
      {isEmpty(link) ? (
        <span className={`line-clamp-${truncateRow}`}>{item}</span>
      ) : (
        <Link href={link || ""}>
          <a className={` hover:text-${color}`}>
            <span className={`line-clamp-${truncateRow}`}>{item}</span>
          </a>
        </Link>
      )}
    </div>
  );
};

export default AtomTitle;
