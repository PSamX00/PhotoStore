import React, { useContext } from "react";
import LocalContext from "../contexts/LocalContext";
import ProgressBar from "./ProgressBar";
import "../css/uploadForm.css";
import AddIcon from "@mui/icons-material/Add";


const UploadForm = () => {
	const { fileStore, setFileStore, error, setError } =
		useContext(LocalContext);

	const onChangeHandler = (e) => {
		const types = [
			"image/png",
			"image/jpeg",
			"image/jpg",
			"image/jfif",
		];
		let imageUploaded = e.target.files[0];

		if (imageUploaded && types.includes(imageUploaded.type)) {
			setFileStore(imageUploaded);
			setError("");
		} else {
			setFileStore(null);
			setError("Please upload Image File");
		}
	};

	return (
		<>
			<p className='photoGallaryText'>
				<span className='photoText'>Photo</span>Store
				<p className='tagLine'>
					One stop to store all your photos
				</p>
			</p>
			<div className='formField'>
				<label for='file-upload' class='custom-file-upload'>
					<div
						className='uploadStyling
					'
					>
						<AddIcon style={{ fontSize: "30px" }} />
					</div>
					<p className='uploadText'>Add New Photos</p>
				</label>
				<input
					type='file'
					onChange={onChangeHandler}
					className='uploadImage'
					id='file-upload'
				/>

				{error && <div className='errorDiv'>{error}</div>}
				<div>{fileStore && fileStore.name} </div>

				<div>
					{fileStore && (
						<ProgressBar
							fileStore={fileStore}
							setFileStore={setFileStore}
						/>
					)}
				</div>
			</div>
		</>
	);
};
export default UploadForm;
