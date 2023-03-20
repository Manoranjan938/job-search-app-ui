import PropTypes from 'prop-types';
import React from 'react';

const Skeleton = ({ classes }) => {
	const classNames = `skeleton ${classes} animate-pulse`;
	return <div className={classNames} />;
};

Skeleton.propTypes = {
	classes: PropTypes.string.isRequired,
};

export default Skeleton;
