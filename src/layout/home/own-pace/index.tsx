// Core
import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

// Components
import { StyledButton, StyledSpacer, StyledText } from "@src/components";

// Utils
import { IMAGES } from "@public/assets";

export const OwnPace = () => {
	return (
		<Box backgroundColor="#000000" py="2rem">
			<Container maxW="container.xl">
				<Flex
					flexDirection={{ base: "column", md: "row", lg: "row" }}
					justifyContent="space-between"
					alignItems={{ md: "center", lg: "center" }}
					gap="80px"
					mt={{ base: "4rem", lg: "10rem" }}
				>
					<Box w="100%" maxW="572px" mb={{ lg: "8rem" }}>
						<Box w="100%" maxW="566px">
							<StyledSpacer />
							<StyledText variant="body1-regular" color="$white">
								Our Courses
							</StyledText>
							<StyledSpacer />
							<StyledText variant="h2-bold" color="$white" lineHeight="70px">
								Learn at Your Own Pace
							</StyledText>
							<StyledSpacer />

							<StyledText
								variant="body2-regular"
								lineHeight="25px"
								color="$white"
							>
								Our platform offers a range of beginner-friendly courses in
								web development, data science, cybersecurity, and more.
								Whatever your interest in tech, we provide the tools to help
								you succeed. With self-paced learning, you control the
								schedule and progress at your speed.
							</StyledText>
							<StyledSpacer variant="space32" />
							<StyledButton bgColor="$biegePrimaryDark" onClick={() => []}>
								<StyledText variant="body2-regular" color="$white">
									See our courses
								</StyledText>
							</StyledButton>
						</Box>
					</Box>
					<Box w="100%" maxW="591px">
						<Image src={IMAGES.OwnPace} alt="own-pace" />
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
