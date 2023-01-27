import React from 'react';

import { HiOutlineBriefcase } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';

import './Search.css';

const Search = () => (
	<section className="search__section">
		<div className="search__wrapper">
			<div className="type__wrapper">
				<HiOutlineBriefcase />
				<input
					type="text"
					className="search_input_field"
					placeholder="Job Type"
				/>
			</div>
			<div className="type__wrapper">
				<IoLocationOutline />
				<input
					type="text"
					className="search_input_field"
					placeholder="Location"
				/>
			</div>
			<div className="search__btn">
				<button type="button" className="small-button button-green">
					Search
				</button>
			</div>
		</div>
	</section>
);

export default Search;
