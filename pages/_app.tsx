import "styles/antd.css";
import "styles/globals.css";
import "styles/components.scss";
import "public/icon/css/all.css";
import "public/fonts/inter/styles.css";
import "public/fonts/roboto/styles.css";
import "nprogress/nprogress.css";

// import 'keen-slider/keen-slider.min.css'
import { FC, useState, useEffect } from "react";
import { SWRConfig } from "swr";
import type { AppProps } from "next/app";
import Nprogress from "nprogress";
import Router from "next/router";
import { Head } from "@components/common";
import { CloudStore } from "context/CloudContext";
import { UserStore } from "context/UserContext";
import { notification } from "antd";

const Noop: FC = ({ children }) => <>{children}</>;

export default function cloudApp({ Component, pageProps }: AppProps) {
  // const Layout = (Component as any).Layout || Noop;
  // useEffect(() => {
  //   document.body.classList?.remove("loading");
  // }, []);

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const start = () => {
  //     console.log("start loading");
  //     setLoading(true);
  //   };
  //   const end = () => {
  //     console.log("loading findished");
  //     setLoading(false);
  //   };
  //   Router.events.on("routeChangeStart", start);
  //   Router.events.on("routeChangeComplete", end);
  //   Router.events.on("routeChangeError", end);
  //   return () => {
  //     Router.events.off("routeChangeStart", start);
  //     Router.events.off("routeChangeComplete", end);
  //     Router.events.off("routeChangeError", end);
  //   };
  // }, []);

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
            fetch(resource, init).then((res) => res.json()),
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
            {/* <Layout pageProps={pageProps}> */}
            <Component {...pageProps} />
            {/* </Layout> */}
          </UserStore>
        </CloudStore>
      </SWRConfig>
    </>
  );
}

if (typeof window !== "undefined") {
  Nprogress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 800,
    showSpinner: true,
  });

  Router.events.on("routeChangeStart", Nprogress.start);
  Router.events.on("routeChangeError", Nprogress.done);
  Router.events.on("routeChangeComplete", Nprogress.done);

  // Router.onRouteChangeStart = (url) => {
  //   Nprogress.start();
  // };

  // Router.onRouteChangeComplete = (url) => {
  //   Nprogress.done();
  // };

  // Router.onRouteChangeError = (url) => {
  //   Nprogress.done();
  // };
}
