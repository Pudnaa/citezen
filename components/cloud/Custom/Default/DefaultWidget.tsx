import { useState, FC } from "react";
import { Modal } from "antd";

type PropsType = {
  listConfig: any;
  config: any;
  widgetnemgoo: any;
  datasrc: any;
};

const DefaultWidget: FC<PropsType> = ({
  listConfig,
  config,
  widgetnemgoo,
  datasrc,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="bg-gray-50 w-full h-auto block border-2 border-gray-300 text-center rounded-xl p-5 m-4 relative overflow-y-auto">
      <div>
        <span className="text-xs mr-2">componentpath:</span>
        {listConfig.componentpath}
      </div>
      <hr className="border-gray-300 border-opacity-90 my-2" />
      <div className="text-2xl text-center">
        <span className="text-xs mr-2">widgetcode: </span>
        {listConfig.widgetcode}
      </div>

      <div
        className="absolute cursor-pointer bg-green-100 bottom-2 right-2 rounded-xl text-xs p-3"
        onClick={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        listConfig
      </div>
      <Modal
        title={listConfig.widgetcode}
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        width={700}
        footer={null}
      >
        <div className="grid grid-cols-2">
          <div className="overflow-y-auto h-96">
            <pre>{JSON.stringify(listConfig, null, 2)}</pre>
          </div>
          <div className="overflow-y-auto h-96">
            <pre>{JSON.stringify(datasrc, null, 2)}</pre>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default DefaultWidget;
