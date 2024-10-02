// Core
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

type OTPInputProps = {
	size?: number;
	setOTP?: (value: string) => void;
	pinSize?: "sx" | "sm" | "md" | "lg";
};

export const OTPInput = ({ size = 4, setOTP, pinSize = "md" }: OTPInputProps) => {
	return (
		<HStack spacing={4} justifyContent="center">
			<PinInput otp onChange={setOTP} size={pinSize} focusBorderColor="$primary">
				{[...Array(size)].map((_, idx) => (
					<PinInputField key={idx} />
				))}
			</PinInput>
		</HStack>
	);
};
