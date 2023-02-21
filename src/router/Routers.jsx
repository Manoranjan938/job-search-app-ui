import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import ErrorPage from '../pages/error/ErrorPage';
import Home from '../pages/home/Home';
import JobDetails from '../pages/JobDetails/JobDetails';
import JobResult from '../pages/SearchResult/JobResult';
import Root from './Root';

const Routers = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
				<Route index element={<Home />} />
				<Route path="/search-jobs" element={<JobResult />} />
				<Route path="/job-details" element={<JobDetails />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default Routers;
