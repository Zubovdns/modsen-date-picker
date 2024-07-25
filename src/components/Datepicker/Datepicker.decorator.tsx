import { ComponentType, FC, useState } from 'react';

import { CalendarProps } from '../Calendar/types';
import DateInput from '../DateInput';
import { ErrorBoundary } from '../ErrorBoundary';

import { datepickerServiceInstance } from './Datepicker.service';
import { DatepickerContainer } from './styled';
import { WithDatepickerServiceProps } from './types';

const withDatepickerService = <P extends CalendarProps>(
	WrappedComponent: ComponentType<P>
): FC<Omit<P, keyof WithDatepickerServiceProps>> => {
	const WithDatepickerService: FC<Omit<P, keyof WithDatepickerServiceProps>> = (
		props
	) => {
		const [selectedDate, setSelectedDate] = useState<Date | null>(
			props.defaultValue || new Date()
		);

		const handleDateSelect = (date: Date | null) => {
			setSelectedDate(date);
			datepickerServiceInstance.selectDate(date);
		};

		const handleClear = () => {
			setSelectedDate(null);
			datepickerServiceInstance.clearDate();
		};

		return (
			<ErrorBoundary>
				<DatepickerContainer aria-label='datepicker-wrapper'>
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
