import classnames from 'classnames';
import React,{Component} from 'react';
import Tappable from 'lib/tappable';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'Switch'

	static propTypes = {
		disabled: PropTypes.bool,
		on: PropTypes.bool,
		onTap: PropTypes.func,
		type: PropTypes.string
	}

	static defaultProps = {
		type: 'default'
	}

	render () {
		var className = classnames('Switch', 'Switch--' + this.props.type, {
			'is-disabled': this.props.disabled,
			'is-on': this.props.on
		});

		return (
			<Tappable onTap={this.props.onTap} className={className} component="label">
				<div className="Switch__track">
					<div className="Switch__handle" />
				</div>
			</Tappable>
		);
	}
}
