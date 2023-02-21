import React from 'react';
import JobDetailsCard from '../../components/JobDetailsCard/JobDetailsCard';

import './JobDetails.css';

const JobDetails = () => (
	<div className="job_details_page container">
		<div className="job_details_section">
            <JobDetailsCard />
        </div>
		<div className="job_suggestion_section">
            <h2>Job Suggestion</h2>
        </div>
	</div>
);

export default JobDetails;
