import React, { useState } from "react";
import ImagesShow from "./ImagesShow";
import Modal from "./Modal";
import UploadForm from "./UploadForm";
import "../css/Main.css";
const Main = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	return (
		<div>
			{" "}
			<div className='gallaryBody'>
				<UploadForm />
				<div className='imageDisplay'>
					<ImagesShow setSelectedImage={setSelectedImage} />
				</div>
			</div>
			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
			<p
				style={{
					position: "fixed",
					bottom: "0px",
					color: "blue",
				}}
			>
				by PSam
			</p>
		</div>
	);
};
export default Main;
