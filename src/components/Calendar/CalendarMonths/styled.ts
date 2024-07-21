/* eslint-disable no-nested-ternary */
import colors from '@styles/colors';
import styled from 'styled-components';

export const Months = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;

export const Month = styled.div<{ $selected: boolean; $inRange: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 8px;
	cursor: pointer;

	transition: background-color 0.1s ease;

	background-color: ${({ $selected, $inRange }) =>
		$selected
			? colors.monthSelectedBg
			: $inRange
				? colors.monthInRangeBg
				: 'transparent'};
	color: ${({ $selected }) =>
		$selected ? colors.monthSelectedText : colors.monthText};

	&:hover {
		background-color: ${({ $selected }) =>
			$selected ? colors.monthSelectedHoverBg : colors.monthHoverBg};
	}
`;
