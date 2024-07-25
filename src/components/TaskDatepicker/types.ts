export interface Task {
	id: string;
	name: string;
	completed: boolean;
}

export interface WithTaskDatepickerServiceProps {
	tasks: Task[];
	addTask: (date: string, task: Task) => void;
	removeTask: (date: string, taskId: string) => void;
	toggleTaskCompletion: (date: string, taskId: string) => void;
	selectedDate: Date | null;
	setSelectedDate: (date: Date) => void;
}

export interface TaskDatepickerServiceInterface {
	getTasks(date: string): Task[];
	addTask(date: string): void;
	removeTask(date: string, taskId: string): void;
	toggleTaskCompletion(date: string, taskId: string): void;
	updateTaskText(date: string, taskId: string, text: string): void;
	loadTasksForDate(date: string): Task[];
}
