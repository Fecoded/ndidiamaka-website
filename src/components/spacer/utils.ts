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

export const SpaceUtils = (variant: Variants = "space8") => {
	const spacingKey = variant.startsWith("space") ? `spacing${variant.slice(5)}` : variant;

	return {
		marginTop: spacings[spacingKey as keyof typeof spacings] || spacings.spacing8,
		marginBottom: spacings[spacingKey as keyof typeof spacings] || spacings.spacing8,
	};
};
