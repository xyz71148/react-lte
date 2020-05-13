import classNames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'PopupIcon',
	propTypes: {
		name: PropTypes.string,
		type: PropTypes.oneOf(['default', 'muted', 'primary', 'success', 'warning', 'danger']),
		spinning: PropTypes.bool
	},

	render () {
		var className = classNames('PopupIcon', {
			'is-spinning': this.props.spinning
		}, this.props.name, this.props.type);

		return <div className={className} />;
	}
});
