// Core
import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

// Components
import { StyledText } from "@src/components";

// UTils
import { IMAGES } from "@public/assets";

export const AboutFounder = () => {
	return (
		<Container maxW="container.xl" id="about">
			<Flex
				flexDirection={{ base: "column", md: "row", lg: "row" }}
				justifyContent="space-between"
				alignItems={{ md: "center", lg: "center" }}
				gap="80px"
				mt={{ base: "4rem", lg: "10rem" }}
			>
				<Box w="100%" maxW="572px" mb={{ lg: "8rem" }}>
					<Box w="100%" maxW="566px" position="relative">
						<StyledText variant="h2-bold" color="$biegePrimaryDark">
							About the Founder
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
						<StyledText variant="body2-regular" lineHeight="25px">
							Ndidiamaka Ruth Okobodo is a software developer with over five
							years of experience in the tech industry. Throughout my journey,
							I've seen how barriers like formal education and access to
							resources keep many talented individuals from reaching their
							potential. That's why I founded NDIDIAMAKA TECH INITIATIVE, a
							non-profit focused on making tech education free and accessible
							to all. Our goal is to empower people with the skills they need
							to grow in the tech industry, regardless of their background.
						</StyledText>
					</Box>
				</Box>
				<Box w="100%" maxW="591px">
					<Image src={IMAGES.Amaka} alt="amaka-image" />
				</Box>
			</Flex>
		</Container>
	);
};
