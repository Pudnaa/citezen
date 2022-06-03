import fs from "fs";
import path from "path";
import _ from "lodash";
import preparePageListData from "util/preparePageListData";
import {
  serverData,
  callServerAPI,
  callServerDataview,
} from "service/callERPServices";
import { metaConfig } from "config/metaConfig";

const CACHE_PATH = path.resolve("public/cacheData");

/* ------------------------------------------------------ */
/*                     READ WRITE FILE                    */
/* ------------------------------------------------------ */
const readWriteFile = async (
  subFolder: string,
  fileName: string,
  fetchDataFunction: any
) => {
  const fileFolder = `${CACHE_PATH}/${subFolder && `${subFolder}`}`;
  const fullFileName = `${fileFolder}/${fileName}`;
  let cachedData;

  try {
    cachedData = JSON.parse(fs.readFileSync(fullFileName, "utf8"));
  } catch (error) {
    console.log("Page cache not initialized: ", fileName);
  }

  if (!cachedData) {
    const data = await fetchDataFunction();
    // console.log("BBBBBBBB", data);

    try {
      try {
        fs.mkdirSync(fileFolder, { recursive: true });
      } catch (error) {
        console.log("Cannot create folder ", error);
      }

      fs.writeFileSync(fullFileName, JSON.stringify(data), "utf8");
      console.log("Wrote to Cache: ", fileName);
    } catch (error) {
      console.error("ERROR WRITING MEMBERS CACHE TO FILE", fileName);
      console.log("Error: ", error);
    }

    cachedData = data;
  }

  return cachedData;
};

/* ------------------------------------------------------ */
/*                  GET CACHED PAGE DATA                  */
/* ------------------------------------------------------ */
export const getCachedPageData = async (
  ourMetaConstant: any,
  pageSlug: any
) => {
  //түрдээ cache-ийг ажиллагаагүй болгов.
  return await preparePageListData(ourMetaConstant, pageSlug.pageid);

  //cache-лэх технологи
  const subFolder = pageSlug.domainname;
  const fileName = `page-${pageSlug.slugname}-${pageSlug.pageid}.json`;

  return await readWriteFile(
    subFolder,
    fileName,
    async () => await preparePageListData(ourMetaConstant, pageSlug.pageid)
  );
};

/* ------------------------------------------------------ */
/*                  GET CACHED LIST DATA                  */
/* ------------------------------------------------------ */
export const getCachedDataviewData = async (
  ourMetaConstant: any,
  systemmetagroupid: any,
  onlyData: boolean = false
) => {
  //түрдээ cache-ийг ажиллагаагүй болгов.
  return _.values(
    await callServerDataview(
      {
        systemmetagroupid: "16298299324201",
      },
      ourMetaConstant
    )
  );

  //cache-лэх технологи
  const subFolder = "metaList";
  const fileName = `list-${systemmetagroupid}${
    onlyData ? "-onlyData" : "-full"
  }.json`;

  const fullResult = await readWriteFile(subFolder, fileName, async () => {
    let fullResult1 = await serverData(
      ourMetaConstant.serverUrl,
      metaConfig.COMMAND_DATAVIEW,
      {
        systemmetagroupid: "16298299324201",
      }
    );
    if (onlyData) {
      fullResult1 = fullResult1.result;
      delete fullResult1?.aggregatecolumns;
      delete fullResult1?.paging;
      fullResult1 = _.values(fullResult1);
    }
    return fullResult1;
  });

  return fullResult;
};
// _.values(
//   (
//     await serverData(
//       ourMetaConstant.serverUrl,
//       metaConfig.COMMAND_DATAVIEW,
//       {
//         systemmetagroupid: "16298299324201",
//       }
//     )
//   ).result
// )

/* ------------------------------------------------------ */
/*                       CLEAN CACHE                      */
/* ------------------------------------------------------ */
export const cleanCache = async (subFolder: string) => {
  const fileFolder = `${CACHE_PATH}/${subFolder && `${subFolder}`}`;

  await fs.promises
    .readdir(fileFolder)
    .then((f) =>
      Promise.all(f.map((e) => fs.promises.unlink(`${fileFolder}/${e}`)))
    );

  return "Амжилттай";
};
