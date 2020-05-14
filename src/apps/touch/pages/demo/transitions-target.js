import Container from 'lib/container';
import React, {Component} from 'react';
import Timers from 'react-timers';
import PropTypes from "prop-types";

export default class extends Component {
	static navigationBar = 'main'
	static getNavigation = (props,app) => {
		return {
			title: props.navbarTitle,
			leftArrow: true,
			leftLabel: 'Lists',
			leftAction: () => { app.transitionTo('tabs:lists', { transition: 'reveal-from-right' }) },
		}
	}

	static contextTypes = {
		app: PropTypes.object
	}

	transitionTo (view, opts) {
		this.context.app.transitionTo(view, opts);
	}

	constructor(props) {
		super(props);
		Object.assign(this, Timers);
	}

	componentDidMount () {
		var self = this;

		this.setTimeout(function () {
			self.transitionTo('tabs:transitions', { transition: 'fade' });
		}, 20000);
	}
	render () {
		return (
			<Container direction="column" align="center" justify="center" className="no-results">
				<div className="no-results__icon ion-ios-photos" />
				<div className="no-results__text">Hold on a sec...</div>
			</Container>
		);
	}
}
