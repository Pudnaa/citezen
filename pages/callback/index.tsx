import { useEffect } from "react";

/**
 * Golomt bank Webhook
 */

export default function callback() {
	useEffect(() => {
		if (window.opener) {
			if (localStorage) {
				localStorage.setItem("authcallbacklink", window.location.href);
			}
			window.close();
		}
	});
	return <p className="text-xl">Түр хүлээнэ үү...</p>;
}
