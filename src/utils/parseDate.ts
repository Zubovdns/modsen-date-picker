export const parseDate = (dateString: string): Date | null => {
	const [day, month, year] = dateString.split('/').map(Number);
	if (!day || !month || !year) return null;
	if (month < 1 || month > 12) return null;
	if (day < 1 || day > 31) return null;
	const date = new Date(year, month - 1, day);
	if (date.getDate() !== day) return null;
	return isNaN(date.getTime()) ? null : date;
};
