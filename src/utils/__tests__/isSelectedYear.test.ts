import { isSelectedYear } from '../isSelectedYear';

describe('isSelectedYear', () => {
	it('возвращает false, если selectedDate равен null', () => {
		const result = isSelectedYear(
			2022,
			null,
			new Date(2023, 0, 1),
			new Date(2024, 0, 1)
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если selectedDate равен undefined', () => {
		const result = isSelectedYear(
			2022,
			undefined,
			new Date(2023, 0, 1),
			new Date(2024, 0, 1)
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если startDate равен null', () => {
		const result = isSelectedYear(
			2022,
			new Date(2021, 0, 1),
			null,
			new Date(2023, 0, 1)
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если startDate равен undefined', () => {
		const result = isSelectedYear(
			2022,
			new Date(2021, 0, 1),
			undefined,
			new Date(2023, 0, 1)
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если endDate равен null', () => {
		const result = isSelectedYear(
			2022,
			new Date(2021, 0, 1),
			new Date(2023, 0, 1),
			null
		);
		expect(result).toBe(false);
	});

	it('возвращает false, если endDate равен undefined', () => {
		const result = isSelectedYear(
			2022,
			new Date(2021, 0, 1),
			new Date(2023, 0, 1),
			undefined
		);
		expect(result).toBe(false);
	});

	it('возвращает true, если selectedDate совпадает с годом', () => {
		const result = isSelectedYear(
			2022,
			new Date(2022, 0, 1),
			new Date(2021, 0, 1),
			new Date(2023, 0, 1)
		);
		expect(result).toBe(true);
	});

	it('возвращает true, если startDate совпадает с годом', () => {
		const result = isSelectedYear(
			2022,
			new Date(2021, 0, 1),
			new Date(2022, 0, 1),
			new Date(2023, 0, 1)
		);
		expect(result).toBe(true);
	});

	it('возвращает true, если endDate совпадает с годом', () => {
		const result = isSelectedYear(
			2022,
			new Date(2021, 0, 1),
			new Date(2023, 0, 1),
			new Date(2022, 0, 1)
		);
		expect(result).toBe(true);
	});

	it('возвращает false, если год не совпадает ни с одной из дат', () => {
		const result = isSelectedYear(
			2022,
			new Date(2021, 0, 1),
			new Date(2020, 0, 1),
			new Date(2023, 0, 1)
		);
		expect(result).toBe(false);
	});

	it('возвращает true, если все даты равны году', () => {
		const result = isSelectedYear(
			2022,
			new Date(2022, 0, 1),
			new Date(2022, 0, 1),
			new Date(2022, 0, 1)
		);
		expect(result).toBe(true);
	});
});
