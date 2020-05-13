import classnames from 'classnames';
import Item from './Item';
import ItemInner from './ItemInner';
import ItemNote from './ItemNote';
import ItemTitle from './ItemTitle';
import React,{Component} from 'react';
import Tappable from 'lib/tappable';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'RadioList'

	static propTypes = {
		options: PropTypes.array.isRequired,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		icon: PropTypes.string,
		onChange: PropTypes.func
	}

	onChange (value) {
		this.props.onChange(value);
	}

	render () {
		var self = this;
		var options = this.props.options.map(function (op, i) {
			var iconClassname = classnames('item-icon primary', op.icon);
			var checkMark = op.value === self.props.value ? (
				<ItemNote type="primary" icon="ion-checkmark" />
			) : null;
			var icon = op.icon ? (<div className="item-media"><span className={iconClassname} /></div>) : null;

			function onChange () {
				self.onChange(op.value);
			}

			return (
				<Tappable key={'option-' + i} onTap={onChange}>
					<Item key={'option-' + i} onTap={onChange}>
						{icon}
						<ItemInner>
							<ItemTitle>{op.label}</ItemTitle>
							{checkMark}
						</ItemInner>
					</Item>
				</Tappable>
			);
		});

		return <div>{options}</div>;
	}
}
