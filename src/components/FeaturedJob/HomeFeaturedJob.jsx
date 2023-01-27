import React from 'react';

const HomeFeaturedJob = () => (
	<section className="featured_job section">
		<h2 className="section_title">Featured Jobs</h2>
        <div className="featured_job_container container">
            <div className="featured_job_cards grid">
                <div className="featured_job_card">
                    <span className="job_title">Product Designer</span>
                    <span className="job_salary">20000 - 30000</span>
                    <div className="company_info">
                        <div className="company_img">
                            <img src="" alt="" />
                        </div>
                        <div className="company_desc">
                            <span className="company_name">Some Company</span>
                            <span className="company_loc">Bangalore, KA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
);

export default HomeFeaturedJob;
