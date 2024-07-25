import { FC } from 'react';
import { weekDaysMonday, weekDaysSunday } from '@src/constants/dates';

import { Weekday, Weekdays } from './styled';
import { CalendarWeekDaysProps } from './types';

const CalendarWeekDays: FC<CalendarWeekDaysProps> = ({ startDayOfWeek }) => {
	const weekDays =
		startDayOfWeek === 'sunday' ? weekDaysSunday : weekDaysMonday;
	return (
		<Weekdays>
			{weekDays.map((day, index) => (
				<Weekday key={'weekday_$' + index}>{day}</Weekday>
			))}
		</Weekdays>
	);
};

export default CalendarWeekDays;
