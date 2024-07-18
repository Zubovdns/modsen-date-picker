import { Task } from '../TaskDatepicker/types';

export interface TaskListProps {
	tasks: Task[];
	addTask: () => void;
	removeTask: (taskId: string) => void;
	toggleTaskCompletion: (taskId: string) => void;
	updateTaskText: (taskId: string, text: string) => void;
	selectedDate: Date | null;
}
