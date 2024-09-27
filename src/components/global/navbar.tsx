import { Link } from "react-router-dom";
import Button from "../button-primary";
import Logo from "../svg-components/logo";

function navbar() {
    return (
        <nav className="flex justify-between m-auto bg-white w-[70%] rounded-[5rem] mt-16">
            <div className="flex justify-between p-4 mx-8 w-full ">
                <div className="text-xl font-bold ">
                    <Link
                        to="/"
                        className=" text-[#1E40AF] flex items-center space-x-2"
                    >
                        <Logo />
                        <span>Cryptflex</span>
                    </Link>
                </div>
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-gray-700">
                        Home
                    </Link>
                    <Link
                        to="/dashboard"
                        className="text-sm font-medium text-gray-700"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/faq"
                        className="text-sm font-medium text-gray-700"
                    >
                        FAQ
                    </Link>
                </div>
                <Button variant="primary">Get Started</Button>
            </div>
        </nav>
    );
}

export default navbar;
