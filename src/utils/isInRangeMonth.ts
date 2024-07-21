export const isInRangeMonth = (
	index: number,
	currentDate: Date,
	startDate: Date | null | undefined,
	endDate: Date | null | undefined
) => {
	if (!startDate || !endDate) return false;

	const currentYear = currentDate.getFullYear();
	const startYear = startDate.getFullYear();
	const endYear = endDate.getFullYear();
	const startMonth = startDate.getMonth();
	const endMonth = endDate.getMonth();

	if (startYear === endYear) {
		if (currentYear === startYear) {
			return index > startMonth && index < endMonth;
		}
	} else {
		if (currentYear === startYear) {
			return index > startMonth;
		}
		if (currentYear === endYear) {
			return index < endMonth;
		}
		if (currentYear > startYear && currentYear < endYear) {
			return true;
		}
	}

	return false;
};
