import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Mixin,{propTypes,defaultProps} from "./TappableMixin";
import mixin from 'es6-react-mixins';
import ReactDOM from 'react-dom';

var touchStyles = require('./touchStyles');


function getTouchProps (touch) {
	if (!touch) return {};
	return {
		pageX: touch.pageX,
		pageY: touch.pageY,
		clientX: touch.clientX,
		clientY: touch.clientY
	};
}

class Tappable extends Component{

	displayName='Tappable'

	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			touchActive: false,
			pinchActive: false
		}
	}

	static propTypes = {
		component: PropTypes.any,           // component to create
		className: PropTypes.string,        // optional className
		class_base: PropTypes.string,        // base for generated classNames
		classes: PropTypes.object,          // object containing the active and inactive class names
		style: PropTypes.object,            // additional style properties for the component
		disabled: PropTypes.bool            // only applies to buttons
	}


	componentWillUnmount() {
		this.cleanupScrollDetection();
		this.cancelPressDetection();
		this.clearActiveTimeout();
	}

	processEvent(event) {
		if (this.props.preventDefault) event.preventDefault();
		if (this.props.stopPropagation) event.stopPropagation();
	}

	onTouchStart(event) {
		if (this.props.onTouchStart && this.props.onTouchStart(event) === false) return;
		this.processEvent(event);
		window._blockMouseEvents = true;
		if (event.touches.length === 1) {
			this._initialTouch = this._lastTouch = getTouchProps(event.touches[0]);
			this.initScrollDetection();
			this.initPressDetection(event, this.endTouch);
			this._activeTimeout = setTimeout(this.makeActive, this.props.active_delay);
		} else if (this.onPinchStart &&
			(this.props.onPinchStart || this.props.onPinchMove || this.props.onPinchEnd) &&
			event.touches.length === 2) {
			this.onPinchStart(event);
		}
	}

	makeActive() {
		if (!this.isMounted()) return;
		this.clearActiveTimeout();
		this.setState({
			isActive: true
		});
	}

	clearActiveTimeout() {
		clearTimeout(this._activeTimeout);
		this._activeTimeout = false;
	}

	initScrollDetection() {
		this._scrollPos = { top: 0, left: 0 };
		this._scrollParents = [];
		this._scrollParentPos = [];
		var node = ReactDOM.findDOMNode(this);

		while (node) {
			if (node.scrollHeight > node.offsetHeight || node.scrollWidth > node.offsetWidth) {
				this._scrollParents.push(node);
				this._scrollParentPos.push(node.scrollTop + node.scrollLeft);
				this._scrollPos.top += node.scrollTop;
				this._scrollPos.left += node.scrollLeft;
			}

			node = node.parentNode;
		}
	}

	calculateMovement(touch) {
		return {
			x: Math.abs(touch.clientX - this._initialTouch.clientX),
			y: Math.abs(touch.clientY - this._initialTouch.clientY)
		};
	}

	detectScroll() {
		var currentScrollPos = { top: 0, left: 0 };
		for (var i = 0; i < this._scrollParents.length; i++) {
			currentScrollPos.top += this._scrollParents[i].scrollTop;
			currentScrollPos.left += this._scrollParents[i].scrollLeft;
		}
		return !(currentScrollPos.top === this._scrollPos.top && currentScrollPos.left === this._scrollPos.left);
	}

	cleanupScrollDetection() {
		this._scrollParents = undefined;
		this._scrollPos = undefined;
	}

	initPressDetection(event, callback) {
		if (!this.props.onPress) return;
		this._pressTimeout = setTimeout(function () {
			this.props.onPress(event);
			callback();
		}.bind(this), this.props.pressDelay);
	}

	cancelPressDetection() {
		clearTimeout(this._pressTimeout);
	}

	onTouchMove(event) {
		if (this._initialTouch) {
			this.processEvent(event);

			if (this.detectScroll()) return this.endTouch(event);

			this.props.onTouchMove && this.props.onTouchMove(event);
			this._lastTouch = getTouchProps(event.touches[0]);
			var movement = this.calculateMovement(this._lastTouch);
			if (movement.x > this.props.pressMoveThreshold || movement.y > this.props.pressMoveThreshold) {
				this.cancelPressDetection();
			}
			if (movement.x > this.props.moveThreshold || movement.y > this.props.moveThreshold) {
				if (this.state.isActive) {
					this.setState({
						isActive: false
					});
				} else if (this._activeTimeout) {
					this.clearActiveTimeout();
				}
			} else {
				if (!this.state.isActive && !this._activeTimeout) {
					this.setState({
						isActive: true
					});
				}
			}
		} else if (this._initialPinch && event.touches.length === 2 && this.onPinchMove) {
			this.onPinchMove(event);
			event.preventDefault();
		}
	}

	onTouchEnd(event) {
		if (this._initialTouch) {
			this.processEvent(event);
			var afterEndTouch;
			var movement = this.calculateMovement(this._lastTouch);
			if (movement.x <= this.props.moveThreshold && movement.y <= this.props.moveThreshold && this.props.onTap) {
				event.preventDefault();
				afterEndTouch = () => {
					var finalParentScrollPos = this._scrollParents.map(node => node.scrollTop + node.scrollLeft);
					var stoppedMomentumScroll = this._scrollParentPos.some((end, i) => {
						return end !== finalParentScrollPos[i];
					});
					if (!stoppedMomentumScroll) {
						this.props.onTap(event);
					}
				};
			}
			this.endTouch(event, afterEndTouch);
		} else if (this.onPinchEnd && this._initialPinch && (event.touches.length + event.changedTouches.length) === 2) {
			this.onPinchEnd(event);
			event.preventDefault();
		}
	}

	endTouch(event, callback) {
		this.cancelPressDetection();
		this.clearActiveTimeout();
		if (event && this.props.onTouchEnd) {
			this.props.onTouchEnd(event);
		}
		this._initialTouch = null;
		this._lastTouch = null;
		if (callback) {
			callback();
		}
		if (this.state.isActive) {
			this.setState({
				isActive: false
			});
		}
	}

	onMouseDown(event) {
		if (window._blockMouseEvents) {
			window._blockMouseEvents = false;
			return;
		}
		if (this.props.onMouseDown && this.props.onMouseDown(event) === false) return;
		this.processEvent(event);
		this.initPressDetection(event, this.endMouseEvent);
		this._mouseDown = true;
		this.setState({
			isActive: true
		});
	}

	onMouseMove(event) {
		if (window._blockMouseEvents || !this._mouseDown) return;
		this.processEvent(event);
		this.props.onMouseMove && this.props.onMouseMove(event);
	}

	onMouseUp(event) {
		if (window._blockMouseEvents || !this._mouseDown) return;
		this.processEvent(event);
		this.props.onMouseUp && this.props.onMouseUp(event);
		this.props.onTap && this.props.onTap(event);
		this.endMouseEvent();
	}

	onMouseOut(event) {
		if (window._blockMouseEvents || !this._mouseDown) return;
		this.processEvent(event);
		this.props.onMouseOut && this.props.onMouseOut(event);
		this.endMouseEvent();
	}

	endMouseEvent() {
		this.cancelPressDetection();
		this._mouseDown = false;
		this.setState({
			isActive: false
		});
	}

	cancelTap() {
		this.endTouch();
		this._mouseDown = false;
	}

	handlers() {
		return {
			onTouchStart: this.onTouchStart.bind(this),
			onTouchMove: this.onTouchMove.bind(this),
			onTouchEnd: this.onTouchEnd.bind(this),
			onMouseDown: this.onMouseDown.bind(this),
			onMouseUp: this.onMouseUp.bind(this),
			onMouseMove: this.onMouseMove.bind(this),
			onMouseOut: this.onMouseOut.bind(this)
		};
	}

	render () {
		var props = this.props;
		var className = props.class_base + (this.state.isActive ? '-active' : '-inactive');

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
		delete newComponentProps.handlers;
		if(!props.component) return null
		return React.createElement(props.component, newComponentProps, props.children);
	}
}

Tappable.propTypes = propTypes

Tappable.defaultProps =  {
	component: 'span',
	class_base: 'Tappable',
	...defaultProps
}

export default Tappable
