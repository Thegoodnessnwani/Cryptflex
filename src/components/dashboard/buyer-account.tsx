import frame from "../../assets/frame.svg";
import flash from "../../assets/flash.svg";

export default function BuyerInstallment() {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-start">
				<img src={flash} alt="flashicon" className="w-8 h-8" />
				<h1 className="buyer-account-title">My Profile</h1>
			</div>

			<img src={frame} alt="frame" className="my-4 w-full"/>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
				<div className="bg-white/[.07] p-8 rounded-lg">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div className="space-y-1">
							<h3 className="text-gray-700 font-semibold">First name</h3>
							<p className="text-gray-500">Kate</p>
						</div>

						<div className="space-y-1">
							<h3 className="text-gray-700 font-semibold">Last name</h3>
							<p className="text-gray-500">Shaw</p>
						</div>

						<div className="space-y-1">
							<h3 className="text-gray-700 font-semibold">Connected wallet</h3>
							<p className="text-gray-500">Solfare wallet(0X123445665FY)</p>
						</div>

						<div className="space-y-1">
							<h3 className="text-gray-700 font-semibold">Email</h3>
							<p className="text-gray-500">katekatty1@gmail.com</p>
						</div>

						<div className="space-y-1">
							<h3 className="text-gray-700 font-semibold">Phone number</h3>
							<p className="text-gray-500">080181091018</p>
						</div>

						<div className="space-y-1">
							<h3 className="text-gray-700 font-semibold">Address</h3>
							<p className="text-gray-500">Bosso, minna</p>
						</div>

						<div className="space-y-1">
							<h3 className="text-gray-700 font-semibold">Postal code</h3>
							<p className="text-gray-500">112233</p>
						</div>

						<div className="space-y-1">
							<h3 className="text-gray-700 font-semibold">Interest</h3>
							<p className="text-gray-500">Fashion, electronics</p>
						</div>
					</div>
				</div>

				<div className="bg-white/[.07] p-8 rounded-lg">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<h3 className="text-gray-700 font-semibold">Account balance</h3>
							<p className="text-gray-500">1000 USDC</p>
						</div>
						<div>
							<h3 className="text-gray-700 font-semibold">Total spending</h3>
							<p className="text-gray-500">$500</p>
						</div>
						<div>
							<h3 className="text-gray-700 font-semibold">Average order</h3>
							<p className="text-gray-500">$125</p>
						</div>
						<div>
							<h3 className="text-gray-700 font-semibold">Loyalty points</h3>
							<p className="text-gray-500">500 points</p>
						</div>
						<div>
							<h3 className="text-gray-700 font-semibold">Payment method</h3>
							<p className="text-gray-500">Solfare Wallert</p>
						</div>
						<div>
							<h3 className="text-gray-700 font-semibold">
								Email notification
							</h3>
							<p className="text-gray-500">Enabled</p>
						</div>
						<div>
							<h3 className="text-gray-700 font-semibold">
								Two-Factor authentication
							</h3>
							<p className="text-gray-500">Enabled</p>
						</div>
						<div>
							<h3 className="text-gray-700 font-semibold">Push notification</h3>
							<p className="text-gray-500">Disabled</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

