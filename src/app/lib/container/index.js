import "./react-container.css"
import React,{Component} from 'react';
import PropTypes from 'prop-types';
var blacklist = require('blacklist');
var classnames = require('classnames');
var ReactDOM = require('react-dom');
function hasChildrenWithVerticalFill(children) {
	var result = false;
	React.Children.forEach(children, (c) => {
		if (result) return; // early-exit
		if (!c) return;
		if (!c.type.shouldFillVerticalSpace) return
		result = !!c.type.shouldFillVerticalSpace;
	});

	return result;
}
class Container extends Component {
	static propTypes = {
		align: PropTypes.oneOf(['end', 'center', 'start']),
		direction: PropTypes.oneOf(['column', 'row']),
		fill: PropTypes.bool,
		grow: PropTypes.bool,
		justify: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.oneOf(['end', 'center', 'start'])
		]),
		scrollable: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.object
		])
	}
	componentDidMount () {
		if (this.props.scrollable && this.props.scrollable.mount) {
			this.props.scrollable.mount(this);
		}
	}
	componentWillUnmount () {
		if (this.props.scrollable && this.props.scrollable.unmount) {
			this.props.scrollable.unmount(this);
		}
	}
	render () {
		var direction = this.props.direction;
		if (!direction) {
			if (hasChildrenWithVerticalFill(this.props.children)) {
				direction = 'column';
			}
		}

		var fill = this.props.fill;
		if (direction === 'column' || this.props.scrollable) {
			fill = true;
		}

		var align = this.props.align;
		if (direction === 'column' && align === 'top') align = 'start';
		if (direction === 'column' && align === 'bottom') align = 'end';
		if (direction === 'row' && align === 'left') align = 'start';
		if (direction === 'row' && align === 'right') align = 'end';

		var className = classnames(this.props.className, {
			'Container--fill': fill,
			'Container--direction-column': direction === 'column',
			'Container--direction-row': direction === 'row',
			'Container--align-center': align === 'center',
			'Container--align-start': align === 'start',
			'Container--align-end': align === 'end',
			'Container--justify-center': this.props.justify === 'center',
			'Container--justify-start': this.props.justify === 'start',
			'Container--justify-end': this.props.justify === 'end',
			'Container--justified': this.props.justify === true,
			'Container--scrollable': this.props.scrollable
		});

		var props = blacklist(this.props, 'className', 'direction', 'fill', 'justify', 'scrollable');

		return (
			<div className={className} {...props}>
				{this.props.children}
			</div>
		);
	}
}

function initScrollable(defaultPos) {
	if (!defaultPos) {
		defaultPos = {};
	}
	var pos;
	var scrollable = {
		reset () {
			pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
		},
		getPos () {
			return { left: pos.left, top: pos.top };
		},
		mount (element) {
			var node = ReactDOM.findDOMNode(element);
			node.scrollLeft = pos.left;
			node.scrollTop = pos.top;
		},
		unmount (element) {
			var node = ReactDOM.findDOMNode(element);
			pos.left = node.scrollLeft;
			pos.top = node.scrollTop;
		}
	};
	scrollable.reset();
	return scrollable;
}

Container.initScrollable = initScrollable;

export default Container;
