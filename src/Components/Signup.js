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
			<div className="col-md-12">
				<div className="card card-container">
					<img
						src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
						alt="profile-img"
						className="profile-img-card"
					/>

					<Form
						className="form-inline"
						onSubmit={this.handleRegister}
						ref={(c) => {
							this.form = c;
						}}
					>
						<div className="form-group">
							<Input
								style={{ padding: "10px" }}
								type="text"
								className="form-control"
								name="username"
								placeholder="Username"
								onChange=""
								validations={[required]}
							/>
						</div>
						<br /> <br />
						<div className="form-group">
							<Input
								type="text"
								className="form-control input"
								name="email"
								placeholder="E-mail"
								onChange=""
								validations={[required]}
							/>
						</div>
						<br /> <br />
						<div className="form-group">
							<Input
								type="password"
								className="form-control "
								name="password"
								placeholder="Password"
								validations={[required]}
							/>
						</div>
						<br /> <br />
						<div className="form-group">
							<button className="btn btn-primary btn-block">Sign Up</button>
						</div>
						<CheckButton
							style={{ display: "none" }}
							ref={(c) => {
								this.checkBtn = c;
							}}
						/>
					</Form>
				</div>
			</div>
		);
	}
}

export default Signup;
