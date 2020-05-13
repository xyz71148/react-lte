import classNames from 'classnames';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'PopupIcon'
	static propTypes = {
		name: PropTypes.string,
		type: PropTypes.oneOf(['default', 'muted', 'primary', 'success', 'warning', 'danger']),
		spinning: PropTypes.bool
	}

	render () {
		var className = classNames('PopupIcon', {
			'is-spinning': this.props.spinning
		}, this.props.name, this.props.type);

		return <div className={className} />;
	}
}
