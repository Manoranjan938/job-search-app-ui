import React, { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import './Filters.css';

const Filters = () => {
	const [activeAccordion, setActiveAccordion] = useState({
		work: true,
		dept: true,
		location: true,
		salary: true,
		companyType: true,
	});

	const handleActiveAccordion = (prop, status) => () => {
		setActiveAccordion({ ...activeAccordion, [prop]: !status });
	};
	return (
		<section className="filters_section">
			<div className="filter_header">
				<h4>All Filters</h4>
				<span>Applied</span>
			</div>
			<div className="devider" />
			<div className="filter_body">
				<div className="filter_accordion">
					<div
						className="accordion_title"
						onClick={handleActiveAccordion('work', activeAccordion.work)}
					>
						<h4>Work mode</h4>
						<div className="accord_icon">
							{activeAccordion.work ? <IoIosArrowUp /> : <IoIosArrowDown />}
						</div>
					</div>
					<div
						className={
							activeAccordion.work
								? 'accordion_content active_content'
								: 'accordion_content'
						}
					>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Work from office</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Hybrid</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Permanent Remote</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Temp. WFH</span>
						</div>
					</div>
				</div>
				<div className="devider" />
				<div className="filter_accordion">
					<div
						className="accordion_title"
						onClick={handleActiveAccordion('dept', activeAccordion.dept)}
					>
						<h4>Department</h4>
						<div className="accord_icon">
							{activeAccordion.dept ? <IoIosArrowUp /> : <IoIosArrowDown />}
						</div>
					</div>
					<div
						className={
							activeAccordion.dept
								? 'accordion_content active_content'
								: 'accordion_content'
						}
					>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Engineering</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>It & Info. Security</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Design & Architecture</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Others</span>
						</div>
					</div>
				</div>
				<div className="devider" />
				<div className="filter_accordion">
					<div
						className="accordion_title"
						onClick={handleActiveAccordion('location', activeAccordion.location)}
					>
						<h4>Location</h4>
						<div className="accord_icon">
							{activeAccordion.location ? <IoIosArrowUp /> : <IoIosArrowDown />}
						</div>
					</div>
					<div
						className={
							activeAccordion.location
								? 'accordion_content active_content'
								: 'accordion_content'
						}
					>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Bangalore/Bengaluru</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Delhi</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Hyderabad</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Pune</span>
						</div>
					</div>
				</div>
				<div className="devider" />
				<div className="filter_accordion">
					<div
						className="accordion_title"
						onClick={handleActiveAccordion('salary', activeAccordion.salary)}
					>
						<h4>Salary</h4>
						<div className="accord_icon">
							{activeAccordion.salary ? <IoIosArrowUp /> : <IoIosArrowDown />}
						</div>
					</div>
					<div
						className={
							activeAccordion.salary
								? 'accordion_content active_content'
								: 'accordion_content'
						}
					>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>0 - 3 Lakhs</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>3 - 6 Lakhs</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>6 - 10 Lakhs</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>10 - 15 Lakhs</span>
						</div>
					</div>
				</div>
				<div className="devider" />
				<div className="filter_accordion">
					<div
						className="accordion_title"
						onClick={handleActiveAccordion('companyType', activeAccordion.companyType)}
					>
						<h4>Company Type</h4>
						<div className="accord_icon">
							{activeAccordion.companyType ? <IoIosArrowUp /> : <IoIosArrowDown />}
						</div>
					</div>
					<div
						className={
							activeAccordion.companyType
								? 'accordion_content active_content'
								: 'accordion_content'
						}
					>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>MNC</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Corporate</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Indian MNC</span>
						</div>
						<div className="content_item">
							<input type="checkbox" name="" id="" />
							<span>Startup</span>
						</div>
					</div>
				</div>
				<div className="devider" />
			</div>
		</section>
	);
};

export default Filters;
