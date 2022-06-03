import CloudBanner1 from "@components/Login/Banner1";
import CloudLoginPage from "@components/Login/CloudLoginPage";
import { isEmpty, jsonParse, decrypt } from "util/helper";
import { useRouter } from "next/router";

export default function Login() {
	const router = useRouter();
	const info = router.query;

	// console.log("infoinfoinfoinf inf info ", info);
	const myJSON = JSON.stringify(info);

	// let messageA = decryptobject.split("/");
	const str =
		"X8xTQhsyhfqkT2SQHYib3MuF6c5ST1/e6Ufkihl5dc+YvFjcaW1MIKKZD9omh7UAaF0GXjY+DhtJOduwmNj2BcVKqKwnSuA/KoW/Ld/ARPpaqXoSgPqpd/hWc0torUaUDbn1vZZXI43i/X6gRk0xIXzpz0x2h9lOZZbFtBgXVi0=:VjYhKWZUbjddbl5lQnJmeQ==";
	// const decryptobject = jsonParse(decrypt(encryptstring));
	// console.log("infoinfoinfoinf decryptobject", messageA);
	// ?response_type=code&client_id=ceaafeebdd621d6d3c805922-c659e7bbba9d6ba577c48d42a62f01f0&scope=W3sic2VydmljZXMiOlsiV1MxMDAxMDFfZ2V0Q2l0aXplbklEQ2FyZEluZm8iXSwid3NkbCI6Imh0dHBzOlwvXC94eXAuZ292Lm1uXC9jaXRpemVuLTEuMy4wXC93cz9XU0RMIn1d&redirect_uri=http://egazar.gov.mn/authorized&state=9uiILwW2wG5wChpuF6VBLociVbSFZIb2xQ82bwMW&device=web
	// X8xTQhsyhfqkT2SQHYib3MuF6c5ST1/e6Ufkihl5dctttnmhtttYvFjcaW1MIKKZD9omh7UAaF0GXjYtttnmhtttDhtJOduwmNj2BcVKqKwnSuA/KoW/Ld/ARPpaqXoSgPqpd/hWc0torUaUDbn1vZZXI43i/X6gRk0xIXzpz0x2h9lOZZbFtBgXVi0=:VjYhKWZUbjddbl5lQnJmeQ==

	const decryptobject = str.replace("tttnmhttt", "+");
	let messageA = decrypt(str);

	// console.log("infoinfoinfoinf inf messageA ", messageA);

	return (
		<>
			<div className="bg-gray-100 w-screen h-screen flex flex-row">
				<div className="flex-1 w-0 hidden sm:block flex-col overflow-hidden">
					<CloudBanner1 />
				</div>
				<div className="shrink-0 w-full md:w-128 overflow-y-auto  scrollbar-thumb-citizen scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-citizen-dark scrollbar-thumb-rounded-full">
					<CloudLoginPage />
				</div>
			</div>
		</>
	);
}
