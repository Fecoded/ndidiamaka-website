"use client";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import QRCode from "react-qr-code";
import { useContext } from "react";

// Components
import { StyledModal } from "@src/components";

// Utils
import { IMAGES } from "@public/assets";
import { ProviderContext } from "@src/utils";

export const ScanModal = () => {
	const { isOpen, onClose } = useContext(ProviderContext);
	return (
		<StyledModal isOpen={isOpen} onClose={onClose} maxW="800px">
			<Flex justifyContent="center" alignItems="center">
				<Box w="100%" maxW="570px" position="relative">
					<Image src={IMAGES.ScanToDownload} alt="scan_to_download" />
					<Box
						bgColor="$white"
						p="2px"
						position="absolute"
						top={{ base: "5.5rem", md: "10rem", lg: "12rem" }}
						right={{ base: "10.5rem", md: "20.5rem", lg: "20.5rem" }}
					>
						<QRCode size={100} value="scan to download" />
					</Box>
				</Box>
			</Flex>
		</StyledModal>
	);
};
