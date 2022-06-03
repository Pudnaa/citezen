import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
} from "@components/common/Atom";

const AboutUs2 = () => {
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

  // console.log("AboutUs2 config", config);
  //console.log("AboutUs2 readyDatasrc", readyDatasrc);
  // console.log("AboutUs2 widgetnemgooReady", widgetnemgooReady);
  // console.log("AboutUs2 positionConfig", positionConfig);
  return (
    <div className="2xl:container 2xl:mx-auto p-1">
      <div className="flex justify-between items-center">
        <p>2020.12.01</p>
        <div className="py-2 px-3 border border-green-600 rounded-lg text-green-600 cursor-pointer">
          Борлуулалт
        </div>
      </div>
      <div className="w-full">
        <h2 className="w-full font-bold text-gray-600 text-3xl lg:leading-10 leading-9 mt-2">
          Голомт банк Кибер аюулгүй байдлыг хангах Парисын уриалгад нэгдлээ
        </h2>
        <p className="font-normal text-base leading-6 text-gray-500 mt-6">
          Олон улсын кибер орчин дахь аюулгүй байдлын хамтын ажиллагааны
          томоохон төсөл болох кибер аюулгүй байдлыг хангах Парисын харилцан
          итгэлцлийн уриалгад Голомт банк нэгдлээ. Энэхүү уриалгыг Франц улсын
          ерөнхийлөгч Эммануэл Макроны санаачилгаар 2018 оноос хэрэгжүүлж буй
          бөгөөд дижитал орон зайд энхтайван, кибер аюулгүй байдлыг хангах ажилд
          олон улсын төрийн болон төрийн бус байгууллага, хувийн хэвшил, иргэний
          нийгмийн байгууллагуудыг нэгтгэх зорилготой юм.
        </p>
      </div>
      <div className="mt-4">
        <img
          className="w-full h-full"
          src="https://golomtbank.com/wp-content/uploads/2021/11/paris-call-line-logo-407x220.png"
          alt="golomt bank"
        />
      </div>
      <div className="w-full mt-4">
        <p className="font-normal text-base leading-6 text-gray-500">
          Голомт банк энэхүү олон улсын уриалгад нэгдсэнээр 9 гол зарчмыг
          биелүүлэх үүрэг хүлээж байна. Үүнд, хувь хүний болон онц чухал дэд
          бүтэцтэй байгууллагууд руу заналхийлсэн, системийн хохирол учруулах
          хэмжээний кибер халдлага болон бизнесийн салбар дахь ёс зүйтэй
          өрсөлдөөнийг бий болгох зорилгоор оюуны өмчийг дээдэлж, худалдааны
          болон бизнесийн нууц мэдээллийг алдахаас тус тус урьдчилан сэргийлэх,
          зогсоох, интернэтийн үндсэн үйл ажиллагааг хамгаалах, сонголтыг
          баталгаажуулж, мэдээлэлд халдах зорилготой хөндлөнгийн оролцооноос
          хамгаалах чадавхиа бэхжүүлэх, , хор хөнөөлтэй систем үл дэлгэрүүлэх,
          кибер аюулгүй байдлыг тасралтгүй сайжруулах, ёс зүйг эрхэмлэх, бүх
          оролцогч талын кибер орон зай дахь зохистой хэрэглээг нэмэгдүүлэх,
          олон улсын хэм хэмжээг дагаж мөрдөх зарчим багтаж буй юм.
          <br /> <br />
          Одоогоор энэхүү уриалгад Microsoft, Cisco, Samsung, Siemens, Facebook,
          Google, ICANN, санхүүгийн салбараас Commerzbank, Deutsche bank,
          European banking federation (EDF) зэрэг дэлхийн 1100 гаруй төрийн
          болон төрийн бус байгууллага, хувийн хэвшил нэгдээд байгаа юм.
        </p>
      </div>
      <div className="flex mt-6">
        <div className="h-10 w-10 mr-8">
          <AtomIcon
            item="fab fa-facebook"
            customClassName="text-blue-600 text-4xl cursor-pointer"
          />
        </div>
        <div className="h-10 w-10 mr-8">
          <AtomIcon
            item="fab fa-twitter-square"
            customClassName="text-blue-400 text-4xl cursor-pointer"
          />
        </div>
        <div className="h-10 w-10">
          <AtomIcon
            item="fab fa-google-plus"
            customClassName="text-red-600 text-4xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
/*
<div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Story
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/2kxWpNm/Group-740.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/9g2R7Xr/Group-803.png"
            alt="people discussing on board"
          />
        </div>
      </div>
*/
