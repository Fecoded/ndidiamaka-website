/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonProps } from "@chakra-ui/react";

type GlobalButtonProps = {
	colorScheme?: string;
	bgColor?: string;
	size?: "lg" | "md" | "sm" | "xs";
	variant?: "outline" | "solid" | "ghost" | "link";
	isLoading?: boolean;
	isDisabled?: boolean;
	children: React.ReactNode;
	color?: string;
	onClick: () => void;
	type?: "button" | "submit" | "reset";
	rightIcon?: React.ReactElement;
	leftIcon?: React.ReactElement;
	className?: string;
	style?: any;
	borderColor?: string;
} & ButtonProps;

export const StyledButton = ({
	size = "lg",
	isLoading = false,
	isDisabled = false,
	variant = "solid",
	children,
	color = "$biegePrimaryDark",
	type = "button",
	bgColor,
	onClick,
	rightIcon,
	leftIcon,
	className,
	style,
	colorScheme,
	borderColor = "$biegePrimaryDark",
	...rest
}: GlobalButtonProps) => {
	if (variant === "outline") {
		return (
			<Button
				colorScheme={colorScheme}
				style={style}
				className={className}
				bgColor="transparent"
				borderColor={borderColor}
				borderRadius={8}
				color={color}
				size={size}
				px={10}
				isLoading={isLoading}
				isDisabled={isDisabled}
				variant={variant}
				onClick={onClick}
				type={type}
				width="full"
				_hover={{
					opacity: "0.8",
				}}
				rightIcon={rightIcon || undefined}
				leftIcon={leftIcon || undefined}
				{...rest}
			>
				{children}
			</Button>
		);
	}

	return (
		<Button
			colorScheme={colorScheme}
			style={style}
			className={className}
			bgColor={bgColor || "$primary"}
			borderRadius={8}
			color={color}
			size={size}
			isLoading={isLoading}
			isDisabled={isDisabled}
			variant={variant}
			onClick={onClick}
			type={type}
			_hover={{
				opacity: "0.8",
			}}
			rightIcon={rightIcon || undefined}
			leftIcon={leftIcon || undefined}
			{...rest}
		>
			{children}
		</Button>
	);
};

export default StyledButton;
