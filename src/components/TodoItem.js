import React from 'react';
import { Spacing, Checkbox } from 'react-elemental';

export default function TodoItem(props) {
	return (
		<Spacing size="small" bottom>
			<Checkbox
				label={props.todo.name}
				onChange={() => props.checkTodo(props.todo)}
				checked={props.todo.checked}
			/>
		</Spacing>
	);
}
