import colors from '@styles/colors';
import styled from 'styled-components';

export const CalendarContainer = styled.div`
	width: 300px;
	border: 1px solid ${colors.calendarBorder};
	border-radius: 8px;
	padding: 10px;
	font-family: 'Open Sans', sans-serif;
	background-color: ${colors.calendarBg};
`;

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-bottom: 10px;
	font-weight: bold;
`;

export const HeaderTitle = styled.div`
	cursor: pointer;
	padding: 8px 12px;
	border-radius: 8px;
	transition: background-color 0.1s ease;

	&:hover {
		background-color: ${colors.calendarHoverButtonBg};
	}
`;

export const Button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 18px;
	border-radius: 8px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	transition: background-color 0.1s ease;

	&:hover {
		background-color: ${colors.calendarHoverButtonBg};
	}

	&:first-child {
		left: 0;
	}

	&:last-child {
		right: 0;
	}
`;
