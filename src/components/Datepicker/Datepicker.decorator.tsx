/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, FC, useRef, useState } from 'react';

import { CalendarProps } from '../Calendar/types';
import DateInput from '../DateInput';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import { useDatepickerService } from './Datepicker.service';
import { DatepickerContainer } from './styled';
import { WithDatepickerServiceProps } from './types';

const withDatepickerService = <P extends CalendarProps>(
	WrappedComponent: ComponentType<P>
): FC<Omit<P, keyof WithDatepickerServiceProps>> => {
	const WithDatepickerService: FC<Omit<P, keyof WithDatepickerServiceProps>> = (
		props
	) => {
		const calendarServiceRef = useRef<any>(null);
		useDatepickerService(calendarServiceRef);

		const [selectedDate, setSelectedDate] = useState<Date | null>(
			props.defaultValue || new Date()
		);

		const handleDateSelect = (date: Date | null) => {
			setSelectedDate(date);
			if (calendarServiceRef.current) {
				calendarServiceRef.current.selectDate(date);
			}
		};

		const handleClear = () => {
			setSelectedDate(null);
			calendarServiceRef.current.clearDate();
		};

		return (
			<ErrorBoundary>
				<DatepickerContainer>
					<DateInput
						label='Date'
						value={selectedDate}
						onChange={handleDateSelect}
						onClear={handleClear}
					/>
					<WrappedComponent
						{...(props as P)}
						selectedDate={selectedDate}
						onDateSelect={handleDateSelect}
					/>
				</DatepickerContainer>
			</ErrorBoundary>
		);
	};

	return WithDatepickerService;
};

export default withDatepickerService;