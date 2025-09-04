import circle from "./assets/circle.png";
import chart from "./assets/chart.png";

const ChartAnimation = () => {
	return (
		<div
			className="z-3 w-[330px] h-[330px] overflow-hidden rounded-full absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
			style={{
				backgroundImage: `url(${circle})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<img
				src={chart}
				className="absolute max-w-[1400px]"
				style={{
					top: 0,
					left: 0,
					width: "1400px",
					height: "278px",
					transform: "translateX(-1780px)",
					animation: "chart-step-move 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
				}}
			/>
			<img
				src={chart}
				className="absolute max-w-[1400px]"
				style={{
					top: 0,
					left: 1400,
					width: "1400px",
					height: "278px",
					transform: "translateX(-1780px)",
					animation: "chart-step-move 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
				}}
			/>
		</div>
	);
};

export default ChartAnimation;
