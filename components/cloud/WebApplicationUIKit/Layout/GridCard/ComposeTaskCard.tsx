import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType, parentidToChildren } from "util/helper";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
} from "@components/common/Atom";

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
    widgetDefault,
  } = useContext(WidgetWrapperContext);
  const readyDatasrc = parentidToChildren(datasrc);

  return (
    <>
      <Title />

      {readyDatasrc.map((itemPage: any, indexPage: any) => {
        return (
          <div key={indexPage}>
            <AtomText
              item={renderPositionType(itemPage, "position90", positionConfig)}
              customClassName="text-sm text-gray-400 block"
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
                      <label>
                        <input className="mr-4" type="checkbox" />
                        <AtomText
                          item={renderPositionType(
                            item,
                            "position90",
                            positionConfig
                          )}
                          customClassName="text-sm text-gray-800"
                        />
                      </label>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}

      <div className="w-full flex flex-row items-between justify-between">
        <div>
          <AtomButton
            item="Санал өгөх"
            type="primary"
            color={widgetDefault.color}
            customClassName="rounded-md mt-5 px-7 shadow-lg"
          />
        </div>
        <div>
          <AtomButton
            item="Үр дүн"
            type="text"
            color={widgetDefault.color}
            customClassName="rounded-md mt-5 px-5"
          />
        </div>
      </div>
    </>
  );
};

export default ComposeTaskCard;
