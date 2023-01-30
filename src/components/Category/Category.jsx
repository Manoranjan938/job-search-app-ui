import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import {
	MdOutlineComputer,
	MdOutlineHomeWork,
	MdOutlineManageAccounts,
} from 'react-icons/md';
import { RiBankLine, RiHomeWifiLine } from 'react-icons/ri';
import { TbTie } from 'react-icons/tb';

import './Category.css';

const Category = () => {
	const truncate = (string, n) => string?.length > n ? `${string.substr(0, n - 1)} ...` : string;
	return (
		<section className="category__section section">
			<h3 className="section_title">Job Categories</h3>
			<div className="categoty__container container">
				<div className="category_cards">
					<div className="category__card">
						<div className="category__icon">
							<MdOutlineHomeWork />
						</div>
						<div className="category__name">
							<span>Remote</span>
						</div>
					</div>
					<div className="category__card">
						<div className="category__icon">
							<HiOutlineOfficeBuilding />
						</div>
						<div className="category__name">
							<span>MNC&apos;s</span>
						</div>
					</div>
					<div className="category__card">
						<div className="category__icon">
							<TbTie />
						</div>
						<div className="category__name">
							<span>Sales</span>
						</div>
					</div>
					<div className="category__card">
						<div className="category__icon">
							<RiHomeWifiLine />
						</div>
						<div className="category__name">
							<span>Temp WFH</span>
						</div>
					</div>
					<div className="category__card">
						<div className="category__icon">
							<MdOutlineComputer />
						</div>
						<div className="category__name">
							<span>{truncate("IT & Software", 11)}</span>
						</div>
					</div>
					<div className="category__card">
						<div className="category__icon">
							<MdOutlineManageAccounts />
						</div>
						<div className="category__name">
							<span>{truncate("Project Manager", 11)}</span>
						</div>
					</div>
					<div className="category__card">
						<div className="category__icon">
							<FiUsers />
						</div>
						<div className="category__name">
							<span>HR</span>
						</div>
					</div>
					<div className="category__card">
						<div className="category__icon">
							<FaGraduationCap />
						</div>
						<div className="category__name">
							<span>Fresher</span>
						</div>
					</div>
					<div className="category__card">
						<div className="category__icon">
							<RiBankLine />
						</div>
						<div className="category__name">
							<span>{truncate("Banking & Finance", 11)}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Category;
