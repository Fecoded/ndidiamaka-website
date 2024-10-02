// Core
import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

// Components
import { StyledSpacer, StyledText } from "@src/components";

// Utils
import { IMAGES } from "@public/assets";

export const MakingDifference = () => {
	return (
		<Container maxW="container.xl" mb={{ base: "40px" }} id="home">
			<Flex
				flexDirection={{ base: "column", md: "row", lg: "row" }}
				justifyContent="space-between"
				alignItems={{ md: "center", lg: "center" }}
				gap="20px"
				mt={{ base: "7rem", lg: "10rem" }}
			>
				<Box w="100%" maxW="591px">
					<Image src={IMAGES.MakingDifference} alt="making-difference" />
				</Box>
				<Box w="100%" maxW="572px" mb={{ lg: "8rem" }}>
					<Box pos="relative">
						<StyledSpacer />
						<StyledText variant="body1-regular" color="$biegePrimaryDark">
							Our Impact
						</StyledText>
						<StyledSpacer />
						<StyledText variant="h2-bold" lineHeight="70px">
							Making a Difference
						</StyledText>
						<Box
							w="100%"
							maxWidth="250px"
							position="absolute"
							top="50px"
							right={{ base: "100px", lg: "150px" }}
						>
							<Image src={IMAGES.BlackColoredBrush} alt="colored-brush" />
						</Box>
						<StyledSpacer variant="space12" />

						<StyledText variant="body2-regular" lineHeight="25px">
							Since its inception, NDIDIAMAKA TECH INITIATIVE has empowered
							countless individuals with the skills needed to launch tech
							careers. Our graduates now thrive in roles from software
							development to IT support. We’re proud to make a tangible impact
							on both our learners' lives and the broader tech community.
						</StyledText>
					</Box>
				</Box>
			</Flex>
		</Container>
	);
};
