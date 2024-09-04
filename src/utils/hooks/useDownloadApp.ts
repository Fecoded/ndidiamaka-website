import { useDisclosure } from "@chakra-ui/react";

export const useDownloadApp = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	function detectDevice() {
		let userAgent = "";

		if (typeof navigator !== "undefined") {
			userAgent = navigator.userAgent;
		}

		if (/iPhone/i.test(userAgent)) {
			return "iPhone";
		} else if (/Android/i.test(userAgent)) {
			return "Android";
		} else {
			return "Web";
		}
	}

	const handleButtonClick = () => {
		const device = detectDevice();

		if (device === "iPhone") {
			// Redirect to the App Store
			window.location.href = "https://apps.apple.com/us/app/your-app-id";
		} else if (device === "Android") {
			// Redirect to the Google Play Store
			window.location.href =
				"https://play.google.com/store/apps/details?id=com.resopotapp";
		} else {
			// Fallback option or handle web
			onOpen();
		}
	};

	return { handleButtonClick, onClose, isOpen };
};
