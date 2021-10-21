import React, { useState } from "react";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [userData, setUserData] = useState();

  const setUData = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUData
      }}
      displayName="UserStore"
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
