export const isInRange = (
	date: Date,
	startDate: Date | null | undefined,
	endDate: Date | null | undefined,
	hoveredDate: Date | null
) => {
	if (!startDate && !endDate) return false;

	const start = startDate || hoveredDate;
	const end = endDate || hoveredDate;

	if (!start || !end) return false;

	const [minDate, maxDate] = start < end ? [start, end] : [end, start];
	return date >= minDate && date <= maxDate;
};
