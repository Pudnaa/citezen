import { useEffect, useState } from "react";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useGetProcessC009 from "../useGetProcessC009";
import { AtomSliderV2 } from "@components/common/Atom";
import { SwiperSlide } from "swiper/react";
import useNumber from "@customhook/useNumber";

const CozyProductDetailImage = ({ item }) => {
  //Нэмэлт зургуудыг авчрах
  const { dvList, dvListMutate } = useGetProcessC009(item, "detailImages");
  console.log("🚀 ~ CozyProductDetailImage ~ dvList", dvList);

  const smallItemClassName =
    "bg-white w-20 p-1 rounded-md border-gray-200 border border-solid mr-3";

  const { number, setNumber } = useNumber(-1);
  const [mainImage, setMainImage] = useState(item.position2.value);

  useEffect(() => {
    if (number === -1) {
      setMainImage(item.position2.value);
    } else {
      setMainImage(dvList[number]?.physicalpath);
    }
  }, [number]);

  return (
    <>
      {/* Үндсэн зураг */}
      <BlockDiv
        customClassName="w-full bg-white rounded-lg"
        customStyle={{ height: "583px" }}
        divNumber="CozyProductDetailImageMainImageBlock"
      >
        <RenderAtom
          item={{ value: mainImage }}
          defaultAtom="imagemagnify"
          customClassName="w-full h-full rounded-lg flex items-center justify-center"
          customStyle={{ padding: "30px" }}
          divNamePrefix="mainimage"
        />
      </BlockDiv>

      {/* Зургууд */}
      <BlockDiv
        customClassName="w-full mt-5"
        divNumber="CozyProductDetailImageImages"
      >
        <AtomSliderV2
          {...{
            spaceBetween: 5,
            slidesPerView: "auto",
            centeredSlides: false,
            freeMode: false,
            breakpoints: null,
            loop: false,
            pagination: false,
            scrollbar: false,
            arrow: {
              className: "text-gray-400 bg-white shadow-lg",
              left: {
                className: "left-0",
              },
              right: {
                className: "right-0",
              },
            },
            className: "",
            style: { marginLeft: "3.5rem", marginRight: "3.5rem" },
          }}
          customClassName=""
          div-name="AtomSliderV2"
        >
          <SwiperSlide key="dddd">
            <RenderAtom
              item={item?.position2}
              defaultAtom="image"
              customClassName={`${smallItemClassName}`}
              divNamePrefix="imagegallery"
              onClick={() => setNumber(-1)}
            />
          </SwiperSlide>
          {dvList.map((item: any, index: number) => {
            return (
              <SwiperSlide key={item?.id || index}>
                <RenderAtom
                  item={{ value: item?.physicalpath }}
                  defaultAtom="image"
                  customClassName={`${smallItemClassName}`}
                  divNamePrefix="imagegallery"
                  onClick={() => setNumber(index)}
                />
              </SwiperSlide>
            );
          })}
        </AtomSliderV2>
      </BlockDiv>
    </>
  );
};

export default CozyProductDetailImage;
