/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, FC, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CalendarProps } from '../Calendar/types';
import TaskList from '../TaskList';

import { TaskDatepickerContainer } from './styled';
import { useTaskDatepickerService } from './TaskDatepicker.service';
import { Task, WithTaskDatepickerServiceProps } from './types';

const withTaskDatepickerService = <P extends CalendarProps>(
	WrappedComponent: ComponentType<P>
): FC<Omit<P, keyof WithTaskDatepickerServiceProps>> => {
	const WithTaskDatepickerService: FC<
		Omit<P, keyof WithTaskDatepickerServiceProps>
	> = (props) => {
		const serviceRef = useRef<any>(null);
		useTaskDatepickerService(serviceRef);

		const [selectedDate, setSelectedDate] = useState<Date | null>(null);
		const [tasks, setTasks] = useState<Task[]>([]);

		const loadTasks = (date: Date) => {
			const formattedDate = date.toISOString().split('T')[0];
			const loadedTasks = serviceRef.current.getTasks(formattedDate);
			setTasks(loadedTasks);
		};

		const handleDateSelect = (date: Date) => {
			setSelectedDate(date);
			loadTasks(date);
		};

		const handleAddTask = () => {
			if (!selectedDate) return;

			const formattedDate = selectedDate.toISOString().split('T')[0];
			const newTask: Task = {
				id: uuidv4(),
				name: 'New task',
				completed: false,
			};
			serviceRef.current.addTask(formattedDate, newTask);
			setTasks((prevTasks) => [...prevTasks, newTask]);
		};

		const handleRemoveTask = (taskId: string) => {
			if (!selectedDate) return;
			const formattedDate = selectedDate.toISOString().split('T')[0];
			serviceRef.current.removeTask(formattedDate, taskId);
			setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
		};

		const handleToggleTaskCompletion = (taskId: string) => {
			if (!selectedDate) return;
			const formattedDate = selectedDate.toISOString().split('T')[0];
			serviceRef.current.toggleTaskCompletion(formattedDate, taskId);
			setTasks((prevTasks) =>
				prevTasks.map((task) =>
					task.id === taskId ? { ...task, completed: !task.completed } : task
				)
			);
		};

		const handleUpdateTaskText = (taskId: string, text: string) => {
			if (!selectedDate) return;
			const formattedDate = selectedDate.toISOString().split('T')[0];

			serviceRef.current.updateTaskText(formattedDate, taskId, text);
			setTasks((prevTasks) =>
				prevTasks.map((task) =>
					task.id === taskId ? { ...task, name: text } : task
				)
			);
		};

		return (
			<TaskDatepickerContainer>
				<WrappedComponent
					{...(props as P)}
					onDateSelect={handleDateSelect}
					selectedDate={selectedDate}
				/>
				<TaskList
					tasks={tasks}
					addTask={handleAddTask}
					removeTask={handleRemoveTask}
					toggleTaskCompletion={handleToggleTaskCompletion}
					updateTaskText={handleUpdateTaskText}
					selectedDate={selectedDate}
				/>
			</TaskDatepickerContainer>
		);
	};

	return WithTaskDatepickerService;
};

export default withTaskDatepickerService;
