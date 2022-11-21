import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
	const inputRef = useRef();
	const containerRef = useRef();

	useEffect(() => {
		console.log(inputRef);
		console.log(containerRef);
		inputRef.current.focus();
	}, []);

	const loginAlert = () => {
		console.log(`환영합니다. ${inputRef.current.value}`);
		inputRef.current.focus();
	}

	return (
		<div className="App">
			<input type="text" ref={inputRef} placeholder="ID" />
			<button onClick={loginAlert}>Login</button>
			<div ref={containerRef} className="container"></div>
		</div>
	);
}

export default App;
