import React from 'react';

import './JobAnalytics.css'

const JobAnalytics = () => (
	<section className="analytics section container">
		<div className="analytics__container container grid">
			<div className="analytic__content">
				<div className="analytics__counter"><span>1100+</span></div>
				<div className="analytics__description"><span>Jobs Available</span></div>
			</div>
			<div className="analytic__content">
				<div className="analytics__counter"><span>580+</span></div>
				<div className="analytics__description"><span>Members</span></div>
			</div>
			<div className="analytic__content">
				<div className="analytics__counter"><span>870+</span></div>
				<div className="analytics__description"><span>Resumes</span></div>
			</div>
			<div className="analytic__content">
				<div className="analytics__counter"><span>80+</span></div>
				<div className="analytics__description"><span>Companies</span></div>
			</div>
		</div>
	</section>
);

export default JobAnalytics;
