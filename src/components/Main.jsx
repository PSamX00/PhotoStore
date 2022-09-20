import React, { useContext, useState } from "react";
import ImagesShow from "./ImagesShow";
import Modal from "./Modal";
import UploadForm from "./UploadForm";
import "../css/Main.css";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import { ContextState } from "../contexts/ContextState";
import LocalContext from "../contexts/LocalContext";
import { Disclaimer } from "./Disclaimer";
const Main = () => {
	const { disclaimer, setDisclaimer } = useContext(LocalContext);
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<div>
			{" "}
			<div className='gallaryBody'>
				{!disclaimer ? (
					<InfoIcon
						style={{ fontSize: "35px" }}
						className='panTool'
						onClick={() => {
							setDisclaimer(!disclaimer);
							console.log(disclaimer);
						}}
					/>
				) : (
					<CancelIcon
						style={{ fontSize: "35px" }}
						className='panTool'
						onClick={() => {
							setDisclaimer(!disclaimer);
							console.log(disclaimer);
						}}
					/>
				)}

				<UploadForm />
				<div className='imageDisplay'>
					<ImagesShow setSelectedImage={setSelectedImage} />
				</div>
				{disclaimer ? <Disclaimer /> : <></>}
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
			></p>
		</div>
	);
};
export default Main;
