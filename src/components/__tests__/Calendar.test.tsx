import { fireEvent, render, screen } from '@testing-library/react';

import Calendar from '../Calendar';

describe('Calendar Component', () => {
	test('должен отображать текущий месяц и год в представлении "дни"', () => {
		render(<Calendar />);
		const currentMonthYear = new Date().toLocaleString('default', {
			month: 'long',
			year: 'numeric',
		});
		expect(screen.getByText(currentMonthYear)).toBeInTheDocument();
	});

	test('должен переключаться на предыдущий месяц при клике на кнопку "Prev"', () => {
		render(<Calendar />);
		const prevButton = screen.getByRole('button', { name: /Prev/i });
		fireEvent.click(prevButton);
		const prevMonth = new Date();
		prevMonth.setMonth(prevMonth.getMonth() - 1);
		const prevMonthYear = prevMonth.toLocaleString('default', {
			month: 'long',
			year: 'numeric',
		});
		expect(screen.getByText(prevMonthYear)).toBeInTheDocument();
	});

	test('должен переключаться на следующий месяц при клике на кнопку "Next"', () => {
		render(<Calendar />);
		const nextButton = screen.getByRole('button', { name: /Next/i });
		fireEvent.click(nextButton);
		const nextMonth = new Date();
		nextMonth.setMonth(nextMonth.getMonth() + 1);
		const nextMonthYear = nextMonth.toLocaleString('default', {
			month: 'long',
			year: 'numeric',
		});
		expect(screen.getByText(nextMonthYear)).toBeInTheDocument();
	});

	test('должен переключаться на представление "месяцы" при клике на заголовок', () => {
		render(<Calendar />);
		const headerTitle = screen.getByText(
			new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
		);
		fireEvent.click(headerTitle);
		expect(
			screen.getByText(new Date().getFullYear().toString())
		).toBeInTheDocument();
	});

	test('должен переключаться на представление "годы" при клике на заголовок дважды', () => {
		render(<Calendar />);
		const headerTitle = screen.getByText(
			new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
		);
		fireEvent.click(headerTitle);
		fireEvent.click(screen.getByText(new Date().getFullYear().toString()));
		expect(screen.getByText(/Back/i)).toBeInTheDocument();
	});

	test('должен переключаться обратно на представление "дни" при клике на заголовок трижды', () => {
		render(<Calendar />);
		const headerTitle = screen.getByText(
			new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
		);
		fireEvent.click(headerTitle);
		fireEvent.click(screen.getByText(new Date().getFullYear().toString()));
		fireEvent.click(screen.getByText(/Back/i));
		expect(
			screen.getByText(
				new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
			)
		).toBeInTheDocument();
	});
});
