import { Text, TextProps } from "@chakra-ui/react";

import { TextUtils, Variants } from "./utils";
import { colors } from "@src/styles";

type CustomTextProps = {
	children: React.ReactNode;
	className?: string;
	variant?: Variants;
	style?: object;
} & TextProps;

export const StyledText = ({
	children,
	className,
	color = colors.$black40,
	variant,
	style,
	...props
}: CustomTextProps) => {
	return (
		<Text
			className={className}
			color={color}
			style={style}
			fontSize={TextUtils(variant).fontSize}
			fontWeight={TextUtils(variant).fontWeight}
			lineHeight={TextUtils(variant).lineHeight}
			fontFamily={TextUtils(variant).fontFamily}
			{...props}
		>
			{children}
		</Text>
	);
};
