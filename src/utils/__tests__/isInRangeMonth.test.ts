import { isInRangeMonth } from '../isInRangeMonth';

describe('isInRangeMonth', () => {
	it('возвращает false, если startDate равен null', () => {
		const result = isInRangeMonth(
			5,
			new Date(2023, 5),
			null,
			new Date(2023, 11)
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если endDate равен null', () => {
		const result = isInRangeMonth(
			5,
			new Date(2023, 5),
			new Date(2023, 0),
			null
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если startDate и endDate равны null', () => {
		const result = isInRangeMonth(5, new Date(2023, 5), null, null);
		expect(result).toBe(false);
	});

	it('возвращает true, если index находится между startMonth и endMonth в том же году', () => {
		const result = isInRangeMonth(
			5,
			new Date(2023, 5),
			new Date(2023, 0),
			new Date(2023, 11)
		);
		expect(result).toBe(true);
	});

	it('возвращает false, если index находится вне диапазона startMonth и endMonth в том же году', () => {
		const result = isInRangeMonth(
			11,
			new Date(2023, 11),
			new Date(2023, 0),
			new Date(2023, 5)
		);
		expect(result).toBe(false);
	});

	it('возвращает true, если index находится после startMonth в начальном году', () => {
		const result = isInRangeMonth(
			5,
			new Date(2023, 5),
			new Date(2023, 4),
			new Date(2024, 3)
		);
		expect(result).toBe(true);
	});

	it('возвращает true, если index находится до endMonth в конечном году', () => {
		const result = isInRangeMonth(
			2,
			new Date(2024, 2),
			new Date(2023, 4),
			new Date(2024, 3)
		);
		expect(result).toBe(true);
	});

	it('возвращает true, если текущий год между startYear и endYear', () => {
		const result = isInRangeMonth(
			5,
			new Date(2024, 5),
			new Date(2023, 4),
			new Date(2025, 3)
		);
		expect(result).toBe(true);
	});

	it('возвращает false, если текущий год вне диапазона startYear и endYear', () => {
		const result = isInRangeMonth(
			5,
			new Date(2026, 5),
			new Date(2023, 4),
			new Date(2025, 3)
		);
		expect(result).toBe(false);
	});
});
