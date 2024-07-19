// TaskDatepicker.service.ts
import { MutableRefObject, useImperativeHandle, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Task } from './types';

class TaskDatepickerService {
	private tasks: { [key: string]: Task[] } = {};

	constructor() {
		this.loadTasksFromLocalStorage();
	}

	private loadTasksFromLocalStorage() {
		const storedTasks = localStorage.getItem('tasks');
		if (storedTasks) {
			this.tasks = JSON.parse(storedTasks);
		}
	}

	private saveTasksToLocalStorage() {
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
	}

	getTasks(date: string): Task[] {
		return this.tasks[date] || [];
	}

	addTask(date: string) {
		if (!this.tasks[date]) {
			this.tasks[date] = [];
		}
		const newTask: Task = {
			id: uuidv4(),
			name: 'New task',
			completed: false,
		};
		this.tasks[date] = [...this.tasks[date], newTask];
		this.saveTasksToLocalStorage();
	}

	removeTask(date: string, taskId: string) {
		if (this.tasks[date]) {
			this.tasks[date] = this.tasks[date].filter((task) => task.id !== taskId);
			this.saveTasksToLocalStorage();
		}
	}

	toggleTaskCompletion(date: string, taskId: string) {
		if (this.tasks[date]) {
			this.tasks[date] = this.tasks[date].map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			);
			this.saveTasksToLocalStorage();
		}
	}

	updateTaskText(date: string, taskId: string, text: string) {
		if (this.tasks[date]) {
			this.tasks[date] = this.tasks[date].map((task) =>
				task.id === taskId ? { ...task, name: text } : task
			);
			this.saveTasksToLocalStorage();
		}
	}

	loadTasksForDate(date: string): Task[] {
		this.loadTasksFromLocalStorage();
		return this.getTasks(date);
	}
}

export const useTaskDatepickerService = (ref: MutableRefObject<unknown>) => {
	const serviceRef = useRef(new TaskDatepickerService());

	useImperativeHandle(
		ref,
		() => ({
			getTasks: (date: string) => serviceRef.current.getTasks(date),
			addTask: (date: string) => serviceRef.current.addTask(date),
			removeTask: (date: string, taskId: string) =>
				serviceRef.current.removeTask(date, taskId),
			toggleTaskCompletion: (date: string, taskId: string) =>
				serviceRef.current.toggleTaskCompletion(date, taskId),
			updateTaskText: (date: string, taskId: string, text: string) =>
				serviceRef.current.updateTaskText(date, taskId, text),
			loadTasksForDate: (date: string) =>
				serviceRef.current.loadTasksForDate(date),
		}),
		[]
	);
};
