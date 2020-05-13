import blacklist from 'blacklist';
import FieldControl from './FieldControl';
import Item from './Item';
import ItemInner from './ItemInner';
import React,{Component} from 'react';
import Tappable from 'lib/tappable';
import PropTypes from 'prop-types';

// Many input types DO NOT support setSelectionRange.
// Email will show an error on most desktop browsers but works on
// mobile safari + WKWebView, which is really what we care about
const SELECTABLE_INPUT_TYPES = {
	'email': true,
	'password': true,
	'search': true,
	'tel': true,
	'text': true,
	'url': true
};

export default class extends Component{
	displayName = 'LabelInput'

	static propTypes = {
		alignTop: PropTypes.bool,
		autoFocus: PropTypes.bool,
		children: PropTypes.node,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		label: PropTypes.string,
		readOnly: PropTypes.bool,
		value: PropTypes.string
	}

	componentDidMount () {
		if (this.props.autoFocus) {
			this.moveCursorToEnd();
		}
	}

	moveCursorToEnd () {
		var target = this.refs.focusTarget.getDOMNode();
		var endOfString = target.value.length;

		if (SELECTABLE_INPUT_TYPES.hasOwnProperty(target.type)) {
			target.focus();
			target.setSelectionRange(endOfString, endOfString);
		}
	}

	render () {
		var inputProps = blacklist(this.props, 'alignTop', 'children', 'first', 'readOnly');
		var renderInput = this.props.readOnly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<input ref="focusTarget" className="field" type="text" {... inputProps} />
		);

		return (
			<Item alignTop={this.props.alignTop} selectable={this.props.disabled} className={this.props.className} component="label">
				<ItemInner>
					<Tappable onTap={this.moveCursorToEnd} className="FieldLabel">{this.props.label}</Tappable>
					<FieldControl>
						{renderInput}
						{this.props.children}
					</FieldControl>
				</ItemInner>
			</Item>
		);
	}
}
