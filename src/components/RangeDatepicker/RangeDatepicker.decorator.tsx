/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, FC, useEffect, useRef, useState } from 'react';

import { CalendarProps } from '../Calendar/types';

import { useRangeDatepickerService } from './RangeDatepicker.service';
import { WithRangeDatepickerServiceProps } from './types';

const withRangeDatepickerService = <P extends CalendarProps>(
	WrappedComponent: ComponentType<P>
): FC<Omit<P, keyof WithRangeDatepickerServiceProps>> => {
	const WithRangeDatepickerService: FC<
		Omit<P, keyof WithRangeDatepickerServiceProps>
	> = (props) => {
		const calendarServiceRef = useRef<any>(null);
		useRangeDatepickerService(calendarServiceRef);

		const [startDate, setStartDate] = useState<Date | null>(
			props.defaultValue || null
		);
		const [endDate, setEndDate] = useState<Date | null>(null);

		useEffect(() => {
			if (calendarServiceRef.current) {
				setStartDate(calendarServiceRef.current.getStartDate());
				setEndDate(calendarServiceRef.current.getEndDate());
			}
		}, [
			calendarServiceRef.current?.getStartDate(),
			calendarServiceRef.current?.getEndDate(),
		]);

		const handleDateSelect = (date: Date) => {
			calendarServiceRef.current.selectDate(date);
			setStartDate(calendarServiceRef.current.getStartDate());
			setEndDate(calendarServiceRef.current.getEndDate());
		};

		return (
			<WrappedComponent
				{...(props as P)}
				startDate={startDate}
				endDate={endDate}
				onDateSelect={handleDateSelect}
			/>
		);
	};

	return WithRangeDatepickerService;
};

export default withRangeDatepickerService;
