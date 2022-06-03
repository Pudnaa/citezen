export function getToMimeType(mime: any) {
	const mime_map: any = {
		"3g2": "video/3gpp2",
		"3gp": "video/3gp",
		"7zip": "application/x-compressed",
		aac: "audio/x-acc",
		ac3: "audio/ac3",
		ai: "application/postscript",
		aif: "audio/x-aiff",
		au: "audio/x-au",
		avi: "video/x-msvideo",
		bin: "application/macbinary",
		bmp: "image/bmp",
		cdr: "application/cdr",
		cpt: "application/mac-compactpro",
		crl: "application/pkix-crl",
		crt: "application/x-x509-ca-cert",
		css: "text/css",
		csv: "text/x-comma-separated-values",
		dcr: "application/x-director",
		docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		doc: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		dvi: "application/x-dvi",
		eml: "message/rfc822",
		exe: "application/x-msdownload",
		f4v: "video/x-f4v",
		flac: "audio/x-flac",
		flv: "video/x-flv",
		gif: "image/gif",
		gpg: "application/gpg-keys",
		gtar: "application/x-gtar",
		gzip: "application/x-gzip",
		hqx: "application/mac-binhex40",
		html: "text/html",
		ico: "image/x-icon",
		ics: "text/calendar",
		jar: "application/java-archive",
		jp2: "image/jp2",
		jpg: "image/jpg",
		jpeg: "image/jpeg",
		js: "application/x-javascript",
		json: "application/json",
		kml: "application/vnd.google-earth.kml+xml",
		kmz: "application/vnd.google-earth.kmz",
		log: "text/x-log",
		m4a: "audio/x-m4a",
		m4u: "application/vnd.mpegurl",
		mid: "audio/midi",
		mif: "application/vnd.mif",
		mov: "video/quicktime",
		movie: "video/x-sgi-movie",
		mp3: "audio/mpeg",
		mp4: "video/mp4",
		mpeg: "video/mpeg",
		oda: "application/oda",
		ogg: "audio/ogg",
		p10: "application/x-pkcs10",
		p12: "application/x-pkcs12",
		p7a: "application/x-pkcs7-signature",
		p7c: "application/pkcs7-mime",
		p7r: "application/x-pkcs7-certreqresp",
		p7s: "application/pkcs7-signature",
		pdf: "application/pdf",
		pem: "application/x-x509-user-cert",
		pgp: "application/pgp",
		php: "application/x-httpd-php",
		png: "image/png",
		ppt: "application/powerpoint",
		pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
		psd: "application/x-photoshop",
		ra: "audio/x-realaudio",
		ram: "audio/x-pn-realaudio",
		rar: "application/x-rar",
		rpm: "audio/x-pn-realaudio-plugin",
		rsa: "application/x-pkcs7",
		rtf: "text/rtf",
		rtx: "text/richtext",
		rv: "video/vnd.rn-realvideo",
		sit: "application/x-stuffit",
		smil: "application/smil",
		srt: "text/srt",
		svg: "image/svg+xml",
		swf: "application/x-shockwave-flash",
		tar: "application/x-tar",
		tgz: "application/x-gzip-compressed",
		tiff: "image/tiff",
		txt: "text/plain",
		vcf: "text/x-vcard",
		vlc: "application/videolan",
		vtt: "text/vtt",
		wav: "audio/x-wav",
		wbxml: "application/wbxml",
		webm: "video/webm",
		wma: "audio/x-ms-wma",
		wmlc: "application/wmlc",
		wmv: "video/x-ms-wmv",
		xhtml: "application/xhtml+xml",
		xl: "application/excel",
		xls: "application/msexcel",
		xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		xml: "application/xml",
		xsl: "text/xsl",
		xspf: "application/xspf+xml",
		z: "application/x-compress",
		zip: "application/x-zip",
		zsh: "text/x-scriptzsh",
	};
	return mime_map[mime];
}
