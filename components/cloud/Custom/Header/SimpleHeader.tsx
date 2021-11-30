import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import Link from "next/link";
import { useUser } from "hooks/use-user";
import { AtomImage } from "@components/common/Atom";
import { isEmpty } from "lodash";

export default function HeaderSimple() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  const [search, setSearch] = useState(false);
  const userContext = useUser();
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(userContext.userData);
  // if (isEmpty(datasrc)) return null;
  console.log("profile", profile);

  return (
    <>
      <div className="bg-gray-200 ">
        {/* Code block starts */}
        <nav className="w-full mx-auto hidden xl:block bg-white   border-t-4 border-yellow-500  shadow-xl">
          <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <div className="mr-10 flex items-center">
                <AtomImage
                  item="https://cloud.veritech.mn/app/storage/uploads/process/noledge.png"
                  customClassName="w-60"
                  link="/"
                />
              </div>
              <ul className="pr-12 xl:flex items-center h-full hidden">
                <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 tracking-normal border-b-2 border-white">
                  FAQ
                </li>
                <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mx-10 tracking-normal">
                  DOCS
                </li>
              </ul>
            </div>
            <div className="h-full xl:flex items-center justify-end hidden">
              <div className="w-full h-full flex items-center">
                <div className="w-full pr-12 h-full flex items-center border-gray-300 border-r">
                  <div className="relative w-full">
                    <div className="text-gray-800 absolute ml-3 inset-0 m-auto w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                      </svg>
                    </div>
                    <input
                      className="border border-gray-300 focus:outline-none focus:border-indigo-700 w-80 rounded text-sm text-gray-200 bg-gray-100 pl-8 py-2"
                      type="text"
                      placeholder="Хайх ..."
                    />
                  </div>
                </div>
                <div className="w-full h-full flex">
                  <div className="w-32 h-full flex items-center justify-center border-gray-300 border-r text-gray-400 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                  </div>
                  <div className="w-full flex items-center justify-end relative cursor-pointer">
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src={userContext.userData.emppicture}
                      alt="logo"
                    />
                    {/* <p className="text-gray-800 text-sm ml-2 ">
                      {userContext.userData.username}
                      <Link href="/logout">
                        <a>
                          <span className="ml-3">Гарах</span>
                        </a>
                      </Link>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
