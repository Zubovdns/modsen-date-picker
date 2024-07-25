import { RangeDatepickerServiceInterface } from './types';

class AbstractDatepickerService {
	private startDate: Date | null = null;
	private endDate: Date | null = null;
	private rangeStatus: boolean = false;

	selectDate(date: Date) {
		if (this.startDate && date.getTime() === this.startDate.getTime()) {
			return;
		}
		if (this.endDate && date.getTime() === this.endDate.getTime()) {
			return;
		}

		if (!this.startDate && !this.endDate) {
			this.startDate = date;
			this.rangeStatus = true;
		} else if (this.startDate && !this.endDate) {
			this.endDate = date;
			this.rangeStatus = false;
		} else if (!this.startDate && this.endDate) {
			this.startDate = date;
			this.rangeStatus = false;
		} else if (this.startDate && this.endDate) {
			this.startDate = date;
			this.endDate = null;
			this.rangeStatus = true;
		}
	}

	selectStartDate(date: Date | null) {
		this.startDate = date;
		if (!this.endDate) this.rangeStatus = true;
	}

	selectEndDate(date: Date | null) {
		this.endDate = date;
		if (!this.startDate) this.rangeStatus = true;
	}

	clearStartDate() {
		this.startDate = null;
		if (this.endDate) this.rangeStatus = true;
	}

	clearEndDate() {
		this.endDate = null;
		if (this.startDate) this.rangeStatus = true;
	}

	getStartDate(): Date | null {
		return this.startDate;
	}

	getEndDate(): Date | null {
		return this.endDate;
	}

	getRangeStatus(): boolean {
		return this.rangeStatus;
	}
}

class RangeDatepickerService
	extends AbstractDatepickerService
	implements RangeDatepickerServiceInterface {}

export const rangeDatepickerServiceInstance = new RangeDatepickerService();
