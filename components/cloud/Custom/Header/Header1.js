import { useState } from "react";
import MegaMenu1 from "./MegaMenu1";
import Menu1 from "./Menu1";
import { useCloud } from "hooks/use-cloud";

export default function Header1({ defaultStyle = {}, defaultClassName = "" }) {
  const [sideBar, setSideBar] = useState();
  const { widgetAllaround } = useCloud().globalConfig;

  return (
    <>
      <div className="h-full w-full z-40">
        <nav
          role="navigation"
          className="w-full mx-auto hidden md:block bg-white shadow-md"
        >
          <div className="container bg-white justify-between py-5 flex items-center md:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <LeftLogo />
            </div>
            <div className="h-full flex items-center justify-center lg:pr-40 mr-4">
              <CustomInputButton2
                item={{ value: "" }}
                color={widgetAllaround.color}
              />
            </div>
            <div className="md:flex items-center justify-end hidden">
              <RightSection1 color={widgetAllaround.color} />
            </div>
          </div>

          <hr />

          <div className="container py-4 justify-between flex items-center mx-auto">
            <div className="h-full flex items-center">
              <MegaMenu1 color={widgetAllaround.color} />
              <Menu1 />
            </div>
            <div className="h-full flex items-center">
              <RightSection2 />
            </div>
          </div>
        </nav>
        <nav className="md:hidden">
          <MobileVersion sideBar={sideBar} setsideBar={setSideBar} />
        </nav>
      </div>
    </>
  );
}

const LeftLogo = () => {
  return (
    <button role="img" aria-label="logo" className="mr-10 flex items-center">
      <img
        src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1630553122/cloud/icons/logo_epszmi.png"
        alt="logo"
        className="w-44"
      />
    </button>
  );
};

