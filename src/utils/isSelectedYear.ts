export const isSelectedYear = (
	year: number,
	selectedDate: Date | null | undefined,
	startDate: Date | null | undefined,
	endDate: Date | null | undefined
) =>
	selectedDate?.getFullYear() === year ||
	startDate?.getFullYear() === year ||
	endDate?.getFullYear() === year;
