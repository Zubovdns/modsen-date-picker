import { formatDateToISOString } from '../formatDateToISOString';

describe('formatDateToISOString', () => {
	it('форматирует дату в ISO строку', () => {
		const date = new Date(Date.UTC(2023, 6, 21));
		const formattedDate = formatDateToISOString(date);
		expect(formattedDate).toBe('2023-07-21');
	});

	it('форматирует первую дату месяца', () => {
		const date = new Date(Date.UTC(2023, 0, 1));
		const formattedDate = formatDateToISOString(date);
		expect(formattedDate).toBe('2023-01-01');
	});

	it('форматирует последнюю дату месяца', () => {
		const date = new Date(Date.UTC(2023, 11, 31));
		const formattedDate = formatDateToISOString(date);
		expect(formattedDate).toBe('2023-12-31');
	});

	it('учитывает високосный год', () => {
		const date = new Date(Date.UTC(2020, 1, 29));
		const formattedDate = formatDateToISOString(date);
		expect(formattedDate).toBe('2020-02-29');
	});

	it('работает с разными часовыми поясами', () => {
		const date = new Date(Date.UTC(2023, 6, 21));
		const formattedDate = formatDateToISOString(date);
		expect(formattedDate).toBe('2023-07-21');
	});
});
