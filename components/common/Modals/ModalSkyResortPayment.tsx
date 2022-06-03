import { useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import useSWR from "swr";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
  getItemObject,
} from "util/helper";
import fetchJson from "lib/fetchJson";
import axios from "axios";
import RenderAtom from "@components/common/Atom/RenderAtom";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import { useUser } from "hooks/use-user";
import Qpay from "@components/cloud/Payment/Qpay";
import SocialPay from "@components/cloud/Payment/SocialPay";
import WidgetWithId from "@middleware/components/WidgetStandart/WidgetWithId";

export default function ModalSkyResortPayment() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext);

  const basketItem = _.values(config?.readyItem) || [];

  const handlePayClick = (e: any, item: any) => {
    e.preventDefault();
    // alert(item.paymenttypename);
    const payinfo = {
      ...basketItem,
      item,
    };

    switch (item.paymenttypecode) {
      case "40":
        return <Qpay item={payinfo} />;
        break;
      case "19":
        alert(item.paymenttypename);
      default:
        null;
    }
    // console.log("handleClick item", item);
  };

  return (
    <>
      <div className="mb-6 grid grid-cols-12 gap-5">
        <div className="mb-6 col-span-8">
          <WidgetWithId widgetId="16412918309831" />
          <div className="bg-white shadow-sm p-8 rounded-lg ">
            <div className="py-6 relative">
              <p className="text-2xl pl-14">
                <span className="w-10 h-10 text-xl pt-1 text-white rounded-full bg-skyresort  text-center absolute left-0 top-5">
                  2
                </span>
                Төлбөрийн Нөхцөл
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t pt-8 border-gray-300">
              {readyDatasrc.map((item: any, index: number) => {
                if (item.isshow == 1)
                  return (
                    <div
                      className="bg-gray-100 rounded-lg w-full  p-6 flex justify-between items-center cursor-pointer hover:bg-skyresort"
                      key={item?.id || index}
                      onClick={(e: any) => handlePayClick(e, item)}
                    >
                      <div className="flex space-x-4 items-center">
                        <RenderAtom
                          item={item?.position64}
                          defaultAtom="image"
                          customClassName="w-16 h-16"
                          customProps={{
                            truncateRow: 2,
                          }}
                        />
                        <RenderAtom
                          item={item?.position1}
                          defaultAtom="title"
                          customClassName="text-lg"
                          customProps={{
                            truncateRow: 2,
                          }}
                        />
                      </div>
                      {/* <i className="fas fa-chevron-down" /> */}
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
        <div className="mb-6 col-span-4">
          <WidgetWithId widgetId="16412792133681" />
        </div>
      </div>
    </>
  );
}
