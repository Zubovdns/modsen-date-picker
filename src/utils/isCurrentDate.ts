export const isCurrentDate = (
	date: Date,
	currentDate: Date | null | undefined
) =>
	!!currentDate &&
	date.getFullYear() === currentDate.getFullYear() &&
	date.getMonth() === currentDate.getMonth() &&
	date.getDate() === currentDate.getDate();
