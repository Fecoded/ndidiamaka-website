// Core
import { Box, Container, Stack } from "@chakra-ui/react";

// Components
import { StyledSpacer, StyledText, StyledCarousel } from "@src/components";
import { OvationList } from "./utils";

export const Ovation = () => {
	return (
		<Container maxW="container.xl" py="2rem">
			<StyledSpacer variant="space32" />
			<StyledText variant="h3-bold" lineHeight="70px">
				Ovations for the Ndidiamaka Tech Initiative
			</StyledText>
			<StyledSpacer variant="space40" />
			<Stack direction={["column"]} background="#F5F5F5" padding="10px">
				<StyledCarousel autoPlay noOfItemToDisplay={2}>
					{OvationList.map((item, idx) => (
						<Stack
							key={idx}
							direction={["column", "row"]}
							justifyContent="space-between"
							alignItems="center"
							bgColor="$white"
							borderRadius="10px"
							w="100%"
							maxW="681px"
							h={{ base: "350px", lg: "300px" }}
						>
							<Box>
								<Box px="30px">
									<StyledSpacer variant="space32" />
									<StyledText variant="body3-regular">
										{item.text}
									</StyledText>
								</Box>

								<StyledSpacer variant="space20" />
								<Box px="30px">
									<StyledText variant="body3-bold">
										{item.name}
									</StyledText>
									<StyledText variant="body3-regular">
										{item.position}
									</StyledText>
									<StyledSpacer variant="space20" />
								</Box>
							</Box>
						</Stack>
					))}
				</StyledCarousel>
			</Stack>
		</Container>
	);
};
