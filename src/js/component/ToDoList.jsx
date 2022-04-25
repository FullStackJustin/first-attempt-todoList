import React, { useState, useEffect } from "react";
import Todo from "./ToDo.jsx";

const TodoList = ({ todos, setTodos }) => {
	const APIURL = "https://assets.breatheco.de/apis/fake/todos/user/stavman";
	const getSampleTask = () => {
		fetch(APIURL)
			.then((response) => response.json())
			.then((response) => console.log(response));
	};
	useEffect(() => {
		getSampleTask();
	}, []);

	return (
		<ul>
			<li id="list">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						setTodos={setTodos}
						todos={todos}
						todo={todo}
						text={todo.text}
					/>
				))}
			</li>
		</ul>
	);
};

export default TodoList;
