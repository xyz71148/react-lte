import classnames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'ItemInner',

	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string
	},

	render () {
		var className = classnames('Item__inner', this.props.className);

		return <div className={className} {... this.props} />;
	}
});
