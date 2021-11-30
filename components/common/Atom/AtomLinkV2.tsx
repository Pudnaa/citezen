import { FC } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import Link from "next/link";

type PropsType = {
  item?: any;
  color?: string;
  customClassName?: string;
  children: any;
};

const AtomLinkV2: FC<PropsType> = ({
  item = {},
  color = "sso",
  customClassName = "",
  children,
}) => {
  const router = useRouter();

  // console.log("AtomLinkV2 item", item);
  const { path, query } = item;

  const onClick = (item: any) => {
    if (query) {
      console.log("onClick", query);
      router.query[query?.label] = query?.value;
      router.push(router);
    }
  };

  if (isEmpty(path)) {
    return <span onClick={(e: any) => onClick(item)}>{children}</span>;
  } else {
    return (
      <Link href={path}>
        <a className={`hover:text-${color} ${customClassName}`}>{children}</a>
      </Link>
    );
  }
};

export default AtomLinkV2;
