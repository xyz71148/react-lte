import classnames from 'classnames';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'ItemNote'
	static propTypes = {
		className: PropTypes.string,
		icon: PropTypes.string,
		label: PropTypes.string,
		type: PropTypes.string
	}
	static defaultProps  = {
		type: 'default'
	}
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
}
