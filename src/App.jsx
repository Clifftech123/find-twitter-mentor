import Nav from "./Components/NavBar/Nav";
import { Routes, Route } from "react-router-dom";
import HomPage from "./Pages/Home/Hompage";

const App = () => {
	return (
		<>
			<div className="font-Poppins  dark:bg-slate-900 duration-100">
				<Nav />
				<Routes>
					<Route exact path="/" element={<HomPage />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
