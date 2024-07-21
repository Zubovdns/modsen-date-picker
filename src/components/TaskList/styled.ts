import colors from '@src/styles/colors';
import { styled } from 'styled-components';

export const TaskListContainer = styled.div`
	width: 300px;
	max-height: 314px;
	border: 1px solid ${colors.calendarBorder};
	border-radius: 8px;
	padding: 10px;
	font-family: 'Open Sans', sans-serif;
	background-color: ${colors.calendarBg};

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const AddButton = styled.button`
	border: none;
	padding: 10px;
	border-radius: 8px;
	background-color: ${colors.taskListButtonBg};
	color: ${colors.taskListButtonText};

	cursor: pointer;

	&:hover {
		background-color: ${colors.taskListButtonHoverBg};
	}
`;

export const PlaceholderContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	height: 100%;
	overflow: scroll;
`;

export const Task = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DeleteButton = styled.button`
	border: none;
	background-color: inherit;
	cursor: pointer;
	margin-right: 10px;
`;

export const Checkbox = styled.input``;

export const TaskName = styled.p<{ $completed: boolean }>`
	margin: 0;
	padding: 0 5px;
	flex-grow: 1;

	font-size: 15px;
	text-decoration: ${({ $completed }) =>
		$completed ? 'line-through' : 'none'};
`;

export const TaskNameEditing = styled.input`
	margin: 0;
	padding: 0 5px;
	flex-grow: 1;

	border: none;
	font-size: 15px;
`;
