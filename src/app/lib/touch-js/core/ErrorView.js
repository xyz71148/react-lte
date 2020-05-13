import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Container from 'lib/container';

class ErrorView extends Component {

	static propTypes = {
		children: PropTypes.node
	}

	render () {
		return (
			<Container fill className="View ErrorView">
				{this.props.children}
			</Container>
		);
	}
}

export default ErrorView;
