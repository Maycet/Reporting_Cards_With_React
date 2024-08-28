import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ children, onClose }) => {
	return (
		<div className={classes.backdrop} onClick={onClose}>
			<div className={classes.modal}>
				{children}
			</div>
		</div>
	);
};

export default Modal;