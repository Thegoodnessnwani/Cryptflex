import flower from "../../assets/flower.svg";
import flash from "../../assets/flash.svg";
import Button from "../global/button-primary";

export default function BuyerProducts() {
	return (
		<div>
			<div className="flex items-center justify-start">
				<img src={flash} alt="flashicon" className="w-8 h-8" />
				<h1 className="buyer-account-title">Products</h1>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div className="max-w-sm p-8 bg-white/[.07] shadow-lg rounded-xl m-auto">
					<div className=" flex flex-row items-center justify-center">
						<div>
							<img
								src={flower}
								alt="Lavery Flower Vase"
								className="w-full h-64 object-cover rounded-xl"
							/>
						</div>

						<div className="p-4">
							<span className="text-sm text-blue-500 bg-white/[.08] rounded-full px-4 ">
								New
							</span>
							<h2 className="text-sm mt-2">Lavery flower vase</h2>
							<h2 className="text-md font-bold mt-2">$30</h2>
							<div className="flex items-center mt-2">
								<span className="text-yellow-500">★★★★★</span>
								<span className="ml-2 text-sm">(5.0)</span>
							</div>
							<div className="mt-3">
								<p className="text-sm font-semibold">Size</p>
								<div className="flex space-x-2 mt-1">
									<span className="text-sm bg-gray-400 px-2 py-1 rounded-full">
										S
									</span>
									<span className="text-sm bg-gray-300 px-2 py-1 rounded-full">
										M
									</span>
									<span className="text-sm bg-gray-200 px-2 py-1 rounded-full">
										L
									</span>
								</div>
							</div>
							<div className="mt-3">
								<p className="text-sm font-semibold">Color</p>
								<div className="flex space-x-2 mt-1">
									<span className="w-6 h-6 rounded-full bg-blue-500"></span>
									<span className="w-6 h-6 rounded-full bg-gray-500"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center gap-4">
						<Button variant="primary">Buy Now</Button>
						<Button variant="primary">Add to Cart</Button>
					</div>
				</div>

				<div className="max-w-sm p-8 bg-white/[.07] shadow-lg rounded-xl m-auto">
					<div className=" flex flex-row items-center justify-center">
						<div>
							<img
								src={flower}
								alt="Lavery Flower Vase"
								className="w-full h-64 object-cover rounded-xl"
							/>
						</div>

						<div className="p-4">
							<span className="text-sm text-blue-500 bg-white/[.08] rounded-full px-4 ">
								New
							</span>
							<h2 className="text-sm mt-2">Lavery flower vase</h2>
							<h2 className="text-md font-bold mt-2">$30</h2>
							<div className="flex items-center mt-2">
								<span className="text-yellow-500">★★★★★</span>
								<span className="ml-2 text-sm">(5.0)</span>
							</div>
							<div className="mt-3">
								<p className="text-sm font-semibold">Size</p>
								<div className="flex space-x-2 mt-1">
									<span className="text-sm bg-gray-400 px-2 py-1 rounded-full">
										S
									</span>
									<span className="text-sm bg-gray-300 px-2 py-1 rounded-full">
										M
									</span>
									<span className="text-sm bg-gray-200 px-2 py-1 rounded-full">
										L
									</span>
								</div>
							</div>
							<div className="mt-3">
								<p className="text-sm font-semibold">Color</p>
								<div className="flex space-x-2 mt-1">
									<span className="w-6 h-6 rounded-full bg-blue-500"></span>
									<span className="w-6 h-6 rounded-full bg-gray-500"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center gap-4">
						<Button variant="primary">Buy Now</Button>
						<Button variant="primary">Add to Cart</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

