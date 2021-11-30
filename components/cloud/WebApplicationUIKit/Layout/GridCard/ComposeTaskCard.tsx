import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType, listToTree } from "util/helper";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
} from "@components/common/Atom";
import IndigoBlockGrayBg from "@cloud/WebApplicationUIKit/Navigation/Tab/IndigoBlockGrayBg";

const ComposeTaskCard = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const readyDatasrc = listToTree(datasrc);
  // console.log("🚀 ~ ComposeTaskCard ~ datasrc", datasrc);
  // console.log("🚀 ~ ComposeTaskCard ~ readyDatasrc", readyDatasrc);
  // const readyDatasrc = parentidToChildren(datasrc);
  const [pageNum, setPageNum] = useState(1);

  return (
    <>
      <Title />

      {readyDatasrc.map((itemPage: any, indexPage: any) => {
        // console.log("DDDDDDDDDDDDD", itemPage);
        return (
          <div key={indexPage} className="p-1">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Санал асуулга</h1>
              <div>
                <AtomIcon
                  // item={item.icon}
                  item="fa fa-angle-left fa-lg"
                  checked={false}
                  color={widgetAllaround.color}
                  hoverSolid={true}
                  customClassName="text-lg cursor-pointer"
                  onClick={() => setPageNum(pageNum < 2 ? 1 : pageNum - 1)}
                />
                {" " + pageNum + " "}
                <AtomIcon
                  // item={item.icon}
                  item="fa fa-angle-right fa-lg"
                  checked={false}
                  color={widgetAllaround.color}
                  hoverSolid={true}
                  customClassName="text-lg cursor-pointer"
                  onClick={() => setPageNum(pageNum + 1)}
                />
              </div>
            </div>

            <IndigoBlockGrayBg
              items={["Борлуулалт", "Маркетинг", "Хүний нөөц", "Санхүү"]}
              styling="border"
              active="border-green-600 text-green-600"
            />
            <br />
            <AtomText
              item={renderPositionType(itemPage, "position90", positionConfig)}
              customClassName="text-base text-gray-500 block"
            />

            <hr className="my-7" />

            <div>
              {itemPage.children &&
                itemPage.children.map((item: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="checkbox mb-4 items-center cursor-pointer flex"
                    >
                      <input
                        className="mr-4 rounded-lg text-green-600"
                        type="checkbox"
                        id={`checkbox-${index}`}
                      />
                      <label htmlFor={`checkbox-${index}`}>
                        <AtomText
                          item={renderPositionType(
                            item,
                            "position90",
                            positionConfig
                          )}
                          customClassName="text-sm"
                        />
                      </label>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}

      <div className="w-full flex pl-1 pb-6">
        <div className="flex flex-wrap mx-auto">
          <div>
            <AtomButton
              item="Санал өгөх"
              type="primary"
              color="gray-700"
              customClassName="rounded-md mt-5 px-7 shadow-lg"
            />
          </div>
          <div>
            <AtomButton
              item="Үр дүн харах"
              type="text"
              color={widgetAllaround.color}
              customClassName="rounded-md mt-5 px-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComposeTaskCard;
