import { GoogleSpreadsheet } from "google-spreadsheet";
import { callDataComplex02, prepareSheetsArray } from "lib/googleSheetFunction";

let ourSheets = null;

const getDoc = async (apiKey, sheetId) => {
  const doc = new GoogleSpreadsheet(sheetId);
  await doc.useApiKey(apiKey);
  await doc.loadInfo();
  return doc;
};

const getSheets = async (apiKey, sheetId) => {
  const doc = await getDoc(apiKey, sheetId);
  const sheetsArray = prepareSheetsArray(doc.sheetsByIndex || []);

  const promises = sheetsArray.map(async (sheet) => {
    return {
      sheetData: sheet,
      widgets: (await callDataComplex02(doc, sheet.title)) || [],
    };
  });
  const sheets = (await Promise.all(promises)) || [];

  ourSheets = sheets;

  return sheets;
};

export const getDocData = async (apiKey, sheetId) => {
  const doc = await getDoc(apiKey, sheetId);
  return doc;
};

export const getSheetData = async (apiKey, sheetId) => {
  const sheets = await getSheets(apiKey, sheetId);
  return sheets;
};
