export const isValidDate = (date: Date): boolean => {
	const year = date.getFullYear();
	return year >= 1970 && year <= 3000;
};
