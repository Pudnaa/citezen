import { serverData } from "../../service/callERPServices";
import { metaConfig } from "../../config/metaConfig";
import { cleanCache } from "../../lib/cached-data-file";

// http://localhost:3005/api/clean-cache/?type=all

export default async (req: any, res: any) => {
  const type: string = req?.query?.type || "all";
  const subFolder: string = req?.query?.folder || "skyresort";

  const result = await cleanCache(subFolder);

  res.status(200).json(result);
};
