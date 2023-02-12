import React from 'react'

import './UserType.css'

const UserType = () => (
	<section className="user_type section">
		<h2 className="section_title">Users</h2>
		<div className="users">
			<div className="employer">
				<h4>I&apos;m an</h4>
				<h2>Employer</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam
					quibusdam neque? Excepturi, eaque! Ipsa?
				</p>
				<button type='button' className='small-button button-orange'>Find Candidate</button>
			</div>
			<div className="candidate">
				<h4>I&apos;m a</h4>
				<h2>Candiate</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam
					quibusdam neque? Excepturi, eaque! Ipsa?
				</p>
				<button type='button' className='small-button button-green'>Upload Resume</button>
			</div>
		</div>
	</section>
);

export default UserType