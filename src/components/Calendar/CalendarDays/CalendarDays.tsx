import { FC } from 'react';
import { getDays } from '@src/utils/getDays';

import { Day, Days } from './styled';
import { CalendarDaysProps } from './types';

const CalendarDays: FC<CalendarDaysProps> = ({
	currentDate,
	startDayOfWeek,
	withExtraDays,
	withHolidays,
	onSelectDate,
	selectedDate,
}) => {
	const days = getDays(
		currentDate,
		startDayOfWeek,
		withExtraDays,
		withHolidays
	);

	const isSelected = (date: Date) =>
		selectedDate &&
		date.getFullYear() === selectedDate.getFullYear() &&
		date.getMonth() === selectedDate.getMonth() &&
		date.getDate() === selectedDate.getDate();

	return (
		<Days>
			{days.map((dayInfo) => (
				<Day
					key={dayInfo.key}
					$isOutsideMonth={dayInfo.$isOutsideMonth}
					$holiday={dayInfo.$holiday}
					$isSelected={!!isSelected(dayInfo.date)}
					$withExtraDays={withExtraDays}
					onClick={() =>
						(dayInfo.$isOutsideMonth ? withExtraDays : true) &&
						onSelectDate &&
						onSelectDate(dayInfo.date)
					}
				>
					{dayInfo.day !== null ? dayInfo.day : ''}
				</Day>
			))}
		</Days>
	);
};

export default CalendarDays;
