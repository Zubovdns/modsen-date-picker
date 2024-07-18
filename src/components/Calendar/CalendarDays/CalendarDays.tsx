import { FC, useState } from 'react';
import { getDays } from '@utils/getDays';
import { isCurrentDate } from '@utils/isCurrentDate';
import { isInRange } from '@utils/isInRange';

import { Day, Days } from './styled';
import { CalendarDaysProps } from './types';

const CalendarDays: FC<CalendarDaysProps> = ({
	currentDate,
	startDayOfWeek,
	withExtraDays,
	withHolidays,
	onSelectDate,
	selectedDate,
	startDate,
	endDate,
}) => {
	const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
	const [hashHovered, setHashHovered] = useState<boolean>(false);

	const days = getDays(
		currentDate,
		startDayOfWeek,
		withExtraDays,
		withHolidays
	);

	const handleMouseOver = (date: Date) => {
		if (!hashHovered && ((startDate && !endDate) || (!startDate && endDate))) {
			setHashHovered(true);
			setHoveredDate(date);
		}
	};

	const handleMouseLeave = () => {
		if ((startDate && endDate) || (!startDate && !endDate)) {
			setHashHovered(false);
			setHoveredDate(null);
		} else if ((startDate && !endDate) || (!startDate && endDate)) {
			setHashHovered(false);
		}
	};

	return (
		<Days>
			{days.map((dayInfo) => (
				<Day
					key={dayInfo.key}
					$isOutsideMonth={dayInfo.$isOutsideMonth}
					$holiday={dayInfo.$holiday}
					$isSelected={isCurrentDate(dayInfo.date, selectedDate)}
					$isStartDate={isCurrentDate(dayInfo.date, startDate)}
					$isEndDate={isCurrentDate(dayInfo.date, endDate)}
					$isInRange={
						isInRange(dayInfo.date, startDate, endDate, hoveredDate) &&
						(withExtraDays || !dayInfo.$isOutsideMonth)
					}
					$withExtraDays={withExtraDays}
					onClick={() =>
						(dayInfo.$isOutsideMonth ? withExtraDays : true) &&
						onSelectDate &&
						onSelectDate(dayInfo.date)
					}
					onMouseOver={() => handleMouseOver(dayInfo.date)}
					onMouseLeave={() => handleMouseLeave()}
				>
					{dayInfo.day !== null ? dayInfo.day : ''}
				</Day>
			))}
		</Days>
	);
};

export default CalendarDays;
