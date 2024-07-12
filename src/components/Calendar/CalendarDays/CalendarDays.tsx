import { FC } from 'react';
import { getDays } from '@src/utils/getDays';

import { Day, Days } from './styled';
import { CalendarDaysProps } from './types';

const CalendarDays: FC<CalendarDaysProps> = ({
	currentDate,
	startDayOfWeek,
	withExtraDays,
	withHolidays,
}) => {
	const days = getDays(
		currentDate,
		startDayOfWeek,
		withExtraDays,
		withHolidays
	);
	return (
		<Days>
			{days.map((dayInfo, index) => (
				<Day
					key={index}
					$isOutsideMonth={dayInfo.$isOutsideMonth}
					$holiday={dayInfo.$holiday}
				>
					{dayInfo.day !== null ? dayInfo.day : ''}
				</Day>
			))}
		</Days>
	);
};

export default CalendarDays;
