import React, { useState } from "react";

const UserContext = React.createContext();

export const UserStore = (props) => {
  // console.log("props", props);
  const userInit = {};

  const [userData, setUserData] = useState(userInit);

  const setUData = (data) => {
    // setUserData(data || userInit);
    setUserData(data);
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
