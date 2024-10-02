// Core
import { Box, Container, Flex } from "@chakra-ui/react";

// Components
import { StyledSpacer, StyledText } from "@src/components";

// Utils
import { SVGs } from "@public/assets";

export const VisionMission = () => {
	return (
		<Container maxW="1020px">
			<Flex
				flexDirection={{ base: "column", md: "row", lg: "row" }}
				justifyContent="space-between"
				alignItems={{ md: "center", lg: "center" }}
				gap="30px"
				my={{ base: "4rem", lg: "10rem" }}
			>
				<Box
					w="100%"
					maxW="531px"
					h="100%"
					maxH="396px"
					px="30px"
					py="5rem"
					bgColor="$biegePrimaryLight"
				>
					<SVGs.Vision />
					<StyledSpacer />
					<StyledText variant="h3-bold">Our Vision</StyledText>
					<StyledSpacer />
					<Box maxW="413px">
						<StyledText variant="body2-regular" lineHeight="25px">
							To open doors for everyone to break into tech seamlessly. We
							envision a world where talent shapes success and everyone has the
							tools to innovate, create, lead, and succeed.
						</StyledText>
					</Box>
				</Box>
				<Box
					w="100%"
					maxW="531px"
					h="100%"
					maxH="396px"
					px="30px"
					py="5rem"
					bgColor="$biegePrimaryLight"
				>
					<SVGs.Vision />
					<StyledSpacer />
					<StyledText variant="h3-bold">Our Mission</StyledText>
					<StyledSpacer />
					<Box maxW="413px">
						<StyledText variant="body2-regular" lineHeight="25px">
							At NDIDIAMAKA TECH INITIATIVE, we empower people without formal
							education or tech backgrounds by delivering free, high-quality
							online courses that teach practical tech skills. We aim to train
							up to 10,000 learners each year, creating a vibrant community
							where they can connect, grow, and build successful careers in
							tech.
						</StyledText>
					</Box>
				</Box>
			</Flex>
		</Container>
	);
};
