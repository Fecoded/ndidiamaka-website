// Core
import {
	Container,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from "@chakra-ui/react";

// Components
import { StyledSpacer, StyledText } from "@src/components";

import { faqList } from "./utils";

export const FAQ = () => {
	return (
		<Container maxW="container.xl" py="2rem">
			<StyledSpacer variant="space32" />
			<StyledText variant="h3-bold" lineHeight="70px">
				Frequently Asked Questions (FAQ)
			</StyledText>
			<StyledSpacer variant="space24" />
			<Accordion allowToggle>
				{faqList.map((item, idx) => (
					<AccordionItem key={idx} py={5}>
						<AccordionButton justifyContent="space-between">
							<StyledText variant="body2-md">{item.title}</StyledText>

							<AccordionIcon
								color="g100"
								border="2px solid #848484"
								borderRadius="50%"
							/>
						</AccordionButton>
						<AccordionPanel
							display="flex"
							justifyContent="space-between"
							flexWrap="wrap"
							pb={4}
						>
							<StyledText variant="body3-regular">{item.body}</StyledText>
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</Container>
	);
};
