import React from 'react';
import { Link } from 'react-router-dom';

import './login.css';

const Login = () => (
	<section className="login_section">
		<div className="login_header">
			<h3>Login</h3>
			<h6>
				<Link to="/create-account" className="text-primary">
					Don&apos;t Have Account?
				</Link>
			</h6>
		</div>
		<form className="login_form">
			<div className="input-group">
				<label htmlFor="name">Email</label>
				<input
					type="text"
					className="input-field"
					name="name"
					id="name"
					// onChange={handleChange('name')}
				/>
			</div>
			<div className="input-group">
				<label htmlFor="name">Password</label>
				<input
					type="password"
					className="input-field"
					name="password"
					id="password"
					// onChange={handleChange('name')}
				/>
			</div>
			<button
				className="small-button account-btn button-green w-100"
				type="submit"
			>
				Login
			</button>
		</form>
	</section>
);

export default Login;
