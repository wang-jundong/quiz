import { pngs } from "../assets/pngs";
import DatePicker from "react-datepicker";
import { useState } from "react";

const Home = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	return (
		<div className="bg-light-green p-6 text-white max-w-lg">
			<div>
				<p className="italic mb-1">Your full given name</p>
				<input
					className="hover:outline-none focus:outline-none bg-light-green border-white border w-full px-2 py-1.5 placeholder-white/80"
					type="text"
					placeholder="John Doe"
				/>
			</div>
			<div className="flex flex-row items-center space-x-4 mt-6">
				<div className="basis-5/12">
					<p className="italic mb-1">Date of Birth</p>
					<div className="flex flex-row items-center border-white border py-1.5 px-2">
						<img src={pngs.calendar} className="w-4 h-4" />
						<DatePicker
							selected={currentDate}
							dateFormat={["MMMM d, yyyy"]}
							className="bg-light-green ml-2 hover:outline-none focus:outline-none w-32"
							onChange={(date) => {
								console.log("---date--", date);
								setCurrentDate(date);
							}}
						/>
					</div>
				</div>
				<div className="basis-7/12">
					<p className="italic mb-1">
						Country of residence or citizenship:
					</p>
					<input
						className="hover:outline-none focus:outline-none bg-light-green border-white border w-full px-2 py-1.5 placeholder-white/80"
						type="text"
						placeholder="Canada"
					/>
				</div>
			</div>
			<div className="mt-6">
				<p className="italic mb-1">
					What school do you plan to attend?
				</p>
				<input
					className="hover:outline-none focus:outline-none bg-light-green border-white border w-full px-2 py-1.5 placeholder-white/80"
					type="text"
					placeholder="University of British Columbia"
				/>
			</div>
			<div className="mt-6">
				<p className="italic mb-1">
					Please take a moment to describe your intended area of
					study:
				</p>
				<textarea
					className="hover:outline-none focus:outline-none bg-light-green border-white border w-full px-2 py-1.5 placeholder-white/80"
					rows="5"
					style={{ resize: "none" }}
					placeholder="Enter details here"
				/>
			</div>
		</div>
	);
};

export default Home;
