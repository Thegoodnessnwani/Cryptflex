import React from "react";
import { useAuth } from "@/hooks/use-contexts";
// import { signOutUser } from "@/firebase/auth";
import Banner from "@/components/global/banner";
import flash from "../../assets/flash.svg";
import bag from "../../assets/bag.svg";


export default function BuyerDashboard() {
	const { userFullData } = useAuth();
	const orders = [
		{
			product: "Product 1",
			price: "$200",
			status: "Active",
			orderDate: "2023-01-01",
			imageUrl: bag,
            duepayment: "1/7 payments made",
		},
		{
			product: "Product 2",
			price: "$200",
			status: "Overdue",
			orderDate: "2023-01-02",
			imageUrl: bag,
            duepayment: "1/7 payments made",
		},
	];

	// Define the table headers
	const headers = ["Products", "Price", "Status", "Date", "Next Payment Due"];

	// Define the table rows
	const rows = orders.map((order) => (
		<React.Fragment>
			<tr className={"bg-white/[.07]"}>
				<td className="border px-4 py-2 flex flex-row text-sm">
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
						order.status === "Active" ? "text-green-500" : "text-red-500"
					}`}
				>
					<span className=" bg-white/[.08] rounded-full p-1 text-sm">
						{order.status}
					</span>
				</td>
				<td className="border px-4 py-2 text-sm">{order.orderDate}</td>
				<td className="border px-4 py-2 text-sm">{order.duepayment}</td>
			</tr>
			<tr className="bg-black h-1">
				<td colSpan={5}></td>
			</tr>
		</React.Fragment>
	));
	return (
		<section>
			{/* Welcome {userFullData?.firstName + " " + userFullData?.lastName} to your{" "}
			{userFullData?.role} dashboard
			<button
				onClick={() => {
					signOutUser();
				}}
				className="bg-red-500 text-white p-2 rounded-md block"
			>
				Sign out
			</button> */}
			<div className="text-white p-8 flex flex-col">
				<div className="flex items-center justify-start">
					<img src={flash} alt="flashicon" className="w-8 h-8" />
					<h1 className="buyer-account-title">New In</h1>
				</div>
				<div className="">
					<Banner />
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
		</section>
	);
}
