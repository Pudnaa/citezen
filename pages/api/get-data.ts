import { serverData } from "service/callERPServices";
import { jsonParse } from "util/helper";
import { metaConfig } from "config/metaConfig";

const getData = async (req: any, res: any) => {
  const metaName: string = req.query.metaName || "metaDev";
  const ourMetaConstant = metaConfig?.[metaName];
  const debug = req.query.debug || false;

  let parameters = {
    systemMetaGroupId: req.query.metaid || "",
    pagingWithoutAggregate: req.query.pagingwithoutaggregate || "0",
    criteria: {
      ...jsonParse(req.query?.criteria || ""),
    },
    paging: {
      ...jsonParse(req.query.paging || ""),
    },
  };

  if (debug) {
    console.log("EEE debug - get-data parameters", parameters);
  }

  const { result } = await serverData(
    ourMetaConstant.serverUrl,
    metaConfig.dataview,
    parameters,
    ourMetaConstant
  );

  res.status(200).json(result);
};

export default getData;
