import "./App.css";

import { ContextState } from "./contexts/ContextState";

import Main from "./components/Main";

function App() {
	return (
		<ContextState>
			<Main />
		</ContextState>
	);
}

export default App;
