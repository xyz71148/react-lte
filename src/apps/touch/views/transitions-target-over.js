import Container from 'lib/container';
import React, {Component} from 'react';
import Timers from 'react-timers';
import NavigationBar from 'lib/touch-js/ui/NavigationBar';
import Mixins from "lib/touch-js/mixins";
import PropTypes from "prop-types";

export default class extends Component{
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
		this.setTimeout(()=> {
			//this.transitionTo('app:main', { transition: 'fade' });
		}, 2000);
	}
	render () {
		return (
			<Container direction="column">
				<NavigationBar name="over" title={this.props.navbarTitle} />
				<Container direction="column" align="center" justify="center" className="no-results">
					<div className="no-results__icon ion-ios-photos" />
					<div className="no-results__text">Hold on a sec...</div>
				</Container>
			</Container>
		);
	}
}
