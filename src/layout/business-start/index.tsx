"use client";

// Core
import { Box, Container, Grid } from "@chakra-ui/react";

// Components
import { StyledSpacer, StyledText } from "@src/components";

// Utils
import { businessList } from "./utils";

export const BusinessHeadStart = () => {
	return (
		<Box bg="$lightBlack" py="40px">
			<Container maxW="container.xl">
				<Box w="100%" maxW="864px">
					<StyledText variant="h3-md" color="$white">
						Give Your Business a Head Start
					</StyledText>
					<StyledSpacer variant="space12" />
					<StyledText variant="body1-regular" color="$white">
						Daneizo enables businesses to achieve remarkable growth by allowing
						customers to access flexible repayment plans. With sizeable funding
						and a customizable repayment schedule, your business dreams are not
						just valid, but achievable.
					</StyledText>
				</Box>
			</Container>

			<StyledSpacer variant="space48" />
			<Container maxW="1300px">
				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={4}
					alignItems="center"
				>
					{businessList.map((item, idx) => (
						<Box
							key={idx}
							backgroundImage={`url(${item.image})`}
							backgroundPosition="center"
							backgroundRepeat="no-repeat"
							backgroundSize="contain"
							w="100%"
							maxW="384px"
							height={item.height}
							display="flex"
							justifyContent="center"
							alignItems="end"
							pb={10}
						>
							<Box
								backgroundImage={"url(/assets/images/tp-bg.png)"}
								bgColor={item.bgColor}
								backgroundPosition="center"
								backgroundRepeat="no-repeat"
								backgroundSize="cover"
								w="100%"
								maxW="308px"
								borderRadius="10px"
								px={3}
								py={2}
							>
								<StyledText variant="body3-bold" color="$white">
									{item.title}
								</StyledText>
								<StyledText variant="label1-regular" color="$white">
									{item.body}
								</StyledText>
							</Box>
						</Box>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
