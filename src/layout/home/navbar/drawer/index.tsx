import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";

import { StyledText } from "@src/components";

import { SVGs } from "@public/assets";
import { NavList } from "../utils";

export const MobileDrawer = ({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) => {
	return (
		<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader borderBottomWidth="1px">
					<SVGs.AmakaLogo />
				</DrawerHeader>
				<DrawerBody mt={3}>
					{NavList.map((item, idx) => (
						<a key={idx} href={item.link} onClick={onClose}>
							<StyledText variant="body2-md" pb={5}>
								{item.title}
							</StyledText>
						</a>
					))}
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};
