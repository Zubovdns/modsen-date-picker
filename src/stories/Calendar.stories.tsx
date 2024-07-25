import { Calendar } from '@src/components';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta<typeof Calendar> = {
	title: 'Calendar',
	component: Calendar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
