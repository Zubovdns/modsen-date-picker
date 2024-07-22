import { isSelectedMonth } from '../isSelectedMonth';

describe('isSelectedMonth', () => {
	const currentDate = new Date(2023, 6, 1);

	test('возвращает true, если выбранный месяц совпадает с индексом и текущим годом', () => {
		const selectedDate = new Date(2023, 6, 15);
		expect(isSelectedMonth(6, currentDate, selectedDate, null, null)).toBe(
			true
		);
	});

	test('возвращает false, если выбранный месяц не совпадает с индексом, но год совпадает', () => {
		const selectedDate = new Date(2023, 5, 15);
		expect(isSelectedMonth(6, currentDate, selectedDate, null, null)).toBe(
			false
		);
	});

	test('возвращает true, если месяц начала периода совпадает с индексом и текущим годом', () => {
		const startDate = new Date(2023, 6, 1);
		expect(isSelectedMonth(6, currentDate, null, startDate, null)).toBe(true);
	});

	test('возвращает true, если месяц окончания периода совпадает с индексом и текущим годом', () => {
		const endDate = new Date(2023, 6, 31);
		expect(isSelectedMonth(6, currentDate, null, null, endDate)).toBe(true);
	});

	test('возвращает false, если месяц начала периода не совпадает с индексом, но год совпадает', () => {
		const startDate = new Date(2023, 5, 1);
		expect(isSelectedMonth(6, currentDate, null, startDate, null)).toBe(false);
	});

	test('возвращает false, если месяц окончания периода не совпадает с индексом, но год совпадает', () => {
		const endDate = new Date(2023, 5, 30);
		expect(isSelectedMonth(6, currentDate, null, null, endDate)).toBe(false);
	});

	test('возвращает false, если выбранный месяц и месяцы начала и окончания периода не совпадают с индексом', () => {
		const selectedDate = new Date(2023, 4, 15);
		const startDate = new Date(2023, 5, 1);
		const endDate = new Date(2023, 5, 30);
		expect(
			isSelectedMonth(6, currentDate, selectedDate, startDate, endDate)
		).toBe(false);
	});

	test('возвращает false, если год выбранного месяца не совпадает с текущим годом', () => {
		const selectedDate = new Date(2022, 6, 15);
		expect(isSelectedMonth(6, currentDate, selectedDate, null, null)).toBe(
			false
		);
	});

	test('возвращает false, если год начала периода не совпадает с текущим годом', () => {
		const startDate = new Date(2022, 6, 1);
		expect(isSelectedMonth(6, currentDate, null, startDate, null)).toBe(false);
	});

	test('возвращает false, если год окончания периода не совпадает с текущим годом', () => {
		const endDate = new Date(2022, 6, 31);
		expect(isSelectedMonth(6, currentDate, null, null, endDate)).toBe(false);
	});
});
