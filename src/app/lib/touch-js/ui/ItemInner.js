import classnames from 'classnames';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'ItemInner'

	static propTypes= {
		children: PropTypes.node.isRequired,
		className: PropTypes.string
	}

	render () {
		var className = classnames('Item__inner', this.props.className);

		return <div className={className} {... this.props} />;
	}
}
