import { FC, useEffect, useState } from 'react';
import { fetchHolidays, Holiday } from '@src/api/fetchHolidays';
import { getDays } from '@utils/getDays';
import { isCurrentDate } from '@utils/isCurrentDate';
import { isInRange } from '@utils/isInRange';

import { Day, Days } from './styled';
import { CalendarDaysProps } from './types';

const CalendarDays: FC<CalendarDaysProps> = ({
	currentDate,
	startDayOfWeek,
	withExtraDays,
	withWeekends,
	withHolidays,
	onSelectDate,
	selectedDate,
	startDate,
	endDate,
}) => {
	const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
	const [hashHovered, setHashHovered] = useState<boolean>(false);
	const [holidays, setHolidays] = useState<Holiday[]>([]);

	useEffect(() => {
		const getHolidays = async () => {
			try {
				const data = await fetchHolidays(currentDate);
				setHolidays(data);
			} catch (err) {
				console.error('Ошибка при получении данных');
				setHolidays([]);
			}
		};

		if (withHolidays) {
			getHolidays();
		}
	}, [currentDate]);

	const days = getDays(
		currentDate,
		startDayOfWeek,
		withExtraDays,
		withWeekends,
		withHolidays,
		holidays
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
					$isOutsideMonth={dayInfo.isOutsideMonth}
					$weekend={dayInfo.weekend}
					$holiday={dayInfo.holiday}
					$isSelected={isCurrentDate(dayInfo.date, selectedDate)}
					$isStartDate={isCurrentDate(dayInfo.date, startDate)}
					$isEndDate={isCurrentDate(dayInfo.date, endDate)}
					$isInRange={
						isInRange(dayInfo.date, startDate, endDate, hoveredDate) &&
						(withExtraDays || !dayInfo.isOutsideMonth)
					}
					$withExtraDays={withExtraDays}
					onClick={() =>
						(dayInfo.isOutsideMonth ? withExtraDays : true) &&
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
