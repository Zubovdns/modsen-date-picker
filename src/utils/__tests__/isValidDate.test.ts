import { isValidDate } from '../isValidDate';

describe('isValidDate', () => {
	it('возвращает true для даты в 1970 году', () => {
		const result = isValidDate(new Date(1970, 0, 1));
		expect(result).toBe(true);
	});

	it('возвращает true для даты в 3000 году', () => {
		const result = isValidDate(new Date(3000, 0, 1));
		expect(result).toBe(true);
	});

	it('возвращает true для даты между 1970 и 3000 годами', () => {
		const result = isValidDate(new Date(2023, 6, 21));
		expect(result).toBe(true);
	});

	it('возвращает false для даты до 1970 года', () => {
		const result = isValidDate(new Date(1969, 11, 31));
		expect(result).toBe(false);
	});

	it('возвращает false для даты после 3000 года', () => {
		const result = isValidDate(new Date(3001, 0, 1));
		expect(result).toBe(false);
	});

	it('возвращает false для некорректной даты', () => {
		const result = isValidDate(new Date('invalid date'));
		expect(result).toBe(false);
	});

	it('возвращает true для даты в високосный год', () => {
		const result = isValidDate(new Date(2000, 1, 29));
		expect(result).toBe(true);
	});

	it('возвращает true для текущей даты', () => {
		const result = isValidDate(new Date());
		expect(result).toBe(true);
	});

	it('возвращает true для даты в конце 2999 года', () => {
		const result = isValidDate(new Date(2999, 11, 31));
		expect(result).toBe(true);
	});
});
