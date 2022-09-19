import React, { useState, useEffect } from "react";
import {
	projectFireStore,
	projectStorage,
	timestamp,
} from "../firebase/config";

export const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);
	useEffect(() => {
		//taking references
		const storageRef = projectStorage.ref(file.name);

		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage =
					(snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = timestamp();
				projectFireStore.collection("images").add({
					url: url,
					createdAt: createdAt,
				});
				setUrl(url);
			}
		);
	}, [file]);
	return { progress, url, error };
};
