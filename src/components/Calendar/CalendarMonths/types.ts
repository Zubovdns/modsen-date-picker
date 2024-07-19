export type CalendarMonthsProps = {
	currentDate: Date;
	onSelectMonth: (month: number) => void;
	selectedDate?: Date | null;
};
