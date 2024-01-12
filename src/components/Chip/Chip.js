import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styled from './styles';

const Chip = ({
	backgroundColor,
	borderColor,
	children,
	disabled,
	icon,
	iconColor,
	onClick,
	onDelete,
	selected,
	textColor,
	variant,
	hasLink,
	...props
}) => {
	if (!children && !icon) return null;

	return (
		<styled.Chip
			as={props.onClick ? 'button' : 'div'}
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			hasIcon={!!icon}
			disabled={disabled}
			clickable={(onClick || onDelete) && !disabled}
			onClick={disabled ? undefined : onClick}
			selected={selected}
			textColor={textColor}
			variant={variant}
			iconColor={iconColor}
			hasLink={hasLink}
			onlyIcon={!children && icon}
			{...props}
		>
			{icon && (
				<Icon
					className="chip-icon"
					name={icon}
					color={iconColor}
					pathStyles={styled.iconPathStyles}
				/>
			)}
			{children && <styled.Children>{children}</styled.Children>}
			{onDelete && (
				<styled.DeleteButton type="button" onClick={onDelete}>
					<Icon
						color={iconColor}
						pathStyles={styled.deleteButtonPathStyles}
						className="delete-button"
						name="cross_circle_flat"
						size={16}
					/>
				</styled.DeleteButton>
			)}
		</styled.Chip>
	);
};

Chip.propTypes = {
	backgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
	children: PropTypes.node,
	// Si es true deshabilita el chip
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	iconColor: PropTypes.string,
	onClick: PropTypes.func,
	onDelete: PropTypes.func,
	// Si es true mantiene el chip seleccionado
	selected: PropTypes.bool,
	styles: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func]))
	]),
	textColor: PropTypes.string,
	variant: PropTypes.oneOf(['contained', 'outlined', 'status']),
	hasLink: PropTypes.bool
};

Chip.defaultProps = {
	backgroundColor: '',
	borderColor: '',
	disabled: false,
	iconColor: 'grey',
	selected: false,
	textColor: '',
	variant: 'outlined',
	hasLink: false
};

export default Chip;
