import React from 'react';
import Filters from '../Filters/Filters';
import JobLists from '../JobsList/JobLists';

import './SearchResult.css'

const SearchResult = () => (
	<section className="search_result_section container">
		<div className="filters_section">
			<Filters />
		</div>
		<div className="job_list_section">
			<JobLists />
		</div>
		<div className="featured_job_companies">
			<h4>Some Companies</h4>
		</div>
	</section>
);

export default SearchResult;
