import { render } from '@testing-library/react';

import Calendar from '../Calendar';
import withDatepicker from '../Datepicker/Datepicker.decorator';

describe('withDatepicker HOC', () => {
	test('должен рендерить обернутый компонент', () => {
		const CalendarWithDatepicker = withDatepicker(Calendar);
		const { getByText } = render(<CalendarWithDatepicker />);

		const currentMonthYear = new Date().toLocaleString('default', {
			month: 'long',
			year: 'numeric',
		});
		expect(getByText(currentMonthYear)).toBeInTheDocument();
	});

	test('должен добавлять правильный aria-label к обернутому компоненту', () => {
		const CalendarWithDatepicker = withDatepicker(Calendar);
		const { getByLabelText } = render(<CalendarWithDatepicker />);

		expect(getByLabelText('datepicker-wrapper')).toBeInTheDocument();
	});
});
