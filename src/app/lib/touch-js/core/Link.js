import blacklist from 'blacklist';
import React,{Component} from 'react';
import Transitions from '../mixins/Transitions';
import PropTypes from 'prop-types';

class Link extends Component {
	mixins= [Transitions]
	propTypes= {
		children: PropTypes.any,
		options: PropTypes.object,
		transition: PropTypes.string,
		to: PropTypes.string,
		viewProps: PropTypes.any
	}

	doTransition () {
		var options = Object.assign({ viewProps: this.props.viewProps, transition: this.props.transition }, this.props.options);
		console.info('Link to "' + this.props.to + '" using transition "' + this.props.transition + '"' + ' with props ', this.props.viewProps);
		this.transitionTo(this.props.to, options);
	}

	render () {
		var tappableProps = blacklist(this.props, 'children', 'options', 'transition', 'viewProps');

		return (
			<div {...tappableProps}>
				{this.props.children}
			</div>
		);
	}
}

export default Link;
