import { parseDate } from '../parseDate';

describe('parseDate', () => {
	it('возвращает корректную дату для правильного ввода', () => {
		const result = parseDate('21/07/2023');
		expect(result).toEqual(new Date(2023, 6, 21));
	});

	it('возвращает null для некорректного ввода: неверный день', () => {
		const result = parseDate('32/07/2023');
		expect(result).toBeNull();
	});

	it('возвращает null для некорректного ввода: неверный месяц', () => {
		const result = parseDate('21/13/2023');
		expect(result).toBeNull();
	});

	it('возвращает null для некорректного ввода: неверный год', () => {
		const result = parseDate('21/07/abcd');
		expect(result).toBeNull();
	});

	it('возвращает null для некорректного ввода: пустая строка', () => {
		const result = parseDate('');
		expect(result).toBeNull();
	});

	it('возвращает null для некорректного ввода: частичный ввод', () => {
		const result = parseDate('21/07');
		expect(result).toBeNull();
	});

	it('возвращает null для некорректного ввода: неправильный формат', () => {
		const result = parseDate('2023-07-21');
		expect(result).toBeNull();
	});

	it('возвращает корректную дату для високосного года', () => {
		const result = parseDate('29/02/2000');
		expect(result).toEqual(new Date(2000, 1, 29));
	});

	it('возвращает null для неверной даты в невисокосном году', () => {
		const result = parseDate('29/02/2001');
		expect(result).toBeNull();
	});

	it('возвращает корректную дату для 1 января', () => {
		const result = parseDate('01/01/2022');
		expect(result).toEqual(new Date(2022, 0, 1));
	});

	it('возвращает null для некорректного ввода: некорректный день в месяце', () => {
		const result = parseDate('31/04/2023');
		expect(result).toBeNull();
	});
});
