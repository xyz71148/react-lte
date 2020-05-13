import classnames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'ItemMedia',
	propTypes: {
		avatar: PropTypes.string,
		avatarInitials: PropTypes.string,
		className: PropTypes.string,
		icon: PropTypes.string,
		thumbnail: PropTypes.string
	},

	render () {
		var className = classnames({
			'Item__media': true,
			'Item__media--icon': this.props.icon,
			'Item__media--avatar': this.props.avatar || this.props.avatarInitials,
			'Item__media--thumbnail': this.props.thumbnail
		}, this.props.className);

		// media types
		var icon = this.props.icon ? (
			<div className={'Item__media__icon ' + this.props.icon} />
		) : null;
		var avatar = this.props.avatar || this.props.avatarInitials ? (
			<div className="Item__media__avatar">
				{this.props.avatar ? <img src={this.props.avatar} /> : this.props.avatarInitials}
			</div>
		) : null;
		var thumbnail = this.props.thumbnail ? (
			<div className="Item__media__thumbnail">
				<img src={this.props.thumbnail} />
			</div>
		) : null;

		return (
			<div className={className}>
				{icon}
				{avatar}
				{thumbnail}
			</div>
		);
	}
});
