import blacklist from 'blacklist';
import classnames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'GroupFooter',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string
	},
	render () {
		var className = classnames('Group__footer', this.props.className);
		var props = blacklist(this.props, 'className');

		return (
			<div className={className} {...props} />
		);
	}
});
