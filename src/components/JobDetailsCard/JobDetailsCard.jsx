import React from 'react';
import { BiRupee } from 'react-icons/bi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';

import './JobDetailsCard.css';

const JobDetailsCard = () => (
	<section className="job_details">
		<div className="job_details_card">
			<h3 className="company_title">Full Stack Deve</h3>
			<p>lorem ipsum pvt ltd</p>
			<p>Small Description</p>
			<div className="exp job_requirement">
				<IoBriefcaseOutline />
				<span>3 - 4 yrs</span>
			</div>
			<div className="salary job_requirement">
				<BiRupee />
				<span>300000</span>
			</div>
			<div className="location job_requirement">
				<SlLocationPin />
				<span>Pune</span>
			</div>
            <div className="devider" />
		</div>
        <div className="job_description_card">
            <h4>Job Description</h4>
        </div>
	</section>
);

export default JobDetailsCard;
