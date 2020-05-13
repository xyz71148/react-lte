import blacklist from 'blacklist';
import classnames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'LabelTextarea',

	propTypes: {
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		first: PropTypes.bool,
		label: PropTypes.string,
		readOnly: PropTypes.bool,
		value: PropTypes.string
	},

	getDefaultProps () {
		return {
			rows: 3
		};
	},

	render () {
		var className = classnames(this.props.className, 'list-item', 'field-item', 'align-top', {
			'is-first': this.props.first,
			'u-selectable': this.props.disabled
		});

		var props = blacklist(this.props, 'children', 'className', 'disabled', 'first', 'label', 'readOnly');

		var renderInput = this.props.readOnly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<textarea {...props} className="field" />
		);

		return (
			<div className={className}>
				<label className="item-inner">
					<div className="field-label">{this.props.label}</div>
					<div className="field-control">
						{renderInput}
						{this.props.children}
					</div>
				</label>
			</div>
		);
	}
});
