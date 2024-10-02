"use client";

// Core
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";

// Components
import { StyledText } from "@src/components";
import { MobileDrawer } from "./drawer";

// Utils
import { SVGs } from "@public/assets";
import { NavList } from "./utils";

export const Navbar = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<Flex
				w="100%"
				h="94px"
				position="fixed"
				top="0"
				justifyContent="center"
				alignItems="center"
				background="$white"
				// boxShadow="0 0 2px 0 rgba(0, 0, 0, 0.3)"
				zIndex={1}
			>
				<Container maxW="container.xl">
					<Flex justifyContent="space-between" alignItems="center">
						<SVGs.AmakaLogo />

						<Flex gap="50px" hideBelow="lg" alignItems="center">
							{NavList.map((item, idx) => (
								<a key={idx} href={item.link}>
									<StyledText variant="body2-md">
										{item.title}
									</StyledText>
								</a>
							))}
						</Flex>
						<Box hideFrom="lg" onClick={onOpen}>
							<SVGs.MenuIcon />
						</Box>
					</Flex>
				</Container>
			</Flex>
			<MobileDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
};
