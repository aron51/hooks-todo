import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import useInputValue from './hooks/InputHook';
import useTodo from './hooks/TodoHook';
import { Spacing } from 'react-elemental';

function App() {
	const { inputValue, changeInput, clearInput, isEnterPressed } = useInputValue();
	const { todos, addTodo, checkTodo } = useTodo();

	const clearInputAndAddTodo = () => {
		clearInput();
		addTodo(inputValue);
	};

	const keyPressed = (e) => {
		if (isEnterPressed(e)) {
			clearInputAndAddTodo();
		}
	};

	return (
		<React.Fragment>
			<Spacing bottom>
				<TodoInput
					value={inputValue}
					onChange={changeInput}
					onKeyPress={keyPressed}
					onButtonClick={clearInputAndAddTodo}
				/>
			</Spacing>
			<TodoList todos={todos} checkTodoItem={checkTodo} />
		</React.Fragment>
	);
}

export default App;
