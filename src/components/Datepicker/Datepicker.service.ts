import { DatepickerServiceInterface } from './types';

class AbstractDatepickerService {
	private selectedDate: Date | null = null;

	selectDate(date: Date | null) {
		this.selectedDate = date;
	}

	clearDate() {
		this.selectedDate = null;
	}

	getSelectedDate(): Date | null {
		return this.selectedDate;
	}
}

class DatepickerService
	extends AbstractDatepickerService
	implements DatepickerServiceInterface {}

export const datepickerServiceInstance = new DatepickerService();
