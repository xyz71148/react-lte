import blacklist from 'blacklist';
import Item from './Item';
import ItemContent from './ItemContent';
import ItemInner from './ItemInner';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'Input'
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.node,
		disabled: PropTypes.bool
	}

	render () {
		var inputProps = blacklist(this.props, 'children', 'className');

		return (
			<Item selectable={this.props.disabled} className={this.props.className} component="label">
				<ItemInner>
					<ItemContent component="label">
						<textarea className="field" rows={3} {...inputProps} />
					</ItemContent>
					{this.props.children}
				</ItemInner>
			</Item>
		);
	}
}
