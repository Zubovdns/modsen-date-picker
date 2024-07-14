/* eslint-disable no-nested-ternary */
import colors from '@styles/colors';
import styled from 'styled-components';

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
	cursor: ${({ $isOutsideMonth }) => ($isOutsideMonth ? 'default' : 'pointer')};
	transition: background-color 0.1s ease;
	color: ${({ $isOutsideMonth, $holiday }) =>
		$isOutsideMonth
			? $holiday
				? colors.holidayInactiveDateText
				: colors.inactiveDateText
			: $holiday
				? colors.holidayDateText
				: colors.dateText};

	&:hover {
		background-color: ${({ $isOutsideMonth }) =>
			$isOutsideMonth ? 'transparent' : colors.dateHoverBg};
	}
`;
