import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import React from 'react';

import './Pagination.css';

const Pagination = () => (
	<section className="pagination">
		<button type="button" className="btn small-button-outlined-green">
			<IoIosArrowBack />
			<span>Previous</span>
		</button>
		<button type="button" className="small-button-outlined-green">
			1
		</button>
		<button type="button" className="small-button-outlined-green">
			2
		</button>
		<button type="button" className="small-button-outlined-green">
			3
		</button>
		<button type="button" className="small-button-outlined-green">
			4
		</button>
		<button type="button" className="small-button-outlined-green">
			5
		</button>
		<button type="button" className="small-button-outlined-green btn">
			<span>Next</span>
			<IoIosArrowForward />
		</button>
	</section>
);

export default Pagination;
