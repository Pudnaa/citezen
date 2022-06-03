import { FC } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import Link from "next/link";

type PropsType = {
	item?: any;
	color?: string;
	href?: any;
	customClassName?: string;
	children: any;
};

const AtomLinkV3: FC<PropsType> = ({
	item = {},
	color = "sso",
	href,
	customClassName = "",
	children,
}) => {
	const router = useRouter();
	const { path, query } = item;

	const onClick = (e: any) => {
		e.preventDefault();
		router.push(href);
	};

	const style = {
		color: router.asPath === href ? "red" : "black",
	};

	return (
		<a
			href={href}
			onClick={onClick}
			style={style}
			className={`hover:text-${color} ${customClassName}`}
		>
			{children}
		</a>
		// <Link href={path}>
		// 	<a className={`hover:text-${color} ${customClassName}`}>{children}</a>
		// </Link>
	);
};

export default AtomLinkV3;
