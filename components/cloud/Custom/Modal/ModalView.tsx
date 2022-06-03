import { useContext, useRef, useState, FC } from "react";
import { Modal } from "antd";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { Iframe } from "util/helper";

import _ from "lodash";
import {
	AtomTitle,
	AtomText,
	AtomNumber,
	AtomIcon,
} from "@components/common/Atom";

type PropsType = {
	modelContent: any;
	visible: boolean;
	modalOptions?: any;
	onClose: any;
};

const ModalView: FC<PropsType> = ({
	visible,
	modalOptions,
	onClose,
	modelContent,
}) => {
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
	const [visibles, setVisible] = useState(visible);

	const isModal = () => {
		// console.log('Clicked cancel button');
		setVisible(false);
	};
	function modalViewContent(e: any) {
		if (e == "iframe") {
			if (_(modalOptions)) {
				return <Iframe iframe={modelContent} allow="autoplay" />;
			} else {
				return modelContent;
			}
		}
	}

	return (
		<Modal
			visible={visible}
			width={modalOptions?.width || 520}
			zIndex={modalOptions?.zIndex || 1000}
			title={modalOptions?.title || ""}
			footer={modalOptions?.footer || ""}
			style={modalOptions?.style || ""}
			className={modalOptions?.className || ""}
			wrapClassName={modalOptions?.wrapClassName || ""}
			bodyStyle={modalOptions?.bodyStyle || ""}
			centered
			// {...options}
			// onOk={(e) => {
			//   isModal();
			// }}
			// onOk={handleOk}
			// confirmLoading={confirmLoading}
			onCancel={onClose}
		>
			{/* <Iframe iframe={demos["golomt"]} allow='autoplay' /> */}
			{modelContent}
			{/* test */}
		</Modal>
	);
};

export default ModalView;
