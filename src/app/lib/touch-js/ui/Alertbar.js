import classnames from 'classnames';
import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

module.exports = React.createClass({
	displayName: 'Alertbar',
	propTypes: {
		animated: PropTypes.bool,
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		pulse: PropTypes.bool,
		type: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
		visible: PropTypes.bool
	},

	getDefaultProps () {
		return {
			type: 'default'
		};
	},

	render () {
		var className = classnames('Alertbar', ('Alertbar--' + this.props.type), {
			'Alertbar--animated': this.props.animated,
			'Alertbar--pulse': this.props.pulse
		}, this.props.className);

		var pulseWrap = this.props.pulse ? <div className="Alertbar__inner">{this.props.children}</div> : this.props.children;
		var animatedBar = this.props.visible ? <div className={className}>{pulseWrap}</div> : null;

		var component = this.props.animated ? (
			<ReactCSSTransitionGroup transitionName="Alertbar" transitionEnterTimeout={300} transitionLeaveTimeout={300} component="div">
				{animatedBar}
			</ReactCSSTransitionGroup>
		) : <div className={className}>{pulseWrap}</div>;

		return component;
	}
});
