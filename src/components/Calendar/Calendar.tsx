import { FC, useState } from 'react';
import Next from '@src/assets/icons/Calendar/Next';
import Prev from '@src/assets/icons/Calendar/Prev';
import { monthNames } from '@src/constants/dates';

import CalendarDays from './CalendarDays';
import CalendarWeekDays from './CalendarWeekDays';
import { Button, CalendarContainer, Header } from './styled';
import { CalendarProps } from './types';

const Calendar: FC<CalendarProps> = ({
	defaultValue = new Date(),
	startDayOfWeek = 'monday',
	withExtraDays = false,
	withHolidays = false,
}) => {
	const [currentDate, setCurrentDate] = useState(defaultValue);

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
			<CalendarWeekDays startDayOfWeek={startDayOfWeek} />
			<CalendarDays
				currentDate={currentDate}
				startDayOfWeek={startDayOfWeek}
				withExtraDays={withExtraDays}
				withHolidays={withHolidays}
			/>
		</CalendarContainer>
	);
};

export default Calendar;
