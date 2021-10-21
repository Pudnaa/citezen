import { serverData } from "../../service/Service";
import { meta } from "../../config/service";
import { jsonParse } from "util/jsonParse";
import { withIronSession } from "next-iron-session";

async function handler(req: any, res: any) {
  const processcode = req.query.processcode || "";
  const parameters = jsonParse(req.query.parameters || "{}");

  const result = await serverData(meta.serverUrl, processcode, parameters);
  
  if (result.status === 'success') {
    req.session.set("usersession", result.result);
    await req.session.save();
  }

  res.status(200).json(result)
}

export default withIronSession(handler, {  
  password: "complex_password_at_least_32_characters_long",
  cookieName: "vrwebapp_cookie",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  }  
})
  