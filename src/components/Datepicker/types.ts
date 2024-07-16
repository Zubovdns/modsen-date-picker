export interface WithDatepickerServiceProps {
	selectedDate: Date | null;
	onDateSelect: (date: Date) => void;
}
