import { useState } from "react";
import CloudLoginForm from "./CloudLoginForm";
import CloudRegisterForm from "./CloudRegisterForm";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomInput,
  AtomButton,
  AtomTab,
} from "@components/common/Atom";

export default function CloudLoginPage() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-white w-full h-full p-10 pb-0 flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1630998948/cloud/icons/Group_223_xdibqp.png"
          className="w-2/5 h-auto block mx-auto mb-10"
        />
        <div className="w-full">
          <div className="text-sso text-2xl font-semibold">Сайн байна уу?</div>
          <div className="text-gary-500 text-sm font-semibold">
            Танд энэ өдрийн мэндийг хүргэе.
          </div>
        </div>

        <div className="mt-5 w-full">
          {pageIndex == 0 && <CloudLoginForm />}
          {pageIndex == 1 && <CloudRegisterForm />}
        </div>

        <div className="my-5 text-gray-300 text-xs">эсвэл</div>

        <div className="w-full flex grid-cols-2 gap-3">
          <AtomButton
            item=""
            icon="fab fa-facebook-f"
            type="primary-white"
            color="gray"
            customClassName="w-full h-12 text-2xl rounded-full hover:bg-gray-50"
            customStyle={{
              color: "#4267B2",
              boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.12)",
            }}
          />
          <AtomButton
            item=""
            icon="fab fa-google"
            type="primary-white"
            color="gray"
            customClassName="w-full h-12 text-2xl rounded-full hover:bg-gray-50"
            customStyle={{
              color: "#F44336",
              boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.12)",
            }}
          />
        </div>
        <div className="my-5 text-gray-900 text-xs">Хаягаар нэвтрэх</div>
      </div>
      <div className="p-10 bg-white">
        <div className="flex items-center justify-center w-full h-full">
          <AtomTab
            data={tabData}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        </div>
      </div>
    </div>
  );
}

const tabData = [
  { title: "Нэвтрэх", icon: "" },
  { title: "Бүртгүүлэх", icon: "" },
];
