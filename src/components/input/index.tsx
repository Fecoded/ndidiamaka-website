// Core
import {
	Button,
	Flex,
	Input,
	InputGroup,
	InputProps,
	InputRightElement,
	Textarea,
} from "@chakra-ui/react";
import { Field } from "formik";
import { FormEvent, useState } from "react";

// Utils
import { StyledText } from "../text";
import { font, fontSizes } from "@src/styles";

type InputPropsType = {
	placeholder?: string;
	name: string;
	type: string;
	bgColor?: string;
	props?: InputProps;
	validate?: (value: string) => string | undefined;
	disabled?: boolean;
	value?: string;
	onChange?: (e: FormEvent<HTMLInputElement>) => void;
	label: string;
	isInput?: boolean;
	extraLabel?: string;
	onLabelClick?: () => void;
};

export const StyledInput = ({
	name,
	bgColor = "grey3",
	placeholder = "Search",
	props,
	type,
	validate,
	disabled = false,
	value,
	onChange,
	label,
	isInput = true,
	extraLabel,
	onLabelClick,
}: InputPropsType) => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const getType = () => {
		if (type === "password") {
			if (show) {
				return "text";
			} else {
				return "password";
			}
		} else {
			return "text";
		}
	};

	return (
		<>
			<Flex justifyContent="space-between" alignItems="center">
				{label && (
					<StyledText py={2} variant="body3-regular" color="$biegePrimaryDark">
						{label}
					</StyledText>
				)}
				{extraLabel && (
					<StyledText
						py={2}
						variant="body3-regular"
						color="$primary"
						onClick={onLabelClick}
						cursor="pointer"
						textDecoration="underline"
					>
						{extraLabel}
					</StyledText>
				)}
			</Flex>
			{isInput ? (
				<InputGroup size="md">
					<Field
						as={Input}
						name={name}
						type={getType()}
						value={value}
						placeholder={placeholder}
						borderRadius="5px"
						padding={6}
						bgColor={bgColor}
						focusBorderColor="$biegePrimaryDark"
						borderColor="$borderColor"
						fontFamily={font.roboto}
						fontSize={fontSizes.s16}
						_placeholder={{
							color: "$placeHolderColor",
						}}
						validate={validate}
						onChange={onChange}
						disabled={disabled}
						{...props}
					/>
					{type === "password" && (
						<InputRightElement width="4.5rem" mt={1}>
							<Button
								h="1.75rem"
								size="sm"
								bgColor="$biegePrimaryDark"
								onClick={handleClick}
							>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					)}
				</InputGroup>
			) : (
				<Field
					as={Textarea}
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					borderRadius="5px"
					bgColor={bgColor}
					focusBorderColor="$biegePrimaryDark"
					borderColor="$borderColor"
					fontFamily={font.roboto}
					fontSize={fontSizes.s16}
					_placeholder={{
						color: "$placeHolderColor",
					}}
					validate={validate}
					onChange={onChange}
					disabled={disabled}
					{...props}
				/>
			)}
		</>
	);
};

export default StyledInput;
