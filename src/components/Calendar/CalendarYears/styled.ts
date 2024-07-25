import colors from '@styles/colors';
import styled from 'styled-components';

export const Years = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 5px;
	max-height: 265px;
	overflow: auto;
`;

export const Year = styled.div<{ $selected: boolean; $inRange: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.1s ease;

	background-color: ${({ $selected, $inRange }) => {
		if ($selected) {
			return colors.yearSelectedBg;
		} else if ($inRange) {
			return colors.yearInRangeBg;
		} else {
			return 'transparent';
		}
	}};

	color: ${({ $selected }) => {
		if ($selected) {
			return colors.yearSelectedText;
		} else {
			return colors.yearText;
		}
	}};

	&:hover {
		background-color: ${({ $selected }) => {
			if ($selected) {
				return colors.yearSelectedHoverBg;
			} else {
				return colors.yearHoverBg;
			}
		}};
	}
`;
