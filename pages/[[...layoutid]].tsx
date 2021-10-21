import { FC } from "react";
import type { GetServerSideProps } from "next";
import { withIronSession } from "next-iron-session";
import { serverData } from "../service/Service";
import { meta } from "../config/service";
import { useUser } from "hooks/use-user";
import LayoutWrapper from "middleware/components/Layout/LayoutWrapper";
// import Layout from "middleware/meta/layout";

type PropsType = {
  layoutConfig: object;
  userSession: object;
};

const Home: FC<PropsType> = ({ layoutConfig, userSession }) => {
  const userContext = useUser();
  userContext.setUData(userSession);

  return layoutConfig ? (
    <>
      {/* <LayoutWrapper layoutConfig={layoutConfig} /> */}
      Энд өөр хуудас харуулах ёстой.
    </>
  ) : (
    <h1>Layout тохиргоо олдсонгүй!</h1>
  );
};

async function handler(context: any) {
  const usersession = context.req.session.get("usersession") || null;
  let layoutid = context.query.layoutid || null;

  if (!usersession) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (!layoutid) {
    layoutid = "16297049215981"; //portalLayoutHomePage Homae Page хуудас
  } else if (layoutid[0] === "page") {
    layoutid = layoutid[1];
  } else if (layoutid[0] === "login") {
    return {
      redirect: {
        destination: "login",
        permanent: false,
      },
    };
  }

  const { result } = await serverData(meta.serverUrl, "layoutHdr_004", {
    filtermetadataid: layoutid,
  });

  return {
    props: {
      userSession: usersession,
      layoutConfig: result,
    },
  };
}

export const getServerSideProps: GetServerSideProps = withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "vrwebapp_cookie",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});

export default Home;
