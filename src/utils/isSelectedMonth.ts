export const isSelectedMonth = (
	index: number,
	currentDate: Date,
	selectedDate: Date | null | undefined,
	startDate: Date | null | undefined,
	endDate: Date | null | undefined
) => {
	const currentYear = currentDate.getFullYear();

	const selectedMonth = selectedDate?.getMonth();
	const selectedYear = selectedDate?.getFullYear();

	const startMonth = startDate?.getMonth();
	const startYear = startDate?.getFullYear();

	const endMonth = endDate?.getMonth();
	const endYear = endDate?.getFullYear();

	return (
		(selectedMonth === index && selectedYear === currentYear) ||
		(startMonth === index && startYear === currentYear) ||
		(endMonth === index && endYear === currentYear)
	);
};
