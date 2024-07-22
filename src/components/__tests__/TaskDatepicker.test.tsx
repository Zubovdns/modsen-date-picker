import { render } from '@testing-library/react';

import Calendar from '../Calendar';
import withTaskDatepicker from '../TaskDatepicker/TaskDatepicker.decorator';

describe('withTaskDatepicker HOC', () => {
	test('должен рендерить обернутый компонент', () => {
		const CalendarWithDatepicker = withTaskDatepicker(Calendar);
		const { getByText } = render(<CalendarWithDatepicker />);

		const currentMonthYear = new Date().toLocaleString('default', {
			month: 'long',
			year: 'numeric',
		});
		expect(getByText(currentMonthYear)).toBeInTheDocument();
	});

	test('должен добавлять правильный aria-label к обернутому компоненту', () => {
		const CalendarWithDatepicker = withTaskDatepicker(Calendar);
		const { getByLabelText } = render(<CalendarWithDatepicker />);

		expect(getByLabelText('task-datepicker-wrapper')).toBeInTheDocument();
	});
});
