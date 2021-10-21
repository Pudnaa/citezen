import { useState } from "react";
import { loadProcess } from "lib/api-data";
import { notification } from "antd";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomInput,
  AtomButton,
} from "@components/common/Atom";

export default function CloudRegisterForm() {
  const [data, setData] = useState({
    command: "crmUserBasePersonDv_001",
    rows: [
      {
        path: "lastmame",
        title: "Овог",
        placeholder: "Овог",
        icon: "far fa-user",
        type: "text",
        value: "",
      },
      {
        path: "firstname",
        title: "Нэр",
        placeholder: "Нэр",
        icon: "far fa-user",
        type: "text",
        value: "",
      },
      {
        path: "username",
        title: "Username",
        placeholder: "Username",
        icon: "far fa-user-tag",
        type: "text",
        value: "",
      },
      {
        path: "phone",
        title: "Утас",
        placeholder: "Утас",
        icon: "far fa-mobile",
        type: "text",
        value: "",
      },
      {
        path: "email",
        title: "Имэйл",
        placeholder: "Имэйл",
        icon: "far fa-envelope",
        type: "text",
        value: "",
      },
      {
        path: "pass1",
        title: "Нууц үг",
        placeholder: "Нууц үг",
        icon: "far fa-lock",
        type: "password",
        value: "",
      },
      {
        path: "pass2",
        title: "Нууц үг давтах",
        placeholder: "Нууц үг давтах",
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
    console.log("Last One", data);

    let parameters = {};
    data.rows.map((item, index) => {
      parameters = { ...parameters, [item.path]: item.value };
    });

    // console.log("EE", parameters);

    const result =
      (await loadProcess({
        command: data.command,
        parameters: parameters,
        domain: "dev",
      })) || {};

    console.log("result", result);
    // message.info("Ирсэн хариу", <pre>{JSON.stringify(result, null, 2)}</pre>);

    notification.open({
      message: "Амжилттай! Result",
      description: (
        <>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </>
      ),
      duration: 0,
    });
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
            type="text"
            customClassName="mt-4 w-full"
            onChange={(e) => onChange(e, index)}
          />
        );
      })}
      <AtomButton
        item="Бүртгүүлэх"
        type="primary"
        color="sso"
        customClassName="rounded-full mt-7 w-full h-12 bg-sso text-white font-semibold hover:bg-sso-dark"
        onClick={(e) => onSubmit(e)}
      />
    </>
  );
}
