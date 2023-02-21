import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => (
	<section className="footer section">
		<div className="footer_container container grid">
			<div className="footer_logo">
				<h3>JobFinder</h3>
			</div>
			<div className="footer_links">
				<div className="links">
					<Link to="/">About Us</Link>
				</div>
				<div className="links">
					<Link to="/">Careers</Link>
				</div>
			</div>
			<div className="footer_links">
				<div className="links">
					<Link to="/">Help Center</Link>
				</div>
				<div className="links">
					<Link to="/">Privacy Policy</Link>
				</div>
				<div className="links">
					<Link to="/">Terms & Conditions</Link>
				</div>
				<div className="links">
					<Link to="/">Trust & safety</Link>
				</div>
			</div>
			<div className="footer_socials">
				<h5>Connect with us</h5>
			</div>
		</div>
	</section>
);

export default Footer;
