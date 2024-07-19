export type CalendarYearsProps = {
	currentDate: Date;
	onSelectYear: (year: number) => void;
	selectedDate?: Date | null;
	startDate?: Date | null;
	endDate?: Date | null;
};
