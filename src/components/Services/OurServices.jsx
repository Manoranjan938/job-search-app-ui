import React from 'react';

import './OurServices.css';
import image from '../../assets/images/amazon.png';

const OurServices = () => (
	<section className="services section">
		<h2 className="section_title">Our Services</h2>
		<div className="service__container container grid">
			<div className="service__card">
				<div className="service__img">
					<img src={image} alt="" />
				</div>
				<div className="service__content">
					<div className="service__title">Job Finder</div>
					<div className="service__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
						doloremque eius nam dolores illo?
					</div>
				</div>
			</div>
			<div className="service__card">
				<div className="service__img">
					<img src={image} alt="" />
				</div>
				<div className="service__content">
					<div className="service__title">Candidate Finder</div>
					<div className="service__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id?
					</div>
				</div>
			</div>
			<div className="service__card">
				<div className="service__img">
					<img src={image} alt="" />
				</div>
				<div className="service__content">
					<div className="service__title">Resume Builder</div>
					<div className="service__description">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</div>
				</div>
			</div>
			<div className="service__card">
				<div className="service__img">
					<img src={image} alt="" />
				</div>
				<div className="service__content">
					<div className="service__title">Learnings</div>
					<div className="service__description">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
						debitis quaerat amet.
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default OurServices;
