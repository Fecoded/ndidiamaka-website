"use client";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import QRCode from "react-qr-code";
import { useContext } from "react";

// Components
import { StyledModal } from "@src/components";

// Utils
import { IMAGES, SVGs } from "@public/assets";
import { ProviderContext } from "@src/utils";

export const ScanModal = () => {
	const { isOpen, onClose } = useContext(ProviderContext);
	return (
		<StyledModal isOpen={isOpen} onClose={onClose} maxW="800px">
			<Flex flexDirection="column" justifyContent="center" alignItems="center">
				<Flex flexDirection="column" w="100%" maxW="570px" position="relative">
					<Flex
						gap="20px"
						bgColor="$primary"
						p={3}
						borderRadius="20px"
						alignSelf="flex-start"
						ml="8.5rem"
					>
						<SVGs.AndroidIcon width="29" height="33" />
						<SVGs.AndroidLight />
					</Flex>
					<Image src={IMAGES.ScanToDownload} alt="scan_to_download" />
					<Box
						bgColor="$white"
						p="2px"
						position="absolute"
						top={{ base: "8rem", md: "12rem", lg: "14rem" }}
						right={{ base: "10.5rem", md: "20.5rem", lg: "20.5rem" }}
					>
						<QRCode size={100} value="scan to download" />
					</Box>
				</Flex>
			</Flex>
		</StyledModal>
	);
};
