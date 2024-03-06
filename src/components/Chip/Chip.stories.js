import React from 'react';
import { validColors } from 'components/Button/utils';
import icons from '../Icon/icons.json';
import Chip from './Chip';

const control = {
	type: 'select',
	options: validColors.reduce((options, color) => {
		options[color] = color;
		return options;
	}, {})
};

export default {
	title: 'Components/Chip',
	component: Chip,
	parameters: {
		layout: 'centered'
	},
	argTypes: {
		variant: ['cleaned', 'contained', 'outlined'],
		backgroundColor: { control },
		textColor: { control },
		borderColor: { control },
		color: { control },
		iconColor: { control },
		icon: {
			type: 'select',
			options: Object.keys(icons)
		}
	}
};

const Template = (args) => <Chip {...args} />;

const baseArgs = {
	children: 'Chip',
	variant: 'contained',
	onDelete: false
};

export const Contained = Template.bind({});
export const Outlined = Template.bind({});
export const Status = Template.bind({});

Contained.args = {
	...baseArgs,
	color: 'red'
};

Outlined.args = {
	...baseArgs,
	variant: 'outlined'
};

Status.args = {
	...baseArgs,
	variant: 'status'
};
