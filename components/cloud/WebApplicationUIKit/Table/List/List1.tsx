import { useContext, useState, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import { notification } from "antd";
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
	AtomImage,
	AtomTag,
} from "@components/common/Atom";
import Router from "next/router";
import RenderWidgetProcess from "@middleware/components/WidgetForm/RenderWidgetProcess";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import parseHtml from "html-react-parser";
import { decode } from "html-entities";
import { useRouter } from "next/router";
import WidgetWithId from "middleware/components/WidgetStandart/WidgetWithId";
import { Iframe } from "util/helper";
export default function List1() {
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
	const router = useRouter();
	console.log("readyData", readyDatasrc);

	useEffect(() => {
		if (router.query?.opendialog) {
			onClickEv();
		}
	}, []);
	const [visibleModal, setVisibleModal] = useState(false);
	const [content, setContent] = useState<any>();
	const item = readyDatasrc[0];
	const handlerCloseClick = (e: any) => {
		setVisibleModal(false);
	};
	console.log("neeeeeee", item);
	const onClickEv = () => {
		if (item.serviceprocessid) {
			if (item.serviceprocessid == "16389903411791") {
				// Router.push("/page/1639016621713203");
				setVisibleModal(true);
				setContent(<WidgetWithId widgetId="164966565317010" />);
			} else {
				setVisibleModal(true);
				const param = { metadataid: item.serviceprocessid };
				setContent(<RenderWidgetProcess dialog={true} listConfig={param} />);
			}

			// setContent(<WidgetWithId widgetId="164966565317010" />);
		} else {
			notification.open({
				message: "Процесс тохируулаагүй байна!",
				description: "",
				duration: 5,
			});
		}
		// if (item.wfmdescription) {
		// 	setContent(<WidgetWithId widgetId={item.servicewidgetid} />);
		// 	setVisibleModal(true);
		// } else if (item.serviceprocessid) {
		// 	const param = { metadataid: item.serviceprocessid };
		// 	setContent(<RenderWidgetProcess dialog={true} listConfig={param} />);
		// 	setVisibleModal(true);
		// } else {
		// 	notification.open({
		// 		message: "Процесс тохируулаагүй байна!",
		// 		description: "",
		// 		duration: 5,
		// 	});
		// }
	};

	const starContainer = (
		classname: string,
		num: string,
		color: string,
		w: string,
		h: string,
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

	const param = { metadataid: item?.serviceprocessid };

	return (
		<div className="p-5 w-full shadow-lg  ">
			<div className="lg:flex items-center justify-center w-full">
				<div className="lg:w-full lg:mb-0 mt-2.5 mx-1.5 bg-white">
					<div className="flex items-center pb-2 ">
						<AtomImage
							item={renderPositionType(item, "position2", positionConfig)}
							customClassName="h-24 w-24 rounded-full object-cover object-center"
						/>
						<div className="pl-3 items-center">
							<div className="w-full">
								<AtomTitle
									item={renderPositionType(item, "position1", positionConfig)}
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
									"10",
								)}
							</div>
						</div>
					</div>
					<div className="pr-1">
						{/* <AtomText
						item={renderPositionType(item, "position3", positionConfig)}
						customClassName="text-sm leading-5 py-4 text-gray-600"
						/> */}
						<div className="text-sm leading-5 py-4 text-gray-600">
							{parseHtml(
								decode(renderPositionType(item, "position3", positionConfig)),
							)}
						</div>

						<div className="flex justify-center mt-7 ">
							<AtomButton
								item={renderPositionType(item, "position1", positionConfig)}
								type="primary"
								customClassName="rounded-full font-bold text-sm px-8 py-3"
								color="gray-700"
								onClick={() => onClickEv()}
							/>

							<ModalView
								visible={visibleModal}
								modalOptions={{
									width: 1100,
									style: { top: 0 },
									className: "stepLoanForm p-0",
									wrapClassName: "wrapClassName p-0",
									bodyStyle: { padding: 0 },
									// title: "Хүсэлт",
								}}
								onClose={handlerCloseClick}
								modelContent={content}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
