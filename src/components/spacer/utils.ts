export const spacings = {
	spacing4: "4px",
	spacing8: "8px",
	spacing12: "12px",
	spacing16: "16px",
	spacing20: "20px",
	spacing24: "24px",
	spacing32: "32px",
	spacing40: "40px",
	spacing48: "48px",
	spacing64: "64px",
	spacing80: "80px",
	spacing96: "96px",
	spacing128: "128px",
	spacing160: "160px",
	spacing192: "192px",
	spacing224: "224px",
	spacing256: "256px",
};

export type Variants =
	| "space4"
	| "space8"
	| "space12"
	| "space16"
	| "space20"
	| "space24"
	| "space32"
	| "space40"
	| "space48"
	| "space64"
	| "space80"
	| "space96"
	| "space128"
	| "space160"
	| "space192"
	| "space224"
	| "space256";

export const SpaceUtils = (variant?: Variants) => {
	switch (variant) {
		case "space4":
			return {
				marginTop: spacings.spacing4,
				marginBottom: spacings.spacing4,
			};
		case "space8":
			return {
				marginTop: spacings.spacing8,
				marginBottom: spacings.spacing8,
			};
		case "space12":
			return {
				marginTop: spacings.spacing12,
				marginBottom: spacings.spacing12,
			};
		case "space16":
			return {
				marginTop: spacings.spacing16,
				marginBottom: spacings.spacing16,
			};
		case "space20":
			return {
				marginTop: spacings.spacing20,
				marginBottom: spacings.spacing20,
			};
		case "space24":
			return {
				marginTop: spacings.spacing24,
				marginBottom: spacings.spacing24,
			};
		case "space32":
			return {
				marginTop: spacings.spacing32,
				marginBottom: spacings.spacing32,
			};
		case "space40":
			return {
				marginTop: spacings.spacing40,
				marginBottom: spacings.spacing40,
			};
		case "space48":
			return {
				marginTop: spacings.spacing48,
				marginBottom: spacings.spacing48,
			};
		case "space64":
			return {
				marginTop: spacings.spacing64,
				marginBottom: spacings.spacing64,
			};
		case "space80":
			return {
				marginTop: spacings.spacing80,
				marginBottom: spacings.spacing80,
			};
		case "space96":
			return {
				marginTop: spacings.spacing96,
				marginBottom: spacings.spacing96,
			};
		case "space128":
			return {
				marginTop: spacings.spacing128,
				marginBottom: spacings.spacing128,
			};
		case "space160":
			return {
				marginTop: spacings.spacing160,
				marginBottom: spacings.spacing160,
			};
		case "space192":
			return {
				marginTop: spacings.spacing192,
				marginBottom: spacings.spacing192,
			};
		case "space224":
			return {
				marginTop: spacings.spacing224,
				marginBottom: spacings.spacing224,
			};
		case "space256":
			return {
				marginTop: spacings.spacing256,
				marginBottom: spacings.spacing256,
			};
		default:
			return {
				marginTop: spacings.spacing8,
				marginBottom: spacings.spacing8,
			};
	}
};
