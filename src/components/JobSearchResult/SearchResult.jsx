import React from 'react';
import Filters from '../Filters/Filters';
import JobLists from '../JobsList/JobLists';

import './SearchResult.css'

const SearchResult = () => (
	<section className="search_result_section section container">
		<div className="filters_section">
      <Filters />
    </div>
    <div className="job_list_section">
      <JobLists />
    </div>
	</section>
);

export default SearchResult;
