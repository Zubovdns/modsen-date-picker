export interface WithDatepickerServiceProps {
	selectedDate: Date | null;
	onDateSelect: (date: Date) => void;
}

export interface DatepickerServiceInterface {
	selectDate(date: Date | null): void;
	clearDate(): void;
	getSelectedDate(): Date | null;
}
