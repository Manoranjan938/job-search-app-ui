import React from 'react';
import PropTypes from 'prop-types';

import './ChooseUserType.css';

const ChooseUserType = ({ currentPage, setCurrentPage }) => {
	const moveNextPage = () => {
		setCurrentPage(currentPage + 1);
	};
	return (
		<>
			<section className="signup_section">
				<div className="signup_option_card">
					<input type="radio" name="option" id="" />
					<div className="option_content">
						<i className="fas fa-user-graduate" />
						<h4>I am a Job seeker</h4>
					</div>
				</div>
				<div className="signup_option_card">
					<input type="radio" name="option" id="" />
					<div className="option_content">
						<i className="fas fa-user-tie" />
						<h4>I am a Employer</h4>
					</div>
				</div>
			</section>
			<button
				className="next-btn small-button button-green container"
				type="button"
				onClick={moveNextPage}
			>
				Next
			</button>
		</>
	);
};

ChooseUserType.propTypes = {
	currentPage: PropTypes.number.isRequired,
	setCurrentPage: PropTypes.func.isRequired,
};

export default ChooseUserType;
