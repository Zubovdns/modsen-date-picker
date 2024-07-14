import styled from 'styled-components';

const GREY_BORDER_COLOR = '#E1E1E1';
const WHITE_COLOR = '#FFF';
const LIGHTGREY_COLOR = '#F1F1F1';

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

export const HeaderTitle = styled.div`
	cursor: pointer;
	padding: 8px 12px;
	border-radius: 8px;
	transition: background-color 0.1s ease;

	&:hover {
		background-color: ${LIGHTGREY_COLOR};
	}
`;

export const Button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 18px;
`;
