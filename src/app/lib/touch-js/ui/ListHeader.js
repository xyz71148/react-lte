import blacklist from 'blacklist';
import classNames from 'classnames';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'ListHeader'

	static propTypes = {
		className: PropTypes.string,
		sticky: PropTypes.bool
	}

	render () {
		var className = classNames('list-header', {
			'sticky': this.props.sticky
		}, this.props.className);

		var props = blacklist(this.props, 'sticky');

		return <div className={className} {...props} />;
	}
}
