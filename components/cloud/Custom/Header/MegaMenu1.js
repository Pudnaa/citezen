import { useState } from "react";
import MegaMenu1Popover from "./MegaMenu1Popover";
import {
  AtomImage,
  AtomText,
  AtomTitle,
  AtomIcon,
  AtomInput,
  AtomButton,
} from "@components/common/Atom";

export default function MegaMenu1({
  data,
  color,
  defaultClassName = "",
  defaultStyle = {},
}) {
  const item = data;
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="relative">
        <AtomButton
          item="Ангилал"
          icon="far fa-bars"
          type="primary"
          color={color}
          customClassName="mr-6 rounded-full"
          onClick={() => {
            setShow(!show);
          }}
        />
        {show && <MegaMenuSub setShow={setShow} />}
      </div>
    </>
  );
}

const MegaMenuSub = ({ setShow }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-green-200 bg-opacity-0 overflow-y-auto h-full w-full z-40"
        onClick={() => {
          setShow(false);
        }}
      ></div>

      <div className="visible transition duration-700 opacity-100 bg-white  shadow-lg rounded mt-2 py-1 absolute z-40">
        <ul className="relative">
          {data.map((item, index) => {
            return <MegaMenu1Popover key={item?.id || index} data={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

const data = [
  {
    title: "Хүнс",
    icon: "burger-soda",
    sub: [
      { title: "Гал тогоо", icon: "shopping-bag" },
      { title: "Хоол хийх сав, хэрэгсэл", icon: "shopping-bag" },
      { title: "Даавуун эдлэл", icon: "shopping-bag" },
      { title: "Тавилганы тоноглол, хэрэгсэл", icon: "shopping-bag" },
      { title: "Холигч, угаалтуур, тоноглол", icon: "shopping-bag" },
      { title: "Хадгалах, агуулах тавиур", icon: "shopping-bag" },
      { title: "Цахилгаан хэрэгсэл", icon: "shopping-bag" },
      { title: "Хооллох өрөө", icon: "shopping-bag" },
      { title: "Хооллох хэрэгсэл", icon: "shopping-bag" },
      { title: "Даавуун эдлэл", icon: "shopping-bag" },
      { title: "Кофены хэсэг", icon: "shopping-bag" },
      { title: "Чимэглэл", icon: "shopping-bag" },
      { title: "Зочны өрөө", icon: "shopping-bag" },
      { title: "Буйдан, түшлэгтэй сандал", icon: "shopping-bag" },
      { title: "Гэрэл, гэрэлтүүлэг", icon: "shopping-bag" },
      { title: "Даавуун эдлэл", icon: "shopping-bag" },
      { title: "Ханын тавиур, өлгөдөг", icon: "shopping-bag" },
      { title: "Унтлагын өрөө", icon: "shopping-bag" },
      { title: "Матрасс", icon: "shopping-bag" },
      { title: "Гэрэл, гэрэлтүүлэг", icon: "shopping-bag" },
      { title: "Даавуун эдлэл", icon: "shopping-bag" },
      { title: "Толь", icon: "shopping-bag" },
      { title: "Угаалгын өрөө", icon: "shopping-bag" },
      { title: "Тавилга, тавиур", icon: "shopping-bag" },
      { title: "Толь", icon: "shopping-bag" },
      { title: "Хөшиг, даавуун эдлэл", icon: "shopping-bag" },
      { title: "Тоноглол, жижиг эдлэл", icon: "shopping-bag" },
      { title: "Цахилгаан хэрэгсэл", icon: "shopping-bag" },
      { title: "Суултуур, Биде", icon: "shopping-bag" },
      { title: "Үүдний өрөө", icon: "shopping-bag" },
      { title: "Хадгалах хайрцаг, сагс", icon: "shopping-bag" },
      { title: "Хүүхдийн", icon: "shopping-bag" },
      { title: "Нярай хүүхдийн", icon: "shopping-bag" },
      { title: "Хүүхдийн", icon: "shopping-bag" },
      { title: "8-12 насны хүүхдийн", icon: "shopping-bag" },
      { title: "Бизнесс, ажлын өрөө", icon: "shopping-bag" },
      { title: "Оффис, ажлын хэсэг", icon: "shopping-bag" },
      { title: "Даавуун эдлэл, хивс", icon: "shopping-bag" },
      { title: "Хивс, хивсэнцэр", icon: "shopping-bag" },
      { title: "Унтлагын өрөө", icon: "shopping-bag" },
      { title: "Ширээний хэрэглэл", icon: "shopping-bag" },
      { title: "Угаалгын өрөө", icon: "shopping-bag" },
      { title: "Чимэглэл", icon: "shopping-bag" },
      { title: "Зураг, зургийн", icon: "shopping-bag" },
      { title: "Лаа, лааны суурь", icon: "shopping-bag" },
      { title: "Цэцэг, цэцгийн", icon: "shopping-bag" },
      { title: "Таваг, ваар, шаазан", icon: "shopping-bag" },
      { title: "Чимэглэл аксесуар", icon: "shopping-bag" },
      { title: "Цаг", icon: "shopping-bag" },
      { title: "Толь", icon: "shopping-bag" },
      { title: "Баярын чимэглэл", icon: "shopping-bag" },
      { title: "Хөгжим", icon: "shopping-bag" },
      { title: "Үнэртэн", icon: "shopping-bag" },
      { title: "Угаалга, цэвэрлэгээ", icon: "shopping-bag" },
      { title: "Угаалга, цэвэрлэгээ", icon: "shopping-bag" },
      { title: "Бусад", icon: "shopping-bag" },
      { title: "Хадгалах, цэгцлэх, сав", icon: "shopping-bag" },
      { title: "Аюулгүй байдал", icon: "shopping-bag" },
      { title: "Багаж хэрэгсэл", icon: "shopping-bag" },
      { title: "Хивс", icon: "shopping-bag" },
    ],
  },
  {
    title: "Шингэн хүнс",
    icon: "jug",
    sub: [
      { title: "Кофе, Цай" },
      { title: "Кофе" },
      { title: "Кофены сүү" },
      { title: "Цай" },
      { title: "Ус, Ундаа, Жүүс" },
      { title: "Ус" },
      { title: "Ундаа" },
      { title: "Жүүс" },
      { title: "Согтууруулах Ундаа" },
      { title: "Виски, конъяк" },
      { title: "Жин, текела, рум" },
      { title: "Вино, дарс" },
      { title: "Архи импорт" },
      { title: "Архи дотоод" },
      { title: "Шар айраг импорт" },
      { title: "Шар айраг дотоод" },
    ],
  },
  {
    title: "Гэр ахуйн бүтээгдэхүүн",
    icon: "blender-phone",
    sub: [
      { title: "Ахуйн Хэрэглээ" },
      { title: "Ариун цэврийн цаас" },
      { title: "Сальфекта нойтон, хуурай" },
      { title: "Ариун цэврийн хэрэглэл" },
      { title: "Ахуйн цаас, сальфетка," },
      { title: "Цэвэрлэгээний алчуур, парлон" },
      { title: "Тугалган цаас, хогийн уут, хүнсний скоч" },
      { title: "Аяга таваг угаагч шингэн" },
      { title: "Угаалгын бодис хуурай" },
      { title: "Угаалгын бодис шингэн" },
      { title: "Цэвэрлэгээний бодис хуурай" },
      { title: "Цэвэрлэгээний бодис шингэн" },
      { title: "Хувцас зайлагч" },
      { title: "Агааржуулагч, үнэртүүлэгч" },
      { title: "Гутлын арчилгаа" },
      { title: "Нэг удаагийн хэрэгсэл" },
      { title: "Лаа" },
      { title: "Эдийн саван" },
    ],
  },
  {
    title: "Хүүхдийн бараа",
    icon: "baby-carriage",
    sub: [
      { title: "Graco Хүүхдийн (Тэрэг, Ор, Суудал)" },
      { title: "Хүүхдийн ор" },
      { title: "Хүүхдийн тэрэг" },
      { title: "Хүүхдийн машины суудал" },
      { title: "Хүнс" },
      { title: "Хүүхдийн нухаш, сок" },
      { title: "Хүүхдийн сүү, каша" },
      { title: "Бараа" },
      { title: "Хүүхдийн живх," },
      { title: "хүүхдийн сальфетка" },
      { title: "Хүүхдийн арьс арчилгаа" },
      { title: "Хүүхдийн саван хатуу, шингэн" },
      { title: "Хүүхдийн угаалгын нунтаг" },
      { title: "Бусад хэрэгсэл" },
    ],
  },
  {
    title: "Амттан",
    icon: "ice-cream",
    sub: [
      { title: "Чихэр, Шоколад, Набор" },
      { title: "Кг-н чихэр" },
      { title: "Ууттай чихэр" },
      { title: "Резинэн чихэр" },
      { title: "Жижиг чихэр" },
      { title: "Иштэй чихэр" },
      { title: "Шоколад" },
      { title: "Набор" },
      { title: "Печень, Вафель, Рулет, Кекс" },
      { title: "Печень, шагшуурга" },
      { title: "Вафли" },
      { title: "Рулет, кекс, чоко пай" },
      { title: "Хөнгөн Зууш" },
      { title: "Чипс, попкорн" },
      { title: "Өглөөний хоол" },
      { title: "Найруулдаг какао, халуун шоколад" },
      { title: "Самар, хатаасан жимс" },
      { title: "Цэлцэгнүүр, пудинг" },
      { title: "Бохь, гаа" },
    ],
  },
  { title: "Боловсрол", icon: "books" },
  { title: "Эрүүл мэнд, гоо сайхан", icon: "heartbeat" },
];
