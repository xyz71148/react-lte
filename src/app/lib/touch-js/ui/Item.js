import blacklist from 'blacklist';
import classnames from 'classnames';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName= 'Item'

	static propTypes= {
		children: PropTypes.node.isRequired,
		component: PropTypes.any,
		className: PropTypes.string,
		showDisclosureArrow: PropTypes.bool
	}

	static defaultProps= {
		component: 'div'
	}

	render () {
		var componentClass = classnames('Item', {
			'Item--has-disclosure-arrow': this.props.showDisclosureArrow
		}, this.props.className);

		var props = blacklist(this.props, 'children', 'className', 'showDisclosureArrow');
		props.className = componentClass;

		return React.createElement(
			this.props.component,
			props,
			this.props.children
		);
	}
}