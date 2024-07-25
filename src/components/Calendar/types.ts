import { WithDatepickerServiceProps } from '../Datepicker/types';
import { WithRangeDatepickerServiceProps } from '../RangeDatepicker/types';
import { WithTaskDatepickerServiceProps } from '../TaskDatepicker/types';

export type CalendarProps = {
	defaultValue?: Date;
	startDayOfWeek?: 'sunday' | 'monday';
	withExtraDays?: boolean;
	withWeekends?: boolean;
	withHolidays?: boolean;
} & Partial<
	WithDatepickerServiceProps &
		WithRangeDatepickerServiceProps &
		WithTaskDatepickerServiceProps
>;
