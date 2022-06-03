import { useEffect } from "react";
import fs from "fs";
import path from "path";
import { metaConfig } from "config/metaConfig";
import { serverData } from "service/callERPServices";

/**
 * Golomt loan request bank Webhook
 */

export default function check() {
  return <p className="text-xl">Түр хүлээнэ үү...</p>;
}

export async function getServerSideProps(context: any) {
  const ourMetaConstant = metaConfig.metaDev;

  // let obj = {
  //   "scoringAmt": 525501,
  //   "isCustomer": "Y",
  //   "amount": 525501,
  //   "interest": 1.2,
  //   "requestId": "83b763d6-504f-4c74-a119-284f7d176f50",
  //   "masterContrFlg": "N",
  //   "scoringDate": "2022-02-18T15:53:09",
  //   "chrgAmt": 5255.01,
  //   "monthlyAmt": 47282.18,
  //   "loanSteps": [{
  //           "stepCd": "LOAN_REQUEST",
  //           "stepDesc": "Loan Request",
  //           "statusDesc": "Success",
  //           "statusCd": "SUCCESS"
  //       }, {
  //           "stepCd": "SCORING",
  //           "stepDesc": "Loan scoring",
  //           "statusDesc": "Success",
  //           "statusCd": "SUCCESS"
  //       }, {
  //           "stepCd": "MASTER_AGREE",
  //           "stepDesc": "Loan master agreement",
  //           "statusDesc": "Pending",
  //           "statusCd": "PENDING"
  //       }, {
  //           "stepCd": "INST_TRN",
  //           "stepDesc": "Loan disbursement",
  //           "statusDesc": "Pending",
  //           "statusCd": "PENDING"
  //       }
  //   ],
  //   "prepaidAmt": 12000,
  //   "registerNo": "УП96100511"
  // };  
  // const resultbp = await serverData(
  //   ourMetaConstant.serverUrl,
  //   "clBpLoanChangeStatus_004",
  //   obj
  // );
  // console.log("resultbp", resultbp);
  // obj.loanSteps.map((item:any) => {
  //   return { ...item, requestId: obj.requestId };
  // })  
  // console.log('obj', obj)

  if (context.req.method === "POST") {
    let body = "";
    context.req.on("data", (chunk: any) => {
      body += chunk;
    });
    context.req.on("end", () => {
      fs.writeFileSync(path.resolve("./public/glmtpost.txt"), body, "utf8");
      let incomeData = JSON.parse(body);
      incomeData.loanSteps.map((item:any) => {
        return { ...item, requestId: incomeData.requestId };
      })
      serverData(
        ourMetaConstant.serverUrl,
        "clBpLoanChangeStatus_004",
        incomeData
      );            
      fs.writeFileSync(path.resolve("./public/glmtpost2.txt"), JSON.stringify(incomeData), "utf8");
    });
  }

  return {
    props: {},
  };
}
