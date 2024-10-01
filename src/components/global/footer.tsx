import { Link } from "react-router-dom";
import Logo from "../svg-components/logo";
import twitter from "../../assets/twitter.svg";
import linkedlin from "../../assets/linkedlin.svg";

export default function Footer() {
	return (
		<div>
			<div className="w-full h-px bg-[#D9D9D94D] "></div>
			<div className="flex flex-row justify-between p-8">
				<div className="text-xl font-bold">
					<Link to="/" className="text-[#1E40AF] flex items-center space-x-2">
						<Logo />
						<span>Cryptflex</span>
					</Link>
				</div>
				<div className="hidden items-center gap-8 xl:flex">
					<Link to="" className="text-md font-medium text-white">
						Terms Of Service
					</Link>
					<Link to="" className="text-md font-medium text-white">
						Privacy Policy
					</Link>
					<Link to="" className="text-md font-medium text-white">
						Contact
					</Link>
				</div>
				<div className="flex flex-row gap-4">
					<img src={twitter} alt="twitter" className="w-10 h-10" />
					<img src={linkedlin} alt="linkedlin" className="w-10 h-10" />
				</div>
			</div>
		</div>
	);
}
