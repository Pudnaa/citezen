import React, { useState } from "react";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const userInit = {
    emppicture:
      "https://res.cloudinary.com/dzih5nqhg/image/upload/v1637746847/cloud/icons/QMpejaITONnxnRBZKksI_mhmyc4.gif",
  };

  const [userData, setUserData] = useState(userInit);

  const setUData = (data) => {
    setUserData(data || userInit);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUData,
      }}
      displayName="UserStore"
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
