import { useContext } from "react";
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
  AtomImage,
} from "@components/common/Atom";

export default function ProductGrid1() {
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

  if (isEmpty(datasrc)) return null;
  // console.log("ProductGrid1 config", config);
  // console.log("ProductGrid1 datasrc", datasrc);
  // console.log("ProductGrid1 otherattr", otherattr);
  // console.log("ProductGrid1 positionConfig", positionConfig);

  return (
    <>
      {/* <Title /> */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {datasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between flex-col p-4 bg-white rounded-lg shadow-citizen relative animate-fade-in-down w-full"
            >
              <AtomTag item="-20%" color="sso-lightest" />
              <div className="flex justify-center my-10">
                <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="h-32 w-32 rounded-full object-cover object-center"
                />
                {/* <img
                  src={renderPositionType(item, "position2", positionConfig)}
                  className="h-32 w-32 rounded-full object-cover object-center"
                /> */}
              </div>
              <div className="my-5">
                <AtomText
                  item={renderPositionType(item, "position92", positionConfig)}
                  customClassName="text-xs font-medium leading-5 text-gray-400 mt-5"
                />
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  link=""
                  customStyle={{}}
                  customClassName="text-base font-semibold leading-6 text-gray-800"
                  truncateRow={2}
                />
              </div>
              <div className="mt-2 flex justify-start w-full items-center">
                <AtomCurrency
                  item={renderPositionType(item, "position47", positionConfig)}
                  customClassName="text-xl font-semibold leading-normal text-green-500"
                  type="mnt"
                />
                {renderPositionType(item, "position4", positionConfig) !==
                  "0" && (
                  <AtomCurrency
                    item={renderPositionType(item, "position4", positionConfig)}
                    customClassName="text-xs  leading-normal text-gray-400 line-through ml-2"
                    type="mnt"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// itemcategoryid: "16329246115881"
// itemcode: "CE-0010-C0000002"
// itemid: "16329921392851"
// itemname: "КЛАССИК тээврийн хэрэгслийн даатгал"
// itemtypeid: "16329840876031"
// profilephoto: "storage/uploads/process/202109/file_1632995867221923_14966466791537741.jpg"
// purchaseprice: "0"
// saleprice: "0"
// status: "0"

// {
//   "position0": {
//       "id": "16327187582021",
//       "sectionid": "16324190608031",
//       "positionname": "position0",
//       "fieldpath": "itemId",
//       "otherattr": ""
//   },
//   "position51": {
//       "id": "16327187582041",
//       "sectionid": "16324190608031",
//       "positionname": "position51",
//       "fieldpath": "status",
//       "otherattr": ""
//   },
//   "position2": {
//       "id": "16327187582051",
//       "sectionid": "16324190608031",
//       "positionname": "position2",
//       "fieldpath": "profilePhoto",
//       "otherattr": ""
//   },
//   "position1": {
//       "id": "16324190608041",
//       "sectionid": "16324190608031",
//       "positionname": "position1",
//       "fieldpath": "itemName",
//       "otherattr": ""
//   },
//   "position4": {
//       "id": "16324190608051",
//       "sectionid": "16324190608031",
//       "positionname": "position4",
//       "fieldpath": "salePrice",
//       "otherattr": ""
//   },
//   "position47": {
//       "id": "16324190608061",
//       "sectionid": "16324190608031",
//       "positionname": "position47",
//       "fieldpath": "purchasePrice",
//       "otherattr": ""
//   },
//   "position41": {
//       "id": "16328070899231",
//       "sectionid": "16324190608031",
//       "positionname": "position41",
//       "fieldpath": "departmentName",
//       "otherattr": ""
//   }
// }
