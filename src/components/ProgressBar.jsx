import React, { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";
import "../css/Progress.css";

const ProgressBar = ({ fileStore, setFileStore }) => {
	const { url, progress } = useStorage(fileStore);

	useEffect(() => {
		if (url) setFileStore(null);
	}, [url]);

	return <div className='progressBar' style={{ width: progress }}></div>;
};
export default ProgressBar;
