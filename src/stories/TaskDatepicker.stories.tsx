import TaskDatepicker from '@src/components/TaskDatepicker';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta<typeof TaskDatepicker> = {
	title: 'Task Datepicker',
	component: TaskDatepicker,
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
