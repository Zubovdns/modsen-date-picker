import styled from 'styled-components';

const GREY_TEXT_COLOR = '#AAA';
const BLACK_COLOR = '#333';
const LIGHTGREY_COLOR = '#F1F1F1';
const RED_COLOR = 'red';
const RED_GREY_COLOR = '#FFC1C1';

export const Days = styled.div`
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
