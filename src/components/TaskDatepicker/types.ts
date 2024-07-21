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
