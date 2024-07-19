import { FC } from 'react';

import { Year, Years } from './styled';
import { CalendarYearsProps } from './types';

const CalendarYears: FC<CalendarYearsProps> = ({
	onSelectYear,
	currentDate,
	selectedDate,
}) => {
	const years = Array.from(
		{ length: 40 },
		(_, i) => currentDate.getFullYear() - 17 + i
	);

	const isSelected = (year: number) => selectedDate?.getFullYear() === year;

	return (
		<Years>
			{years.map((year) => (
				<Year
					key={year}
					onClick={() => onSelectYear(year)}
					$selected={isSelected(year)}
				>
					{year}
				</Year>
			))}
		</Years>
	);
};

export default CalendarYears;
