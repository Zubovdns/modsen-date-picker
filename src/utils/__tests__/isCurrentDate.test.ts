import { isCurrentDate } from '../isCurrentDate';

describe('isCurrentDate', () => {
	it('возвращает false, если currentDate равен null', () => {
		const date = new Date(2023, 6, 21);
		const result = isCurrentDate(date, null);
		expect(result).toBe(false);
	});

	it('возвращает false, если currentDate равен undefined', () => {
		const date = new Date(2023, 6, 21);
		const result = isCurrentDate(date, undefined);
		expect(result).toBe(false);
	});

	it('возвращает true, если даты совпадают', () => {
		const date = new Date(2023, 6, 21);
		const currentDate = new Date(2023, 6, 21);
		const result = isCurrentDate(date, currentDate);
		expect(result).toBe(true);
	});

	it('возвращает false, если годы не совпадают', () => {
		const date = new Date(2023, 6, 21);
		const currentDate = new Date(2022, 6, 21);
		const result = isCurrentDate(date, currentDate);
		expect(result).toBe(false);
	});

	it('возвращает false, если месяцы не совпадают', () => {
		const date = new Date(2023, 6, 21);
		const currentDate = new Date(2023, 5, 21);
		const result = isCurrentDate(date, currentDate);
		expect(result).toBe(false);
	});

	it('возвращает false, если дни не совпадают', () => {
		const date = new Date(2023, 6, 21);
		const currentDate = new Date(2023, 6, 20);
		const result = isCurrentDate(date, currentDate);
		expect(result).toBe(false);
	});

	it('возвращает true, если даты совпадают, включая временную зону', () => {
		const date = new Date('2023-07-21T00:00:00Z');
		const currentDate = new Date('2023-07-21T00:00:00Z');
		const result = isCurrentDate(date, currentDate);
		expect(result).toBe(true);
	});
});
