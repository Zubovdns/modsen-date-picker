import { Day } from '@src/components/Calendar/styled';

const getDaysInMonth = (date: Date) =>
	new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const getFirstDayOfMonth = (
	date: Date,
	startDayOfWeek: 'sunday' | 'monday'
) => {
	const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	return startDayOfWeek === 'sunday' ? day : day === 0 ? 6 : day - 1;
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

	if (withExtraDays) {
		for (let i = 0; i < firstDay; i++) {
			const date = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth() - 1,
				prevMonthDays - firstDay + 1 + i
			);
			days.push(
				<Day
					key={`prev-${i}`}
					$isOutsideMonth={true}
					$holiday={withHolidays && isHoliday(date)}
				>
					{prevMonthDays - firstDay + 1 + i}
				</Day>
			);
		}
	} else {
		for (let i = 0; i < firstDay; i++) {
			days.push(
				<Day key={`prev-${i}`} $isOutsideMonth={true} $holiday={false}></Day>
			);
		}
	}

	for (let day = 1; day <= daysInMonth; day++) {
		const date = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day
		);
		days.push(
			<Day
				key={day}
				$isOutsideMonth={false}
				$holiday={withHolidays && isHoliday(date)}
			>
				{day}
			</Day>
		);
	}

	if (withExtraDays) {
		for (let i = 1; i <= 7 - nextMonthStartDay; i++) {
			if (nextMonthStartDay !== 0) {
				const date = new Date(
					currentDate.getFullYear(),
					currentDate.getMonth() + 1,
					i
				);
				days.push(
					<Day
						key={`next-${i}`}
						$isOutsideMonth={true}
						$holiday={withHolidays && isHoliday(date)}
					>
						{i}
					</Day>
				);
			}
		}
	}

	return days;
};
