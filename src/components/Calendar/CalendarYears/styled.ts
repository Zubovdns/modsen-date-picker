import styled from 'styled-components';

const LIGHTGREY_COLOR = '#F1F1F1';

export const Years = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 5px;
	max-height: 265px;
	overflow: auto;
`;

export const Year = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	border-radius: 8px;
	cursor: pointer;

	transition: background-color 0.1s ease;

	&:hover {
		background-color: ${LIGHTGREY_COLOR};
	}
`;
