// import { useContext } from "react";
// import MemberContext from "context/MemberContext";
// const memberContext = MemberContext();

//гэж Component бүрт 3 мөр бичихийн оронд 2 мөр бичээд оруулах ажээ.

// import { useMember } from "hooks/use-member";
// const memberContext = useMember();

//гэж бичнэ гэсэн үг.

import { useContext } from "react";
import MemberContext from "context/MemberContext";

export const useMember = () => useContext(MemberContext);
