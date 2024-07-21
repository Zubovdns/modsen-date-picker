import { formatDate } from '../formatDate';

describe('formatDate', () => {
	test('форматирует дату 1 января 2023 года в строку "01/01/2023"', () => {
		const date = new Date(2023, 0, 1);
		const result = formatDate(date);
		expect(result).toBe('01/01/2023');
	});

	test('форматирует дату 31 декабря 2023 года в строку "31/12/2023"', () => {
		const date = new Date(2023, 11, 31);
		const result = formatDate(date);
		expect(result).toBe('31/12/2023');
	});

	test('форматирует дату 10 ноября 2023 года в строку "10/11/2023"', () => {
		const date = new Date(2023, 10, 10);
		const result = formatDate(date);
		expect(result).toBe('10/11/2023');
	});

	test('форматирует дату 5 мая 2023 года в строку "05/05/2023"', () => {
		const date = new Date(2023, 4, 5);
		const result = formatDate(date);
		expect(result).toBe('05/05/2023');
	});

	test('работает с датой 29 февраля 2024 года (високосный год)', () => {
		const date = new Date(2024, 1, 29);
		const result = formatDate(date);
		expect(result).toBe('29/02/2024');
	});
});
