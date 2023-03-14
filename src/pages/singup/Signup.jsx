import React, { useState } from 'react';
import ChooseUserType from '../../components/SelectSignupUser/ChooseUserType';
import SignUp from '../../components/Signup/SignUp';

const Signup = () => {
	const [page, setPage] = useState(0);
	// const formTitles = ['Choose type', 'Select SOme', 'Select some 2'];

	const showSignupPage = () => {
		if (page === 0) {
			return <ChooseUserType currentPage={page} setCurrentPage={setPage} />;
		}
		if (page === 1) {
			return <SignUp />;
		}
		return null;
	};
	return showSignupPage();
};

export default Signup;
