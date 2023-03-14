import React from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css';

const SignUp = () => (
	<section className="signup_section">
		<div className="signup_info_card">
			<h3>On registering, you can</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</div>
		<div className="sign_up_card">
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
				<input type="text" className="input-field" name="name" id="name" />
			</div>
			<div className="input-group">
				<label htmlFor="email">Email</label>
				<input type="text" className="input-field" id="email" />
			</div>
			<div className="input-group">
				<label htmlFor="phone">Phone</label>
				<input type="text" className="input-field" id="phone" />
			</div>
			<div className="input-group">
				<label htmlFor="password">Password</label>
				<input type="text" className="input-field" id="password" />
			</div>
			<button className="small-button button-green w-100" type="button">
				Create an Account
			</button>
		</div>
	</section>
);

export default SignUp;
