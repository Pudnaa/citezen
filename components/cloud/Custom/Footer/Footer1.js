import { useState } from "react";
import Link from "next/link";

export default function Footer1({ defaultStyle = {}, defaultClassName = "" }) {
  const data = footerData;
  return (
    <>
      <footer className="bg-gray-800 pt-10 sm:mt-10 h-full">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          {data.menus.map((item, index) => {
            return <FooterRow item={item} key={index} />;
          })}
          <FooterRow item={data.address} />
        </div>

        <FooterBottom data={data} />
      </footer>
    </>
  );
}

const FooterRow = ({ item }) => {
  return (
    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
      <div className="text-sm text-gray-400 font-medium mb-6">{item.title}</div>

      {item.rows.map((menuItem, index) => {
        if (menuItem?.link) {
          return (
            <Link href={menuItem?.link} key={index}>
              <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                {menuItem.title}
              </a>
            </Link>
          );
        } else {
          return (
            <div
              key={index}
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              {menuItem.title}
            </div>
          );
        }
      })}
    </div>
  );
};

const FooterBottom = ({ data }) => {
  return (
    <div
      className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
    >
      <div className="mt-2">
        <div>Powered by Veritech ERP</div>
        <div className="mt-2">
          © Copyright 19987-2021. Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </div>

      <div className="mt-2 ml-5">
        <div>Гар утас дээрх апп</div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <Link href={data.app.rows[0].link}>
              <a>
                <img src={data.app.rows[0].image} className="w-28 h-8" />
              </a>
            </Link>
          </div>
          <div>
            <Link href={data.app.rows[1].link}>
              <a>
                <img src={data.app.rows[1].image} className="w-28 h-8" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-5 md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
        {data.social.rows.map((socialItem, index) => {
          return (
            <Link href={socialItem.link} key={index}>
              <a className="mx-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: socialItem.icon,
                  }}
                ></div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const footerData = {
  menus: [
    {
      title: "Бидэнтэй танилцах",
      rows: [
        { title: "Бүтээгдэхүүн үйлчилгээ", link: "#" },
        { title: "Ажлын байр", link: "#" },
        { title: "Бидний тухай", link: "#" },
      ],
    },
    {
      title: "Хэрэгцээтэй линк",
      rows: [
        { title: "Брэндүүд", link: "#" },
        { title: "Блог", link: "#" },
        { title: "Хямдралын карт", link: "#" },
        { title: "Хамтран ажиллах", link: "#" },
      ],
    },
    {
      title: "Тусламж",
      rows: [
        { title: "Хэрэглэх заавар", link: "#" },
        { title: "Түгээмэл асуултууд", link: "#" },
        { title: "Үйлчилгээний нөхцөл", link: "#" },
        { title: "Нууцлалын баталгаа", link: "#" },
      ],
    },
  ],
  address: {
    title: "Хаяг",
    rows: [
      { title: "БЗД, 26-р хороо" },
      { title: "CЭЭКЛ ХХК-ийн оффис" },
      { title: "09:00 - 22:00" },
      { title: "7707 3034" },
      { title: "circle1@orgil.mn" },
    ],
  },
  app: {
    title: "Гар утсан дээрх Апп",
    rows: [
      {
        image:
          "https://res.cloudinary.com/dzih5nqhg/image/upload/v1629706189/cloud/icons/119_vlmabb.svg",
        link: "Android-Link",
      },
      {
        image:
          "https://res.cloudinary.com/dzih5nqhg/image/upload/v1629706191/cloud/icons/120_kcre3b.svg",
        link: "Apple-Link",
      },
    ],
  },
  social: {
    title: "Бидэнтэй холбогдох",
    rows: [
      {
        image: "",
        icon: '<i className="fab fa-facebook-f text-xl"></i>',
        link: "facebook-link",
      },
      {
        image: "",
        icon: '<i className="fab fa-twitter text-xl"></i>',
        link: "twitter-link",
      },
      {
        image: "",
        icon: '<i className="fab fa-youtube text-xl"></i>',
        link: "youtube-link",
      },
    ],
  },
};
