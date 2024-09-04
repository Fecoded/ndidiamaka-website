import { createContext } from "react";

type ContextType = {
	handleButtonClick: () => void;
	isOpen: boolean;
	onClose: () => void;
};

export const ProviderContext = createContext<ContextType>({
	handleButtonClick: () => {},
	isOpen: false,
	onClose: () => {},
});
