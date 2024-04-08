import React from 'react';
import Skeleton from './Skeleton';
import viewsPalette from 'theme/palette';

const control = {
	type: 'select',
	options: Object.keys(viewsPalette).reduce((options, colorName) => {
		options[colorName] = viewsPalette[colorName];
		return options;
	}, {})
};

export default {
	title: 'Components/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered'
	},
	argTypes: {
		backgroundColor: { control }
	}
};

const Template = (args) => (
	<div style={{ display: 'flex', gap: '3px' }}>
		<Skeleton {...args} />
	</div>
);

const baseArgs = {
	width: '100px',
	height: '100px'
};

export const Rounded = Template.bind({});
export const Square = Template.bind({});

Rounded.args = {
	circle: true,
	...baseArgs
};

Square.args = {
	...baseArgs,
	height: '20px'
};
