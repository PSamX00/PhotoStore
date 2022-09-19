import React, { useState } from "react";
import LocalContext from "./LocalContext";

export const ContextState = ({ children }) => {
	const [fileStore, setFileStore] = useState(null);
	const [error, setError] = useState(null);

	return (
		<LocalContext.Provider
			value={{ fileStore, setFileStore, error, setError }}
		>
			{children}
		</LocalContext.Provider>
	);
};
