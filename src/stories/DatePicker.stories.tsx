import { DatePicker } from '@src/components';
import { Meta, StoryObj } from '@storybook/react/*';

const meta: Meta<typeof DatePicker> = {
	title: 'Example/Button',
	component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
