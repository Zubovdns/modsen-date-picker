export interface WithRangeDatepickerServiceProps {
	startDate: Date | null;
	endDate: Date | null;
	onDateSelect: (date: Date) => void;
}
