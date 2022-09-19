import { useEffect, useState } from "react";
import { projectFireStore, projectStorage } from "../firebase/config";

export const useFirestore = (coll) => {
	const [imgs, setImgs] = useState([]);

	useEffect(() => {
		const unsub = projectFireStore
			.collection(coll)
			.orderBy("createdAt", "desc")
			.onSnapshot((snap) => {
				let docs = [];
				console.log(snap.forEach);
				console.log(snap);

				snap.forEach((items) => {
					docs.push({
						...items.data(),
						id: items.id,
					});
				});

				setImgs(docs);
			});

		return () => {
			unsub(); //unsubscribe when imagegrid will unmount
		};
	}, [coll]);

	return { imgs };
};
