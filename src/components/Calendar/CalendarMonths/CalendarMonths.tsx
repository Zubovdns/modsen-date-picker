import { FC } from 'react';
import { monthNames } from '@src/constants/dates';

import { Month, Months } from './styled';
import { CalendarMonthsProps } from './types';

const CalendarMonths: FC<CalendarMonthsProps> = ({
	currentDate,
	onSelectMonth,
	selectedDate,
}) => {
	const isSelected = (index: number) => {
		const selectedMonth = selectedDate?.getMonth();
		const selectedYear = selectedDate?.getFullYear();
		const currentYear = currentDate.getFullYear();

		return selectedMonth === index && selectedYear === currentYear;
	};
	return (
		<Months>
			{monthNames.map((month, index) => (
				<Month
					key={index}
					onClick={() => onSelectMonth(index)}
					$selected={isSelected(index)}
				>
					{month}
				</Month>
			))}
		</Months>
	);
};

export default CalendarMonths;
