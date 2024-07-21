import { FC, useEffect, useRef, useState } from 'react';
import DeleteIcon from '@src/assets/icons/Tasks/Delete.icon';

import {
	AddButton,
	Checkbox,
	DeleteButton,
	List,
	PlaceholderContainer,
	Task,
	TaskListContainer,
	TaskName,
	TaskNameEditing,
} from './styled';
import { TaskListProps } from './types';

const TaskList: FC<TaskListProps> = ({
	tasks,
	addTask,
	removeTask,
	toggleTaskCompletion,
	updateTaskText,
	selectedDate,
}) => {
	const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
	const [editingText, setEditingText] = useState<string>('');
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (editingTaskId && inputRef.current) {
			inputRef.current.focus();
		}
	}, [editingTaskId]);

	const handleEditTask = (taskId: string, text: string) => {
		setEditingTaskId(taskId);
		setEditingText(text);
	};

	const handleSaveTask = () => {
		if (editingTaskId) {
			updateTaskText(editingTaskId, editingText);
			setEditingTaskId(null);
			setEditingText('');
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSaveTask();
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditingText(e.target.value);
	};

	const handleDeleteClick = (id: string) => () => {
		removeTask(id);
	};

	const handleAddClick = () => {
		addTask();
	};

	return (
		<TaskListContainer>
			{selectedDate ? (
				<>
					<List>
						{tasks.map((task) => (
							<Task key={task.id}>
								<Checkbox
									type='checkbox'
									checked={task.completed}
									onChange={() => toggleTaskCompletion(task.id)}
								/>
								{editingTaskId === task.id ? (
									<TaskNameEditing
										type='text'
										value={editingText}
										onChange={handleChange}
										onBlur={handleSaveTask}
										onKeyDown={handleKeyDown}
										ref={inputRef}
									/>
								) : (
									<TaskName
										$completed={task.completed}
										onDoubleClick={() => handleEditTask(task.id, task.name)}
									>
										{task.name}
									</TaskName>
								)}
								<DeleteButton onClick={handleDeleteClick(task.id)}>
									<DeleteIcon />
								</DeleteButton>
							</Task>
						))}
					</List>
					<AddButton onClick={handleAddClick}>Add Task</AddButton>
				</>
			) : (
				<PlaceholderContainer>Select date</PlaceholderContainer>
			)}
		</TaskListContainer>
	);
};

export default TaskList;
