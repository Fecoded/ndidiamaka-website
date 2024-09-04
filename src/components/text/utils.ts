import { font, fontWeights, lineHeights, fontSizes } from "@src/styles";

export type Variants =
	| "h1-bold"
	| "h1-md"
	| "h1-regular"
	| "h1-light"
	| "h2-bold"
	| "h2-md"
	| "h2-regular"
	| "h2-light"
	| "h3-bold"
	| "h3-md"
	| "h3-regular"
	| "h3-light"
	| "subtitle1-bold"
	| "subtitle1-md"
	| "subtitle1-regular"
	| "subtitle1-light"
	| "subtitle2-bold"
	| "subtitle2-md"
	| "subtitle2-regular"
	| "subtitle2-light"
	| "body1-bold"
	| "body1-md"
	| "body1-regular"
	| "body1-light"
	| "body2-bold"
	| "body2-md"
	| "body2-regular"
	| "body2-light"
	| "body3-bold"
	| "body3-md"
	| "body3-regular"
	| "body3-light"
	| "body4-bold"
	| "body4-md"
	| "body4-regular"
	| "body4-light"
	| "label1-bold"
	| "label1-md"
	| "label1-regular"
	| "label1-light"
	| "label2-bold"
	| "label2-md"
	| "label2-regular"
	| "label2-light"
	| "label3-bold"
	| "label3-md"
	| "label3-regular"
	| "label3-light"
	| "label4-bold"
	| "label4-md"
	| "label4-regular"
	| "label4-light";

const variantStyles = {
	h1: {
		fontSize: `clamp(64px, 5vw, ${fontSizes.s84})`,
		lineHeight: lineHeights.lh98,
	},
	h2: {
		fontSize: `clamp(48px, 4vw, ${fontSizes.s64})`,
		lineHeight: lineHeights.lh75,
	},
	h3: {
		fontSize: `clamp(32px, 3vw, ${fontSizes.s44})`,
		lineHeight: lineHeights.lh51,
	},
	subtitle1: {
		fontSize: `clamp(24px, 2.5vw, ${fontSizes.s32})`,
		lineHeight: lineHeights.lh37,
	},
	subtitle2: {
		fontSize: `clamp(18px, 2vw, ${fontSizes.s24})`,
		lineHeight: lineHeights.lh28,
	},
	body1: {
		fontSize: `clamp(16px, 1.8vw, ${fontSizes.s20})`,
		lineHeight: lineHeights.lh32,
	},
	body2: {
		fontSize: `clamp(14px, 1.5vw, ${fontSizes.s16})`,
		lineHeight: lineHeights.lh18,
	},
	body3: {
		fontSize: `clamp(12px, 1.2vw, ${fontSizes.s14})`,
		lineHeight: lineHeights.lh22,
	},
	body4: {
		fontSize: `clamp(10px, 1vw, ${fontSizes.s13})`,
		lineHeight: lineHeights.lh20,
	},
	label1: {
		fontSize: `clamp(9px, 0.9vw, ${fontSizes.s12})`,
		lineHeight: lineHeights.lh18,
	},
	label2: {
		fontSize: `clamp(8px, 0.8vw, ${fontSizes.s11})`,
		lineHeight: lineHeights.lh16,
	},
	label3: {
		fontSize: `clamp(7px, 0.7vw, ${fontSizes.s10})`,
		lineHeight: lineHeights.lh16,
	},
	label4: {
		fontSize: `clamp(6px, 0.6vw, ${fontSizes.s8})`,
		lineHeight: lineHeights.lh14,
	},
};

const weightMapping = {
	bold: fontWeights.w700,
	md: fontWeights.w500,
	regular: fontWeights.w400,
	light: fontWeights.w300,
};

export const TextUtils = (variant?: Variants) => {
	if (!variant) {
		return {
			fontFamily: font.roboto,
			fontSize: `clamp(24px, 2.5vw, ${fontSizes.s32})`, // Default font size
			lineHeight: lineHeights.lh37,
			fontWeight: fontWeights.w400,
		};
	}
	const [size, weight] = variant.split("-");
	const { fontSize, lineHeight } = variantStyles[size as keyof typeof variantStyles];
	const fontWeight = weightMapping[weight as keyof typeof weightMapping];

	return {
		fontFamily: font.roboto,
		fontSize,
		lineHeight,
		fontWeight,
	};
};
