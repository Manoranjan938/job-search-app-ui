import React from 'react';
import { BiRupee } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';

import './JobCard.css';

import { Link } from 'react-router-dom';
import image from '../../assets/images/amazon.png';

const JobCard = () => (
	<section className="job_card">
		<Link to="/job-details">
			<div className="jobs_company">
				<div className="job_company_content">
					<h3 className="company_title">Full Stack Developer</h3>
					<h5 className="job_title">Some company</h5>
				</div>
				<div className="job_company_logo">
					<img src={image} alt="" />
				</div>
			</div>
			<div className="job_descriptions">
				<div className="job_requirement">
					<span className="exp">
						<IoBriefcaseOutline />3 - 4 yrs
					</span>
					<span className="salary">
						<BiRupee />
						300000
					</span>
					<span className="location">
						<SlLocationPin />
						Pune
					</span>
				</div>
				<div className="desc">
					<span>
						<CgNotes />
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
						at?
					</span>
				</div>
				<div className="job_skills">
					<div className="skill_chip">
						<span>Figma</span>
					</div>
					<div className="skill_chip">
						<span>Photoshop</span>
					</div>
					<div className="skill_chip">
						<span>UI/UX</span>
					</div>
					<div className="skill_chip">
						<span>UI/UX</span>
					</div>
					<div className="skill_chip">
						<span>3+</span>
					</div>
				</div>
				<div className="job_extras">
					<span className="upload_time">1 Days ago</span>
					<span className="save_job">
						<BsBookmark />
						Save
					</span>
				</div>
			</div>
		</Link>
	</section>
);

export default JobCard;
