import { useState } from 'react';

const FormValidator = () => {
	const [values, setValues] = useState({});
	const [error, setError] = useState({});

	const validate = (event, name, value) => {
		switch (name) {
			case 'name':
				if (value.length < 3) {
					setError({
						...error,
						name: 'Some message',
					});
				} else {
					setError({
						...error,
						name: null,
					});
				}
				break;

			default:
				break;
		}
	};

	const handleChange = (prop) => (event) => {
		event.preventDefault();
		const val = event.target.value;
		validate(event, prop, val);
		setValues({ ...values, [prop]: val });
	};

	return { values, error, handleChange };
};

export default FormValidator;
