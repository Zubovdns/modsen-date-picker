import { useEffect, useRef, useState } from 'react';
import CalendarIcon from '@assets/icons/Field/Calendar.icon';
import Clear from '@assets/icons/Field/Clear.icon';
import { formatDate } from '@utils/formatDate';
import { isValidDate } from '@utils/isValidDate';
import { parseDate } from '@utils/parseDate';

import { Container, IconButton, IconWrapper, Input } from './styled';
import { DateInputProps } from './types';

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
	const [inputValue, setInputValue] = useState(value ? formatDate(value) : '');
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (value) {
			setInputValue(formatDate(value));
		}
	}, [value]);

	const handleInputBlur = () => {
		const newDate = parseDate(inputValue);
		if (newDate && isValidDate(newDate)) {
			newDate.setHours(0, 0, 0, 0);
			onChange(newDate);
		} else {
			setInputValue(value ? formatDate(value) : '');
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let newValue = event.target.value.replace(/\D/g, '');
		if (newValue.length > 8) newValue = newValue.slice(0, 8);

		if (newValue.length > 2)
			newValue = `${newValue.slice(0, 2)}/${newValue.slice(2)}`;
		if (newValue.length > 5)
			newValue = `${newValue.slice(0, 5)}/${newValue.slice(5)}`;

		setInputValue(newValue);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleInputBlur();
			if (inputRef.current) {
				inputRef.current.blur();
			}
		}
	};

	const handleClear = () => {
		setInputValue('');
		onChange(null);
	};

	return (
		<Container>
			<IconWrapper>
				<CalendarIcon />
			</IconWrapper>
			<Input
				type='text'
				value={inputValue}
				onBlur={handleInputBlur}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				ref={inputRef}
				placeholder='Chose Date'
			/>
			<IconButton onClick={handleClear}>
				<Clear />
			</IconButton>
		</Container>
	);
};

export default DateInput;
