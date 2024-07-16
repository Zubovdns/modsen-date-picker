import { Datepicker } from '@src/components';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta<typeof Datepicker> = {
	title: 'Datepicker',
	component: Datepicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		withExtraDays: {
			control: 'boolean',
		},
		withHolidays: {
			control: 'boolean',
		},
		startDayOfWeek: {
			control: 'radio',
			options: ['monday', 'sunday'],
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
