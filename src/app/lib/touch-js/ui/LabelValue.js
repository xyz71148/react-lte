import classnames from 'classnames';
import FieldControl from './FieldControl';
import Item from './Item';
import ItemInner from './ItemInner';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'LabelValue'

	static propTypes = {
		alignTop: PropTypes.bool,
		className: PropTypes.string,
		label: PropTypes.string,
		placeholder: PropTypes.string,
		value: PropTypes.string
	}

	render () {
		return (
			<Item alignTop={this.props.alignTop} className={this.props.className} component="label">
				<ItemInner>
					<div className="FieldLabel">{this.props.label}</div>
					<FieldControl>
						<div className={classnames('field', this.props.value ? 'u-selectable' : 'field-placeholder')}>
							{this.props.value || this.props.placeholder}
						</div>
					</FieldControl>
				</ItemInner>
			</Item>
		);
	}
}
