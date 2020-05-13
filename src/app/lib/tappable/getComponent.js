import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Mixin from "./TappableMixin";

var touchStyles = require('./touchStyles');



/**
 * Tappable Component
 * ==================
 */
export default function () {

	class C extends Component{
		constructor(props) {
			super(props);
			Object.assign(this, Mixin);
			this.state = {
				isActive: false,
				touchActive: false,
				pinchActive: false
			}
		}
		displayName='Tappable'

		static propTypes = {
			component: PropTypes.any,           // component to create
			className: PropTypes.string,        // optional className
			classBase: PropTypes.string,        // base for generated classNames
			classes: PropTypes.object,          // object containing the active and inactive class names
			style: PropTypes.object,            // additional style properties for the component
			disabled: PropTypes.bool            // only applies to buttons
		}

		static defaultProps = {
			component: 'span',
			classBase: 'Tappable'
		}

		render () {
			var props = this.props;
			var className = props.classBase + (this.state.isActive ? '-active' : '-inactive');

			if (props.className) {
				className += ' ' + props.className;
			}

			if (props.classes) {
				className += ' ' + (this.state.isActive ? props.classes.active : props.classes.inactive);
			}

			var style = {};
			Object.assign(style, touchStyles, props.style);

			var newComponentProps = Object.assign({}, props, {
				style: style,
				className: className,
				disabled: props.disabled,
				handlers: this.handlers
			}, this.handlers());

			delete newComponentProps.onTap;
			delete newComponentProps.onPress;
			delete newComponentProps.onPinchStart;
			delete newComponentProps.onPinchMove;
			delete newComponentProps.onPinchEnd;
			delete newComponentProps.moveThreshold;
			delete newComponentProps.pressDelay;
			delete newComponentProps.pressMoveThreshold;
			delete newComponentProps.preventDefault;
			delete newComponentProps.stopPropagation;
			delete newComponentProps.component;

			return React.createElement(props.component, newComponentProps, props.children);
		}
	}
	return C
};
