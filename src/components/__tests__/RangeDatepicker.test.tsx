import { render } from '@testing-library/react';

import Calendar from '../Calendar';
import withRangeDatepicker from '../RangeDatepicker/RangeDatepicker.decorator';

describe('withRangeDatepicker HOC', () => {
	test('должен рендерить обернутый компонент', () => {
		const CalendarWithDatepicker = withRangeDatepicker(Calendar);
		const { getByText } = render(<CalendarWithDatepicker />);

		const currentMonthYear = new Date().toLocaleString('default', {
			month: 'long',
			year: 'numeric',
		});
		expect(getByText(currentMonthYear)).toBeInTheDocument();
	});

	test('должен добавлять правильный aria-label к обернутому компоненту', () => {
		const CalendarWithDatepicker = withRangeDatepicker(Calendar);
		const { getByLabelText } = render(<CalendarWithDatepicker />);

		expect(getByLabelText('range-datepicker-wrapper')).toBeInTheDocument();
	});
});
