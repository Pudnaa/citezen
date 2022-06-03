import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { decode } from "html-entities";
import { CopyBlock, dracula } from "react-code-blocks";
import { Iframe } from "util/helper";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";

import { renderPositionType, prepareIsOpen, htmlDecode } from "util/helper";
import parseHtml from "html-react-parser";

import { Document, Page, pdfjs } from "react-pdf";
import useToggle from "@customhook/useToggle";
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker.js";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//   pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Pdf() {
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
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [real, setReal] = useState("");

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	const pdf = "/asem.pdf";
	const dataSrc = widgetnemgooReady?.filesrc || "";

	return (
		<div className="w-full h-auto">
			<iframe src={dataSrc} width="100%" height="600" className="h-screen" />
		</div>
	);
}
