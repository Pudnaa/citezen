import React, { FC } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";


type PropsType = {
    className: string;
};

const Logo: FC<PropsType> = ({className }) => {

    return (
    <>
      <img
        src="https://cloud.veritech.mn/app/storage/uploads/process/logo.png"
        alt="logo"
        className={className}
      />
    </>
  )
}
export default Logo
  