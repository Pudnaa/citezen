import React, { FC } from "react";
import type { GetServerSideProps } from "next";
import { withIronSession } from "next-iron-session";

const Logout = () => {
  return <h1>Redirecting...</h1>
};

async function handler(context: any) {
  context.req.session.destroy();
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    }
  }   
}

export const getServerSideProps: GetServerSideProps = withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "vrwebapp_cookie",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});

export default Logout;
