export const formatDateToISOString = (date: Date) =>
	date.toISOString().split('T')[0] || '';
