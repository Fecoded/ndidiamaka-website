"use client";

// Core
import { Badge, Box, Container, Flex } from "@chakra-ui/react";

// Components
import { StyledSpacer, StyledText } from "@src/components";
import { FeatureCardItem } from "./feature-card";

// Utils
import { featureCardList } from "./utils";

export const Features = () => {
	return (
		<Box bg="$black40" py="40px" id="features">
			<Container maxW="1216px">
				<Flex flexDirection="column" justifyContent="center" alignItems="center">
					<Badge
						bgColor="#494E9F33"
						borderRadius="34px"
						px={4}
						py={1}
						textTransform="capitalize"
					>
						<StyledText variant="body3-md" color="$primary">
							Features
						</StyledText>
					</Badge>
					<StyledSpacer variant="space8" />
					<StyledText variant="subtitle1-bold" color="$ascent">
						Bring Your Dreams to Reality
					</StyledText>
					<StyledSpacer variant="space8" />
					<Box w="100%" maxW="799px">
						<StyledText variant="body1-regular" color="$white" textAlign="center">
							Daneizo is the fastest lane to reach your business goals. We help
							unlock endless opportunities for small businesses and
							enterprises, providing a level playing field for all.
						</StyledText>
					</Box>
					<StyledSpacer variant="space16" />
					{featureCardList.map((item, idx) => {
						return <FeatureCardItem key={idx} {...item} idx={idx} />;
					})}
				</Flex>
			</Container>
		</Box>
	);
};
