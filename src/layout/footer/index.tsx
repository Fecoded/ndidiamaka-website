"use client";
// Core
import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

// Components
import { StyledSpacer, StyledText } from "@src/components";
import { QrCode } from "@common/qrcode";

// Utils
import { IMAGES } from "@public/assets";
import { FooterList } from "./utils";

export const Footer = () => {
	return (
		<Box bg="$black40" py="60px">
			<Container maxW="container.xl">
				<Flex justifyContent="space-between" alignItems="center">
					<StyledText variant="h3-bold" color="$white">
						Give your business a head start
					</StyledText>
					<QrCode value="This is the link to Daneizo app" />
				</Flex>
				<StyledSpacer variant="space48" />
				<Box bg="$white" w="100%" h="1px"></Box>
				<StyledSpacer variant="space48" />
				<Flex
					justifyContent="space-between"
					alignItems={{ lg: "center" }}
					flexDirection={{ base: "column", md: "row", lg: "row" }}
					gap={{ base: "30px", lg: "50px" }}
				>
					<Box>
						<StyledText variant="body2-regular" color="$white">
							info@daneizotradeafrica.com
						</StyledText>
						<StyledSpacer variant="space8" />
						<StyledText variant="body2-regular" color="$white">
							+91 91813 23 2309
						</StyledText>
						<StyledSpacer variant="space8" />
						<StyledText variant="body2-regular" color="$white">
							Ajao Estate, Lagos, Nigeria
						</StyledText>
						<StyledSpacer variant="space24" />
						<Box bgColor="$white" p={1} borderRadius="10px" w="100%" maxW="152px">
							<Image src={IMAGES.DaniezoLogo} alt="Daneizo_logo" />
						</Box>
					</Box>
					<Grid
						templateColumns={{
							base: "repeat(2, 1fr)",
							md: "repeat(2, 1fr)",
							lg: "repeat(4, 1fr)",
						}}
						gap="20px"
						alignItems="flex-start"
						maxW="750px"
					>
						{FooterList.map((item, idx) => (
							<Box key={idx}>
								<StyledText variant="body1-bold" color="$white">
									{item.title}
								</StyledText>
								<StyledSpacer variant="space16" />
								{item.links.length > 0 &&
									item.links.map((link, idx) => (
										<Link key={idx} href={link.link}>
											<StyledText
												variant="body2-regular"
												color="$white"
											>
												{link.name}
											</StyledText>
											<StyledSpacer variant="space8" />
										</Link>
									))}
								<Flex gap="10px">
									{item.imageList.length > 0 &&
										item.imageList.map((img, idx) => (
											<Link
												key={idx}
												href={img.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												{<img.image />}
											</Link>
										))}
								</Flex>
							</Box>
						))}
					</Grid>
				</Flex>
			</Container>
		</Box>
	);
};
