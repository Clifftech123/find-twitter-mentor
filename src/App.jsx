import Nav from "./Components/NavBar/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Homepage";
import FindMentor from "./Pages/FindMentor/FindMentor";
import CommunityPage from "./Pages/Communities/CommunityPage";
import TechStackPage from "./Pages/TechStack/TechStackPage";
import Footer from "./Components/Footer/Footer";

const App = () => {
	return (
		<>
			<div className="font-Poppins  dark:bg-Dark_bg_color" >
				{/* MAIN NAVBAR ON THE PAGE */}
				<Nav />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/fineMentor" element={<FindMentor />} />
					<Route exact path="/communities" element={<CommunityPage />} />
					<Route exact path="/techStack" element={<TechStackPage />} />
				</Routes>
				{/* FOOTER */}
				
					<Footer />
				
			</div>
		</>
	);
};

export default App;
