import { useState } from "react";
import Button from "../global/button-primary";
import upload from "../../assets/upload.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";

// AvatarUpload component
const AvatarUpload = () => {
	const [selectedFile, setSelectedFile] = useState(null);

	// const handleFileChange = (e) => {
	// 	setSelectedFile(e.target.files[0]);
	// };

	return (
		<div className="bg-white/[.07] shadow-md rounded-md p-8">
			<h2 className="text-lg font-medium mb-4">Change Avatar</h2>

			{/* Avatar Upload Area */}
			<div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
				{selectedFile ? (
					<img
						src={URL.createObjectURL(selectedFile)}
						alt="Uploaded Avatar"
						className="w-24 h-24 rounded-full object-cover"
					/>
				) : (
					<>
						<img src={upload} alt="upload icon" />
						<p className="text-gray-300 mt-2">
							<span className="underline cursor-pointer text-blue-500">
								Click here
							</span>{" "}
							to upload your file or drag.
						</p>
					</>
				)}

				<input
					type="file"
					accept=".svg, .jpg, .jpeg, .png"
					className="hidden"
					id="avatar-upload"
					// onChange={handleFileChange}
				/>
				<label htmlFor="avatar-upload" className="text-xs text-gray-500 mt-2">
					Supported Format: SVG, JPG, PNG (10mb each)
				</label>
			</div>

			{/* Rest of the form (First name, Last name, etc.) */}
			<div className="mt-6 grid grid-cols-2 gap-4">
				<div>
					<label htmlFor="first-name" className="block text-sm font-medium">
						First name
					</label>
					<input
						type="text"
						id="first-name"
						className="mt-1 p-2 border rounded-md w-full bg-white/[.07]"
					/>
				</div>
				<div>
					<label htmlFor="last-name" className="block text-sm font-medium">
						Last name
					</label>
					<input
						type="text"
						id="last-name"
						className="mt-1 p-2 border rounded-md w-full bg-white/[.07]"
					/>
				</div>
			</div>
			<div>
				<label htmlFor="email" className="block text-sm font-medium">
					Email Address
				</label>
				<input
					type="email"
					id="email"
					className="mt-1 p-2 border rounded-md w-full bg-white/[.07]"
				/>
			</div>
			<div>
				<label htmlFor="phone-number" className="block text-sm font-medium">
					Phone Number
				</label>
				<input
					type="tel"
					id="phone-number"
					className="mt-1 p-2 border rounded-md w-full bg-white/[.07]"
				/>
			</div>
			<div>
				<label htmlFor="password" className="block text-sm font-medium">
					Password
				</label>
				<input
					type="password"
					id="password"
					className="mt-1 p-2 border rounded-md w-full bg-white/[.07]"
				/>
			</div>
		</div>
	);
};

// PersonalInformation component
function PersonalInformation() {
	return (
		<div className="flex flex-col lg:flex-row gap-8">
			<div>
				<h2>Personal Info</h2>
				<p>You can change your personal information settings here.</p>
			</div>
			<AvatarUpload /> {/* Include AvatarUpload component */}
		</div>
	);
}

