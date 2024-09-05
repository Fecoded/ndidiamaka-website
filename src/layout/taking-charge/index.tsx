"use client";

// Core
import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useContext } from "react";

// Components
import { StyledButton, StyledSpacer, StyledText } from "@src/components";

// Utils
import { IMAGES, SVGs } from "@public/assets";
import { colors } from "@src/styles";
import { ProviderContext } from "@src/utils";

export const TakingCharge = () => {
	const { handleButtonClick } = useContext(ProviderContext);
	return (
		<Box bg="$white" py="100px">
			<Container maxW="1100px">
				<Box
					backgroundImage={"url(/assets/images/taking-charge-bg.png)"}
					backgroundPosition="center"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					w="100%"
					maxW="1040px"
					px={3}
					pt={20}
				>
					<Flex
						gap={{ base: "30px", lg: "0" }}
						alignItems="center"
						flexDirection={{ base: "column", md: "row", lg: "row" }}
					>
						<Box w="100%" maxW="495px">
							<Image src={IMAGES.TakingCharge} alt="taking_charge" />
						</Box>
						<Box w="100%" maxW="458px" pb={5}>
							<StyledText variant="body2-regular" color="$white">
								Our financial services are tailored to help businesses
								build, grow, and sustain value
							</StyledText>
							<StyledSpacer variant="space12" />
							<StyledText variant="h3-bold" color="$ascent">
								Taking charge
							</StyledText>
							<StyledText variant="h3-bold" color="$white">
								of your business with tailored finance
							</StyledText>
							<StyledSpacer variant="space32" />
							<StyledButton
								color="$black40"
								bgColor="$white"
								onClick={handleButtonClick}
								leftIcon={
									<Flex gap="10px">
										<SVGs.AndroidIcon
											fill={colors.$black40}
											stroke={colors.$black40}
											width="20"
											height="24"
										/>
										<SVGs.AppleIcon />
									</Flex>
								}
							>
								<Box>
									<StyledText
										color="$black40"
										variant="label1-md"
										textAlign="left"
									>
										Get started
									</StyledText>
									<StyledText color="$primary" variant="body4-regular">
										Download Daneizo
									</StyledText>
								</Box>
							</StyledButton>
						</Box>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};
