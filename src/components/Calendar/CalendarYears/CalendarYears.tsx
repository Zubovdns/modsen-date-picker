import { FC } from 'react';

import { Year, Years } from './styled';
import { CalendarYearsProps } from './types';

const CalendarYears: FC<CalendarYearsProps> = ({ startYear, onSelectYear }) => {
	const years = Array.from({ length: 40 }, (_, i) => startYear + i);

	return (
		<Years>
			{years.map((year) => (
				<Year key={year} onClick={() => onSelectYear(year)}>
					{year}
				</Year>
			))}
		</Years>
	);
};

export default CalendarYears;
