import circle from "./assets/circle.png";
import telegram from "./assets/telegram.png";
import discord from "./assets/discord.png";
import caller from "./assets/caller.png";
import twitter from "./assets/twitter.png";
import wallet from "./assets/wallet.png";

const FilterAnimation = () => {
	return (
		<div
			className="z-3 w-[330px] h-[330px] overflow-hidden rounded-full absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
			style={{
				backgroundImage: `url(${circle})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div
				className="flex gap-2 absolute top-[10%]"
				style={{
					// top: 0,
					// left: 1400,
					// width: "1400px",
					// height: "278px",
					transform: "translateX(-580px)",
					animation: "filter-top-move 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
				}}
			>
				<img src={telegram} className="" />
				<img src={discord} className="" />
				<img src={caller} className="" />
				<img src={twitter} className="" />
				<img src={wallet} className="" />
			</div>
			<div
				className="flex gap-2 absolute top-[60%]"
				style={{
					// top: 0,
					// left: 1400,
					// width: "1400px",
					// height: "278px",
					transform: "translateX(200px)",
					animation: "filter-bot-move 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
				}}
			>
				<img src={telegram} className="" />
				<img src={discord} className="" />
				<img src={caller} className="" />
				<img src={twitter} className="" />
				<img src={wallet} className="" />
			</div>
		</div>
	);
};

export default FilterAnimation;
