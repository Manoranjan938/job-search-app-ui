import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { CgOrganisation } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { GrUserNew } from 'react-icons/gr';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdLogin } from 'react-icons/md';

import './Header.css';

const Header = () => {
	const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  }

	return (
		<header className="header">
			<nav className="nav container">
				<Link to="/" className="nav__logo">
					JobFinder
				</Link>
				<div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__lists">
						<li className="nav__item">
							<Link to="/jobs" className="nav__link">
								<IoBriefcaseOutline className="nav__icons" /> Jobs
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/companies" className="nav__link">
								<CgOrganisation className="nav__icons" /> Companies
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/login" className="nav__link small-button-outlined-green">
								<MdLogin className="nav__icons" /> Login
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/create-account" className="nav__link small-button button-green">
								<GrUserNew className="nav__icons" /> Register
							</Link>
						</li>
					</ul>
					<FaTimes className="nav__close" onClick={handleToggle} />
				</div>
				<div className="nav__toggle" onClick={handleToggle} onMouseDown={handleToggle}>
					<AiOutlineMenuUnfold />
				</div>
			</nav>
		</header>
	);
};

export default Header;
