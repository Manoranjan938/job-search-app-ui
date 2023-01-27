import { Link } from 'react-router-dom';
import React from 'react';

import './Hero.css';
import image from '../../assets/images/hero-img.png';

const Hero = () => (
	<section className="hero section">
		<div className="hero__container container grid">
			<div className="hero__content">
				<h3>
					Find your
					<br />
					<span className="section_title">Best job</span>
				</h3>
				<p>
					Let&apos;s match your profile with top tech and non-tech companies.
				</p>
				<p>
					Get <span className="percent__discount">20%</span> flat discount for{' '}
					<span className="new__member_text">New Member</span>
				</p>
				<div className="button-groups">
					<Link to="/" className="small-button button-orange">
						Get Started Now
					</Link>
					<Link to="/" className="small-button-outlined-gray">
						Learn more
					</Link>
				</div>
			</div>
			<div className="hero__image">
				<img src={image} alt="" />
			</div>
		</div>
	</section>
);

export default Hero;
