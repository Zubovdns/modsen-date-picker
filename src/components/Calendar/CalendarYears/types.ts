export type CalendarYearsProps = {
	currentDate: Date;
	onSelectYear: (year: number) => void;
	selectedDate?: Date | null;
};
