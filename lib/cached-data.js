import { loadListConfig, loadProcessConfigDev } from "lib/api-config";
import { jsonParse } from "util/jsonParse";
import { decode } from "html-entities";
import { firestore } from "lib/firebase";

const writeFile = (myDir, fileName, updatedJSON, result) => {
  try {
    fs.mkdirSync(myDir, { recursive: true });
  } catch (e) {
    console.log("Cannot create folder ", e);
    return "Folder үүсгэж чадсангүй.";
  }

  fs.writeFile(`${myDir}/${fileName}`, JSON.stringify(updatedJSON), (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return `${fileName} Файл бичихэд алдаа гарлаа`;
    }
  });

  return result;
};

export const getCachedListConfig = async ({
  metaid = "1585197442423220",
  type = "full",
}) => {
  const metaConfigCollection = firestore.collection("metaconfig");
  const myFile = `${metaid}-${type}config`;
  let cachedData = {};

  await metaConfigCollection
    .doc(myFile)
    .get()
    .then(async (item) => {
      if (item.exists) {
        console.log("Read cache data from firestore - ", myFile);
        cachedData = item.data();
      } else {
        console.log("Data cache not initialized", myFile);

        const listFullConfig = (await loadListConfig(metaid)) || {};
        const listShortConfig = {
          title: listFullConfig?.meta_group_link_mobile?.listname || "Жагсаалт",
          ...jsonParse(
            decode(listFullConfig?.meta_group_grid_options_mobile.jsonconfig)
          ),
        };

        if (type === "full") cachedData = listFullConfig;
        else cachedData = listShortConfig;

        const myFileFull = `${metaid}-fullconfig`;
        const myFileShort = `${metaid}-shortconfig`;

        try {
          await metaConfigCollection.doc(myFileFull).set(listFullConfig);
          await metaConfigCollection.doc(myFileShort).set(listShortConfig);

          console.log("Wrote data to full cache", myFile);
        } catch (error) {
          console.log("ERROR WRITING DATA CACHE FULL TO FIRESTORE", myFile);
          console.log(error);
        }
      }
    });

  return cachedData;
};

export const getCachedProcessConfig = async ({
  metaid = "",
  type = "full",
}) => {
  const metaConfigCollection = firestore.collection("metaconfig");
  const myFile = `${metaid}-${type}config`;
  let cachedData = {};

  await metaConfigCollection
    .doc(myFile)
    .get()
    .then(async (item) => {
      if (item.exists) {
        console.log("Read cache data from firestore - ", myFile);
        cachedData = item.data();
      } else {
        console.log("Data cache not initialized", myFile);

        const processFullConfig = (await loadProcessConfigDev(metaid)) || {};
        const processShortConfig = {};

        if (type === "full") cachedData = processFullConfig;
        else cachedData = processShortConfig;

        const myFileFull = `${metaid}-fullconfig`;
        const myFileShort = `${metaid}-shortconfig`;

        try {
          await metaConfigCollection.doc(myFileFull).set(processFullConfig);
          await metaConfigCollection.doc(myFileShort).set(processShortConfig);

          console.log("Wrote data to full cache", myFile);
        } catch (error) {
          console.log("ERROR WRITING DATA CACHE FULL TO FIRESTORE", myFile);
          console.log(error);
        }
      }
    });

  return cachedData;
};
