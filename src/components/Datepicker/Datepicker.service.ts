import { MutableRefObject, useImperativeHandle, useRef } from 'react';

import { DatepickerServiceInterface } from './types';

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

class DatepickerService implements DatepickerServiceInterface {
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

export const useDatepickerService = (
	ref: MutableRefObject<DatepickerServiceInterface | null>
) => {
	const decorator = useRef<DatepickerServiceInterface>(new DatepickerService());

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
