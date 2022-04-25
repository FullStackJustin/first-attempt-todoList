import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = (e, todoId) => {
		//added todoId
		console.log(setTodos);
		console.log(typeof setTodos);
		setTodos((prevTodos) => prevTodos.filter((elem) => elem.id !== todoId));
	};
	return (
		<div id="todo">
			<div id="todoText">{todo.text}</div>
			<div id="todoBtnD">
				<button onClick={(e) => deleteHandler(e, todo.id)}>
					Delete
				</button>
			</div>
		</div>
	);
};
export default Todo;
