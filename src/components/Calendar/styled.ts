import styled from 'styled-components';

const GREY_BORDER_COLOR = '#E1E1E1';
const GREY_TEXT_COLOR = '#AAA';
const BLACK_COLOR = '#333';
const LIGHTGREY_COLOR = '#F1F1F1';
const WHITE_COLOR = '#FFF';
const RED_COLOR = 'red';
const RED_GREY_COLOR = '#FFC1C1';

export const CalendarContainer = styled.div`
	width: 300px;
	border: 1px solid ${GREY_BORDER_COLOR};
	border-radius: 8px;
	padding: 10px;
	font-family: 'Open Sans', sans-serif;
	background-color: ${WHITE_COLOR};
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	font-weight: bold;
`;

export const Button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 18px;
`;

export const Weekdays = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 5px;
`;

export const Weekday = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	font-weight: bolder;
`;

export const Days = styled.div<{
	$withHolidays: boolean;
	$startDayOfWeek: 'monday' | 'sunday';
}>`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 5px;
`;

export const Day = styled.div<{
	$isOutsideMonth: boolean;
	$holiday: boolean;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 8px;
	cursor: pointer;
	color: ${({ $isOutsideMonth, $holiday }) =>
		$isOutsideMonth
			? $holiday
				? RED_GREY_COLOR
				: GREY_TEXT_COLOR
			: $holiday
				? RED_COLOR
				: BLACK_COLOR};

	&:hover {
		background-color: ${LIGHTGREY_COLOR};
		color: ${({ $isOutsideMonth, $holiday }) =>
			$isOutsideMonth
				? $holiday
					? RED_GREY_COLOR
					: GREY_TEXT_COLOR
				: $holiday
					? RED_COLOR
					: BLACK_COLOR};
	}
`;
