/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const GREY_TEXT_COLOR = '#AAA';
const BLACK_COLOR = '#333';
const LIGHTGREY_COLOR = '#F1F1F1';
const RED_COLOR = 'red';
const RED_GREY_COLOR = '#FFC1C1';
const SELECTED_COLOR = '#2F80ED';
const SELECTED_TEXT_COLOR = '#FFF';

export const Days = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 5px;
`;

export const Day = styled.div<{
	$isOutsideMonth: boolean;
	$holiday: boolean;
	$isSelected: boolean;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 8px;
	cursor: ${({ $isOutsideMonth }) => ($isOutsideMonth ? 'default' : 'pointer')};
	transition: background-color 0.1s ease;
	background-color: ${({ $isSelected }) =>
		$isSelected ? SELECTED_COLOR : 'transparent'};
	color: ${({ $isOutsideMonth, $holiday, $isSelected }) =>
		$isSelected
			? SELECTED_TEXT_COLOR
			: $isOutsideMonth
				? $holiday
					? RED_GREY_COLOR
					: GREY_TEXT_COLOR
				: $holiday
					? RED_COLOR
					: BLACK_COLOR};

	&:hover {
		background-color: ${({ $isSelected, $isOutsideMonth }) =>
			$isSelected
				? SELECTED_COLOR
				: $isOutsideMonth
					? 'transparent'
					: LIGHTGREY_COLOR};
	}
`;
