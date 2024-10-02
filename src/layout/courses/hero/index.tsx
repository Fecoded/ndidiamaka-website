import { Box, Container, Flex } from "@chakra-ui/react";

// Components
import { StyledText } from "@src/components";

export const Hero = () => {
	return (
		<Container maxW="container.xl">
			<Box
				backgroundImage="url(/assets/images/courses-bg.png)"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				height="50vh"
				overflow="hidden"
			>
				<Flex
					flexDir="column"
					justifyContent="center"
					alignItems="center"
					h="120%"
					px="1px"
				>
					<StyledText variant="body2-regular" color="$white">
						Our Tech
					</StyledText>
					<StyledText variant="h2-bold" color="$white">
						Courses
					</StyledText>
				</Flex>
			</Box>
		</Container>
	);
};
