import { FC } from 'react';
import { monthNames } from '@src/constants/dates';

import { Month, Months } from './styled';
import { CalendarMonthsProps } from './types';

const CalendarMonths: FC<CalendarMonthsProps> = ({
	currentDate,
	onSelectMonth,
	selectedDate,
	startDate,
	endDate,
}) => {
	const isSelected = (index: number) => {
		const currentYear = currentDate.getFullYear();

		const selectedMonth = selectedDate?.getMonth();
		const selectedYear = selectedDate?.getFullYear();
		const startMonth = startDate?.getMonth();
		const startYear = startDate?.getFullYear();
		const endMonth = endDate?.getMonth();
		const endYear = endDate?.getFullYear();

		return (
			(selectedMonth === index && selectedYear === currentYear) ||
			(startMonth === index && startYear === currentYear) ||
			(endMonth === index && endYear === currentYear)
		);
	};

	const isInRange = (index: number) => {
		const currentYear = currentDate.getFullYear();
		if (!startDate || !endDate) return false;

		const startYear = startDate.getFullYear();
		const endYear = endDate.getFullYear();
		const startMonth = startDate.getMonth();
		const endMonth = endDate.getMonth();

		if (currentYear < startYear || currentYear > endYear) return false;

		if (currentYear === startYear && currentYear === endYear) {
			return index > startMonth && index < endMonth;
		}

		if (currentYear === startYear) {
			return index > startMonth;
		}

		if (currentYear === endYear) {
			return index < endMonth;
		}

		return currentYear > startYear && currentYear < endYear;
	};

	return (
		<Months>
			{monthNames.map((month, index) => (
				<Month
					key={index}
					onClick={() => onSelectMonth(index)}
					$selected={isSelected(index)}
					$inRange={isInRange(index)}
				>
					{month}
				</Month>
			))}
		</Months>
	);
};

export default CalendarMonths;
