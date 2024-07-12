import React, { useState } from 'react';
import Next from '@src/assets/icons/Calendar/Next';
import Prev from '@src/assets/icons/Calendar/Prev';
import {
	monthNames,
	weekDaysMonday,
	weekDaysSunday,
} from '@src/constants/dates';
import { getDays } from '@src/utils/getDays';

import {
	Button,
	CalendarContainer,
	Days,
	Header,
	Weekday,
	Weekdays,
} from './styled';
import { CalendarProps } from './types';

const Calendar: React.FC<CalendarProps> = ({
	defaultValue = new Date(),
	startDayOfWeek = 'monday',
	withExtraDays = false,
}) => {
	const [currentDate, setCurrentDate] = useState(defaultValue);

	const days = getDays(currentDate, startDayOfWeek, withExtraDays);

	const handlePrevMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
		);
	};

	const handleNextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
		);
	};

	const weekDays =
		startDayOfWeek === 'sunday' ? weekDaysSunday : weekDaysMonday;

	return (
		<CalendarContainer>
			<Header>
				<Button onClick={handlePrevMonth}>
					<Prev />
				</Button>
				<div>
					{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
				</div>
				<Button onClick={handleNextMonth}>
					<Next />
				</Button>
			</Header>
			<Weekdays>
				{weekDays.map((day, index) => (
					<Weekday key={index}>{day}</Weekday>
				))}
			</Weekdays>
			<Days>{days}</Days>
		</CalendarContainer>
	);
};

export default Calendar;
