export const isInRange = (
	date: Date,
	startDate: Date | null | undefined,
	endDate: Date | null | undefined,
	hoveredDate: Date | null
) => {
	if (!startDate || (startDate && !hoveredDate && !endDate)) return false;
	const end = endDate || hoveredDate;
	if (!startDate || !end) return false;

	const [minDate, maxDate] =
		startDate < end ? [startDate, end] : [end, startDate];
	return date >= minDate && date <= maxDate;
};
