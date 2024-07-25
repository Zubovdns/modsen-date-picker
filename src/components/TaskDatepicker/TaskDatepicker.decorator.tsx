/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, FC, useRef, useState } from 'react';
import { formatDateToISOString } from '@src/utils/formatDateToISOString';

import { CalendarProps } from '../Calendar/types';
import { ErrorBoundary } from '../ErrorBoundary';
import TaskList from '../TaskList';

import { TaskDatepickerContainer } from './styled';
import { useTaskDatepickerService } from './TaskDatepicker.service';
import { Task, WithTaskDatepickerServiceProps } from './types';

const withTaskDatepicker = <P extends CalendarProps>(
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
			const formattedDate = formatDateToISOString(date);
			const loadedTasks = serviceRef.current.getTasks(formattedDate);
			setTasks(loadedTasks);
		};

		const handleDateSelect = (date: Date) => {
			setSelectedDate(date);
			loadTasks(date);
		};

		const handleAddTask = () => {
			if (!selectedDate) return;
			const formattedDate = formatDateToISOString(selectedDate);
			serviceRef.current.addTask(formattedDate);
			loadTasks(selectedDate);
		};

		const handleRemoveTask = (taskId: string) => {
			if (!selectedDate) return;
			const formattedDate = formatDateToISOString(selectedDate);
			serviceRef.current.removeTask(formattedDate, taskId);
			loadTasks(selectedDate);
		};

		const handleToggleTaskCompletion = (taskId: string) => {
			if (!selectedDate) return;
			const formattedDate = formatDateToISOString(selectedDate);
			serviceRef.current.toggleTaskCompletion(formattedDate, taskId);
			loadTasks(selectedDate);
		};

		const handleUpdateTaskText = (taskId: string, text: string) => {
			if (!selectedDate) return;
			const formattedDate = formatDateToISOString(selectedDate);
			serviceRef.current.updateTaskText(formattedDate, taskId, text);
			loadTasks(selectedDate);
		};

		return (
			<ErrorBoundary>
				<TaskDatepickerContainer aria-label='task-datepicker-wrapper'>
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
			</ErrorBoundary>
		);
	};

	return WithTaskDatepickerService;
};

export default withTaskDatepicker;
