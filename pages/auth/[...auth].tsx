import { FC } from "react";
import type { GetServerSideProps } from "next";
import { withIronSessionSsr } from "iron-session/next";

import { metaConfig } from "config/metaConfig";
import prepareDatas from "util/preparePageListData";
import _ from "lodash";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LayoutWrapper from "@middleware/components/Layout/PageWrapper";
import { serverData } from "service/callERPServices";
import { isEmpty, jsonParse, decrypt } from "util/helper";
import parseHtml from "html-react-parser";
import { decode } from "html-entities";
import moment from "moment";

type PropsType = {
  response: any;
  readyMergedLayoutConfig: any;
  meta_bp_layout_section: any;
  mergedLayout: any;
  generalConfig: any;
  ourMetaConstant: any;
};

const Auth: FC<PropsType> = ({
  response,
  readyMergedLayoutConfig,
  meta_bp_layout_section,
  mergedLayout,
  generalConfig,
  ourMetaConstant,
}) => {
  return (
    <div style={{ fontSize: 16, padding: 20 }}>
      <span style={{ color: "#f10101" }}>Алдаа гарлаа:</span>{" "}
      {parseHtml(decode(response?.text))}
    </div>
  );
};

// https://github.com/vvo/iron-session#nextjs-withironsessionapiroutehandler-ironoptions

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async function getServerSideProps(context: any) {
    const userSession = context.req.session.user || null;
    const encryptstring = context.query.auth.join("/") || null;
    const ourMetaConstant = metaConfig.metaDev;
    const decryptobject = jsonParse(decrypt(encryptstring));
    let errorObject = {
      text: "Service error",
    };

    if (moment() > moment(decryptobject.expiredate).add(20, "seconds")) {
      return {
        props: {
          response: { text: "Page expired!" },
        },
      };
    }

    if (!userSession) {
      const checkUser =
        (
          await serverData(
            ourMetaConstant.serverUrl,
            "ceAutoLoginCheckList_004",
            decryptobject
          )
        )?.result || [];

      if (isEmpty(checkUser)) {
        const createUser = await serverData(
          ourMetaConstant.serverUrl,
          "clCrmUserDv_001",
          decryptobject
        );

        if (createUser.status !== "success") {
          errorObject = createUser;
          return {
            props: {
              response: errorObject,
            },
          };
        }
      }

      const loginResult = await serverData(ourMetaConstant.serverUrl, "login", {
        ...checkUser,
        isHash: 0,
      });

      if (loginResult.status === "success") {
        context.req.session.user = loginResult.result;
        await context.req.session.save();

        return {
          redirect: {
            destination: "/" + decryptobject.url,
            permanent: false,
          },
        };
      } else {
        errorObject = loginResult;
      }
    } else {
      return {
        redirect: {
          destination: "/" + decryptobject.url,
          permanent: false,
        },
      };
    }

    return {
      props: {
        response: errorObject,
      },
    };
  },
  {
    cookieName: "vrwebapp_cookie",
    password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
  }
);

export default Auth;
