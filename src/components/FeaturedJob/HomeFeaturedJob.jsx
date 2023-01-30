import React from 'react';

import { BiRupee } from 'react-icons/bi';
import image from '../../assets/images/amazon.png'

import './HomeFeaturedJob.css';

const HomeFeaturedJob = () => (
	<section className="featured_job section">
		<h2 className="section_title">Featured Jobs</h2>
		<div className="featured_job_container container">
			<div className="featured_job_cards grid">
				<div className="featured_job_card">
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
					<p className="job_title">Product Designer</p>
					<p className="job_salary">
						<BiRupee /> 20000 - <BiRupee /> 30000
					</p>
					<div className="company_info">
						<div className="company_img">
							<img src={image} alt="" />
						</div>
						<div className="company_desc">
							<p className="company_name">Some Company</p>
							<p className="company_loc">Bangalore, KA</p>
						</div>
					</div>
				</div>
				<div className="featured_job_card">
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
					<p className="job_title">Product Designer</p>
					<p className="job_salary">
						<BiRupee /> 20000 - <BiRupee /> 30000
					</p>
					<div className="company_info">
						<div className="company_img">
							<img src={image} alt="" />
						</div>
						<div className="company_desc">
							<p className="company_name">Some Company</p>
							<p className="company_loc">Bangalore, KA</p>
						</div>
					</div>
				</div>
				<div className="featured_job_card">
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
					<p className="job_title">Product Designer</p>
					<p className="job_salary">
						<BiRupee /> 20000 - <BiRupee /> 30000
					</p>
					<div className="company_info">
						<div className="company_img">
							<img src={image} alt="" />
						</div>
						<div className="company_desc">
							<p className="company_name">Some Company</p>
							<p className="company_loc">Bangalore, KA</p>
						</div>
					</div>
				</div>
				<div className="featured_job_card">
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
					<p className="job_title">Product Designer</p>
					<p className="job_salary">
						<BiRupee /> 20000 - <BiRupee /> 30000
					</p>
					<div className="company_info">
						<div className="company_img">
							<img src={image} alt="" />
						</div>
						<div className="company_desc">
							<p className="company_name">Some Company</p>
							<p className="company_loc">Bangalore, KA</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default HomeFeaturedJob;
