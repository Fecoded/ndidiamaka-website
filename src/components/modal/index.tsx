"use client";

import {
	Modal,
	ModalBody,
	ModalBodyProps,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalProps,
} from "@chakra-ui/react";

type StyledModalProps = ModalProps &
	ModalBodyProps & {
		title?: string;
		onClose: () => void;
		isOpen: boolean;
		hasCloseBtn?: boolean;
		children: React.ReactNode;
		hasCarousel?: boolean;
		closeOnOverlayClick?: boolean;
		scrollBehavior?: "inside" | "outside";
		size?: string;
	};

export const StyledModal = ({
	title,
	onClose,
	isOpen,
	hasCloseBtn = false,
	hasCarousel = false,
	closeOnOverlayClick = true,
	children,
	scrollBehavior,
	size = "xl",
	...props
}: StyledModalProps) => {
	return (
		<Modal
			scrollBehavior={scrollBehavior}
			closeOnOverlayClick={closeOnOverlayClick}
			isCentered
			onClose={onClose}
			isOpen={isOpen}
			motionPreset="slideInBottom"
			size={size}
			{...props}
		>
			<ModalOverlay background="rgba(235, 231, 231, 0.884)" paddingX="20px" />
			{hasCarousel ? (
				<ModalContent bg="#000000" color="#fff">
					{children}
				</ModalContent>
			) : (
				<ModalContent
					backgroundImage="url(/assets/images/modal-bg.png)"
					backgroundPosition="center"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					py={8}
					background={props.bg}
					color={props.color}
					maxW={props.maxW}
					maxH={props.maxH}
				>
					{title && <ModalHeader textAlign="center">{title}</ModalHeader>}
					{hasCloseBtn && <ModalCloseButton />}
					<ModalBody>{children}</ModalBody>
				</ModalContent>
			)}
		</Modal>
	);
};
