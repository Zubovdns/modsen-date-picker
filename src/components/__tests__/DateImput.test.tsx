import { fireEvent, render, screen } from '@testing-library/react';
import { formatDate } from '@utils/formatDate';
import { parseDate } from '@utils/parseDate';

import DateInput from '../DateInput';

jest.mock('@utils/formatDate', () => ({
	formatDate: jest.fn(),
}));

jest.mock('@utils/isValidDate', () => ({
	isValidDate: jest.fn(),
}));

jest.mock('@utils/parseDate', () => ({
	parseDate: jest.fn(),
}));

const mockFormatDate = formatDate as jest.MockedFunction<typeof formatDate>;
const mockParseDate = parseDate as jest.MockedFunction<typeof parseDate>;
const mockIsValidDate = jest.requireMock('@utils/isValidDate')
	.isValidDate as jest.Mock;

describe('DateInput', () => {
	const setup = (
		value: Date | null = null,
		onChange = jest.fn(),
		onClear = jest.fn()
	) => {
		render(
			<DateInput
				value={value}
				onChange={onChange}
				label='Test Date Input'
				onClear={onClear}
			/>
		);
	};

	it('renders with correct initial value', () => {
		mockFormatDate.mockReturnValue('01/01/2020');
		setup(new Date(2020, 0, 1));
		expect(screen.getByDisplayValue('01/01/2020')).toBeInTheDocument();
	});

	it('calls onChange with correct date on blur', () => {
		const handleChange = jest.fn();
		mockParseDate.mockReturnValue(new Date(2020, 0, 1));
		mockIsValidDate.mockReturnValue(true);
		setup(null, handleChange); // Передаем null как значение по умолчанию
		const input = screen.getByPlaceholderText('Chose Date');
		fireEvent.change(input, { target: { value: '01/01/2020' } });
		fireEvent.blur(input);
		expect(handleChange).toHaveBeenCalledWith(new Date(2020, 0, 1));
	});

	it('calls onClear when clear button is clicked', () => {
		const handleClear = jest.fn();
		setup(null, jest.fn(), handleClear);
		const clearButton = screen.getByRole('button');
		fireEvent.click(clearButton);
		expect(handleClear).toHaveBeenCalled();
		expect(screen.getByPlaceholderText('Chose Date')).toHaveValue('');
	});

	it('formats input value correctly on change', () => {
		setup();
		const input = screen.getByPlaceholderText('Chose Date');
		fireEvent.change(input, { target: { value: '01012020' } });
		expect(input).toHaveValue('01/01/2020');
	});

	it('reverts to initial value on blur if date is invalid', () => {
		const handleChange = jest.fn();
		mockParseDate.mockReturnValue(null);
		setup(new Date(2020, 0, 1), handleChange);
		const input = screen.getByPlaceholderText('Chose Date');
		fireEvent.change(input, { target: { value: 'invalid date' } });
		fireEvent.blur(input);
		expect(input).toHaveValue('01/01/2020');
		expect(handleChange).not.toHaveBeenCalled();
	});

	it('handles Enter key correctly', () => {
		const handleChange = jest.fn();
		mockParseDate.mockReturnValue(new Date(2020, 0, 1));
		mockIsValidDate.mockReturnValue(true);
		setup(null, handleChange);
		const input = screen.getByPlaceholderText('Chose Date');
		fireEvent.change(input, { target: { value: '01/01/2020' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
		expect(handleChange).toHaveBeenCalledWith(new Date(2020, 0, 1));
	});
});
