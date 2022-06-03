import {FC, useContext, useRef, useState  } from "react";

import RenderAtom from "@atom/RenderAtom";
import { Drawer, Empty } from "antd";
import _ from "lodash";
import { Modal } from "antd";
import BlockDiv from "@components/common/Block/BlockDiv";
import { signIn } from "next-auth/react";
import useToggle from "@customhook/useToggle";
import RenderWidgetProcess from "@middleware/components/WidgetForm/RenderWidgetProcess";
import { useTranslation } from "next-i18next";

type PropsType = {
	title?: any;
	content?: any;
};

const KhanFaqItem: FC<PropsType> = ({ title, content }) => {
	const { t } = useTranslation("common");
    const [active, setActive] = useState(false);
	const [height, setHeight] = useState('0px');
	const [rotate, setRotate] = useState('transform duration-700 ease');


    const contentSpace = useRef<HTMLDivElement>(null)

    const toggleAccordion = ()=> {
        setActive((prevState) => !prevState)
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-500 ease' : 'transform duration-500 ease rotate-180')
    }
	return (
        <div className="flex flex-col bg-[#F9F9F9] my-4 px-4 rounded-md">
            <button
                className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
                onClick={toggleAccordion}
            >
                <p className="inline-block text-kbportal-title lg:text-[17px] font-bold text-left xs:text-tiny font-segoe">{title}</p>
                <img
                    src={`https://res.cloudinary.com/dzih5nqhg/image/upload/v1651658827/Khanbank/Group_bvy1nc.svg`}
                    alt="Chevron icon"
                    className={`${rotate} inline-block`}
                />
            </button>
                <div
                    ref={contentSpace}
                    style={{ maxHeight: `${height}` }}
                    className="overflow-auto transition-max-height duration-500 ease-in-out"
                >
                <div className="px-4 lg:text-base xs:text-xs font-segoe ">{content}</div>
            </div>
        </div>
	);
};

export default KhanFaqItem;
