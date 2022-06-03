import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import { useSession } from "next-auth/react";
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
  AtomLink,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
} from "@components/common/Atom";

export default function Table5() {
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
  const { data: session, status }: any = useSession();
  const dataSrcOld = _.filter(readyDatasrc, ["customerid", session?.id]);
  const dataSrc = _.filter(readyDatasrc, ["custuserid", session?.crmuserid]);

  console.log("readyDatasrc new dataSrc readyDatasrc", readyDatasrc);

  return (
    <div className="bg-white p-4 shadow-sm overflow-hidden rounded-lg">
      <div className="false false  leading-6 font-bold text-gray-700 ">
        <span className="line-clamp-2">{widgetnemgooReady?.title}</span>
      </div>
      <div
        style={{ height: 650 }}
        className={`w-full overflow-auto  scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full`}
      >
        <div className="mt-5 ml-2 flex items-center relative hidden"></div>
        <table className="w-full table-auto border-collapse text-sm">
          <thead className="whitespace-nowrap font-bold">
            <tr className="text-sm leading-none text-gray-400 h-10">
              <th
                key={0}
                className="font-semibold text-left mr-6"
                style={{ width: 350 }}
              >
                {positionConfig["position91"]["positionnemgooReady"]["title"]}
              </th>
              <th key={1} className="font-semibold text-left mr-6">
                {positionConfig["position92"]["positionnemgooReady"]["title"]}
              </th>
              <th key={2} className="font-semibold text-left mr-6">
                {positionConfig["position93"]["positionnemgooReady"]["title"]}
              </th>
              <th key={3} className="font-semibold text-left mr-6">
                {positionConfig["position94"]["positionnemgooReady"]["title"]}
              </th>
              <th key={5} className="font-semibold text-left mr-6">
                {positionConfig["position96"]["positionnemgooReady"]["title"]}
              </th>
              <th key={6} className="font-semibold text-left mr-6">
                {positionConfig["position97"]["positionnemgooReady"]["title"]}
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {dataSrc.map((item: any, index: number) => {
              let urlString =
                positionConfig["position91"]["positionnemgooReady"]["url"][
                  "path"
                ];
              for (let keyval in item) {
                if (urlString.indexOf("{" + keyval + "}") !== -1) {
                  urlString = urlString.replaceAll(
                    "{" + keyval + "}",
                    item[keyval]
                  );
                }
              }

              return (
                <tr
                  key={item?.id || index}
                  className="h-10 text-sm leading-none text-gray-800  border-b border-t border-gray-100"
                >
                  <td style={{ width: 350 }}>
                    <div className="flex items-center">
                      <AtomLink
                        item={urlString}
                        children={renderPositionType(
                          item,
                          "position91",
                          positionConfig
                        )}
                        customClassName="text-sm leading-5 py-4 mr-6 text-blue-500"
                      />
                    </div>
                  </td>
                  <td>
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position92",
                        positionConfig
                      )}
                      customClassName="text-sm leading-5 py-4 mr-6"
                    />
                  </td>
                  <td>
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position93",
                        positionConfig
                      )}
                      customClassName="text-sm leading-5 py-4 mr-6"
                    />
                  </td>
                  <td>
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position94",
                        positionConfig
                      )}
                      customStyle={{
                        backgroundColor: item.wfmstatuscolor,
                        borderRadius: 100,
                      }}
                      customClassName="text-sm leading-5 p-1 mr-6 whitespace-nowrap text-white text-center"
                    />
                  </td>
                  {/* <td>
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position95",
                        positionConfig
                      )}
                      customClassName="text-sm leading-5 py-4 mr-6"
                    />
                  </td> */}
                  <td>
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position96",
                        positionConfig
                      )}
                      customClassName="text-sm leading-5 py-4 mr-6"
                    />
                  </td>
                  <td>
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position97",
                        positionConfig
                      )}
                      customClassName="text-sm leading-5 py-4 mr-6 whitespace-nowrap"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
