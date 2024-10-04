import React from "react";
import flash from "../../assets/flash.svg";

export default function BuyerOrderHistory() {
	// Define the data for the table
	const orders = [
		{
			id: 1,
			product: "Product 1",
			orderDate: "2023-01-01",
			status: "Completed",
			totalamount: "$200",
		},
		{
			id: 2,
			product: "Product 2",
			orderDate: "2023-01-02",
			status: "Pending",
			totalamount: "$200",
		},
		{
			id: 3,
			product: "Product 3",
			orderDate: "2023-01-03",
			status: "Completed",
			totalamount: "$200",
		},
		{
			id: 4,
			product: "Product 4",
			orderDate: "2023-01-04",
			status: "Completed",
			totalamount: "$200",
		},
		{
			id: 5,
			product: "Product 5",
			orderDate: "2023-01-05",
			status: "Completed",
			totalamount: "$200",
		},
	];

	// Define the table headers
	const headers = [
		"Order ID",
		"Product",
		"Order Date",
		"Status",
		"Total amount",
	];

	// Define the table rows
	const rows = orders.map((order) => (
		<React.Fragment key={order.id}>
			<tr className={"bg-white/[.07]"}>
				<td className="border px-4 py-2 text-sm">{order.id}</td>
				<td className="border px-4 py-2 text-sm">{order.product}</td>
				<td className="border px-4 py-2 text-sm">{order.orderDate}</td>
				<td
					className={`border px-4 py-2 ${
						order.status === "Completed" ? "text-green-500" : "text-yellow-500"
					}`}
				>
					<span className=" bg-white/[.08] rounded-full p-1 text-sm">
						{order.status}
					</span>
				</td>
				<td className="border px-4 py-2">{order.totalamount}</td>
			</tr>
			<tr className="bg-black h-1">
				<td colSpan={5}></td>
			</tr>
		</React.Fragment>
	));

	// Render the table
	return (
		<div>
			<div className="flex items-center justify-start m-auto">
				<img src={flash} alt="flashicon" className="w-8 h-8" />
				<h1 className="buyer-account-title">Recent Transactions</h1>
			</div>
			<div className="bg-white/[.07] shadow-md rounded-md p-4">
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
