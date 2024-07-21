import { isInRange } from '../isInRange';

describe('isInRange', () => {
	it('возвращает false, если startDate и endDate равны null и hoveredDate равен null', () => {
		const date = new Date(2023, 6, 21);
		const result = isInRange(date, null, null, null);
		expect(result).toBe(false);
	});

	it('возвращает true, если date находится между startDate и endDate', () => {
		const date = new Date(2023, 6, 21);
		const startDate = new Date(2023, 6, 20);
		const endDate = new Date(2023, 6, 22);
		const result = isInRange(date, startDate, endDate, null);
		expect(result).toBe(true);
	});

	it('возвращает false, если date находится вне диапазона startDate и endDate', () => {
		const date = new Date(2023, 6, 19);
		const startDate = new Date(2023, 6, 20);
		const endDate = new Date(2023, 6, 22);
		const result = isInRange(date, startDate, endDate, null);
		expect(result).toBe(false);
	});

	it('возвращает true, если date находится между startDate и hoveredDate', () => {
		const date = new Date(2023, 6, 21);
		const startDate = new Date(2023, 6, 20);
		const hoveredDate = new Date(2023, 6, 22);
		const result = isInRange(date, startDate, null, hoveredDate);
		expect(result).toBe(true);
	});

	it('возвращает false, если date находится вне диапазона startDate и hoveredDate', () => {
		const date = new Date(2023, 6, 19);
		const startDate = new Date(2023, 6, 20);
		const hoveredDate = new Date(2023, 6, 22);
		const result = isInRange(date, startDate, null, hoveredDate);
		expect(result).toBe(false);
	});

	it('возвращает true, если date находится между endDate и hoveredDate', () => {
		const date = new Date(2023, 6, 21);
		const endDate = new Date(2023, 6, 22);
		const hoveredDate = new Date(2023, 6, 20);
		const result = isInRange(date, null, endDate, hoveredDate);
		expect(result).toBe(true);
	});

	it('возвращает false, если date находится вне диапазона endDate и hoveredDate', () => {
		const date = new Date(2023, 6, 23);
		const endDate = new Date(2023, 6, 22);
		const hoveredDate = new Date(2023, 6, 20);
		const result = isInRange(date, null, endDate, hoveredDate);
		expect(result).toBe(false);
	});

	it('возвращает false, если startDate и endDate равны null, но hoveredDate задан', () => {
		const date = new Date(2023, 6, 21);
		const hoveredDate = new Date(2023, 6, 20);
		const result = isInRange(date, null, null, hoveredDate);
		expect(result).toBe(false);
	});
});
