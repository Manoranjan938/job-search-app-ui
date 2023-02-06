import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import image1 from '../../assets/images/apply.png';
import image2 from '../../assets/images/build-profile.png';
import image3 from '../../assets/images/hired.png';
import image4 from '../../assets/images/sign-up.png';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './HowItWorks.css';

const HowItWorks = () => (
	<section className="how_it_works section">
		<h2 className='section_title'>How It Works</h2>
		<div className="work_it_cards container grid">
			<div className="work_it_card">
				<h3>Step - 1</h3>
				<div className="work_it_img">
					<LazyLoadImage
						src={image4}
						alt=""
						height={150}
						className="img-lazy"
						effect="blur"
					/>
				</div>
				<h2 className="work_it_title">Create your account</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
					voluptatem quisquam eveniet officiis dolore minus.
				</p>
			</div>
			<div className="work_it_card">
				<h3>Step - 2</h3>
				<div className="work_it_img">
					<LazyLoadImage
						src={image2}
						alt=""
						height={150}
						className="img-lazy"
						effect="blur"
					/>
				</div>
				<h2 className="work_it_title">Build Your Profile</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
					voluptatem quisquam eveniet officiis dolore minus.
				</p>
			</div>
			<div className="work_it_card">
				<h3>Step - 3</h3>
				<div className="work_it_img">
					<LazyLoadImage
						src={image1}
						alt=""
						height={150}
						className="img-lazy"
						effect="blur"
					/>
				</div>
				<h2 className="work_it_title">Apply For Job</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
					voluptatem quisquam eveniet officiis dolore minus.
				</p>
			</div>
			<div className="work_it_card">
				<h3>Step - 4</h3>
				<div className="work_it_img">
					<LazyLoadImage
						src={image3}
						alt=""
						height={150}
						className="img-lazy"
						effect="blur"
					/>
				</div>
				<h2 className="work_it_title">Get Hired</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
					voluptatem quisquam eveniet officiis dolore minus.
				</p>
			</div>
		</div>
	</section>
);

export default HowItWorks;
