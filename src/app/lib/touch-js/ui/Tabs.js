import blacklist from 'blacklist';
import classnames from 'classnames';
import React,{Component} from 'react';
import Tappable from 'lib/tappable';
import PropTypes from 'prop-types';

class Navigator extends Component {
	static propTypes = {
		className: PropTypes.string
	}

	render () {
		var className = classnames('Tabs-Navigator', this.props.className);
		var otherProps = blacklist(this.props, 'className');

		return <div className={className} { ... otherProps } />;
	}
}

class Tab extends Component {
	static propTypes = {
		selected: PropTypes.bool
	}

	render () {
		var className = classnames('Tabs-Tab', { 'is-selected': this.props.selected })
		var otherProps = blacklist(this.props, 'selected');

		return <Tappable className={className} { ... otherProps } />;
	}
}
class Label extends Component {
	render () {
		return <div className="Tabs-Label" { ... this.props }/>;
	}
}
export default {
	Label,Tab,Navigator
}
