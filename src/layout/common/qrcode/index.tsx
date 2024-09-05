// Core
import { Box, Flex } from "@chakra-ui/react";
import QRCode from "react-qr-code";

// Components
import { StyledText } from "@src/components";

// Utils
import { SVGs } from "@public/assets";

export const QrCode = ({ value }: { value: string }) => {
	return (
		<Box
			bgColor="$white"
			w="100%"
			maxW="380px"
			px="1px"
			py="2px"
			borderRadius={20}
			hideBelow="md"
		>
			<Box
				bgColor="$lightBlack"
				borderTopRightRadius={18}
				borderTopLeftRadius={18}
				mx="1px"
				px={5}
			>
				<Flex justifyContent="space-between" alignItems="center" px={4} py={5}>
					<Box w="100%" maxW="145px">
						<StyledText variant="body1-regular" color="$white">
							Download Daneizo App
						</StyledText>
					</Box>
					<Box bgColor="$white" p="2px">
						<QRCode size={100} value={value} />
					</Box>
				</Flex>
			</Box>

			<Flex gap="20px" justifyContent="center" my={2}>
				<Flex gap="10px" bgColor="$black40" alignItems="center" borderRadius={10} p={2}>
					<SVGs.AndroidIcon />
					<Box>
						<StyledText variant="body3-regular" color="$white">
							Download on the
						</StyledText>
						<StyledText variant="body3-bold" color="$white">
							App Store
						</StyledText>
					</Box>
				</Flex>
				<Flex gap="10px" bgColor="$black40" alignItems="center" borderRadius={10} p={2}>
					<SVGs.AppleIcon />
					<Box>
						<StyledText variant="body3-regular" color="$white">
							Download on the
						</StyledText>
						<StyledText variant="body3-bold" color="$white">
							Google Store
						</StyledText>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};
