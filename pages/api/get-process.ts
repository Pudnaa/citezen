import { serverData } from "service/callERPServices";
import { metaConfig } from "config/metaConfig";
import { jsonParse } from "util/jsonParse";

const handler = async (req: any, res: any) => {
  const metaName: string = req?.query?.metaName || "metaDev";
  const ourMetaConstant = metaConfig?.[metaName];

  const processcode = req.query?.processcode || "";
  // console.log("get-process metaName →→→", metaName);
  // console.log("get-process ourMetaConstant →→→", ourMetaConstant);
  const parameters = jsonParse(req.query?.parameters || "{}");

  if (processcode !== "META_DATA_MOBILE_004") {
    // console.log("EEE get-process parameters", processcode, parameters);
  }

  const result =
    (
      await serverData(
        ourMetaConstant.serverUrl,
        processcode,
        parameters,
        ourMetaConstant,
      )
    )?.result || {};

  // if (processcode === "cl_basketList_004") {
  //   console.log("EEE get-process result", result, "--");
  // }

  res.status(200).json(result);
};

export default handler;
