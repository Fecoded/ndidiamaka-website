import {
	Box,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
} from "@chakra-ui/react";
import Image from "next/image";

import { StyledText, StyledButton } from "@src/components";

import { colors } from "@src/styles";
import { IMAGES } from "@public/assets";
import { NavList } from "../utils";

export const MobileDrawer = ({
	onClose,
	isOpen,
	handleButtonClick,
}: {
	onClose: () => void;
	isOpen: boolean;
	handleButtonClick: () => void;
}) => {
	return (
		<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader borderBottomWidth="1px">
					<Box w="100%" maxW="138px">
						<Image src={IMAGES.DaniezoLogo} alt="daneizo_logo" />
					</Box>
				</DrawerHeader>
				<DrawerBody mt={3}>
					{NavList.map((item, idx) => (
						<a key={idx} href={item.link} onClick={onClose}>
							<StyledText variant="body2-md" pb={5}>
								{item.title}
							</StyledText>
						</a>
					))}

					<Flex flexDirection="column" gap="10px" mt={3}>
						<StyledButton color={colors.$white} onClick={handleButtonClick}>
							<StyledText variant="body2-regular" color={colors.$white}>
								Get the Deneizo App
							</StyledText>
						</StyledButton>
					</Flex>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
