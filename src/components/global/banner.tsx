// import girl from "../../assets/girl.svg";
import pie from "../../assets/pie.svg";
import maskgroup from "../../assets/maskgroup.svg";
import Button from "../global/button-primary";

export default function Banner() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-56 w-full mb-4">
			{" "}
			<div
				className="flex-1 flex items-center justify-center bg-black p-6 rounded-lg text-white "
				style={{
					backgroundImage: `url(${maskgroup})`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				<div className="flex flex-col justify-center gap-2">
					<h2 className="text-md">New Winter Collection</h2>
					<p className="text-lg">Best selling sweatshirt</p>
					<Button variant="primary"> Buy Now</Button>
				</div>
				{/* <img src={girl} alt="girl" className="mt-4 h-64" /> */}
			</div>
			<div className="flex-1 flex items-center justify-center bg-black p-6 rounded-lg">
				{" "}
				<img src={pie} alt="pie" className="mt-4 w-[50%] " />
			</div>
		</div>
	);
};

