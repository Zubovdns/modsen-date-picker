/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, FC, useRef, useState } from 'react';

import { CalendarProps } from '../Calendar/types';
import DateInput from '../DateInput';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import { useRangeDatepickerService } from './RangeDatepicker.service';
import { RangeDatepickerContainer } from './styled';
import { WithRangeDatepickerServiceProps } from './types';

const withRangeDatepicker = <P extends CalendarProps>(
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

		const handleDateSelect = (date: Date) => {
			calendarServiceRef.current.selectDate(date);
			setStartDate(calendarServiceRef.current.getStartDate());
			setEndDate(calendarServiceRef.current.getEndDate());
		};

		const handleStartDateSelect = (date: Date | null) => {
			calendarServiceRef.current.selectStartDate(date);
			setStartDate(calendarServiceRef.current.getStartDate());
		};

		const handleEndDateSelect = (date: Date | null) => {
			calendarServiceRef.current.selectEndDate(date);
			setEndDate(calendarServiceRef.current.getEndDate());
		};

		const handleClearStartDate = () => {
			calendarServiceRef.current.clearStartDate();
			setStartDate(calendarServiceRef.current.getStartDate());
		};

		const handleClearEndDate = () => {
			calendarServiceRef.current.clearEndDate();
			setEndDate(calendarServiceRef.current.getEndDate());
		};

		return (
			<ErrorBoundary>
				<RangeDatepickerContainer aria-label='range-datepicker-wrapper'>
					<DateInput
						label='From'
						value={startDate}
						onChange={handleStartDateSelect}
						onClear={handleClearStartDate}
					/>
					<DateInput
						label='To'
						value={endDate}
						onChange={handleEndDateSelect}
						onClear={handleClearEndDate}
					/>
					<WrappedComponent
						{...(props as P)}
						startDate={startDate}
						endDate={endDate}
						onDateSelect={handleDateSelect}
					/>
				</RangeDatepickerContainer>
			</ErrorBoundary>
		);
	};

	return WithRangeDatepickerService;
};

export default withRangeDatepicker;
