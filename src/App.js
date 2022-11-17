import "./App.css";
import ContainerA from "./component/component-A/containerA";
import ContainerUser from "./component/componentUser/containerUser";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<h1>Inicio</h1>
							<Link to="/contactos" id="open">
								<h2>Contactos</h2>
							</Link>
							<Link to="/usuarios" id="coder">
								<h2>Usuarios</h2>
							</Link>
						</div>
					}
				/>
				<Route path="/contactos" element={<ContainerA />} />
				<Route path="/usuarios" element={<ContainerUser />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
