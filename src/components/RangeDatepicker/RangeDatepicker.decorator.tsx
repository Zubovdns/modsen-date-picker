/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, FC, useEffect, useRef, useState } from 'react';

import { CalendarProps } from '../Calendar/types';
import DateInput from '../DateInput';

import { useRangeDatepickerService } from './RangeDatepicker.service';
import { RangeDatepickerContainer } from './styled';
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

		const handleStartDateSelect = (date: Date | null) => {
			calendarServiceRef.current.selectStartDate(date);
			setStartDate(calendarServiceRef.current.getEndDate());
		};

		const handleEndDateSelect = (date: Date | null) => {
			calendarServiceRef.current.selectEndDate(date);
			setEndDate(calendarServiceRef.current.getStartDate());
		};

		const handleClearStartDate = () => {
			calendarServiceRef.current.clearStartDate();
			setStartDate(calendarServiceRef.current.getStartDate());
			setEndDate(calendarServiceRef.current.getEndDate());
		};

		const handleClearEndDate = () => {
			calendarServiceRef.current.clearEndDate();
			setEndDate(calendarServiceRef.current.getEndDate());
		};

		return (
			<RangeDatepickerContainer>
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
		);
	};

	return WithRangeDatepickerService;
};

export default withRangeDatepickerService;
