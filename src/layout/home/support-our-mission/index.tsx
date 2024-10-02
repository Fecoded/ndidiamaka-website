// Core
import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";

// Utils
import { IMAGES } from "@public/assets";

// Components
import { StyledSpacer, StyledText } from "@src/components";
import { CoreMissionList } from "./utils";

export const SupportOurMission = () => {
	return (
		<Box backgroundColor="#F5F5F5" py={{ base: "4rem", lg: "8rem" }}>
			<Container maxW="container.xl">
				<Image src={IMAGES.SupportOurMission} alt="support-our-mission" />
				<StyledSpacer variant="space32" />
				<Flex justifyContent="center" alignItems="center" flexDir="column">
					<StyledText variant="body1-regular" color="$biegePrimaryDark">
						Get Involved
					</StyledText>
					<StyledSpacer />
					<Box pos="relative">
						<StyledText variant="h2-bold" lineHeight="70px">
							Support Our Mission
						</StyledText>
						<Box
							w="100%"
							maxWidth="250px"
							position="absolute"
							top="0"
							right={{ base: "100px", lg: "150px" }}
						>
							<Image src={IMAGES.BlackColoredBrush} alt="colored-brush" />
						</Box>
					</Box>
					<StyledSpacer variant="space12" />
					<Box maxW="605px">
						<StyledText
							variant="body2-regular"
							lineHeight="25px"
							textAlign="center"
						>
							We depend on donors, volunteers, and partners to keep our courses
							free. If you share our vision of making tech education accessible
							for all, join us today. Donate, volunteer, or partner with us,
							together, we can bridge the gap and transform lives through tech.
						</StyledText>
					</Box>
					<StyledSpacer variant="space40" />
					<Grid
						templateColumns={{
							base: "repeat(1, 1fr)",
							md: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						}}
						gap="20px"
						margin="auto"
						maxW="974px"
					>
						{CoreMissionList.map((item, idx) => (
							<Flex
								key={idx}
								justifyContent="center"
								alignItems="center"
								flexDir="column"
							>
								{item.icon}
								<StyledSpacer />
								<StyledText
									variant="body2-bold"
									lineHeight="25px"
									textAlign="center"
								>
									{item.title}
								</StyledText>
								<StyledSpacer />
								<StyledText
									variant="body2-regular"
									lineHeight="25px"
									textAlign="center"
								>
									{item.body}
								</StyledText>
							</Flex>
						))}
					</Grid>
				</Flex>
			</Container>
		</Box>
	);
};
