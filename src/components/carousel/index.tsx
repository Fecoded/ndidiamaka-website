import { ReactNode } from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type CarouselProps = {
	children: ReactNode;
	noOfItemToDisplay?: number;
	autoPlay?: boolean;
};

export const StyledCarousel = ({
	children,
	noOfItemToDisplay = 1,
	autoPlay = false,
}: CarouselProps) => {
	const responsive: ResponsiveType = {
		desktop: {
			breakpoint: {
				max: 3000,
				min: 1024,
			},
			items: noOfItemToDisplay,
			partialVisibilityGutter: 20,
		},
		mobile: {
			breakpoint: {
				max: 464,
				min: 0,
			},
			items: 1,
			partialVisibilityGutter: 30,
		},
		tablet: {
			breakpoint: {
				max: 1024,
				min: 464,
			},
			items: 1,
			partialVisibilityGutter: 30,
		},
	};

	// const ButtonGroup = ({ ...rest }: any) => {
	// 	const {
	// 		carouselState: { currentSlide, totalItems },
	// 	} = rest;
	// 	return (
	// 		<div className="current-slide-control">
	// 			{currentSlide - 1} of {totalItems - 4}
	// 		</div>
	// 	);
	// };

	return (
		<Carousel
			additionalTransfrom={0}
			arrows
			autoPlay={autoPlay}
			autoPlaySpeed={2000}
			centerMode={false}
			className=""
			containerClass=""
			// customButtonGroup={<ButtonGroup />}
			dotListClass=""
			draggable
			focusOnSelect={false}
			infinite={true}
			itemClass=""
			keyBoardControl
			minimumTouchDrag={80}
			renderButtonGroupOutside
			renderDotsOutside={false}
			responsive={responsive}
			showDots={false}
			sliderClass=""
			slidesToSlide={1}
			swipeable
		>
			{children}
		</Carousel>
	);
};

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
// 	const {
// 		carouselState: { currentSlide },
// 	} = rest;
// 	return (
// 		<div className="carousel-button-group">
// 			<button
// 				className={`btn rounded-circle border btn-carousel-dimension btn-transparent ${
// 					currentSlide !== 0 && "border-dark"
// 				}`}
// 				onClick={() => previous()}
// 			>
// 				<i className={`bi bi-arrow-left ${currentSlide !== 0 && "text-dark"}`}></i>
// 			</button>
// 			<button
// 				className={`btn rounded-circle border btn-carousel-dimension ms-5 btn-transparent ${
// 					currentSlide === 0 && "border-dark"
// 				}`}
// 				onClick={() => next()}
// 			>
// 				<i className={`bi bi-arrow-right ${currentSlide === 0 && "text-dark"}`}></i>
// 			</button>
// 		</div>
// 	);
// };
