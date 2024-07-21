export const isInRangeYear = (
	year: number,
	startDate: Date | null | undefined,
	endDate: Date | null | undefined
) => {
	if (!startDate || !endDate) return false;

	const startYear = startDate.getFullYear();
	const endYear = endDate.getFullYear();

	if (startYear <= endYear) {
		return year > startYear && year < endYear;
	} else {
		return year > endYear && year < startYear;
	}
};
