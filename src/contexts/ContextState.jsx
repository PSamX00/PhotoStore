import React, { useState } from "react";
import LocalContext from "./LocalContext";

export const ContextState = ({ children }) => {
	const [fileStore, setFileStore] = useState(null);
	const [error, setError] = useState(null);
	const [disclaimer, setDisclaimer] = useState(false);

	return (
		<LocalContext.Provider
			value={{
				fileStore,
				setFileStore,
				error,
				setError,
				disclaimer,
				setDisclaimer,
			}}
		>
			{children}
		</LocalContext.Provider>
	);
};
