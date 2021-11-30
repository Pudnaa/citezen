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
} from "@components/common/Atom";

export default function List1() {
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
  // console.log("List1 config", config);
  // console.log("List1 datasrc", datasrc);
  // console.log("List1 otherattr", otherattr);
  // console.log("List1 positionConfig", positionConfig);

  const data = {
    golomt:
      '<iframe src="https://openapi-uat.golomtbank.com/?response_type=code&client_id=01559301865946952751&redirect_uri=http://customer.veritech.mn/check&scope=7613cd6670832e2be15fdc911df9c48f92e0175812f47409b0ff666832bafc3ca11df38f8d1374fbd4c9b4aabfb163e1228c231962cc4bc7e1a5d7f8ef464e5167546d79afc7a1b5928b5925cfcf5ae46b8724ecdcf8e32696d518dd61dd01d97d52b0817e8fd11d550fbfc34798890770ca658a4628c4b7d3f5e8e6d5cea2836b8e7960f07216a46197dbdb94fd86372bcbf94ea33f2e24ab4ef20b88e338d46e32890f8622e266c8014e0522c8b8e85202d7fe3eeac6fcb7f1133a8271c29307ed667f592e29cbc46734d910717edf0bd52d2b1999e7504a136997ef128d1edd2a418e3093a05a0536831df9c09b01f3a3c9183b2e1c1c82037617a3115232df1f958322e5817c5b49bdcb7cc51ce5f9999e5a10d5734bf15f943746e4630a5eb89fd9cdc5128bc6d9b8a3cabeb6de15e819274812d0843c83da668e899730dfa9f35d690e60c5ade4fe9b00a2c43f4dbedc1e309b00d9e014c8742ca27b058d70a1fb22fade98df9baab663b0f32520d3f70aab7ca30f5930b52456ccd7323f6b20279a67fcc7cd9358d264ee9e418612a8aa5cc0ea87581c760fa7d388570536a88b6c6dda048617424cffc27073cabb87c14489a29257a722114b4a770dcab6dadad8b308c6f30d9066ecce006c9a11e97f647079b9ad0128aa66e81443e7a53250745ee0ea3152652777047ff95c75585191d7c3bc2bcb0b06ad2e529e6031a2c5b4d2d96cfd844da4dc88004113ace39bc01df9bf13944ed73b4c5da59b78fd31145534ce3fc3332b0017b0194bc6bb5ff58c787e4b4d65d218a3b17aec96a102c450fcf2e1abba7c4a36c9970b6ae8f24c8eec042c2e3d37be16886141c8263e824ee83e2fe63fc9472cc867c0b7ea3478e20cd2190e7cc003e25fdcdb8f360ee6f98328a564d2606c2c0c63bdb69bcb80de170ad293514e5c44690a7ad6951137c0112547a800424fc7123aa78e94fabedd656d11a84ee804e35abaad9c18762a13108f55ae3133fd1d70c9fb5bfb9d3f91596a63be10c52153d4b8b7b555373e041436f31c339cf18e3716&state=f07e651c-90fa-4576-91bb-fd54dc1279d5" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',
  };

  const starContainer = (
    classname: string,
    num: string,
    color: string,
    w: string,
    h: string
  ) => {
    return (
      <div className={`cursor-pointer flex space-x-2 ${classname}`}>
        <svg
          width={w}
          height={h}
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={parseInt(num) >= 1 ? color : "#D1D5DB"}
          />
        </svg>
        <svg
          width={w}
          height={h}
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={parseInt(num) >= 2 ? color : "#D1D5DB"}
          />
        </svg>
        <svg
          width={w}
          height={h}
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={parseInt(num) >= 3 ? color : "#D1D5DB"}
          />
        </svg>
        <svg
          width={w}
          height={h}
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={parseInt(num) >= 4 ? color : "#D1D5DB"}
          />
        </svg>
        <svg
          width={w}
          height={h}
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={parseInt(num) >= 5 ? color : "#D1D5DB"}
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="p-5 w-full  ">
      <div className="lg:flex items-center justify-center w-full">
        {datasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="lg:w-full lg:mb-0 mt-2.5 mx-1.5 bg-white"
            >
              <div className="flex items-center pb-2 ">
                <img
                  src={renderPositionType(item, "position2", positionConfig)}
                  className="w-12 h-12 rounded-full"
                />
                <div className="pl-3 items-center">
                  <div className="w-full">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      link=""
                      customStyle={{}}
                      customClassName="text-xl font-medium leading-5 font-bold text-gray-700"
                      truncateRow={2}
                    />
                    {renderPositionType(item, "position51", positionConfig)}
                  </div>
                  <div>
                    {starContainer(
                      "mt-1",
                      renderPositionType(item, "position51", positionConfig),
                      "#FFBB00",
                      "11",
                      "10"
                    )}
                  </div>
                </div>
              </div>
              <div className="pr-1">
                <AtomText
                  item={renderPositionType(item, "position3", positionConfig)}
                  customClassName="text-sm leading-5 py-4 text-gray-600"
                />
                {/* {renderPositionType(item, "position70", positionConfig)} */}
                {/* {positionConfig["position70"].positionnemgoo} */}
                <div className="flex justify-center mt-7 ">
                  <AtomButton
                    item="ХҮСЭЛТ ИЛГЭЭХ"
                    type="primary"
                    customClassName="rounded-full font-bold text-sm px-8 py-3"
                    color="gray-700"
                    //actionType={positionConfig["position85"].positionnemgoo}
                    //contentData={data.golomt}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
