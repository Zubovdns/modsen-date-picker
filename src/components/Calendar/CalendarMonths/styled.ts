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

	background-color: ${({ $selected, $inRange }) => {
		if ($selected) {
			return colors.monthSelectedBg;
		} else if ($inRange) {
			return colors.monthInRangeBg;
		} else {
			return 'transparent';
		}
	}};

	color: ${({ $selected }) => {
		if ($selected) {
			return colors.monthSelectedText;
		} else {
			return colors.monthText;
		}
	}};

	&:hover {
		background-color: ${({ $selected }) => {
			if ($selected) {
				return colors.monthSelectedHoverBg;
			} else {
				return colors.monthHoverBg;
			}
		}};
	}
`;
