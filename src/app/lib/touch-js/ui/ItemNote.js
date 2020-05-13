import classnames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'ItemNote',
	propTypes: {
		className: PropTypes.string,
		icon: PropTypes.string,
		label: PropTypes.string,
		type: PropTypes.string
	},
	getDefaultProps () {
		return {
			type: 'default'
		};
	},
	render () {
		var className = classnames('Item__note', (
			'Item__note--' + this.props.type
		), this.props.className);

		// elements
		var label = this.props.label ? (
			<div className="Item__note__label">{this.props.label}</div>
		) : null;
		var icon = this.props.icon ? (
			<div className={'Item__note__icon ' + this.props.icon} />
		) : null;

		return (
			<div className={className}>
				{label}
				{icon}
			</div>
		);
	}
});
