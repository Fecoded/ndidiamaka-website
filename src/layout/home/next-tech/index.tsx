import { Box, Flex } from "@chakra-ui/react";

// Components
import { StyledText } from "@src/components";

export const NextTechGeneration = () => {
	return (
		<Box
			backgroundImage="url(/assets/images/next-tech-generation.png)"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			height="70vh"
			overflow="hidden"
		>
			<Flex justifyContent="center" alignItems="center" h="100%" px="1px">
				<StyledText variant="h2-bold" color="$white">
					Building the Next Tech Generation
				</StyledText>
			</Flex>
		</Box>
	);
};
