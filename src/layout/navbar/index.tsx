"use client";

// Core
import Image from "next/image";
import { Box, Container, Flex } from "@chakra-ui/react";

// Components
import { StyledText, StyledButton } from "@src/components";

// Utils
import { IMAGES } from "@public/assets";
import { NavList } from "./utils";
import { colors } from "@src/styles";

export const Navbar = () => {
	return (
		<Flex
			w="100%"
			h="94px"
			position="fixed"
			top="0"
			justifyContent="center"
			alignItems="center"
			background="$white"
			boxShadow="0 0 2px 0 rgba(0, 0, 0, 0.3)"
			zIndex={1}
		>
			<Container maxW="container.xl">
				<Flex justifyContent="space-between" alignItems="center">
					<Box w="100%" maxW="138px">
						<Image src={IMAGES.DaniezoLogo} alt="daneizo_logo" />
					</Box>

					<Flex gap="50px" hideBelow="lg" alignItems="center">
						{NavList.map((item, idx) => (
							<a key={idx} href={item.link}>
								<StyledText variant="body2-md">{item.title}</StyledText>
							</a>
						))}
						<StyledButton color={colors.$white} onClick={() => []}>
							<StyledText variant="body2-regular" color={colors.$white}>
								Get the Deneizo App
							</StyledText>
						</StyledButton>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	);
};
