import "styles/antd.css";
import "styles/globals.css";
import "styles/components.scss";
import "public/icon/css/all.css";
import "public/fonts/inter/styles.css";
import "public/fonts/roboto/styles.css";
import "public/fonts/robotoslab/styles.css";
import "nprogress/nprogress.css";

import App from "next/app";
import { useState, useEffect } from "react";
import { SWRConfig } from "swr";
import type { AppProps, AppContext } from "next/app";
import Nprogress from "nprogress";
import Router, { useRouter } from "next/router";
import { Head } from "@components/common";
import { CloudStore } from "context/CloudContext";
import { UserStore } from "context/UserContext";
import { notification } from "antd";
import { appWithTranslation } from "next-i18next";

function CloudApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  Nprogress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 800,
    showSpinner: true,
  });

  useEffect(() => {
    const handleStart = () => {
      console.log("Эхэллээ.");
      setPageLoading(true);
    };
    const handleComplete = () => {
      console.log("Дууслаа.");
      setPageLoading(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);
  }, [router]);

  Router.events.on("routeChangeStart", Nprogress.start);
  Router.events.on("routeChangeError", Nprogress.done);
  Router.events.on("routeChangeComplete", Nprogress.done);

  if (pageLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-44 w-44 border-b-2 border-gray-900"></div>
      </div>
    );
  } else {
    return (
      <>
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
                .catch((err) => console.log(`Fetch алдаа гарчээ: ${err}`)),
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
          <CloudStore>
            <UserStore>
              <Component {...pageProps} />
            </UserStore>
          </CloudStore>
        </SWRConfig>
      </>
    );
  }
}

// CloudApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default appWithTranslation(CloudApp);
