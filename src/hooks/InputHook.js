import { useState } from 'react';

export default function useInputValue(value = '') {
	const [ inputValue, setInputValue ] = useState(value);
	return {
		inputValue,
		changeInput: (e) => setInputValue(e.target.value),
		isEnterPressed: (e) => {
			if (e.which === 13 || e.keyCode === 13) {
				return true;
			}
			return false;
		},
		clearInput: () => setInputValue('')
	};
}
