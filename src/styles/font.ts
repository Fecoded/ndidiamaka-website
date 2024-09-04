import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["400", "500", "500", "700"],
	subsets: ["cyrillic"],
	// display: "swap",
});

export const fontSizes = {
	s84: "84px",
	s64: "64px",
	s44: "44px",
	s24: "24px",
	s32: "32px",
	s20: "20px",
	s16: "16px",
	s14: "14px",
	s13: "13px",
	s12: "12px",
	s11: "11px",
	s10: "10px",
	s8: "8px",
};

export const fontWeights = {
	w400: 400,
	w500: 500,
	w600: 600,
	w300: 300,
	w700: 700,
};

export const font = {
	roboto: "Roboto",
};

export const lineHeights = {
	lh98: "98.44px",
	lh75: "75px",
	lh51: "51.56px",
	lh37: "37.5px",
	lh28: "28.13px",
	lh32: "32px",
	lh22: "22px",
	lh20: "20px",
	lh18: "18px",
	lh16: "16px",
	lh14: "14px",
};

export const fonts = { heading: roboto.style.fontFamily, body: roboto.style.fontFamily };
