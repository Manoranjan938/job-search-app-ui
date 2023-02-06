import React from 'react';
import Category from '../../components/Category/Category';
import Hero from '../../components/Hero/Hero';
import HomeFeaturedJob from '../../components/FeaturedJob/HomeFeaturedJob';
// import HomeNews from '../../components/HomeNews/HomeNews';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import JobAnalytics from '../../components/JobAnalytics/JobAnalytics';
import OurServices from '../../components/Services/OurServices';
import Search from '../../components/Search/Search';
// import Testimonial from '../../components/Testimonials/Testimonial';
import UserType from '../../components/UserType/UserType';

const Home = () => (
	<>
		<Hero />
		<Search />
		<Category />
		<JobAnalytics />
		<HomeFeaturedJob />
		<OurServices />
		<HowItWorks />
		{/* <HomeNews />
		<Testimonial /> */}
		<UserType />
	</>
);

export default Home;
