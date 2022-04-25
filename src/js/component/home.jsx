import React, { useState, useEffect, useRef } from "react";
import Form from "./form.jsx";
import ToDoList from "./ToDoList.jsx";
//create your first component
const Home = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div id="homeFormAndList">
			<Form
				id="formFunc"
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
			/>
			<ToDoList id="listFunc" todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default Home;
