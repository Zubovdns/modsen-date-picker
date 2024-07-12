import React from 'react';
import { Day, EmptyDay } from '@src/components/Calendar/styled';

const getDaysInMonth = (date: Date) =>
	new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const getFirstDayOfMonth = (
	date: Date,
	startDayOfWeek: 'sunday' | 'monday'
) => {
	const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	return startDayOfWeek === 'sunday' ? day : day === 0 ? 6 : day - 1;
};

export const getDays = (
	currentDate: Date,
	startDayOfWeek: 'monday' | 'sunday',
	withExtraDays: boolean
) => {
	const daysInMonth = getDaysInMonth(currentDate);
	const firstDay = getFirstDayOfMonth(currentDate, startDayOfWeek);

	const prevMonthDays = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		0
	).getDate();
	const nextMonthStartDay = (firstDay + daysInMonth) % 7;
	const days = [];

	if (withExtraDays) {
		for (let i = 0; i < firstDay; i++) {
			days.push(
				<Day key={`prev-${i}`} $isOutsideMonth={true}>
					{prevMonthDays - firstDay + 1 + i}
				</Day>
			);
		}
	} else {
		for (let i = 0; i < firstDay; i++) {
			days.push(<EmptyDay key={`prev-${i}`} />);
		}
	}

	for (let day = 1; day <= daysInMonth; day++) {
		days.push(
			<Day key={day} $isOutsideMonth={false}>
				{day}
			</Day>
		);
	}

	if (withExtraDays) {
		for (let i = 1; i <= 7 - nextMonthStartDay; i++) {
			if (nextMonthStartDay !== 0) {
				days.push(
					<Day key={`next-${i}`} $isOutsideMonth={true}>
						{i}
					</Day>
				);
			}
		}
	}

	return days;
};
