"use client";

// Core
import Image from "next/image";
import { Box, Container, Flex } from "@chakra-ui/react";
import { useContext } from "react";

// Components
import { StyledButton, StyledSpacer, StyledText } from "@src/components";

// Utils
import { IMAGES, SVGs } from "@public/assets";
import { colors, lineHeights } from "@src/styles";
import { ProviderContext } from "@src/utils";

export const HeroLayout = () => {
	const { handleButtonClick } = useContext(ProviderContext);

	return (
		<>
			<Box
				backgroundImage="url(/assets/images/hero-bg.png)"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				overflow="hidden"
			>
				<Container maxW="container.xl">
					<Flex
						flexDirection={{ base: "column", md: "row", lg: "row" }}
						justifyContent="space-between"
						alignItems={{ md: "center", lg: "center" }}
						mt={{ base: "150px", md: "22px", lg: "7rem" }}
						mb={{ lg: "-2rem" }}
						gap="50px"
					>
						<Box w="100%" maxW="572px" mb="8rem">
							<StyledText
								variant="h2-bold"
								lineHeight={{ base: "60px", lg: lineHeights.lh75 }}
							>
								Your Business Solution Lies Here
							</StyledText>
							<Box w="100%" maxW="450px">
								<StyledText variant="body1-regular">
									Get it right with our custom credit facility with
									flexible repayment and technical support
								</StyledText>
							</Box>
							<StyledSpacer variant="space48" />
							<StyledButton
								color={colors.$white}
								bgColor={colors.$black40}
								onClick={handleButtonClick}
								leftIcon={
									<Flex gap="10px">
										<SVGs.AndroidIcon />
										<SVGs.AppleIcon />
									</Flex>
								}
							>
								<Box>
									<StyledText
										color={colors.$white}
										variant="body4-bold"
										textAlign="left"
									>
										Get started
									</StyledText>
									<StyledText
										color={colors.$white}
										variant="body4-regular"
									>
										Download Daneizo
									</StyledText>
								</Box>
							</StyledButton>
						</Box>
						<Box w="100%" maxW="464.78px">
							<Image src={IMAGES.MobileHand} alt="mobile_hand" />
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
};
