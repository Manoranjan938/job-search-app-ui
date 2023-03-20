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
import Loader from '../components/Loader/Loader';
import Login from '../pages/login/login';
import Root from './Root';
import Signup from '../pages/singup/Signup';

const Routers = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
				<Route index element={<Home />} />
				<Route path="/search-jobs" element={<JobResult />} />
				<Route path="/job-details" element={<JobDetails />} />
				<Route path="/loader" element={<Loader />} />
				<Route path="/create-account" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default Routers;
