import { getDays } from '../getDays';

jest.mock('uuid', () => ({
	v4: jest.fn(() => 'mocked-uuid'),
}));

describe('getDays', () => {
	const currentDate = new Date(2023, 6, 1);

	test('возвращает правильные дни месяца без дополнительных дней и праздников, начиная с воскресенья', () => {
		const days = getDays(currentDate, 'sunday', false, false);
		const daysInMonth = 31;
		expect(days.filter((day) => !day.$isOutsideMonth)).toHaveLength(
			daysInMonth
		);

		expect(
			days.find((day) => day.date.getDate() === 1 && !day.$isOutsideMonth)
		).toEqual({
			key: 'mocked-uuid',
			day: 1,
			date: new Date(2023, 6, 1),
			$isOutsideMonth: false,
			$holiday: false,
		});
	});

	test('возвращает правильные дни месяца без дополнительных дней и праздников, начиная с понедельника', () => {
		const days = getDays(currentDate, 'monday', false, false);
		const daysInMonth = 31;
		expect(days.filter((day) => !day.$isOutsideMonth)).toHaveLength(
			daysInMonth
		);

		expect(
			days.find((day) => day.date.getDate() === 1 && !day.$isOutsideMonth)
		).toEqual({
			key: 'mocked-uuid',
			day: 1,
			date: new Date(2023, 6, 1),
			$isOutsideMonth: false,
			$holiday: false,
		});
	});

	test('возвращает правильные дни, включая дополнительные дни из предыдущего и следующего месяца, начиная с воскресенья', () => {
		const days = getDays(currentDate, 'sunday', true, false);
		expect(days).toHaveLength(42);

		expect(days[0]).toEqual({
			key: 'mocked-uuid',
			day: 25,
			date: new Date(2023, 5, 25),
			$isOutsideMonth: true,
			$holiday: false,
		});
	});

	test('корректно отмечает праздничные дни (воскресенья и субботы)', () => {
		const days = getDays(currentDate, 'sunday', false, true);

		const july1 = days.find(
			(day) => day.date.getDate() === 1 && !day.$isOutsideMonth
		);
		if (july1) {
			expect(july1).toEqual({
				key: 'mocked-uuid',
				day: 1,
				date: new Date(2023, 6, 1),
				$isOutsideMonth: false,
				$holiday: true,
			});
		} else {
			throw new Error('1 июля 2023 года не найден в массиве days');
		}

		const july2 = days.find(
			(day) => day.date.getDate() === 2 && !day.$isOutsideMonth
		);
		if (july2) {
			expect(july2.$holiday).toBe(true);
		} else {
			throw new Error('2 июля 2023 года не найден в массиве days');
		}
	});

	test('возвращает правильные дни, включая дополнительные дни из предыдущего и следующего месяца, отмечая праздники, начиная с понедельника', () => {
		const days = getDays(currentDate, 'monday', true, true);
		expect(days).toHaveLength(42); // Отображение 6 недель

		expect(days[0]).toEqual({
			key: 'mocked-uuid',
			day: 26,
			date: new Date(2023, 5, 26),
			$isOutsideMonth: true,
			$holiday: false,
		});
	});

	test('корректно обрабатывает крайний случай для февраля в високосный год', () => {
		const leapYearDate = new Date(2024, 1, 1);
		const days = getDays(leapYearDate, 'monday', false, false);
		const daysInMonth = 29;
		expect(days.filter((day) => !day.$isOutsideMonth)).toHaveLength(
			daysInMonth
		);

		const feb29 = days.find(
			(day) => day.date.getDate() === 29 && !day.$isOutsideMonth
		);
		if (feb29) {
			expect(feb29).toEqual({
				key: 'mocked-uuid',
				day: 29,
				date: new Date(2024, 1, 29),
				$isOutsideMonth: false,
				$holiday: false,
			});
		} else {
			throw new Error('29 февраля 2024 года не найден в массиве days');
		}
	});
});
