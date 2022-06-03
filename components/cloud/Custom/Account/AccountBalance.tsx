import { FC, useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import useSWR from "swr";
import axios from "axios";
import fetchJson from "lib/fetchJson";
import _ from "lodash";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import { renderPositionType, Iframe } from "util/helper";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomImage,
  AtomIcon,
  AtomFade,
  AtomButton,
} from "@components/common/Atom";

type PropsType = {
  item: any;
  type?: "1" | "2" | "3" | "4";
  color?: string;
  customClassName?: string;
  customStyle?: any;
  fade?: boolean;
  backgroundImageClassName?: string;
  titleClassName?: string;
};

const AccountBalance: FC<PropsType> = ({
  item,
  type,
  color = "weekly",
  customClassName,
  customStyle,
  fade = true,
  backgroundImageClassName = "",
  titleClassName = "",
}) => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const [visibleModal, setVisible] = useState(false);
  const [shouldFetch, setShouldFetch] = useState();

  const parameters = `&parameters=${JSON.stringify({
    accountId: "1105379814",
    registerNo: "УХ99113011",
  })}`;

  const { data } = useSWR(
    `/api/get-process?processcode=citizenErpProcessBalance${parameters}`
  );
  //   console.log(data);
  function handlerClick() {
    const authWindow = window.open(
      data.url,
      "myWindow",
      "width=600,height=400"
    );

    if (authWindow) {
      var interval = window.setInterval(function () {
        try {
          if (
            typeof window.location.href == "undefined" ||
            authWindow == null ||
            authWindow.closed
          ) {
            window.clearInterval(interval);
          } else {
            console.log(authWindow.location.href);
          }
        } catch (e) {
          window.clearInterval(interval);
        }
      }, 1000);

      //   authWindow.addEventListener("unload", function (event) {
      //     const checkURL = this.document.URL;
      //     const checkPage = this.document.querySelector("#checkResponse");
      //     // console.log(checkPage);
      //     if (checkPage) {
      //       const urlParts = /^(?:\w+\:\/\/)?([^\/]+)(.*)$/.exec(checkURL);
      //       const code: any = /\?state=(.+)\&scope=(.+)$/.exec(checkURL);
      //       const scope: any = /\&scope=(.+)$/.exec(checkURL);
      //       const response = [code[1], scope];
      //       //   return response;
      //       console.log(response);
      //     }
      //   });
    }

    // var openDialog = function(uri, name, options) {

    //     var win = window.open(uri, name, options);

    //     var interval = window.setInterval(function() {
    //         try {
    //             if (typeof win.location.href == 'undefined' || win == null || win.closed) {
    //                 window.clearInterval(interval);
    //             } else {
    //                 console.log(win.location.href);
    //             }
    //         }
    //         catch (e) {
    //             window.clearInterval(interval);
    //         }
    //     }, 1000);

    //     return win;
  }

  return (
    <div className="relative w-full h-full">
      <button
        // disabled={shouldFetch}
        className={`flex items-center justify-center transition-colors duration-300 focus:shadow-outline`}
        style={{ ...customStyle }}
        onClick={handlerClick}
      >
        Дансны үлдэгдэл шалгах
        {/* {data} */}
      </button>
    </div>
  );
};

export default AccountBalance;
