import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Home from "./components/Login";

import About from "./components/Phome";

import ContactUs from "./components/Visual";
import Health from "./components/Health";

function App() {
	return (
		<>
			
			<Router>
				<Routes>
					
					<Route
						exact
						path="/"
						element={<Home />}
					/>

					
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/health"
						element={<Health />}
					/>

					
					<Route
						path="/contactus"
						element={<ContactUs />}
					/>

					
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
