import { FC } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";

type PropsType = {
  item?: string;
  color?: string;
  customClassName?: string;
  children: any;
};

const AtomLink: FC<PropsType> = ({
  item = "",
  color = "sso",
  customClassName = "",
  children,
}) => {
  if (isEmpty(item)) {
    return children;
  } else {
    return (
      <Link href={item}>
        <a className={`hover:text-${color} ${customClassName}`}>{children}</a>
      </Link>
    );
  }
};

export default AtomLink;
