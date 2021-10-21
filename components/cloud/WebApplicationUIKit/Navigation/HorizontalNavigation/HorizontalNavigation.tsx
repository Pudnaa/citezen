import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  AtomImage,
  AtomText,
  AtomTitle,
  AtomIcon,
  AtomInput,
} from "@components/common/Atom";

export default function HorizontalNavigation() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    renderPositionType,
    Title,
  } = useContext(WidgetWrapperContext);


  const [sideBar, setsideBar] = useState();
  if (isEmpty(datasrc)) return null;

  return (
    <>
      <div className="h-full w-full">
        {/* Code block starts */}
        <nav
          role="navigation"
          className="px-4 w-full mx-auto block shadow-citizen"
          style={{ background: "#F8F9FA" }}
        >
          <div
            className={`justify-between h-14 flex items-center ${
              otherattr?.insideDiv?.className || ""
            }`}
          >
            <div className="h-full flex items-center py-3">
              <AtomImage
                item="https://cloud.veritech.mn/app/storage/uploads/process/logo.png"
                customClassName="flex items-center h-full"
                link="#"
              />
              {/* <ul className="ml-10 flex items-center h-full">
                {menuData.map((item: any, index: number) => {
                  return (
                    <li key={index}>
                      <AtomText
                        item={item.title}
                        link="#"
                        customClassName="font-medium h-full flex items-center  text-sm tracking-normal mr-5"
                      />
                    </li>
                  );
                })}
              </ul> */}
            </div>
            <div className="flex items-center justify-end ">
              <div className="flex items-center ">
                <AtomInput
                  item=""
                  icon="far fa-search"
                  value={undefined}
                  placeholder="Хайх..."
                  type="text"
                  customClassName="w-full"
                />

                <div className="h-full flex items-center relative mx-5">
                  <AtomIcon
                    item="far fa-bell"
                    customClassName="text-xl text-gray-600"
                  />
                  <div className="absolute top-0 right-0">
                    <div className="animate-ping w-2 h-2 rounded-full bg-sso" />
                  </div>
                </div>

                <AtomImage
                  item="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                  customClassName="rounded-full w-10 h-10 object-cover"
                />
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        {/* Sidebar ends */}
        {/* Code block ends */}
      </div>
    </>
  );
}

const menuData = [
  { title: "Нүүр", icon: "far fa-car" },
  { title: "Санхүү", icon: "far fa-car" },
  { title: "Профайл", icon: "far fa-car" },
];
