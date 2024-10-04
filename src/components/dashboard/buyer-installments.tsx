import React from "react";
import flash from "../../assets/flash.svg";
import bag from "../../assets/bag.svg";
import Button from "../global/button-primary";

export default function BuyerInstallment() {
	const orders = [
		{
			product: "Product 1",
			price: "$200",
			status: "Completed",
			orderDate: "2023-01-01",
			imageUrl: bag,
		},
		{
			product: "Product 2",
			price: "$200",
			status: "Pending",
			orderDate: "2023-01-02",
			imageUrl: bag,
		},
	];

	// Define the table headers
	const headers = ["Products", "Price", "Status", "Date"];

	// Define the table rows
	const rows = orders.map((order) => (
		<React.Fragment>
			<tr className={"bg-white/[.07]"}>
				<td className="border  px-4 py-2 text-sm flex flex-row">
					<img
						src={order.imageUrl}
						alt={order.product}
						className="w-8 h-8 mr-2"
					/>
					{order.product}
				</td>
				<td className="border px-4 py-2 text-sm">{order.price}</td>
				<td
					className={`border px-4 py-2 ${
						order.status === "Completed" ? "text-green-500" : "text-yellow-500"
					}`}
				>
					<span className=" bg-white/[.08] rounded-full p-2 text-sm">{order.status}</span>
				</td>
				<td className="border px-4 py-2 text-sm">{order.orderDate}</td>
			</tr>
			<tr className="bg-black h-1">
				<td colSpan={5}></td>
			</tr>
		</React.Fragment>
	));

	// Render the table
	return (
		<div>
			<div className="flex items-center justify-start">
				<img src={flash} alt="flashicon" className="w-8 h-8" />
				<h1 className="buyer-account-title">Ongoing Installments</h1>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 ">
				<div className="max-w-xs p-6 bg-white/[.07] shadow-lg rounded-xl flex flex-col space-y-4 m-auto">
					<div className="flex justify-between gap-2">
						<div className="flex flex-row gap-2">
							{/* Product Image */}
							<img
								src={bag}
								alt="Product Image"
								className="w-8 h-8 object-cover rounded-full"
							/>
							{/* Product Name */}
							<div>
								<p className="text-xs">Product Name</p>
								<p className="text-gray-600 text-xs">Dior hand bag</p>
							</div>
						</div>

						<div>
							<p className="text-white text-md flex items-end">$150</p>
						</div>
					</div>

					{/* Payment Status */}
					<div className="flex flex-col items-center">
						<p className="text-gray-500 text-sm  mb-2">Payment</p>
						<div className="flex flex-row">
							<div className="relative">
								<svg className="w-16 h-16">
									<circle
										cx="32"
										cy="32"
										r="28"
										stroke="#e0e0e0"
										strokeWidth="4"
										fill="none"
									/>
									<circle
										cx="32"
										cy="32"
										r="28"
										stroke="#3b82f6"
										strokeWidth="4"
										strokeDasharray="176"
										strokeDashoffset={176 - (176 * 120) / 100}
										fill="none"
										className="transition-all duration-500"
									/>
								</svg>
								<span className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
									Status <br />1 of 4
								</span>
							</div>
							<p className="text-xs">
								You have successfully completed 1 out of 4 installments for your
								dior hand bag purchase. Your next installment of $37.5 is due on
								02/09/24.
							</p>
						</div>
					</div>

					<div className="m-auto">
						<Button variant="primary">Make Payment</Button>
					</div>
				</div>

				<div className="max-w-xs p-6 bg-white/[.07] shadow-lg rounded-xl flex flex-col space-y-4 m-auto">
					<div className="flex justify-between gap-2">
						<div className="flex flex-row gap-2">
							{/* Product Image */}
							<img
								src={bag}
								alt="Product Image"
								className="w-8 h-8 object-cover rounded-full"
							/>
							{/* Product Name */}
							<div>
								<p className="text-xs">Product Name</p>
								<p className="text-gray-600 text-xs">Dior hand bag</p>
							</div>
						</div>

						<div>
							<p className="text-white text-md flex items-end">$150</p>
						</div>
					</div>

					{/* Payment Status */}
					<div className="flex flex-col items-center">
						<p className="text-gray-500 text-sm  mb-2">Payment</p>
						<div className="flex flex-row">
							<div className="relative">
								<svg className="w-16 h-16">
									<circle
										cx="32"
										cy="32"
										r="28"
										stroke="#e0e0e0"
										strokeWidth="4"
										fill="none"
									/>
									<circle
										cx="32"
										cy="32"
										r="28"
										stroke="#3b82f6"
										strokeWidth="4"
										strokeDasharray="176"
										strokeDashoffset={176 - (176 * 120) / 100}
										fill="none"
										className="transition-all duration-500"
									/>
								</svg>
								<span className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
									Status <br />1 of 4
								</span>
							</div>
							<p className="text-xs">
								You have successfully completed 1 out of 4 installments for your
								dior hand bag purchase. Your next installment of $37.5 is due on
								02/09/24.
							</p>
						</div>
					</div>

					<div className="m-auto">
						<Button variant="primary">Make Payment</Button>
					</div>
				</div>
			</div>

			<div className="bg-white/[.07] shadow-md rounded-md p-4 mt-8">
				<table className="table-auto w-full border-collapse">
					<thead>
						<tr>
							{headers.map((header) => (
								<th
									key={header}
									className="border px-4 py-2 bg-white/[.07] text-left text-xs text-gray-300"
								>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			</div>
		</div>
	);
}
