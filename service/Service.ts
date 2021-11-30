import axios from "axios";
import { isEmpty } from "lodash";
import { isZip, url } from "../constants";
import loginUserInfo from "../pages/login";
import { metaConfig } from "@config/metaConfig";

// хүсэлт явуулна
export const request = async (url: string, body: any) => {
  return axios
    .post(url, body)
    .then((res) => res.data)
    .catch((err) => err);
};

// сервер лүү хандаж дата авна
export const serverData = async (
  url: string,
  command: string,
  json: any,
  ourMetaConstant: any = metaConfig.metaDev
) => {
  const body: any = getJsonBody(command, json, ourMetaConstant);
  const { response } = await request(url, body);
  // console.log("url {{{{{{{{{{{{{{", url);
  if (response.status === "error") {
    console.log("body", body);
    console.log("body parameters.criteria", body.parameters.criteria);
    // console.log("getJsonBody ourMetaConstant", ourMetaConstant);
    console.log("getJsonBody response", response);
  }
  return response !== "" ? response : {};
};

export const serverDataFileUpload = async (url: string, body: any) => {
  console.log("serverDataFileUpload", url, body);
  const { response } = await request(url, body);
  return response;
};

export const getJsonBody = (command: any, json: any, ourMetaConstant: any) => {
  //sessionId: "65178215-7896-4513-8e26-896df9cb36ad",

  const body: any = {
    languagecode: "mn",
    command: command,
    // ismobile: "1",
    parameters: json,
    // zip: isZip.value,
    username: ourMetaConstant.username,
    password: ourMetaConstant.password,
    isCustomer: undefined,
  };

  return body;
};
