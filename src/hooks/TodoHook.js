import { useState } from 'react';

export default function useTodo(init = []) {
	const [ todos, setTodos ] = useState(init);
	return {
		todos,
		addTodo: (todo) => {
			if (todo !== '') {
				setTodos([ ...todos, { name: todo, checked: false } ]);
			}
		},
		checkTodo: (todo) => {
			setTodos(
				todos.map((item) => {
					if (todo === item) item.checked = !todo.checked;
					return item;
				})
			);
		}
	};
}
