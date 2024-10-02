import {
	Box,
	Container,
	Flex,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

// Components
import { StyledButton, StyledSpacer, StyledText } from "@src/components";
import { HLine } from "@src/components/line";

// Utils
import { IMAGES } from "@public/assets";
import { courseSummaries } from "./utils";

export const CourseDetails = () => {
	return (
		<Container maxW="container.xl">
			<StyledSpacer variant="space64" />
			<Flex
				gap="50px"
				w="100%"
				alignItems="flex-start"
				flexDir={{ base: "column", lg: "row" }}
			>
				<Box w="100%" maxW="389.11px" border="1px solid #f4f4f4">
					<Image src={IMAGES.CourseVideoFrame} alt="video-frame" />
					<Flex
						justifyContent="space-between"
						alignItems="center"
						px="10px"
						py="20px"
					>
						<Box>
							<StyledText variant="body2-md">Course</StyledText>
							<StyledText variant="body1-md">
								Introduction to Cybersecurity
							</StyledText>
						</Box>
						<Box>
							<StyledText variant="body3-regular">Duration</StyledText>
							<StyledText variant="body3-regular">24hr 3mins</StyledText>
						</Box>
					</Flex>
					<Box px="10px" pb="20px">
						<HLine />
						<StyledSpacer variant="space16" />
						<Link href="https://skilloptech.com" target="_blank" rel="noopener">
							<StyledButton
								bgColor="$biegePrimaryDark"
								w="100%"
								onClick={() => []}
							>
								<StyledText variant="body2-regular" color="$white">
									Enroll
								</StyledText>
							</StyledButton>
						</Link>
					</Box>
				</Box>
				<Box w="100%">
					<StyledText variant="body2-regular" color="$biegePrimaryDark">
						Course Title
					</StyledText>
					<StyledSpacer />
					<StyledText variant="body1-md">Introduction to Cybersecurity</StyledText>
					<StyledSpacer />
					<HLine />
					<StyledSpacer variant="space16" />
					<StyledText variant="body2-regular" color="$biegePrimaryDark">
						Course Level
					</StyledText>
					<StyledSpacer />
					<StyledText variant="body1-md">Beginner and Intermediate</StyledText>
					<StyledSpacer />
					<HLine />
					<StyledSpacer variant="space16" />
					<StyledText variant="body2-regular" color="$biegePrimaryDark">
						Course Instructor
					</StyledText>
					<StyledSpacer />
					<StyledText variant="body1-md">
						Ndidiamaka Tech Initiative Tutor
					</StyledText>
					<StyledSpacer />
					<HLine />
					<StyledSpacer variant="space16" />
					<StyledText variant="body2-regular" color="$biegePrimaryDark">
						Course Description
					</StyledText>
					<StyledSpacer />
					<StyledText variant="body3-regular">
						Welcome to Introduction to Cybersecurity, a comprehensive course
						designed to equip you with the foundational knowledge and practical
						skills needed to excel in the ever-evolving field of cybersecurity.
						Over 12 weeks, you will journey from basic concepts to advanced
						techniques, gaining hands-on experience and insights into the core
						areas of this critical discipline.
					</StyledText>
					<StyledSpacer />
					<HLine />
					<StyledSpacer variant="space24" />

					<StyledText variant="body2-regular" color="$biegePrimaryDark">
						Course Summary
					</StyledText>
					<StyledSpacer variant="space24" />
					<Accordion allowToggle>
						{courseSummaries.map((item, idx) => (
							<AccordionItem key={idx} py={5}>
								<AccordionButton justifyContent="space-between">
									<StyledText variant="body2-md">
										{item.title}
									</StyledText>

									<AccordionIcon
										color="g100"
										border="2px solid #848484"
										borderRadius="50%"
									/>
								</AccordionButton>
								<AccordionPanel
									display="flex"
									justifyContent="space-between"
									flexWrap="wrap"
									pb={4}
								>
									<StyledText variant="body3-regular">
										{item.description}
									</StyledText>
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</Box>
			</Flex>
		</Container>
	);
};
