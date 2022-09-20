import React, { useContext } from "react";
import LocalContext from "../contexts/LocalContext";
import "../css/Modal.css";
export const Disclaimer = () => {
	const { disclaimer, setDisclaimer } = useContext(LocalContext);
	return (
		<div>
			<div className='modalDisclaimer'>
				<h5>DISCLAIMER</h5>
				<p>
					This is a small effort to create a PhotoStore
					where you can store your photos anonymously for
					display.
				</p>{" "}
				<p>
					As it is only the beginning, it is not very
					optimised.{" "}
				</p>
				<p>More updates are on the way. We're working on it.</p>
				<b>NB: </b>{" "}
				<span>
					Please upload photos or images with caution as
					they will be visible to everyone. This is a
					personal request. Thank you very much. Have a
					wonderful day.
				</span>
			</div>
		</div>
	);
};
