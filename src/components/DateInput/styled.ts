import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 10px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 12px 32px;
	border: 1px solid #ccc;
	border-radius: 8px;
	box-sizing: border-box;
	font-size: 16px;
`;

export const IconWrapper = styled.div`
	position: absolute;
	left: 8px;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
`;

export const IconButton = styled.button`
	position: absolute;
	right: 8px;
	top: 50%;
	transform: translateY(-50%);
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
`;
