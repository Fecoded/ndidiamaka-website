import { useState, useEffect } from "react";

type ControllerType = {
	data: Array<{
		title: string;
		body: string;
		active: boolean;
	}>;
	imageLinks: Array<string>;
};

export const useController = ({ data, imageLinks }: ControllerType) => {
	const [list, setList] = useState(data);
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
