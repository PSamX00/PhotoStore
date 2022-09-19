import React from "react";
import { useFirestore } from "../hooks/useFirestore";
import "../css/Images.css";

const ImagesShow = ({ setSelectedImage }) => {
	const { imgs } = useFirestore("images");

	return (
		<div className='imageDiv'>
			{imgs.map((items) => {
				return (
					<img
						src={items.url}
						onClick={() => setSelectedImage(items.url)}
					/>
				);
			})}
		</div>
	);
};
export default ImagesShow;
