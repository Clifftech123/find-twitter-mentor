import Nav from "./Components/NavBar/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Homepage";
import CommunityPage from "./Pages/Communities/CommunityPage";
import TechStackPage from "./Pages/TechStack/TechStackPage";
import Footer from "./Components/Footer/Footer";
import Resources from "./Pages/Resources/Resources";

const App = () => {
	return (
		<>
			<div className="font-Poppins  dark:bg-Dark_bg_color">
				{/* NavBar component.The NavBar component isn't part of the routing because we want to show it on all  the pages  */}
				<Nav />
				{/* Routing for all the pages  */}
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/communities" element={<CommunityPage />} />
					<Route exact path="/techStack" element={<TechStackPage />} />
					<Route exact path="/resources" element={<Resources />} />
				</Routes>
				{/* FOOTER component.The footer component isn't part of the routing because we want to show it on all  the pages  */}

				<Footer />
			</div>
		</>
	);
};

export default App;
