import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
	//works
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		console.log("before submit", todos);
		const clonedTodos = [
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		];
		// clonedTodos.push({
		//   text: inputText,
		//   completed: false,
		//   id: Math.random() * 1000
		// });
		console.log("clonedTodos after push", clonedTodos);
		setTodos(clonedTodos);
		console.log("after submit update", todos);
		setInputText("");
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<form onSubmit={submitTodoHandler}>
				<input
					value={inputText}
					onChange={inputTextHandler}
					type="text"
				/>
				<button type="submit">ADD</button>
			</form>
		</div>
	);
};

export default Form;
