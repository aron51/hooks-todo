import React from 'react';
import { Label, TextField, Button, Spacing } from 'react-elemental';

export default function TodoInput(props) {
	return (
		<React.Fragment>
			<Spacing bottom>
				<Label label="Add a new Todo item" />
				<TextField
					placeholder="New Todo"
					value={props.value}
					onChange={props.onChange}
					onKeyPress={props.onKeyPress}
				/>
			</Spacing>
			<Button size="alpha" text="Add Todo" onClick={props.onButtonClick} />
		</React.Fragment>
	);
}
