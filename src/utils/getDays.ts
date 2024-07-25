import { v4 as uuidv4 } from 'uuid';

const getDaysInMonth = (date: Date) =>
	new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const getFirstDayOfMonth = (
	date: Date,
	startDayOfWeek: 'sunday' | 'monday'
): number => {
	const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

	if (startDayOfWeek === 'sunday') {
		return day;
	}

	return day === 0 ? 6 : day - 1;
};

const isHoliday = (date: Date) => {
	const day = date.getDay();
	return day === 0 || day === 6;
};

export const getDays = (
	currentDate: Date,
	startDayOfWeek: 'monday' | 'sunday',
	withExtraDays: boolean,
	withHolidays: boolean
) => {
	const daysInMonth = getDaysInMonth(currentDate);
	const firstDay = getFirstDayOfMonth(currentDate, startDayOfWeek);

	const prevMonthDays = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		0
	).getDate();
	const nextMonthStartDay = (firstDay + daysInMonth) % 7;
	const days = [];

	for (let i = 0; i < firstDay; i++) {
		const date = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() - 1,
			prevMonthDays - firstDay + 1 + i
		);
		days.push({
			key: uuidv4(),
			day: withExtraDays ? prevMonthDays - firstDay + 1 + i : null,
			date,
			$isOutsideMonth: true,
			$holiday: withExtraDays ? withHolidays && isHoliday(date) : false,
		});
	}

	for (let day = 1; day <= daysInMonth; day++) {
		const date = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day
		);
		days.push({
			key: uuidv4(),
			day: day,
			date,
			$isOutsideMonth: false,
			$holiday: withHolidays && isHoliday(date),
		});
	}

	if (withExtraDays) {
		for (let i = 1; i <= 7 - nextMonthStartDay; i++) {
			if (nextMonthStartDay !== 0) {
				const date = new Date(
					currentDate.getFullYear(),
					currentDate.getMonth() + 1,
					i
				);
				days.push({
					key: uuidv4(),
					day: i,
					date,
					$isOutsideMonth: true,
					$holiday: withHolidays && isHoliday(date),
				});
			}
		}
	}

	return days;
};
