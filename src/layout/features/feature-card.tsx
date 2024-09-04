// Core
import Image, { StaticImageData } from "next/image";
import { Box, Flex } from "@chakra-ui/react";

// Components
import { StyledSpacer, StyledText } from "@src/components";

type FeatureCardItemProps = {
	title: string;
	body: string;
	image: StaticImageData;
	bgColor: string;
	idx: number;
};

export const FeatureCardItem = ({ bgColor, title, body, image, idx }: FeatureCardItemProps) => {
	return (
		<>
			<Flex w="100%" position="sticky" top={`calc(6.8rem + ${idx * 30}px)`}>
				<Flex
					gap="30px"
					bgColor={bgColor}
					pt={5}
					pl={10}
					borderRadius="24px"
					alignItems="center"
					w="100%"
					flexDirection={{ base: "column", md: "row", lg: "row" }}
					overflow="hidden"
				>
					<Box w="100%" maxW="540px">
						<StyledText variant="h3-md">{title}</StyledText>
						<StyledSpacer variant="space12" />
						<StyledText variant="body1-regular">{body}</StyledText>
					</Box>
					<Box w="100%" maxW="345.47px">
						<Image src={image} alt={title} />
					</Box>
				</Flex>
			</Flex>
			<StyledSpacer variant="space16" />
		</>
	);
};
