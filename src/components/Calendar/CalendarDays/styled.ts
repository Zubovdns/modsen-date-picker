/* eslint-disable no-nested-ternary */
import colors from '@styles/colors';
import styled, { css } from 'styled-components';

export const Days = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 5px;
`;

export const Day = styled.div<{
	$isOutsideMonth: boolean;
	$holiday: boolean;
	$isSelected: boolean;
	$withExtraDays: boolean;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 8px;
	cursor: pointer;

	transition: background-color 0.1s ease;

	${(props) =>
		props.$isOutsideMonth &&
		css`
			color: ${colors.inactiveDateText};
		`}

	${(props) =>
		props.$holiday &&
		css`
			color: ${colors.holidayDateText};
		`}

  ${(props) =>
		props.$isSelected &&
		css`
			background-color: ${colors.dateSelectedBg};
			color: ${colors.dateSelectedText};
		`}

  &:hover {
		background-color: ${colors.dateHoverBg};
	}
`;
