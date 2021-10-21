import axios from "axios";
import { isEmpty } from "lodash";
import {isZip, url} from "../constants";
import loginUserInfo from "../pages/login";

// хүсэлт явуулна
export const request = async (url: string, body: any) => {
  return axios
    .post(url, body)
    .then(res => res.data)
    .catch(err => err);
};

// сервер лүү хандаж дата авна
export const serverData = async (url: string, command: string, json: any) => {
  const body: any = getJsonBody(command, json);
  const {response} = await request(url, body);
  // console.log("data",body);
  return response;
};
export const serverDataFileUpload = async (url: string, body:any) => {
  console.log("serverDataFileUpload",url,body);
  const {response} = await request(url, body);
  return response;
};

export const getJsonBody = (command: any, json: any) => {
  //sessionId: "65178215-7896-4513-8e26-896df9cb36ad",
  let body: any = {
    languagecode: "mn",
    command: command,
    // ismobile: "1",
    parameters: json,
    // zip: isZip.value,
  };
  // if (isEmpty(loginUserInfo) && command != "login") {
  if (isEmpty(loginUserInfo)) {
    // body.username = "admin";
    // body.password = "Tes@Veritech";
    body.username = "erdene-ochir.p";
    body.password = "89";
    // body.isCustomer = 0;
    //  body.sessionId = "65178215-7896-4513-8e26-896df9cb36ad";
  // } else if (command == "login") {
  //   body.isCustomer = 1;
  } else {
    body.isCustomer = 1;
    // body.sessionId = loginUserInfo.sessionid;
  }

  return body;
};