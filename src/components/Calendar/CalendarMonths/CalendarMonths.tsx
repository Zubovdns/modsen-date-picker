import { FC } from 'react';
import { monthNames } from '@src/constants/dates';

import { Month, Months } from './styled';
import { CalendarMonthsProps } from './types';

const CalendarMonths: FC<CalendarMonthsProps> = ({ onSelectMonth }) => (
	<Months>
		{monthNames.map((month, index) => (
			<Month key={index} onClick={() => onSelectMonth(index)}>
				{month}
			</Month>
		))}
	</Months>
);

export default CalendarMonths;
