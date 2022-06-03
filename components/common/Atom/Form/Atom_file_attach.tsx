import React, { FC, useState, useContext } from "react";
import useSWR from "swr";
import axios from "axios";
import _ from "lodash";
import Atom_label from "./Atom_label";
import { Upload, message, Modal } from "antd";
import { useUser } from "hooks/use-user";
import FormMetaContext from "context/Meta/FormMetaContext";
import { metaConfig } from "../../../../config/metaConfig";
import { useSession, signOut } from "next-auth/react";
import { fieldDisableEnable, fieldHideShow } from "util/helper";
import { overrideTailwindClasses } from "tailwind-override";
type PropsType = {
	config: any;
	className: any;
	labelClassName: any;
	style?: any;
	rowIndex?: any;
	sectionConfig?: any;
};

const Atom_file_attach: FC<PropsType> = ({
	config,
	className,
	labelClassName,
	style,
	rowIndex,
	sectionConfig,
}) => {
	const [defaultFileList, setDefaultFileList] = useState([]);
	const [progress, setProgress] = useState(0);
	const { processExpression, formDataInitData, handleChangeContext } =
		useContext(FormMetaContext);
	const { data: session, status }: any = useSession();
	const userContext = useUser();
	const uploadButton = (
		<div>
			<div style={{ marginTop: 2 }}>
				{" "}
				<span className="far fa-plus text-2xl"></span>{" "}
			</div>
		</div>
	);

	function beforeUpload(file: any) {
		const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
		if (!isJpgOrPng) {
			message.error("You can only upload JPG/PNG file!");
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error("Image must smaller than 2MB!");
		}
		return isJpgOrPng && isLt2M;
	}

	const uploadImage = async (options: any) => {
		const { onSuccess, onError, file, onProgress, filename } = options;

		const fmData = new FormData();
		const config = {
			headers: { "content-type": "multipart/form-data" },
			onUploadProgress: (event: any) => {
				const percent = Math.floor((event.loaded / event.total) * 100);
				setProgress(percent);
				if (percent === 100) {
					setTimeout(() => setProgress(0), 1000);
				}
				onProgress({ percent: (event.loaded / event.total) * 100 });
			},
		};

		fmData.append(options.file.name, file, options.file.name);
		fmData.append("sessionId", session.dbsessionid);
		fmData.append("fileName", options.file.name);

		try {
			const res = await axios.post(metaConfig.fileAttach, fmData, config);
			onSuccess("Ok");
			handleChangeContext({
				name: filename,
				value: res.data.response.files,
			});
		} catch (err) {
			console.log("Eroor: ", err);
			const error = new Error("Some error");
			onError({ err });
		}
	};

	const handleOnChange = (file: any, fileList: any, event: any) => {
		// console.log(file, fileList);
		setDefaultFileList(fileList);
	};

	return (
		<>
			<div
				className={`${
					sectionConfig?.widgetnemgooReady?.labelPosition == "top"
						? `flex flex-col`
						: `grid grid-cols-2 gap-4`
				} ${
					config.isshow == "0"
						? "hidden"
						: fieldHideShow(config, processExpression) && "hidden"
				}`}
			>
				<Atom_label
					labelName={config.labelname}
					isrequired={config.isrequired}
					className={`${labelClassName}`}
					labelFor={config.paramrealpath}
					styles=""
					sectionConfig={sectionConfig}
				/>
				<Upload
					name={config.paramrealpath}
					id={config.paramrealpath}
					listType="picture-card"
					className={overrideTailwindClasses(
						`avatar-uploader mt-2 ${className}`,
					)}
					defaultFileList={defaultFileList}
					showUploadList={true}
					customRequest={uploadImage}
					beforeUpload={beforeUpload}
					// onChange={handleOnChange}
				>
					{uploadButton}
				</Upload>
				<Modal
					title="image"
					footer={null}
					// onCancel={this.handleCancel}
				>
					<span>image title </span>
				</Modal>
				{config.isEmpty && <span>{config.errorText}</span>}
			</div>
		</>
	);
};

export default Atom_file_attach;
