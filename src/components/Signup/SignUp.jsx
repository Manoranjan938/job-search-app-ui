import React from 'react';
import { Link } from 'react-router-dom';
import FormValidator from '../../services/FormValidator';

import './SignUp.css';

const SignUp = () => {
	const { values, error, handleChange } = FormValidator();
	const handleSubmit = (event) => {
		event.preventDefault();
		if (Object.keys(error).length === 0 && Object.keys(values).length !== 0) {
			// console.log(values);
			// console.log(error);
		} else {
			// console.log(values);
			// console.log(error);
		}
	};

	return (
		<section className="signup_section">
			<div className="signup_info_card">
				<h3>On registering, you can</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<form className="sign_up_card" onSubmit={handleSubmit}>
				<h5>Start for free</h5>
				<h3>Sign up to jobfinder</h3>
				<h6>
					Already a member?&nbsp;
					<Link to="/login" className="text-primary">
						Login
					</Link>
				</h6>
				<div className="input-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="input-field"
						name="name"
						id="name"
						onChange={handleChange('name')}
					/>
				</div>
				{error.name ? <p className="error_message">{error.name}</p> : null}
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						className="input-field"
						id="email"
						onChange={handleChange('email')}
					/>
				</div>
				{error.email ? <p className="error_message">{error.email}</p> : null}
				<div className="input-group">
					<label htmlFor="phone">Phone</label>
					<input
						type="text"
						className="input-field"
						id="phone"
						onChange={handleChange('phone')}
					/>
				</div>
				{error.phone ? <p className="error_message">{error.phone}</p> : null}
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input type="text" className="input-field" id="password" />
				</div>
				<button className="small-button account-btn button-green w-100" type="submit">
					Create an Account
				</button>
			</form>
		</section>
	);
};

export default SignUp;
