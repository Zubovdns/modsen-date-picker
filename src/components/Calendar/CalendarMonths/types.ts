export type CalendarMonthsProps = {
	currentDate: Date;
	onSelectMonth: (month: number) => void;
	selectedDate?: Date | null;
	startDate?: Date | null;
	endDate?: Date | null;
};
