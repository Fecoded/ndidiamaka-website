"use client";

// Core
import { Badge, Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

// Components
import { StyledSpacer, StyledText } from "@src/components";
import { HowItWorkList, imageLinks } from "./utils";
import { Fragment } from "react";
import { useController } from "@src/utils";
import { IMAGES } from "@public/assets";

export const HowItWorks = () => {
	const { list, currentImage } = useController({ data: HowItWorkList, imageLinks });
	return (
		<Box bg="$black40" py="40px" id="how-it-works">
			<Container maxW="1000px">
				<Flex flexDirection="column" justifyContent="center" alignItems="center">
					<StyledText variant="h3-regular" color="$white">
						How it works
					</StyledText>
					<StyledSpacer variant="space8" />
					<Badge
						bgColor="$white"
						borderRadius="34px"
						px={4}
						py={1}
						textTransform="none"
					>
						<StyledText variant="body1-md">Step by step process</StyledText>
					</Badge>
				</Flex>
				<StyledSpacer variant="space64" />
				<Flex
					justifyContent="space-between"
					alignItems="center"
					flexDirection={{ base: "column", md: "row", lg: "row" }}
					gap="30px"
				>
					<Box w="100%" maxW="392px">
						<Image
							src={currentImage || IMAGES.CreateAccount}
							alt="image"
							width={392}
							height={796}
							style={{
								width: "auto",
								height: "auto",
							}}
							priority
						/>
					</Box>
					<Box>
						{list.map((item, idx) => (
							<Fragment key={idx}>
								<Box
									bgColor={item.active ? "$primary" : "$white"}
									padding={5}
									borderRadius="16px"
									w="100%"
									maxW="420px"
								>
									<StyledText
										variant="body1-bold"
										color={item.active ? "$white" : "$black5"}
									>
										{item.title}
									</StyledText>
									<StyledText
										variant="body3-regular"
										color={item.active ? "$white" : "$black5"}
									>
										{item.body}
									</StyledText>
								</Box>
								<StyledSpacer variant="space8" />
							</Fragment>
						))}
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
