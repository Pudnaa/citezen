import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import Router from "next/router";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomInput,
  AtomButton,
} from "@components/common/Atom";

export default function CloudLoginForm() {
  const [data, setData] = useState({
    command: "login",
    rows: [
      {
        path: "username",
        title: "Хэрэглэгчийн нэр",
        placeholder: "Хэрэглэгчийн нэр",
        icon: "far fa-user",
        type: "text",
        value: "",
      },
      {
        path: "password",
        title: "Нууц үг",
        placeholder: "Нууц үг",
        icon: "far fa-lock",
        type: "password",
        value: "",
      },
    ],
  });

  const onChange = (e, index) => {
    e.preventDefault();
    const tempData = [...data.rows];
    tempData[index] = {
      ...tempData[index],
      value: e.target.value,
    };
    setData({ ...data, rows: tempData });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let parameters = {};
    data.rows.map((item, index) => {
      parameters = { ...parameters, [item.path]: item.value };
    });

    const loginResult = await axios.get(
      `/api/get-login?processcode=login&parameters=${JSON.stringify(
        parameters
      )}`
    );

    if (loginResult.data.status === "error") {
      notification.open({
        message: "Амжилтгүй боллоо",
        description: loginResult.text,
        duration: 5,
      });
    } else {
      Router.push("/page/16312403374741");
    }
  };

  return (
    <>
      {data.rows.map((item, index) => {
        return (
          <AtomInput
            key={index}
            item={item.title}
            icon={item.icon}
            value={item.value}
            placeholder={item.placeholder}
            type={item.type}
            customClassName="mt-4 w-full"
            onChange={(e) => onChange(e, index)}
          />
        );
      })}
      <div className="mt-4 w-full flex justify-between text-xs items-center px-3">
        <div className="flex items-center">
          <i className="fas fa-check-square mr-2 text-xl" />
          Санах
        </div>
        <div>Нууц үг мартсан уу?</div>
      </div>

      <AtomButton
        item="Нэвтрэх"
        type="primary"
        color="sso"
        customClassName="rounded-full mt-7 w-full h-12 bg-sso text-white font-semibold hover:bg-sso-dark"
        onClick={(e) => onSubmit(e)}
      />
    </>
  );
}
