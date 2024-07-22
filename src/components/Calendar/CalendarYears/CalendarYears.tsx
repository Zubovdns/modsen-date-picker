import { FC } from 'react';
import { isInRangeYear } from '@src/utils/isInRangeYear';
import { isSelectedYear } from '@src/utils/isSelectedYear';

import { Year, Years } from './styled';
import { CalendarYearsProps } from './types';

const CalendarYears: FC<CalendarYearsProps> = ({
	onSelectYear,
	currentDate,
	selectedDate,
	startDate,
	endDate,
}) => {
	const years = Array.from(
		{ length: 40 },
		(_, i) => currentDate.getFullYear() - 17 + i
	);

	return (
		<Years>
			{years.map((year) => (
				<Year
					key={year}
					onClick={() => onSelectYear(year)}
					$selected={isSelectedYear(year, selectedDate, startDate, endDate)}
					$inRange={isInRangeYear(year, startDate, endDate)}
				>
					{year}
				</Year>
			))}
		</Years>
	);
};

export default CalendarYears;
