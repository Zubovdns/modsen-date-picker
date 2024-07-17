import { MutableRefObject, useImperativeHandle, useRef } from 'react';

class AbstractDatepickerService {
	private selectedDate: Date | null = null;

	selectDate(date: Date) {
		this.selectedDate = date;
	}

	clearDate() {
		this.selectedDate = null;
	}

	getSelectedDate(): Date | null {
		return this.selectedDate;
	}
}

class DatepickerService {
	private datepickerService = new AbstractDatepickerService();

	selectDate(date: Date) {
		this.datepickerService.selectDate(date);
	}

	clearDate() {
		this.datepickerService.clearDate();
	}

	getSelectedDate(): Date | null {
		return this.datepickerService.getSelectedDate();
	}
}

export const useDatepickerService = (ref: MutableRefObject<unknown>) => {
	const decorator = useRef(new DatepickerService());

	useImperativeHandle(
		ref,
		() => ({
			selectDate: (date: Date) => {
				decorator.current.selectDate(date);
			},
			clearDate() {
				decorator.current.clearDate();
			},
			getSelectedDate: () => decorator.current.getSelectedDate(),
		}),
		[]
	);
};
