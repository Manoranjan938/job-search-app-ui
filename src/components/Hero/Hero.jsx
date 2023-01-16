import React from 'react';

import './Hero.css';
import image from '../../assets/images/hero-img.png'

const Hero = () => (
	<section className="hero section">
		<div className="hero__container container grid">
			<div className="hero__content">
				<h1 className="section__title">Find your best job</h1>
			</div>
			<div className="hero__image">
				<img src={image} alt="" />
			</div>
		</div>
	</section>
);

export default Hero;
