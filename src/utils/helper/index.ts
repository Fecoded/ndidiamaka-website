export function detectDevice() {
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
