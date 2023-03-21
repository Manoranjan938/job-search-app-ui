import React from 'react'
import CompanyType from '../CompanyTypeCard/CompanyType';

import './TopCompanies.css'

const TopCompanies = () => (
	<section className="section">
		<div className="container">
			<h2 className='section_title'>Top Companies</h2>
      <div className="top_companies">
        <CompanyType />
        <CompanyType />
        <CompanyType />
      </div>
		</div>
	</section>
);


export default TopCompanies