import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import './CompanyType.css';

const CompanyType = () => (
	<div className="company_type_card">
		<h4 className="type_title">MNCs</h4>
		<span className="company_counts">
			1000 Companies <IoIosArrowForward />
		</span>
	</div>
);

export default CompanyType;
