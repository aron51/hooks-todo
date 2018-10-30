import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
	const items = props.todos.map((item, index) => (
		<TodoItem key={`TodoItem.${index}`} todo={item} checkTodo={props.checkTodoItem} />
	));
	return items;
}