const Icons = ({ data, defaultClassName }) => {
  return (
    <div className={`h-full flex items-center ${defaultClassName}`}>
      {data.map((item, index) => {
        return (
          <div
            key={item?.id || index}
            className="h-full flex items-center mr-4"
          >
            <button
              aria-label="show notifications"
              className="relative h-full flex items-center justify-center cursor-pointer"
            >
              <i className={`far fa-${item.icon} text-xl`} />
              {item.notification && (
                <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                  <div className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                </div>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="h-full flex items-center">
      <button
        aria-label="dropdown"
        className="focus:outline-none focus:text-gray-900  hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer"
      >
        <img
          className="rounded-full h-10 w-10 object-cover"
          src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
          alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
        />
      </button>
    </div>
  );
};

const RightSection1 = ({ color }) => {
  return (
    <div className="flex items-center">
      <Icons data={dataIcons1} />
      <CustomCardInfo2
        item={{
          icon: "shopping-bag",
          title: "10,500,000₮",
        }}
        color={color}
      />
    </div>
  );
};

const RightSection2 = () => {
  return (
    <div className="flex items-center">
      <Icons defaultClassName="mr-4" data={dataIcons2} />
      <Avatar />
    </div>
  );
};

const MainNav = () => {
  return (
    <div className="h-full flex items-center">
      <ul className="md:flex items-center h-full hidden">
        {dataNav.map((item, index) => {
          return (
            <li key={item?.id || index}>
              <a
                href="javascript:void(0)"
                className="focus:outline-none font-medium cursor-pointer h-full flex items-center text-sm mr-6 tracking-normal"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//  #    #  ####  #####  # #      ######
//  ##  ## #    # #    # # #      #
//  # ## # #    # #####  # #      #####
//  #    # #    # #    # # #      #
//  #    # #    # #    # # #      #
//  #    #  ####  #####  # ###### ######

const MobileVersion = ({ sideBar, setsideBar }) => {
  return (
    <>
      <div className="w-full shadow-md bg-white fixed top-0 z-50">
        <div className="w-full flex md:hidden">
          <div className="py-4 flex justify-between mx-4 items-center w-full">
            <div
              aria-label="logo"
              role="img"
              tabIndex={0}
              className="focus:outline-none my-2"
            >
              <img
                src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1630553122/cloud/icons/logo_epszmi.png"
                alt="logo"
                className="w-36"
              />
            </div>
            <div className="flex md:hidden items-center justify-end">
              <RightSection1 sideBar={sideBar} setsideBar={setsideBar} />
              <div className="h-full flex items-center ml-5">
                <button
                  onClick={() => setsideBar(!sideBar)}
                  aria-label="open menu"
                  className="focus:outline-none rounded-md"
                  // onclick="sidebarHandler(true)"
                >
                  <i className="far fa-bars text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Mobile responsive sidebar*/}
      <div
        className={
          sideBar
            ? "absolute w-full h-screen transform translate-x-0 z-50 transition duration-700 md:hidden"
            : "absolute w-full h-screen transform -translate-x-full z-50 transition duration-700 md:hidden"
        }
        id="mobile-nav"
      >
        <div className="w-full h-full shadow-lg z-40 fixed overflow-y-auto  top-0 bg-white flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
          <div className="sm:px-6 px-4 h-full">
            <div className="flex flex-col justify-between h-full w-full">
              <div>
                <div className="mt-6 flex w-full items-center justify-between">
                  <div className="pb-4 flex items-center justify-between w-full">
                    <div
                      aria-label="logo"
                      role="img"
                      tabIndex={0}
                      className="focus:outline-none my-2"
                    >
                      <img
                        src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1630553122/cloud/icons/logo_epszmi.png"
                        alt="logo"
                        className="w-36"
                      />{" "}
                    </div>
                    <button
                      onClick={() => setsideBar(!sideBar)}
                      id="cross"
                      aria-label="close menu"
                      className="rounded-md"
                      // onclick={() => sidebarHandler(false)}
                    >
                      <i className="far fa-times text-xl"></i>
                    </button>
                  </div>
                </div>
                <ul>
                  <div className="border-gray-200 border-b border-opacity-20 pb-5 md:pr-10 lg:pr-0 h-full flex items-center">
                    {/* <CustomInputButton2 item={{ value: "" }} color="weekly" /> */}
                  </div>
                  {dataNav.map((item, index) => {
                    return (
                      <li key={item?.id || index}>
                        <a className="cursor-pointer">
                          <div className=" pt-5">
                            <div className="flex items-center">
                              <p
                                tabIndex={0}
                                className="focus:outline-none text-sm font-medium"
                              >
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//  #####  ###### #    #  ####
//  #    # #      ##  ## #    #
//  #    # #####  # ## # #    #
//  #    # #      #    # #    #
//  #    # #      #    # #    #
//  #####  ###### #    #  ####
const dataNav = [
  {
    title: "Ангилал",
  },
  {
    title: "Онцгой",
  },
  {
    title: "Шинэ",
  },
  {
    title: "Хямдралтай",
  },
  {
    title: "Брэнд",
  },
];

const dataIcons1 = [
  {
    icon: "gift",
    title: "",
    notification: true,
  },
  {
    icon: "heart",
    title: "",
  },
  {
    icon: "wallet",
    title: "",
  },
];

const dataIcons2 = [
  {
    icon: "bell",
    title: "",
    notification: true,
  },
];

//  #####  #    # ##### #####  ####  #    #
//  #    # #    #   #     #   #    # ##   #
//  #####  #    #   #     #   #    # # #  #
//  #    # #    #   #     #   #    # #  # #
//  #    # #    #   #     #   #    # #   ##
//  #####   ####    #     #    ####  #    #
function CustomInputButton2({
  icon = "fa-search",
  color = "weekly",
  defaultStyle = {},
  defaultClassName = "",
}) {
  return (
    <>
      <div
        className={`h-10 relative text-gray-700 ${defaultClassName}`}
        style={{ ...defaultStyle }}
      >
        <input
          className="w-full h-full pl-6 pr-16 text-base placeholder-gray-400 border-0 rounded-full focus:outline-none focus:ring-1  focus:ring-gray-200 bg-gray-100"
          type="text"
          placeholder="Хайх барааны нэрээ оруулна уу..."
        />

        <button
          className={`h-full w-14 absolute inset-y-0 right-0 flex items-center justify-center font-bold rounded-full rounded-bl-none bg-${color} border-0 text-white hover:bg-${color}-dark hover:border-0 hover:border-${color}-dark hover:text-white`}
        >
          <i className={`far ${icon} text-xl`}></i>
        </button>
      </div>
    </>
  );
}

//   ####    ##   #####  #####
//  #    #  #  #  #    # #    #
//  #      #    # #    # #    #
//  #      ###### #####  #    #
//  #    # #    # #   #  #    #
//   ####  #    # #    # #####

function CustomCardInfo2({
  item = {
    icon: "shopping-bag",
    title: "sample",
  },
  color = "weekly",
}) {
  return (
    <>
      <div className="flex items-center relative h-10">
        <button
          className={`h-full w-14 absolute inset-y-0 left-0 flex items-center justify-center font-bold rounded-full rounded-br-none bg-${color} border-0 text-white`}
        >
          <i className={`fal fa-${item.icon} text-xl`}></i>
        </button>

        <div className="grow my-3 pl-16 pr-5 h-full rounded-full bg-gray-100 flex items-center">
          <p className="text-black font-semibold text-sm truncate">
            {item.title}
          </p>
        </div>
      </div>
    </>
  );
}
