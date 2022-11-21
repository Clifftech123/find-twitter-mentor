import Nav from "./Components/NavBar/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Homepage";
import FindMentor from "./Pages/FindMentor/FindMentor";
import CommunityPage from "./Pages/Communities/CommunityPage";
import TechStackPage from "./Pages/TechStack/TechStackPage";

const App = () => {
	return (
		<>
			<div className="font-Poppins  ">
				<Nav />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/fineMentor" element={<FindMentor />} />
					<Route exact path="/communities" element={<CommunityPage />} />
					<Route exact path="/techStack" element={<TechStackPage />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
