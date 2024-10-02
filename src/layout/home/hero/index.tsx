"use client";
import Image from "next/image";

// Core
import { Box, Container, Flex } from "@chakra-ui/react";

// Components
import { StyledText } from "@src/components";

// Utils
import { IMAGES } from "@public/assets";

export const HeroLayout = () => {
	return (
		<Container maxW="container.xl">
			<Flex
				flexDirection={{ base: "column", md: "row", lg: "row" }}
				justifyContent="space-between"
				alignItems={{ md: "center", lg: "center" }}
				mt={{ base: "150px", md: "7rem", lg: "10rem" }}
				gap="30px"
			>
				<Box w="100%" maxW="572px" mb={{ lg: "8rem" }}>
					<StyledText variant="body1-regular">Welcome to</StyledText>
					<Box w="100%" maxW="450px" position="relative">
						<StyledText variant="h2-bold" color="biegePrimaryDarker">
							NDIDIAMAKA
						</StyledText>
						<Box
							w="100%"
							maxWidth="250px"
							position="absolute"
							top="0"
							right="30px"
						>
							<Image src={IMAGES.BlackColoredBrush} alt="colored-brush" />
						</Box>
						<StyledText variant="h3-md">TECH INITIATIVE</StyledText>
					</Box>
				</Box>
				<Flex w="100%" maxW="566px" mb={{ base: "4rem", lg: "8rem" }}>
					<StyledText as="p" variant="body1-regular" color="$biegePrimaryDarker">
						<StyledText as="span" variant="body1-bold">
							No tech skill or degree?
						</StyledText>{" "}
						No problem.{" "}
						<StyledText as="span" variant="body1-bold">
							At NDIDIAMAKA TECH INITIATIVE,
						</StyledText>{" "}
						we offer free courses to equip you with the skills to break into the
						tech industry. Our courses include Data Analysis, Cybersecurity,
						UX/UI, and more. Your future in tech starts here. Learn, grow, and
						excel in flying colours.
					</StyledText>
				</Flex>
			</Flex>
		</Container>
	);
};
