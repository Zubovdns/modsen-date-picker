import styled from 'styled-components';

export const Weekdays = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 5px;
`;

export const Weekday = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	font-weight: bolder;
`;
