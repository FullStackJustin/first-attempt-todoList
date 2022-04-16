import React, {useState, useEffect, useRef } from "react";

//create your first component
 const Home = () => {
	const Home = () => {
		const [todos, setTodos] = useState([
			{ text: "Do homework.", isEdit: false },
		]);
		const inputRefs = useRef(null);
		const [textValue, setTextValue] = useState("");
		const add = () => {
			console.log("click");
			let newArray = [...todos];
			newArray.push({ text: inputRefs.current.value, isEdit: false });
			console.log(inputRefs.current.value);
			console.log(newArray);
			setTodos(newArray);
		};
		const handleInput = (event) => {
			setTextValue(event.target.value);
			console.log(event.target.value);
		};
		useEffect(() => {}, [inputRefs]);
		return (
			<div>
				<div>
					<input
						ref={inputRefs}
						// onChange={(event) => {
						//  setTextValue(event.target.value);
						// }}
					/>
					<button type="button" onClick={add}>
						Add
					</button>
				</div>
				{todos.map((todo, index) => {
					return (
						<div key={index}>
							{todo.text}
							<div>
								<button type="button" onClick={""}>
									Edit
								</button>
								<button type="button" onClick={""}>
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
		);
	};
// 	const [toDos, setToDos] = useState([
// 		{ text: "Things to do", editted: false },
// 	]);
	
// 	const inputRef = useRef(null);
// 	const [textValue, setTextValue] = useState("");
// 	const add = () => {
// 		let newList = [...toDos];
// 		newList.push({ text: inputRef.current.value, eddited: false });
// 		setToDos(newList);
// 	};
// 	const handleInput = (event) => {
// 		setTextValue(event.target.value);
// 		console.log(event.target.value);
// 	};
// 	useEffect(() => {}, [inputRef]);
// 	return (
// 		<div>
// 			<div>
// 				<input ref={inputRef}/>
// 				<button type="button" onClick={add}>
// 					Add to list
// 				</button>
// 			</div>
// 			{toDos.map((toDos, index) => {
// 				return (
// 					<div key={index}>
// 						{toDos.text}
// 						<div>
// 							<button type="button" onClick={""}>
// 								Edit
// 							</button>
// 							<button type="button" onClick={""}>
// 								Delete
// 							</button>
// 						</div>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

export default Home;
