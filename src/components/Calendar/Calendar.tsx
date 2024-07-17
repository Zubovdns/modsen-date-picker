import { FC, useEffect, useState } from 'react';
import Next from '@assets/icons/Calendar/Next';
import Prev from '@assets/icons/Calendar/Prev';
import { monthNames } from '@constants/dates';

import { WithDatepickerServiceProps } from '../Datepicker/types';
import { WithRangeDatepickerServiceProps } from '../RangeDatepicker/types';

import CalendarDays from './CalendarDays';
import CalendarMonths from './CalendarMonths';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarYears from './CalendarYears';
import { Button, CalendarContainer, Header, HeaderTitle } from './styled';
import { CalendarProps } from './types';

const Calendar: FC<
	CalendarProps &
		Partial<WithDatepickerServiceProps & WithRangeDatepickerServiceProps>
> = ({
	defaultValue = new Date(),
	startDayOfWeek = 'monday',
	withExtraDays = false,
	withHolidays = false,
	selectedDate,
	startDate,
	endDate,
	onDateSelect,
}) => {
	const [currentDate, setCurrentDate] = useState(defaultValue);
	const [view, setView] = useState<'days' | 'months' | 'years'>('days');

	useEffect(() => {
		if (selectedDate) {
			setCurrentDate(selectedDate);
		}
	}, [selectedDate]);

	const handlePrevMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
		);
	};

	const handleNextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
		);
	};

	const handleHeaderClick = () => {
		if (view === 'days') setView('months');
		else if (view === 'months') setView('years');
		else setView('days');
	};

	const handleSelectMonth = (month: number) => {
		setCurrentDate(new Date(currentDate.getFullYear(), month, 1));
		setView('days');
	};

	const handleSelectYear = (year: number) => {
		setCurrentDate(new Date(year, currentDate.getMonth(), 1));
		setView('months');
	};

	return (
		<CalendarContainer>
			<Header>
				<Button onClick={handlePrevMonth}>
					<Prev />
				</Button>
				<HeaderTitle onClick={handleHeaderClick}>
					{view === 'days' &&
						`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
					{view === 'months' && currentDate.getFullYear()}
					{view === 'years' && 'Back'}
				</HeaderTitle>
				<Button onClick={handleNextMonth}>
					<Next />
				</Button>
			</Header>
			{view === 'days' && (
				<>
					<CalendarWeekDays startDayOfWeek={startDayOfWeek} />
					<CalendarDays
						currentDate={currentDate}
						startDayOfWeek={startDayOfWeek}
						withExtraDays={withExtraDays}
						withHolidays={withHolidays}
						onSelectDate={onDateSelect}
						selectedDate={selectedDate}
						startDate={startDate}
						endDate={endDate}
					/>
				</>
			)}
			{view === 'months' && (
				<CalendarMonths onSelectMonth={handleSelectMonth} />
			)}
			{view === 'years' && (
				<CalendarYears
					startYear={currentDate.getFullYear() - 15}
					onSelectYear={handleSelectYear}
				/>
			)}
		</CalendarContainer>
	);
};

export default Calendar;
