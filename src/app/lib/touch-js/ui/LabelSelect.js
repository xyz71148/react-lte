import FieldControl from './FieldControl';
import FieldLabel from './FieldLabel';
import Item from './Item';
import ItemInner from './ItemInner';
import React from 'react';

module.exports = React.createClass({
	displayName: 'LabelSelect',
	propTypes: {
		className: PropTypes.string,
		disabled: PropTypes.bool,
		label: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		options: PropTypes.array.isRequired,
		value: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		])
	},

	getDefaultProps () {
		return {
			className: ''
		};
	},

	renderOptions () {
		return this.props.options.map(op => {
			return (
				<option key={'option-' + op.value} value={op.value}>
					{op.label}
				</option>
			);
		});
	},

	render () {
		return (
			<Item className={this.props.className} component="label">
				<ItemInner>
					<FieldLabel>{this.props.label}</FieldLabel>
					<FieldControl>
						<select disabled={this.props.disabled} value={this.props.value} onChange={this.props.onChange} className="select-field">
							{this.renderOptions()}
						</select>
						<div className="select-field-indicator">
							<div className="select-field-indicator-arrow" />
						</div>
					</FieldControl>
				</ItemInner>
			</Item>
		);
	}
});
