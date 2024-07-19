import { FC } from 'react';

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

	const isSelected = (year: number) =>
		selectedDate?.getFullYear() === year ||
		startDate?.getFullYear() === year ||
		endDate?.getFullYear() === year;

	const isInRange = (year: number) => {
		if (!startDate || !endDate) return false;

		const startYear = startDate.getFullYear();
		const endYear = endDate.getFullYear();

		return year > startYear && year < endYear;
	};

	return (
		<Years>
			{years.map((year) => (
				<Year
					key={year}
					onClick={() => onSelectYear(year)}
					$selected={isSelected(year)}
					$inRange={isInRange(year)}
				>
					{year}
				</Year>
			))}
		</Years>
	);
};

export default CalendarYears;
