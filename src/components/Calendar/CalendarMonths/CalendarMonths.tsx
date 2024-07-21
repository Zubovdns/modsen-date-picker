import { FC } from 'react';
import { monthNames } from '@src/constants/dates';
import { isInRangeMonth } from '@src/utils/isInRangeMonth';
import { isSelectedMonth } from '@src/utils/isSelectedMonth';

import { Month, Months } from './styled';
import { CalendarMonthsProps } from './types';

const CalendarMonths: FC<CalendarMonthsProps> = ({
	currentDate,
	onSelectMonth,
	selectedDate,
	startDate,
	endDate,
}) => (
	<Months>
		{monthNames.map((month, index) => (
			<Month
				key={index}
				onClick={() => onSelectMonth(index)}
				$selected={isSelectedMonth(
					index,
					currentDate,
					selectedDate,
					startDate,
					endDate
				)}
				$inRange={isInRangeMonth(index, currentDate, startDate, endDate)}
			>
				{month}
			</Month>
		))}
	</Months>
);

export default CalendarMonths;
