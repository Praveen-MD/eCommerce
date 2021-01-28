import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Products from "./Pages/Products";
import Product from "./Components/Product";
function App() {
	return (
		<div col-xs-12>
			<Router>
				<Navbar />
				<Menu />
				<Route exact path={["/"]} component={Home} />
				<Route path="/signup" component={Signup} />
				<Route path="/:category" component={Products} />
				<Route path="/:category/:productId" component={Product} />
			</Router>
		</div>
	);
}

export default App;
/*
	<li className="nav-item">
							<Link to={"/details"} className="nav-link">
								Details
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/products/category/jewelery"} className="nav-link">
								Jewellery
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/products/category/electronics"} className="nav-link">
								Electronics
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/products/category/men clothing"} className="nav-link">
								Men clothing
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to={"/products/category/women clothing"}
								className="nav-link"
							>
								Women clothing
							</Link>
						</li>

							<Route path="/products/category/jewelery" component={Jewellerey} />
				<Route path="/products/category/electronics" component={Electronics} />
				<Switch></Switch>
						*/
