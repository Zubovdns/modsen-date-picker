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
	$isStartDate: boolean;
	$isEndDate: boolean;
	$isInRange: boolean;
	$withExtraDays: boolean;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 8px;
	cursor: pointer;

	transition: background-color 0.1s ease;

	color: ${({
		$isOutsideMonth,
		$holiday,
		$isSelected,
		$isStartDate,
		$isEndDate,
		$withExtraDays,
	}) => {
		if ($isSelected || $isStartDate || $isEndDate) {
			return colors.dateSelectedText;
		} else if ($holiday && $isOutsideMonth && $withExtraDays) {
			return colors.holidayInactiveDateText;
		} else if ($holiday) {
			return colors.holidayDateText;
		} else if ($isOutsideMonth && $withExtraDays) {
			return colors.inactiveDateText;
		} else {
			return 'inherit';
		}
	}};

	background-color: ${({
		$isSelected,
		$isStartDate,
		$isEndDate,
		$isInRange,
		$isOutsideMonth,
		$withExtraDays,
	}) => {
		if ($isOutsideMonth && !$withExtraDays) {
			return 'inherit';
		} else if ($isSelected || $isStartDate || $isEndDate) {
			return colors.dateSelectedBg;
		} else if ($isInRange) {
			return colors.dateInRangeBg;
		} else {
			return 'inherit';
		}
	}};

	${({ $isOutsideMonth, $withExtraDays }) =>
		$isOutsideMonth &&
		!$withExtraDays &&
		css`
			cursor: default;
			&:hover {
				background-color: inherit;
			}
		`}

	&:hover {
		background-color: ${({ $isSelected, $isStartDate, $isEndDate }) =>
			$isSelected || $isStartDate || $isEndDate
				? '#81B3F4'
				: colors.dateHoverBg};
		${({ $isOutsideMonth, $withExtraDays }) =>
			$isOutsideMonth &&
			!$withExtraDays &&
			css`
				background-color: inherit;
			`}
	}
`;