// Account component
function Account() {
	const [walletDeduction, setWalletDeduction] = useState(false);
	const [twoFactorAuth, setTwoFactorAuth] = useState(false);
	const [ipTracking, setIpTracking] = useState(false);

    return (
			<div className="flex flex-col lg:flex-row gap-8">
				<div>
					<h2>Account</h2>
					<p>You can change your account settings here.</p>
				</div>
				<div className="max-w-md p-6 bg-white/[.07] shadow-lg rounded-xl">
					{/* Setting Items */}
					<div className="space-y-6">
						{/* Wallet Deduction */}
						<div className="flex items-center justify-between">
							<span className="flex flex-col">
								<p className="text-gray-400 font-semibold">Wallet Deduction</p>
								<p>
									Your solfare wallet is currently enabled for automatic
									installment payments.
								</p>
							</span>
							<label className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									checked={walletDeduction}
									onChange={() => setWalletDeduction(!walletDeduction)}
									className="sr-only peer"
								/>
								<div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
								<div className="dot absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5 peer-checked:translate-x-full transition-transform"></div>
							</label>
						</div>

						{/* Two-Factor Authentication */}
						<div className="flex items-center justify-between">
							<p className="text-gray-400 font-semibold">
								Two-Factor Authentication
							</p>
							<label className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									checked={twoFactorAuth}
									onChange={() => setTwoFactorAuth(!twoFactorAuth)}
									className="sr-only peer"
								/>
								<div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
								<div className="dot absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5 peer-checked:translate-x-full transition-transform"></div>
							</label>
						</div>

						{/* IP Address Tracking */}
						<div className="flex items-center justify-between">
							<p className="text-gray-400 font-semibold">IP Address Tracking</p>
							<label className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									checked={ipTracking}
									onChange={() => setIpTracking(!ipTracking)}
									className="sr-only peer"
								/>
								<div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
								<div className="dot absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5 peer-checked:translate-x-full transition-transform"></div>
							</label>
						</div>
					</div>

					{/* Data Export Button */}
					<div className="flex items-center justify-between mt-4">
						<p className="text-gray-400 font-semibold">Data Export</p>
						<Button variant="primary">Download Data</Button>
					</div>
				</div>
			</div>
		);
};


// Notification component
function Notification() {
	const [selectedNotification, setSelectedNotification] = useState("");

	// const handleNotificationChange = (event) => {
	// 	setSelectedNotification(event.target.value);
	// };

	return (
		<div className="bg-white/[.07] shadow-md rounded-md p-8  lg:w-[40%]">
			<div className="mb-4">
				<p className="mb-4">Order Notification</p>
				<div className="ml-2 flex flex-row items-center gap-2">
					<img src={icon1} alt="" />
					Your order has been placed successfully!
				</div>
				<div className="ml-2 flex flex-row items-center gap-2">
					<img src={icon2} alt="" />
					Your order has been shipped successfully!
				</div>
				<div className="ml-2 flex flex-row items-center gap-2">
					<img src={icon3} alt="" />
					Your order has been delivered successfully!
				</div>
			</div>
			<div className="mb-4">
				<p className="mb-4">Product Notification</p>
				<div className="ml-2 flex flex-row items-center gap-2">
					<img src={icon4} alt="" />
					Discover our latest product
				</div>
			</div>
			<div className="mb-4">
				<p className="mb-4">Account Notification</p>
				<div className="ml-2 flex flex-row items-center gap-2">
					<img src={icon5} alt="" />
					Your next installment payment is due
				</div>
			</div>
		</div>
	);
}

// Notifications component
function Notifications() {
	return (
		<div>
			<Notification /> {/* Include Notification component */}
		</div>
	);
}

// Main component
function BuyerSettings() {
	const [activeTab, setActiveTab] = useState("personal-information");

	return (
		<div>
			<nav>
				<ul className="flex flex-row gap-4">
					<li>
						<a
							href="#"
							onClick={() => setActiveTab("personal-information")}
							className={`border-b-2 ${
								activeTab === "personal-information"
									? "border-blue-500"
									: "border-white"
							}`}
						>
							Personal Information
						</a>
					</li>
					<li>
						<a
							href="#"
							onClick={() => setActiveTab("account")}
							className={`border-b-2 ${
								activeTab === "account" ? "border-blue-500" : "border-white"
							}`}
						>
							Account
						</a>
					</li>
					<li>
						<a
							href="#"
							onClick={() => setActiveTab("notifications")}
							className={`border-b-2 ${
								activeTab === "notifications"
									? "border-blue-500"
									: "border-white"
							}`}
						>
							Notifications
						</a>
					</li>
				</ul>
			</nav>

			<div className="mt-4">
				{activeTab === "personal-information" && <PersonalInformation />}
				{activeTab === "account" && <Account />}
				{activeTab === "notifications" && <Notifications />}
			</div>
		</div>
	);
}

export default BuyerSettings;
