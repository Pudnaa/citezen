import "styles/antd.css";
import "styles/globals.css";
import "styles/components.scss";
import "public/icon/css/all.css";
import "public/fonts/inter/styles.css";
import "public/fonts/roboto/styles.css";
import "public/fonts/segoe/style.css";
import "public/fonts/robotoslab/styles.css";
import "public/fonts/robotocondensed/styles.css";
import "nprogress/nprogress.css";
import Error from "next/error";
import { useState } from "react";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import Nprogress from "nprogress";
import { useRouter } from "next/router";
import { Head } from "@components/common";
import { CloudStore } from "context/CloudContext";
import { UserStore } from "context/UserContext";
import { PageStore } from "context/PageContext";
import { HookFormStore } from "context/HookFormContext";
import { notification } from "antd";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import _ from "lodash";
import { toBoolean } from "util/helper";
import Script from "next/script";
// CloudApp({ Component, pageProps }: AppProps) {
function CloudApp({ Component, pageProps: { ...pageProps } }: AppProps) {
	const router = useRouter();

	// const silent = toBoolean(router.query?.silent || false);

	const [pageLoading, setPageLoading] = useState<boolean>(false);

	/*
  Nprogress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 800,
    showSpinner: true,
  });

  useEffect(() => {
    if (silent) return;
    console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBB");

    const handleStart = () => {
      console.log("Эхэллээ. fff");
      setPageLoading(true);
    };
    const handleComplete = () => {
      console.log("Дууслаа. reter");
      setPageLoading(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);
  }, [router.asPath]);

  if (!silent) {
    Router.events.on("routeChangeStart", Nprogress.start);
    Router.events.on("routeChangeError", Nprogress.done);
    Router.events.on("routeChangeComplete", Nprogress.done);
  }
  */

	// if (pageProps.error) {
	//   return (
	//     <Error
	//       statusCode={pageProps.error.statusCode}
	//       title={pageProps.error.message}
	//     />
	//   );
	// }

	// if (pageLoading) {
	//   return (
	//     <div className="w-screen h-screen flex justify-center items-center">
	//       <div className="animate-spin rounded-full h-44 w-44 border-b-2 border-gray-900"></div>
	//     </div>
	//   );
	// } else {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy="lazyOnload">
				{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
			</Script>
			<Head />
			<SWRConfig
				value={{
					revalidateOnFocus: false, //browser идэвхжихэд refresh хийх эсэх
					revalidateOnReconnect: false,
					refreshWhenOffline: false,
					refreshInterval: 0,
					refreshWhenHidden: false,
					shouldRetryOnError: false,
					errorRetryCount: 1,
					errorRetryInterval: 5000,
					fetcher: (resource, init) =>
						fetch(resource, init)
							.then((res) => res.json())
							.catch((err) =>
								console.log(`App дээр Fetch алдаа гарчээ: ${err}`),
							),
					onError: (error, key) => {
						if (error.status !== 403 && error.status !== 404) {
							console.error("Алдаа гарлаа", error);
							notification.error({
								message: "Алдаа гарлаа",
								description: error,
							});
						}
					},
				}}
			>
				<SessionProvider
					session={pageProps.session}
					// clientMaxAge={0}
					refetchInterval={15 * 60} //15 минут тутамд user login шалгана.
					refetchOnWindowFocus={false} //цонх focus-лах үед refetch хийх эсэх
				>
					<UserStore>
						<CloudStore>
							<PageStore>
								<HookFormStore>
									<Component {...pageProps} />
								</HookFormStore>
							</PageStore>
						</CloudStore>
					</UserStore>
				</SessionProvider>
			</SWRConfig>
		</>
	);
	// }
}

export default appWithTranslation(CloudApp);
