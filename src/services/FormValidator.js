import { useState } from 'react';

const FormValidator = () => {
	const [values, setValues] = useState({});
	const [error, setError] = useState({});

	const isStringContainNumber = (str) => {
		const reg = /^[A-Za-z]+$/;
		if (!reg.test(str)) {
			return 'It should not contain number or special character or space';
		}
		return false;
	};

	const validateNumber = (str) => {
		const reg = /^[0-9]*$/;
		if (!reg.test(str)) {
			return 'It should contain numbers';
		}
		return false;
	};

	const validateLength = (str) => {
		if (str.length < 3) {
			return 'Length must be greater than 3';
		}
		return false;
	};

	const validateEmail = (str) => {
		const reg =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
		if (!str.match(reg)) {
			return 'Invalid email';
		}
		return false;
	};

	const validate = (event, name, value) => {
		switch (name) {
			case 'name':
				if (!value) {
					setError({ ...error, name: 'Please fill out this field' });
				} else if (validateLength(value)) {
					setError({ ...error, name: validateLength(value) });
				} else if (isStringContainNumber(value)) {
					setError({ ...error, name: isStringContainNumber(value) });
				} else {
					setError({
						...error,
						name: null,
					});
				}
				break;

			case 'email':
				if (validateEmail(value)) {
					setError({ ...error, email: validateEmail(value) });
				} else {
					setError({
						...error,
						email: null,
					});
				}
				break;

			case 'phone':
				if (validateNumber(value)) {
					setError({ ...error, phone: validateNumber(value) });
				} else {
					setError({
						...error,
						phone: null,
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
