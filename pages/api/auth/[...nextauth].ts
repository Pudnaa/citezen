import axios from "axios";
import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
// import GithubProvider from "next-auth/providers/github";
// import TwitterProvider from "next-auth/providers/twitter";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";

// import AppleProvider from "next-auth/providers/apple";
// import EmailProvider from "next-auth/providers/email";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export default NextAuth({
	// https://next-auth.js.org/configuration/providers/oauth
	providers: [
		CredentialsProvider({
			name: "нэвтрэх",
			credentials: {
				username: { label: "username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			// Login
			// CreateCustomer (telephone, email, username)

			authorize: async (credentials: any) => {
				try {
					const payload = {
						username: credentials.username,
						password: credentials.password,
						iscustomer: credentials.iscustomer,
						passwordhash: credentials.passwordhash,
						isldap: credentials.isLdap || 0,
						isHash: credentials.isHash || 0,
					};
					let isCustomer = "false";

					if (credentials.iscustomer) {
						isCustomer = credentials.iscustomer;
					}

					const headerParam = {
						iscustomer: isCustomer,
					};

					//login дуудаж байна.
					const URL = process.env.URL;
					const param = {
						processcode: "login",
						parameters: payload,
						headerParam,
					};

					const { data } = await axios.post(URL + `/api/post-process`, param);
					console.log("dre resitem user param", param);
					console.log("dre resitem user response", data);
					if (data.result) {
						const res = data.result;
						const user = {
							id: data.result.id,
							name: data.result.customername || data.result.username,
							email: data.result.customeremail || data.result.email,
							image:
								data.result.customerphoto ||
								"https://res.cloudinary.com/dzih5nqhg/image/upload/v1629693441/cloud/icons/Icons-05_tlc3qq.svg",
							...res,
						};
						console.log("dre resitem user user", user);
						return user;
					}
					return null;
				} catch (error) {
					Promise.reject(
						new Error("Invalid Username  and Password combination"),
					);
				}

				return null;
			},
		}),

		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		Auth0Provider({
			clientId: process.env.AUTH0_ID,
			clientSecret: process.env.AUTH0_SECRET,
			issuer: process.env.AUTH0_ISSUER,
		}),
	],
	theme: {
		colorScheme: "light",
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 60,
	},

	secret: process.env.SECRET,
	jwt: {
		maxAge: 30 * 60,
		secret: process.env.SECRET,
	},
	// redirect: false,
	callbacks: {
		async jwt({ token, user, account, profile, isNewUser }) {
			user && (token = user);

			// console.log("baseUrl baseUrl jwt", account, user, profile);
			return Promise.resolve(token);
		},
		async signIn({ user, account, profile, email, credentials }) {
			// console.log(
			// 	"baseUrl baseUrl signIn",
			// 	account,
			// 	user,
			// 	profile,
			// 	credentials,
			// );
			if (!user.id) {
				return Promise.reject(new Error("Sorry, I couldn't find that user"));
			}
			return true;
		},

		async redirect({ url, baseUrl }) {
			// console.log("baseUrl baseUrl baseUrl", url, baseUrl);
			return baseUrl;
		},
		async session({ session, token, user }) {
			session.id = token.id;
			session.crmuserid = token.crmuserid;
			session.sessionCustUserId = token.crmuserid;
			session.dbsessionid = token.sessionid;
			session.profileImg = token.image;
			session.username = token.username;
			return Promise.resolve(session);
		},
	},

	events: {
		async signIn(message) {
			/* on successful sign in */
			// console.log("on successful sign in", message);
		},
		async signOut(message) {
			/* on signout */
			console.log("on successful signout ", message);
		},
		async createUser(message) {
			/* user created */
		},
		async updateUser(message) {
			/* user updated - e.g. their email was verified */
		},
		async linkAccount(message) {
			/* account (e.g. Twitter) linked to a user */
		},
		async session(message) {
			/* session is active */
			// console.log("o session is active", message);
		},
	},
	debug: true,
});

// 104252776097986388326
