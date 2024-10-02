import { Container, Flex } from "@chakra-ui/react";

// Utils
import { SVGs } from "@public/assets";

// Components
import { StyledSpacer, StyledText } from "@src/components";
import { HLine } from "@src/components/line";

export const Footer = () => {
	return (
		<Container maxW="container.xl" pt="10rem">
			<Flex flexDir="column" justifyContent="center" alignItems="center">
				<SVGs.AmakaLogo />
				<StyledSpacer variant="space20" />
				<Flex alignItems="center" gap="40px">
					<SVGs.Linkedin />
					<SVGs.Facebook />
					<SVGs.Instagram />
				</Flex>
				<StyledSpacer variant="space20" />

				<StyledText variant="body2-md">Contact</StyledText>

				<StyledText variant="body3-regular" color="$biegePrimaryDark">
					Ndidiamakaka@xyz.com
				</StyledText>
				<StyledText variant="body3-regular" color="$biegePrimaryDark">
					080XXXXXXXX
				</StyledText>
				<StyledSpacer variant="space32" />
				<HLine />
				<StyledSpacer variant="space12" />
				<StyledText variant="body3-md" color="$biegePrimaryDark">
					Copyright © ndidiamakatechinitiative.com All rights reserved.
				</StyledText>
				<StyledSpacer variant="space12" />
			</Flex>
		</Container>
	);
};
