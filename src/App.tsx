// import Button from "./components/button-primary";
// import FeatureContainer from "./components/feature-component";
// import TrustedUsers from "./components/trusted-users";
// import clockSVG from "./assets/clock.svg";
// import graphSVG from "./assets/graph.svg";
// import lockSVG from "./assets/lock.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/feature-component/navbar";
import Main from "./components/feature-component/main";
import Faq from "./components/feature-component/faq";

export default function App() {
    return (
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Main />
							</>
						}
					/>
					<Route
						path="/faq"
						element={
							<>
								<Faq />
							</>
						}
					/>
				</Routes>
			</Router>
		);
}
