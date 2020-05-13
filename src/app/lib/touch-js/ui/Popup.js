import classnames from 'classnames';
import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'Popup'

	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
		visible: PropTypes.bool
	}

	static defaultProps = {
		transition: 'none'
	}

	renderBackdrop () {
		if (!this.props.visible) return null;
		return <div className="Popup-backdrop" />;
	}

	renderDialog () {
		if (!this.props.visible) return null;

		// Set classnames
		var dialogClassName = classnames('Popup-dialog', this.props.className);

		return (<div className={dialogClassName}>
			{this.props.children}
		</div>);
	}

	render () {
		return (
			<div className="Popup">
				<ReactCSSTransitionGroup transitionName="Popup-dialog" transitionEnterTimeout={300} transitionLeaveTimeout={300} component="div">
					{this.renderDialog()}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="Popup-background" transitionEnterTimeout={300} transitionLeaveTimeout={300} component="div">
					{this.renderBackdrop()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
