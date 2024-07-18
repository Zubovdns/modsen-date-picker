export type DateInputProps = {
	value: Date | null;
	onChange: (date: Date | null) => void;
	onClear: () => void;
	label: string;
};
