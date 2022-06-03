import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
	GetServerSidePropsContext,
	GetServerSidePropsResult,
	NextApiHandler,
} from "next";

const sessionOptions = {
	password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
	cookieName: "vrwebapp_cookie_eshop_oooooooooo",
	cookieOptions: {
		maxAge: 60 * 60,
		secure: process.env.NODE_ENV === "production",
	},
};

export function withSessionRoute(
	handler: NextApiHandler,
	sessionOptionss: any,
) {
	return withIronSessionApiRoute(handler, sessionOptionss);
}

export function withSessionSsr<
	P extends { [key: string]: unknown } = { [key: string]: unknown },
>(
	handler: (
		context: GetServerSidePropsContext,
	) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
	return withIronSessionSsr(handler, sessionOptions);
}
export const ironOptions = {
	password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
	cookieName: "vrwebapp_cookie_eshop",
	cookieOptions: {
		maxAge: 12 * 60 * 60 * 1000, // 24 hours // 24 hours
		secure: process.env.NODE_ENV === "production",
	},
};
