export type CalendarDaysProps = {
	currentDate: Date;
	startDayOfWeek: 'sunday' | 'monday';
	withExtraDays: boolean;
	withHolidays: boolean;
	onSelectDate?: (date: Date) => void;
	selectedDate?: Date | null;
	startDate?: Date | null;
	endDate?: Date | null;
};
