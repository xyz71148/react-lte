import blacklist from 'blacklist';
import classnames from 'classnames';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName= 'GroupInner'
	static propTypes = {
		children: PropTypes.node.isRequired,
		className: PropTypes.string
	}
	render () {
		var className = classnames('Group__inner', this.props.className);
		var props = blacklist(this.props, 'className');

		return (
			<div className={className} {...props} />
		);
	}
}
