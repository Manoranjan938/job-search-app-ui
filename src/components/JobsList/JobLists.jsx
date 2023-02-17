import React from 'react';

import './JobList.css'

const JobLists = () => (
	<section className="job_lists">
		<div className="job_list_headers">
			<div className="job_counts">
				<span className='count'>1 - 20 of 1000</span>
				<span className='job_name'>react jobs</span>
			</div>
			<div className="job_sortings">
				<span>Sort by:</span>
			</div>
		</div>
		{/* <div className="job_list_cards"></div> */}
	</section>
);

export default JobLists;
