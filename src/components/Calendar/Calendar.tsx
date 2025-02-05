import { FC, useEffect, useState } from 'react';
import Next from '@assets/icons/Calendar/Next';
import Prev from '@assets/icons/Calendar/Prev';
import { monthNames } from '@constants/dates';

import { ErrorBoundary } from '../ErrorBoundary';

import CalendarDays from './CalendarDays';
import CalendarMonths from './CalendarMonths';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarYears from './CalendarYears';
import { Button, CalendarContainer, Header, HeaderTitle } from './styled';
import { CalendarProps } from './types';

const Calendar: FC<CalendarProps> = ({
	defaultValue = new Date(),
	startDayOfWeek = 'monday',
	withExtraDays = false,
	withWeekends = false,
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
		<ErrorBoundary>
			<CalendarContainer>
				<Header>
					{view === 'days' && (
						<Button onClick={handlePrevMonth} aria-label='Prev'>
							<Prev />
						</Button>
					)}
					<HeaderTitle onClick={handleHeaderClick}>
						{view === 'days' &&
							`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
						{view === 'months' && currentDate.getFullYear()}
						{view === 'years' && 'Back'}
					</HeaderTitle>
					{view === 'days' && (
						<Button onClick={handleNextMonth} aria-label='Next'>
							<Next />
						</Button>
					)}
				</Header>
				{view === 'days' && (
					<>
						<CalendarWeekDays startDayOfWeek={startDayOfWeek} />
						<CalendarDays
							currentDate={currentDate}
							startDayOfWeek={startDayOfWeek}
							withExtraDays={withExtraDays}
							withWeekends={withWeekends}
							withHolidays={withHolidays}
							onSelectDate={onDateSelect}
							selectedDate={selectedDate}
							startDate={startDate}
							endDate={endDate}
						/>
					</>
				)}
				{view === 'months' && (
					<CalendarMonths
						currentDate={currentDate}
						onSelectMonth={handleSelectMonth}
						selectedDate={selectedDate}
						startDate={startDate}
						endDate={endDate}
					/>
				)}
				{view === 'years' && (
					<CalendarYears
						currentDate={currentDate}
						onSelectYear={handleSelectYear}
						selectedDate={selectedDate}
						startDate={startDate}
						endDate={endDate}
					/>
				)}
			</CalendarContainer>
		</ErrorBoundary>
	);
};

export default Calendar;
