import RangeDatepicker from '@src/components/RangeDatepicker';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta<typeof RangeDatepicker> = {
	title: 'Range Datepicker',
	component: RangeDatepicker,
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
