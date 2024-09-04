// 1. Import `extendTheme`
import { switchAnatomy } from "@chakra-ui/anatomy";
import {
	extendTheme,
	withDefaultColorScheme,
	createMultiStyleConfigHelpers,
	defineStyleConfig,
	defineStyle,
} from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./font";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
	switchAnatomy.keys,
);
const baseStyle = definePartsStyle({
	// define the part you're going to style
	thumb: {
		bg: "white",
	},
	track: {
		bg: "gray.300",
		_checked: {
			bg: "primary01",
		},
	},
});

const boxy = defineStyle({
	border: "1px solid", // change the appearance of the border
	borderRadius: 10, // remove the border radius
	bgColor: "#494E9F",
});

export const badgeTheme = defineStyleConfig({
	variants: { boxy },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme(
	{
		colors,
		fontSizes: {},
		fonts,
		components: { Switch: switchTheme },
	},
	withDefaultColorScheme({ colorScheme: "primary01", components: { Badge: badgeTheme } }),
);

export default theme;
