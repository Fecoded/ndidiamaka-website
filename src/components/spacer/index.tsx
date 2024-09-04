import { Box } from "@chakra-ui/react";

//
import { SpaceUtils, Variants } from "./utils";

type SpacerProps = {
	variant?: Variants;
};

export const StyledSpacer = ({ variant }: SpacerProps) => {
	return (
		<Box
			marginTop={SpaceUtils(variant).marginTop}
			marginBottom={SpaceUtils(variant).marginBottom}
		/>
	);
};
