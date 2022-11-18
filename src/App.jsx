import Nav from "./Components/NavBar/Nav";
import { Routes, Route } from "react-router-dom";
import HomPage from "./Pages/Home/HomPage";
import FindMentor from "./Pages/FindMentor/FindMentor";

const App = () => {
	return (
		<>
			<div className="font-Poppins  ">
				<Nav />
				<Routes>
					<Route exact path="/" element={<HomPage />} />
					<Route exact path="/fineMentor" element={<FindMentor />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
