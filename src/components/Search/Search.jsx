import React, { useState } from 'react';

import { HiOutlineBriefcase } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import './Search.css';

const Search = () => {
	const [param, setParam] = useState({
		title: '',
		location: '',
	});
	const navigate = useNavigate();
	const handleSearch = () => {
		navigate(`/search-jobs?key=${param.title}&loc=${param.location}`);
	};
	const handleChange = (prop) => (event) =>{
		setParam({...param, [prop]: event.target.value})
	}
	return (
		<section className="search__section">
			<div className="search__wrapper">
				<div className="type__wrapper">
					<HiOutlineBriefcase />
					<input
						type="text"
						className="search_input_field"
						placeholder="Job Type"
						value={param.title}
						onChange={handleChange("title")}
					/>
				</div>
				<div className="type__wrapper">
					<IoLocationOutline />
					<input
						type="text"
						className="search_input_field"
						placeholder="Location"
						value={param.location}
						onChange={handleChange("location")}
					/>
				</div>
				<div className="search__btn">
					<button
						type="button"
						className="small-button button-green"
						onClick={handleSearch}
					>
						Search
					</button>
				</div>
			</div>
		</section>
	);
};

export default Search;
