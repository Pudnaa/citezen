import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { useUser } from "hooks/use-user";
import { isEmpty } from "lodash";

export default function Card87() {
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

  const userContext = useUser();

  return (
    <div>
      <div className="bg-white shadow-lg p-4 rounded-2xl">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.tuk.dev/assets/templates/olympus/profile.png"
              alt="profile"
            />
            <p className="mt-2 mb-1 text-xs sm:text-sm md:text-base font-semibold text-center text-white">
              {userContext.userData?.personname}
            </p>
            <p className="text-center text-gray-500 mb-0">
              {userContext.userData?.email}
            </p>
          </div>
        </div>
        <div
          className="flex w-full justify-between my-8 rounded-2xl pt-4 px-4"
          style={{ backgroundColor: "#F0F0F0" }}
        >
          <div className="flex flex-col items-center w-6/12">
            <p className="text-lg font-medium leading-none text-gray-800 dark:text-gray-100 mb-2">
              82
            </p>
            <p className="text-gray-500 dark:text-gray-50 text-sm">
              Миний оноо
            </p>
          </div>
          <div className="flex flex-col items-center w-6/12">
            <p className="text-lg font-medium leading-none text-gray-800 dark:text-gray-100 mb-2">
              8
            </p>
            <p className="text-gray-500 dark:text-gray-100 text-sm">
              Гишүүнчлэл
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pr-4">
            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
              <i className="fa fa-phone"></i>
            </div>
          </div>
          <div>
            <p className="pt-2 text-xs leading-3 text-gray-500 dark:text-gray-400">
              Гар утасны дугаар
            </p>
            <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">
              {userContext.userData?.mobile}
            </p>
          </div>
        </div>
        <div className="flex items-center pt-5">
          <div className="pr-4">
            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
              <i className="fa fa-info-circle"></i>
            </div>
          </div>
          <div>
            <p className="pt-2 text-xs leading-3 text-gray-500 dark:text-gray-400">
              Регистрийн дугаар
            </p>
            <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">
              ОЮ91062811
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
