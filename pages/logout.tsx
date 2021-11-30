import React, { FC } from "react";
import type { GetServerSideProps } from "next";
// import { withIronSession } from "next-iron-session";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { ironSession } from "iron-session/express";

const Logout = () => {
  return <h1>Redirecting...</h1>;
};

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async function getServerSideProps(context: any) {
    // context.req.session.destroy();

    delete context.req.session.user;

    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  },
  {
    cookieName: "vrwebapp_cookie",
    password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
  }
);

export default Logout;
