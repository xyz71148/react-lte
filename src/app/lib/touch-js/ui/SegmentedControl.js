import classnames from 'classnames';
import React from 'react';
import Tappable from 'lib/tappable';

module.exports = React.createClass({
	displayName: 'SegmentedControl',

	propTypes: {
		className: PropTypes.string,
		equalWidthSegments: PropTypes.bool,
		isInline: PropTypes.bool,
		hasGutter: PropTypes.bool,
		onChange: PropTypes.func.isRequired,
		options: PropTypes.array.isRequired,
		type: PropTypes.string,
		value: PropTypes.string
	},

	getDefaultProps () {
		return {
			type: 'primary'
		};
	},

	onChange (value) {
		this.props.onChange(value);
	},

	render () {
		var componentClassName = classnames('SegmentedControl', ('SegmentedControl--' + this.props.type), {
			'SegmentedControl--inline': this.props.isInline,
			'SegmentedControl--has-gutter': this.props.hasGutter,
			'SegmentedControl--equal-widths': this.props.equalWidthSegments
		}, this.props.className);
		var self = this;

		var options = this.props.options.map(function (op) {
			function onChange () {
				self.onChange(op.value);
			}

			var itemClassName = classnames('SegmentedControl__item', {
				'is-selected': op.value === self.props.value
			});

			return (<Tappable key={'option-' + op.value} onTap={onChange} className={itemClassName}>
				{op.label}
			</Tappable>);
		});

		return <div className={componentClassName}>{options}</div>;
	}
});
