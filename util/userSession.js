import { useSession } from "next-auth/react";

export default function userSession() {
	// const { data: session, status } = useSession();
	let userData = {
		id: "new",
		sessionId: "e54e9837-8526-4659-900d-9cf63a6f2a97",
	};

	return userData;
}
