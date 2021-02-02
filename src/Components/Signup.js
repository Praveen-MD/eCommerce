import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};
class Signup extends Component {
	render() {
		return (
			<div>
				<img
					src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
					alt="profile-img"
				/>
				<br />
				<br />
				<Form>
					<Input type="text" name="username" placeholder="Username" />
					<br />
					<Input type="text" name="email" placeholder="E-mail" />
					<br />
					<Input type="password" name="password" placeholder="Password" />
					<br />
					<button>Sign Up</button>
				</Form>
			</div>
		);
	}
}

export default Signup;
