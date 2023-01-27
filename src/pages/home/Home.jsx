import React from 'react';
import Category from '../../components/Category/Category';
import Hero from '../../components/Hero/Hero';
import HomeFeaturedJob from '../../components/FeaturedJob/HomeFeaturedJob';
import JobAnalytics from '../../components/JobAnalytics/JobAnalytics';
import Search from '../../components/Search/Search';

const Home = () => (
	<>
		<Hero />
		<Search />
		<Category />
		<JobAnalytics />
		<HomeFeaturedJob />
	</>
);

export default Home;
