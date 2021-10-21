import React, { useState, useEffect } from "react";
import { isEmpty, has } from "lodash";
import { firebaseAuth } from "lib/firebase";
import { loadDataList, loadProcess } from "lib/api-data";
import { Modal } from "antd";
import toBoolean from "lib/booleanFunction";
import moment from "moment";
import MyIcon from "lib/iconFunction";
import SignIn from "components/Moto/Member/SignIn";
import fetchJson from "lib/fetchJson";
import useUser from "lib/useUser";

const MemberContext = React.createContext();

export const MemberProfileStore = (props) => {
  const { user, mutateUser } = useUser({});

  useEffect(() => {
    setMemberInfo({
      memberUID: user?.memberUID || "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
      memberFirebaseProfile:
        JSON.parse(localStorage.getItem("motoMemberProfile")) || {},
      isLogin: user?.isLoggedIn,
      memberERPUserSysId: user?.userSystemId || "1598934946963", //Moto Guest
      memberERPUserId: 0,
      memberERPSessionId: "",
      memberERPProfile: {},
      isModal: false,
      memberDetail: [],
      loading: false,
      error: null,
    });
  }, [user]);

  const initialStateMemberDetail = {
    memberDetail: [],
    loading: false,
    error: null,
  };

  const [memberInfo, setMemberInfo] = useState({});
  const [memberDetail, setMemberDetail] = useState(initialStateMemberDetail);

  //   ####  ###### #####    #       ####   ####    ##   #
  //  #      #        #      #      #    # #    #  #  #  #
  //   ####  #####    #      #      #    # #      #    # #
  //       # #        #      #      #    # #      ###### #
  //  #    # #        #      #      #    # #    # #    # #
  //   ####  ######   #      ######  ####   ####  #    # ######

  const setMemberInfoAndLocal = (user) => {
    // console.log("RAW user", user);

    if (localStorage) {
      // console.log("LOCAAAAAAAAAAAAAAAAAAAAAAAAAA");
      localStorage.setItem("memberUID", user.uid);
      localStorage.setItem("motoMemberProfile", JSON.stringify(user));
    }

    // user cookie-д яагаад хийгээгүй гэвэл ERP Login дотор хийж байгаа. Тэндээс userSystemID-г авах шаардлага гарсан.

    setMemberInfo({
      ...memberInfo,
      memberUID: user.uid,
      memberFirebaseProfile: user,
      isLogin: true,
      loading: false,
      isModal: false,
      error: null,
    });
  };

  // console.log("memberInfo", memberInfo);
  // console.log("memberDetail", memberDetail);

  //   ####  #      ######   ##   #####
  //  #    # #      #       #  #  #    #
  //  #      #      #####  #    # #    #
  //  #      #      #      ###### #####
  //  #    # #      #      #    # #   #
  //   ####  ###### ###### #    # #    #

  const clearMemberProfile = async () => {
    if (localStorage) {
      localStorage.removeItem("memberUID");
      localStorage.removeItem("motoMemberProfile");
      localStorage.removeItem("userSystemId");
    }

    //session cookie-тэй холбоотой хэсэг
    mutateUser(await fetchJson("/api/logout", { method: "POST" }), false);

    setMemberInfo({
      memberUID: "",
      memberERPUserSysId: 0,
      memberERPUserId: 0,
      memberERPSessionId: "",
      memberERPProfile: {},
      memberFirebaseProfile: {},
      isLogin: false,
      isModal: false,
      loading: false,
      error: null,
    });

    firebaseAuth.signOut();

    // history.push({ //!jagaa
    //   pathname: "/home",
    // });
  };

  //    # #     # #
  //    # #     # #
  //  ####### #######
  //    # #     # #
  //  ####### #######
  //    # #     # #
  //    # #     # #

  useEffect(() => {
    // console.log("ХЭРЭГЛЭГЧ-ийн islogin төлөв өөрчлөгдсөн.");
    if (memberInfo.isLogin) {
      // console.log("FIREBASE логиндсон.");
      // console.log("ERP-аас хэрэглэгчийн мэдээлэл татах ёстой.");

      if (memberInfo.memberUID) {
        erpLogin(memberInfo.memberUID); //ERP-д хэрэглэгчийг login-дуулна.
      }
    }
  }, [memberInfo.isLogin]);

  //  ###### #####  #####     #       ####   ####  # #    #
  //  #      #    # #    #    #      #    # #    # # ##   #
  //  #####  #    # #    #    #      #    # #      # # #  #
  //  #      #####  #####     #      #    # #  ### # #  # #
  //  #      #   #  #         #      #    # #    # # #   ##
  //  ###### #    # #         ######  ####   ####  # #    #

  const erpLogin = async (firebaseUid) => {
    setMemberInfo({ ...memberInfo, loading: true });

    const loginMember =
      (await loadProcess({
        command: "login",
        parameters: {
          username: firebaseUid,
          // username: "dfdfdf",
          password: "89",
        },
      })) || {};

    // console.log("Login After", loginMember);

    if (loginMember?.error === "User_name_or_password_wrong") {
      // console.log("ЭНЭ АЖИЛЛАЖЖ БАЙНА УУ?");
      //Тухайн хэрэглэгч үүсээгүй байна гэсэн үг.
      creatememberERPWithFirebase();
    } else {
      // console.log("ТИЙШЭЭ ОРОХГҮЙ БАЙНӨӨӨӨӨӨ");
      //Хэрэглэгч үүссэн бөгөөд Login-доод ороод ирсэн.
      setMemberInfo({
        ...memberInfo,
        memberERPProfile: loginMember,
        memberERPUserSysId: loginMember.id,
        memberERPUserId: loginMember.userkeys[0].id || 0,
        memberERPSessionId: loginMember.sessionid,
        loading: false,
      });

      //session cookie-тэй холбоотой хэсэг
      try {
        await mutateUser(
          fetchJson("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              memberUID: memberInfo.memberFirebaseProfile.uid,
              userSystemId: loginMember.id,
              memberName: memberInfo.memberFirebaseProfile.displayName,
              memberPhotoURL: memberInfo.memberFirebaseProfile.photoURL,
            }),
          })
        );
      } catch (error) {
        console.error("An unexpected error happened:", error);
        // setErrorMsg(error.data.message);
      }

      loadMemberDetail(loginMember.id);
    }
  };

  // const clearError = () => {
  //   setMemberInfo({
  //     ...memberInfo,
  //     error: null,
  //   });
  // };

  //  ###### #####  #####      ####  #####  ######   ##   ##### ######
  //  #      #    # #    #    #    # #    # #       #  #    #   #
  //  #####  #    # #    #    #      #    # #####  #    #   #   #####
  //  #      #####  #####     #      #####  #      ######   #   #
  //  #      #   #  #         #    # #   #  #      #    #   #   #
  //  ###### #    # #          ####  #    # ###### #    #   #   ######

  const creatememberERPWithFirebase = async () => {
    // console.log("creatememberERPWithFirebase ажилласан");

    setMemberInfo({ ...memberInfo, loading: true });

    let myFacebookData = {};
    let myGoogleData = {};
    let myPhoneData = {};

    memberInfo.memberFirebaseProfile.providerData.map((item, i) => {
      // console.log("item", item, i);
      if (item.providerId === "facebook.com") {
        myFacebookData = item;
      }
      if (item.providerId === "google.com") {
        myGoogleData = item;
      }
      if (item.providerId === "phone") {
        myPhoneData = item;
      }
    });

    const createdMemberDetail =
      (await loadProcess({
        command: "CreateCustomer",
        parameters: {
          displayName:
            memberInfo.memberFirebaseProfile.displayName || "Тодорхойгүй",
          givenName:
            memberInfo.memberFirebaseProfile.displayName || "Тодорхойгүй",
          familyName:
            memberInfo.memberFirebaseProfile.displayName || "Тодорхойгүй",
          email: memberInfo.memberFirebaseProfile.email,
          gender: "",
          providerId:
            memberInfo.memberFirebaseProfile.providerData[0].providerId,
          googleKey: myGoogleData ? myGoogleData.uid : "",
          faceBookKey: myFacebookData ? myFacebookData.uid : "",
          phoneNumber: myPhoneData ? myPhoneData.uid : "",
          profilePhoto: memberInfo.memberFirebaseProfile.photoURL,
          firebaseUid: memberInfo.memberFirebaseProfile.uid,
          departmentId: "1",
        },
      })) || {};

    if (has(createdMemberDetail, "error")) {
      setMemberInfo({
        ...memberInfo,
        loading: false,
        error: createdMemberDetail.error,
      });
      console.log(
        "Хэрэглэгч үүсгэх үед алдаа өглөө",
        createdMemberDetail.error
      );
      return null;
    }

    // console.log("Create After", createdMemberDetail);
    erpLogin(createdMemberDetail.firebaseuid);

    // const myParamsCreatememberERPWithFirebase = {
    //   request: {
    //     username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
    //     password: "89",
    //     command: "CreateCustomer",
    //     parameters: {
    //       displayName: memberInfo.memberFirebaseProfile.displayName || "Тодорхойгүй",
    //       givenName: memberInfo.memberFirebaseProfile.displayName || "Тодорхойгүй",
    //       familyName: memberInfo.memberFirebaseProfile.displayName || "Тодорхойгүй",
    //       email: memberInfo.memberFirebaseProfile.email,
    //       gender: "",
    //       providerId: memberInfo.memberFirebaseProfile.providerData[0].providerId,
    //       googleKey: myGoogleData ? myGoogleData.uid : "",
    //       faceBookKey: myFacebookData ? myFacebookData.uid : "",
    //       phoneNumber: myPhoneData ? myPhoneData.uid : "",
    //       profilePhoto: memberInfo.memberFirebaseProfile.photoURL,
    //       firebaseUid: memberInfo.memberFirebaseProfile.uid,
    //       departmentId: "1",
    //     },
    //   },
    // };

    // axios
    //   .post("", myParamsCreatememberERPWithFirebase)
    //   .then((response) => {
    //     erpLogin(response.data.response.result.firebaseuid);
    //   })
    //   .catch((error) => {
    //     setMemberInfo({ ...memberInfo, loading: false, error });
    //     console.log("error", error);
    //   });
  };

  const isModal = (isVisible) => {
    //Member signin хийх modal цонх нээгдсэн эсэх
    // console.log("COLLLLLLLLLLLL MODAL", isVisible);
    setMemberInfo({
      ...memberInfo,
      isModal: isVisible,
    });
  };

  //  ###### #####  #####     #####  ###### #####   ##   # #
  //  #      #    # #    #    #    # #        #    #  #  # #
  //  #####  #    # #    #    #    # #####    #   #    # # #
  //  #      #####  #####     #    # #        #   ###### # #
  //  #      #   #  #         #    # #        #   #    # # #
  //  ###### #    # #         #####  ######   #   #    # # ######

  const loadMemberDetail = async (id = 0) => {
    // console.log("loadMemberDetail ажиллалаа", id);

    const loadedMemberDetail =
      (await loadDataList({
        username: memberInfo.memberUID,
        password: "89",
        id: "1603162864242786",
        paging: {
          pagesize: "1",
          offset: "1",
        },
        criteria: {
          systemuserid: {
            0: {
              operator: "=",
              operand: id,
            },
          },
        },
      }).list) || [];

    // console.log("loadedMemberDetail", loadedMemberDetail);

    //! Энэ асуудалтай юм байна. Дараа шалгах хэрэгтэй.
    //! List нь өөрөө дутуу ч юмуу. ERP Login-оос ирсэн Object доторх id нь systemid, userid юу гэдэг нь мэдэгдэхгүй байна лээ. Тэрийг тодруулах шаардлагатай.

    // console.log("myParamsMemberDetail", myParamsMemberDetail);
    // setMemberDetail(initialStateMemberDetail);
    // setMemberDetail({ ...memberDetail, loading: true });

    // axios
    //   .post("", myParamsMemberDetail)
    //   .then((response) => {
    //     // console.log("MEMBER DETAIL RESPONSE------------> ", response);
    //     const myArray = response.data.response.result[0] || [];
    //     // console.log("MEMBER DETAIL myArray------------> ", myArray);
    //     // myArray.isactive = myArray.isactive === "1" ? true : false;
    //     myArray.birthdate = moment(myArray.birthdate);
    //     myArray.imagemainFileList = [];
    //     myArray.imagemainFileList =
    //       myArray.imagemain !== undefined &&
    //       (myArray.imagemain !== ""
    //         ? [
    //             {
    //               uid: "-1",
    //               name: "Тодорхойгүй",
    //               status: "done",
    //               url: myArray.imagemain || "",
    //               thumbUrl: myArray.imagemain || "",
    //               response: { url: myArray.imagemain || "" },
    //             },
    //           ]
    //         : []);
    //     myArray.imageotherFileList = [];
    //     myArray.imageotherFileList =
    //       myArray.imageother !== undefined &&
    //       (myArray.imageother !== ""
    //         ? JSON.parse(myArray.imageother).map((item, index) => ({
    //             uid: index - 1,
    //             name: item.replace(/^.*[\\\/]/, ""),
    //             status: "done",
    //             url: item || "",
    //             thumbUrl: item || "",
    //             response: { url: item || "" },
    //           }))
    //         : []);

    //     setMemberDetail({
    //       ...memberDetail,
    //       loading: false,
    //       memberDetail: myArray,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     message.error(error.toString(), 7);
    //   });
  };

  const clearMemberDetail = () => {
    setMemberDetail(initialStateMemberDetail);
  };

  //   ####    ##   #    # ######    #####  ###### #####   ##   # #
  //  #       #  #  #    # #         #    # #        #    #  #  # #
  //   ####  #    # #    # #####     #    # #####    #   #    # # #
  //       # ###### #    # #         #    # #        #   ###### # #
  //  #    # #    #  #  #  #         #    # #        #   #    # # #
  //   ####  #    #   ##   ######    #####  ######   #   #    # # ######

  const saveMemberDetail = (values) => {
    console.log("saveMemberDetail дотор орж ирсэн values--", values);
    // const mytitle = `${moment(values.caryearmanufactured).format("YYYY")} ${
    //   values.mglfirm
    // } ${values.mglmark}`;

    const myimagemain =
      values.imagemain &&
      values.imagemain.fileList &&
      values.imagemain.fileList.length > 0
        ? values.imagemain.fileList[0].response.url
        : "";
    const myimageother =
      values.imageother &&
      values.imageother.fileList &&
      values.imageother.fileList.length > 0
        ? JSON.stringify(
            values.imageother.fileList.map((item, index) => item.response.url)
          )
        : "";

    const myParamsMemberDetail = {
      request: {
        username: memberInfo.memberUID,
        password: "89",
        command: "MOTO_MEMBER_DETAIL_DV_002",
        parameters: {
          ...values,
          id: values.id || "",
          systemuserid: values.systemuserid || memberInfo.memberERPUserSysId,
          // title: mytitle,
          isactive: toBoolean(values.isactive) ? "1" : "0",
          // mgldrivepos: toBoolean(values.mgldrivepos) ? "1" : "2",
          birthdate: moment(values.birthdate).format("YYYY-MM-DD HH:mm:ss"),
          // caryearmanufactured: moment(values.caryearmanufactured).format(
          //   "YYYY-MM-DD HH:mm:ss"
          // ),
          imagemain: myimagemain,
          imageother: myimageother,

          createdby: memberInfo.memberERPUserSysId,
          modifiedby: memberInfo.memberERPUserSysId,
          ownerid: memberInfo.memberERPUserSysId,
        },
      },
    };

    console.table(myParamsMemberDetail.request.parameters);

    // return;

    // axios
    //   .post("", myParamsMemberDetail)
    //   .then((response) => {
    //     console.log("Save MemberDetail:   ", response);

    //     const myData = response.data.response;
    //     console.log("After Save MemberDetail ------------>", myData);

    //     if (myData.status === "error") {
    //       message.error(myData.text, 7);
    //     } else {
    //       message.success(
    //         "Амжилттай шинэчилллээ. Өдрийг сайхан өнгөрүүлээрэй."
    //       );
    //       history.push({
    //         pathname: "/member",
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     message.error(error, 7);
    //   });
  };

  //  #  ####     #    # ###### #    # #####  ###### #####
  //  # #         ##  ## #      ##  ## #    # #      #    #
  //  #  ####     # ## # #####  # ## # #####  #####  #    #
  //  #      #    #    # #      #    # #    # #      #####
  //  # #    #    #    # #      #    # #    # #      #   #
  //  #  ####     #    # ###### #    # #####  ###### #    #

  const isMember = () => {
    //Member Login-дож орсон эсэх
    //Ороогүй бол login цонх харуулна.
    // console.log("COLLLLLLLLLLLL MODAL", isVisible);
    if (!memberInfo.isLogin) {
      //guest
      isModal(true);
      return false;
    } else {
      return true; //member login
    }
  };

  //   ####  #    # #      #   #
  //  #    # ##   # #       # #
  //  #    # # #  # #        #
  //  #    # #  # # #        #
  //  #    # #   ## #        #
  //   ####  #    # ######   #

  const OnlyMember = (props) => {
    if (!memberInfo.isLogin) {
      //! return <PleaseLogin />;
      return "Login-доорой хө";
    } else {
      return props.children;
    }
  };

  //  #    #  ####  #####    ##   #
  //  ##  ## #    # #    #  #  #  #
  //  # ## # #    # #    # #    # #
  //  #    # #    # #    # ###### #
  //  #    # #    # #    # #    # #
  //  #    #  ####  #####  #    # ######

  const SiginModal = (props) => {
    return (
      <Modal
        visible={memberInfo.isModal}
        onOk={(e) => {
          isModal(false);
        }}
        onCancel={(e) => {
          isModal(false);
        }}
        footer={null}
        header={null}
        z-index="5000"
        closeIcon={<MyIcon type="icontimes-solid" className="moto-icon-1-5" />}
        bodyStyle={{ background: "#F0F0F0", borderRadius: "6px" }}
      >
        <SignIn />
        {/* SignIn хийгээрэй хө. */}
      </Modal>
    );
  };

  return (
    <MemberContext.Provider
      value={{
        memberInfo,
        memberDetail,
        clearMemberProfile,
        // clearError,
        setMemberInfoAndLocal,
        isModal,
        saveMemberDetail,
        clearMemberDetail,
        isMember,
        OnlyMember,
      }}
      displayName="MemberStore"
    >
      {props.children}
      <SiginModal />
    </MemberContext.Provider>
  );
};

export default MemberContext;
