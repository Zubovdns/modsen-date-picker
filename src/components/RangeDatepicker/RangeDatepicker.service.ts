import { MutableRefObject, useImperativeHandle, useRef } from 'react';

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

class RangeDatepickerService implements RangeDatepickerServiceInterface {
	private datepickerService = new AbstractDatepickerService();

	selectDate(date: Date) {
		this.datepickerService.selectDate(date);
	}

	selectStartDate(date: Date | null) {
		this.datepickerService.selectStartDate(date);
	}

	selectEndDate(date: Date | null) {
		this.datepickerService.selectEndDate(date);
	}

	clearStartDate() {
		this.datepickerService.clearStartDate();
	}

	clearEndDate() {
		this.datepickerService.clearEndDate();
	}

	getStartDate(): Date | null {
		return this.datepickerService.getStartDate();
	}

	getEndDate(): Date | null {
		return this.datepickerService.getEndDate();
	}

	getRangeStatus(): boolean {
		return this.datepickerService.getRangeStatus();
	}
}

export const useRangeDatepickerService = (
	ref: MutableRefObject<RangeDatepickerServiceInterface | null>
) => {
	const decorator = useRef(new RangeDatepickerService());

	useImperativeHandle(
		ref,
		() => ({
			selectDate: (date: Date) => {
				decorator.current.selectDate(date);
			},
			selectStartDate(date: Date | null) {
				decorator.current.selectStartDate(date);
			},
			selectEndDate(date: Date | null) {
				decorator.current.selectEndDate(date);
			},
			clearStartDate() {
				decorator.current.clearStartDate();
			},
			clearEndDate() {
				decorator.current.clearEndDate();
			},
			getStartDate: () => decorator.current.getStartDate(),
			getEndDate: () => decorator.current.getEndDate(),
			getRangeStatus: () => decorator.current.getRangeStatus(),
		}),
		[]
	);
};
