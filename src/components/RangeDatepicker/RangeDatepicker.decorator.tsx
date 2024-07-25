import { ComponentType, FC, useState } from 'react';

import { CalendarProps } from '../Calendar/types';
import DateInput from '../DateInput';
import { ErrorBoundary } from '../ErrorBoundary';

import { rangeDatepickerServiceInstance } from './RangeDatepicker.service';
import { RangeDatepickerContainer } from './styled';
import { WithRangeDatepickerServiceProps } from './types';

const withRangeDatepicker = <P extends CalendarProps>(
	WrappedComponent: ComponentType<P>
): FC<Omit<P, keyof WithRangeDatepickerServiceProps>> => {
	const WithRangeDatepickerService: FC<
		Omit<P, keyof WithRangeDatepickerServiceProps>
	> = (props) => {
		const [startDate, setStartDate] = useState<Date | null>(
			props.defaultValue || null
		);
		const [endDate, setEndDate] = useState<Date | null>(null);

		const handleDateSelect = (date: Date) => {
			rangeDatepickerServiceInstance.selectDate(date);
			setStartDate(rangeDatepickerServiceInstance.getStartDate());
			setEndDate(rangeDatepickerServiceInstance.getEndDate());
		};

		const handleStartDateSelect = (date: Date | null) => {
			rangeDatepickerServiceInstance.selectStartDate(date);
			setStartDate(rangeDatepickerServiceInstance.getStartDate());
		};

		const handleEndDateSelect = (date: Date | null) => {
			rangeDatepickerServiceInstance.selectEndDate(date);
			setEndDate(rangeDatepickerServiceInstance.getEndDate());
		};

		const handleClearStartDate = () => {
			rangeDatepickerServiceInstance.clearStartDate();
			setStartDate(rangeDatepickerServiceInstance.getStartDate());
		};

		const handleClearEndDate = () => {
			rangeDatepickerServiceInstance.clearEndDate();
			setEndDate(rangeDatepickerServiceInstance.getEndDate());
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
