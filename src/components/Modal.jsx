import React, { useContext } from "react";
import LocalContext from "../contexts/LocalContext";
import "../css/Modal.css";
const Modal = ({ selectedImage, setSelectedImage }) => {
	const handleClose = (e) => {
		if (e.target.classList.contains("modalImage"))
			setSelectedImage(null);
	};

	return (
		<>
			<div className='modalImage' onClick={handleClose}>
				<img src={selectedImage} />
			</div>
		</>
	);
};
export default Modal;
