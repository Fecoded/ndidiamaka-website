import { useEffect, useState } from "react";

export const HowItWorkList = [
	{
		title: "Create an account",
		body: "Open the Daneizo app on your mobile, web, or desktop devices and sign up using your BVN number",
		active: true,
	},
	{
		title: "Verify your account",
		body: "Get an OTP authentication code to approve your BVN and verify your banking details",
		active: false,
	},
	{
		title: "Update Personal Data",
		body: "Proceed to update essential details like your passport, email, NIN, and password",
		active: false,
	},
	{
		title: "Get Credit",
		body: "Confirm your eligibility,  fill application form and await loan disbursement",
		active: false,
	},
];

export const imageLinks = [
	"/assets/images/create-account.png",
	"/assets/images/verify-account.png",
	"/assets/images/update-personal-data.png",
	"/assets/images/get-credit.png",
];

export const useHowItWork = () => {
	const [list, setList] = useState(HowItWorkList);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentImage, setCurrentImage] = useState("");
	const [progress, setProgress] = useState(0);

	let animationFrameId: number;

	const updateActiveStatus = (idx: number) => {
		const newList = list.map((item, i) => ({
			...item,
			active: i === idx,
		}));
		setList(newList);
	};

	const startContinuousLoop = () => {
		const loop = (currentIndex: number) => {
			updateActiveStatus(currentIndex);

			// Move to the next index
			setProgress(0);
			const nextIndex = (currentIndex + 1) % list.length;
			setCurrentIndex(nextIndex);
			setCurrentImage(imageLinks[currentIndex]);

			// Repeat the loop after a delay (adjust the delay time as needed)
			setTimeout(() => loop(nextIndex), 5000); // Change 2000 to the desired delay in milliseconds
		};

		// Start the loop
		loop(currentIndex);
	};

	useEffect(() => {
		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	// Start the continuous loop when the component mounts
	useEffect(() => {
		startContinuousLoop();
	}, []);

	return { list, currentIndex, currentImage, progress };
};
