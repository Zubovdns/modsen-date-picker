import { isInRangeYear } from '../isInRangeYear';

describe('isInRangeYear', () => {
	it('возвращает false, если startDate равен null', () => {
		const result = isInRangeYear(2022, null, new Date(2023, 0, 1));
		expect(result).toBe(false);
	});

	it('возвращает false, если endDate равен null', () => {
		const result = isInRangeYear(2022, new Date(2021, 0, 1), null);
		expect(result).toBe(false);
	});

	it('возвращает false, если startDate и endDate равны null', () => {
		const result = isInRangeYear(2022, null, null);
		expect(result).toBe(false);
	});

	it('возвращает true, если год находится в диапазоне', () => {
		const result = isInRangeYear(
			2022,
			new Date(2021, 0, 1),
			new Date(2023, 0, 1)
		);
		expect(result).toBe(true);
	});

	it('возвращает false, если год находится вне диапазона', () => {
		const result = isInRangeYear(
			2020,
			new Date(2021, 0, 1),
			new Date(2023, 0, 1)
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если год совпадает с начальным годом', () => {
		const result = isInRangeYear(
			2021,
			new Date(2021, 0, 1),
			new Date(2023, 0, 1)
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если год совпадает с конечным годом', () => {
		const result = isInRangeYear(
			2023,
			new Date(2021, 0, 1),
			new Date(2023, 0, 1)
		);
		expect(result).toBe(false);
	});

	it('работает при обратном порядке startDate и endDate', () => {
		const result = isInRangeYear(
			2022,
			new Date(2023, 0, 1),
			new Date(2021, 0, 1)
		);
		expect(result).toBe(true);
	});

	it('возвращает false, если год вне диапазона при обратном порядке дат', () => {
		const result = isInRangeYear(
			2020,
			new Date(2023, 0, 1),
			new Date(2021, 0, 1)
		);
		expect(result).toBe(false);
	});
});
