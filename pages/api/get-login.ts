import { serverData } from "../../service/Service";
import { metaConfig } from "../../config/metaConfig";
import { jsonParse } from "util/jsonParse";
// import { withIronSession } from "next-iron-session";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(req: any, res: any) {
  const processcode = req.query.processcode || "";
  const parameters = jsonParse(req.query.parameters || "{}");

  const result = await serverData(
    metaConfig.serverUrl,
    processcode,
    parameters
  );

  if (result.status === "success") {
    // req.session.set("usersession", result.result);
    req.session.user(result.result);
    await req.session.save();
  }

  res.status(200).json(result);
}

// export default withIronSessionApiRoute(handler, {
//   password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
//   cookieName: "vrwebapp_cookie",
// });
export default withIronSessionApiRoute(
  async function loginRoute(req: any, res: any) {
    const processcode = req.query.processcode || "";
    const parameters = jsonParse(req.query.parameters || "{}");

    const result = await serverData(
      metaConfig.serverUrl,
      processcode,
      parameters
    );

    // console.log("DDDDDDD", result);
    // console.log("DDDDDDD parameters", parameters);

    // get user from database then:
    if (result.status === "success") {
      // req.session.set("usersession", result.result);
      req.session.user = result.result;
      await req.session.save();
    }

    res.status(200).json(result);
  },
  {
    password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
    cookieName: "vrwebapp_cookie",
  }
);
