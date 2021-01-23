import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Signup from "./Components/Signup";
function App() {
	return (
		<div>
			<Router>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<Link to={"/"} className="navbar-brand">
						My App
					</Link>

					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={"/home"} className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/details"} className="nav-link">
								Details
							</Link>
						</li>
					</div>

					<div className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to={"/login"} className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/signup"} className="nav-link">
								Sign Up
							</Link>
						</li>
					</div>
				</nav>
				<Switch>
					<Route exact path={["/", "/home"]} component={Home} />
					<Route exact path="/details" component={Details} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
