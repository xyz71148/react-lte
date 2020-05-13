import blacklist from 'blacklist';
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Tappable from "lib/tappable"

class Link extends Component {

	static contextTypes = {
		app: PropTypes.object
	}

	transitionTo (view, opts) {
		this.context.app.transitionTo(view, opts);
	}

	static propTypes= {
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
			<Tappable onTap={this.doTransition.bind(this)} {...tappableProps}>
				{this.props.children}
			</Tappable>
		);
	}
}

export default Link;
