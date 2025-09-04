import logo from "./assets/logo.svg";
import ellipse from "./assets/Ellipse.svg";
import background1 from "./assets/Star.png";
import background2 from "./assets/Vector.png";
import buttonsback from "./assets/buttonsback.png";
import shadow from "./assets/shadow.png";
import shadow2 from "./assets/shadow2.png";
import bot from "./assets/bot.png";
import botw from "./assets/botw.png";
import "./App.css";
import { useState } from "react";
import ChartAnimation from "./ChartAnimation";
import FilterAnimation from "./FilterAnimation";

const tabs = ["Filter", "Strategy", "Auto"];

function App() {
	const [active, setActive] = useState(2);

	return (
		<>
			<div className="w-[1140px] h-[880px] p-5 bg-black text-white flex flex-col items-center relative overflow-clip rounded-[12px] border border-[#1E1E24]">
				<div className="flex w-full items-center gap-1 mb-6">
					<img src={logo} className="w-[18px] h-[20px]" />
					<div className="font-semibold text-xl">All Bots</div>
				</div>

				<div className="w-full bg-[#141519] h-[1px] mb-10"></div>

				<div className="text-xl text-[#19ECB7] mb-1">
					Smart filters. Trusted sources.
				</div>

				<div className="text-[64px] leading-[1.05] font-bold text-center mb-1">
					<div>
						<div>Let agents cut noise in</div>
						<div className="flex items-center justify-center">
							<div className="w-[68px] border-[2px] border-[#19ECB7] p-2 mr-2 rounded-3xl">
								<img src={bot} width={22} height={19} className="ml-auto" />
							</div>
							Auto Trading!
						</div>
					</div>
				</div>

				<button className="flex border hover:cursor-pointer text-sm bg-[#114337] border-[#19ECB7] py-5 px-9 bg-green rounded-lg items-center gap-3 mt-5 mb-10">
					<div>Create AutoBot</div>
					<img src={botw} width={16} height={12} className="inline h-4" />
				</button>

				<div className="mt-auto mb-24 z-5 relative w-[33%] flex flex-col items-center">
					<img
						src={shadow}
						className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 max-w-[140%]"
					/>
					<div className="flex text-xl justify-between w-[60%] relative mt-auto mb-1">
						{tabs.map((tab, id) => (
							<button
								key={tab}
								onClick={() => setActive(id)}
								className={`pb-1 hover:cursor-pointer transition-colors ${
									active === id ? "text-white" : "text-[#FFFFFF50]"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
					<div className="h-[2px] w-[60%] bg-[#D9D9D912] z-1">
						<div
							className={`h-full bg-[#19ECB7] transition-all`}
							style={{ width: `${33.3 * active * 1.2 + 2}%` }}
						/>
					</div>
				</div>

				{active == 0 ? <FilterAnimation /> : <ChartAnimation />}

				<img
					src={ellipse}
					class="absolute w-[130%] max-w-[130%] bottom-[-100px] animate-orbit"
				/>

				<img src={background1} class="absolute bottom-0 left-[32px]" />

				<img
					src={background2}
					class="w-[540px] h-[460px] absolute bottom-0 left-[-100px]"
				/>

				<img
					src={buttonsback}
					class="absolute left-[-6px] top-[190px] w-[100%] h-[70%]"
				/>
				<img
					src={shadow2}
					className="absolute w-[40%] z-2 top-[67%] left-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>

			{/* <br />
			<br />
			<br />
			<br />
			<br /> */}
			{/* <FilterAnimation /> */}
		</>
	);
}

export default App;
