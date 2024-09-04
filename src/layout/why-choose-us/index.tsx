"use client";

// Core
import { Box, Container, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import Image from "next/image";

// Components
import { StyledSpacer, StyledText } from "@src/components";
import { QrCode } from "@common/qrcode";

// Utils
import { useController } from "@src/utils";
import { WhyChooseUsList, imageLinks } from "./utils";
import { IMAGES } from "@public/assets";

export const WhyChooseUs = () => {
	const { list, currentImage } = useController({ data: WhyChooseUsList, imageLinks });
	return (
		<Box bg="$lightBlack" py="100px">
			<Container maxW="container.xl">
				<StyledText variant="h3-regular" color="$white">
					Why choose us?
				</StyledText>
				<StyledSpacer variant="space32" />
				<Flex
					justifyContent="space-between"
					alignItems="center"
					flexDirection={{ base: "column", md: "row", lg: "row" }}
					gap="30px"
				>
					<Box>
						{list.map((item, idx) => (
							<Fragment key={idx}>
								<Flex gap="10px" alignItems="center">
									{item.active && (
										<Box
											bgColor="$ascent"
											w="4px"
											h={idx === 0 ? "50px" : "70px"}
										></Box>
									)}
									<Box>
										<StyledText
											variant="subtitle2-regular"
											color={item.active ? "$white" : "$black10"}
										>
											{item.title}
										</StyledText>
										<StyledSpacer variant="space8" />
										<Box w="100%" maxW="490px">
											<StyledText
												variant="body2-regular"
												color={
													item.active ? "$white" : "$black10"
												}
											>
												{item.body}
											</StyledText>
										</Box>
									</Box>
								</Flex>
								<StyledSpacer variant="space32" />
							</Fragment>
						))}
						<QrCode value="This is the link to Daneizo app" />
					</Box>
					<Box w="100%" maxW="516px">
						<Image
							src={currentImage || IMAGES.CreditFinancingService}
							alt="credit"
							width={516}
							height={571}
							style={{
								width: "auto",
								height: "auto",
							}}
						/>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
