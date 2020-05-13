import React,{Component} from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/require-render-return
class View extends Component {
	static propTypes = {
		component: PropTypes.any.isRequired,
		name: PropTypes.string.isRequired
	}
	render () {
		return this.props.component
	}
}

export default View;
