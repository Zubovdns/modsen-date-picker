export interface WithRangeDatepickerServiceProps {
	startDate: Date | null;
	endDate: Date | null;
	onDateSelect: (date: Date) => void;
}

export interface RangeDatepickerServiceInterface {
	selectDate(date: Date): void;
	selectStartDate(date: Date | null): void;
	selectEndDate(date: Date | null): void;
	clearStartDate(): void;
	clearEndDate(): void;
	getStartDate(): Date | null;
	getEndDate(): Date | null;
	getRangeStatus(): boolean;
}
