import React from 'react';
import {
    createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Home from '../pages/home/Home';
import Root from './Root';

const Routers = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default Routers;
