import { serverData } from "../../service/callERPServices";
import { metaConfig } from "../../config/metaConfig";

import { jsonParse } from "util/jsonParse";

export default async (req: any, res: any) => {
  const metaName: string = req?.query?.metaName || "metaDev";
  const ourMetaConstant = metaConfig?.[metaName];

  const processcode = req.query.processcode || "";
  const parameters = jsonParse(req.query.parameters || "{}");
  const getparameters = jsonParse(req.query.getparameters || "{}");

  const { result } = await serverData(
    ourMetaConstant.serverUrl,
    processcode,
    parameters,
    ourMetaConstant,
  );

  let getData: any = null;
  if (result.getdataprocesscode) {
    getData = await serverData(
      ourMetaConstant.serverUrl,
      result.getdataprocesscode,
      getparameters,
      ourMetaConstant,
      { returnByStandartJson: 1 },
    );
    getData = getData.result;
  }

  res.status(200).json({ result, getData });
};
