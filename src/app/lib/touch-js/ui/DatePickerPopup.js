import blacklist from 'blacklist';
import classnames from 'classnames';
import DatePicker from './DatePicker';
import Popup from './Popup';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
	displayName = 'DatePickerPopup'

	static propTypes = {
		className: PropTypes.string,
		visible: PropTypes.bool
	}

	render () {
		var className = classnames('DatePicker', this.props.className);
		var props = blacklist(this.props, 'className', 'visible');
		return (
			<Popup className={className} visible={this.props.visible}>
				<DatePicker {...props}/>
			</Popup>
		);
	}
}
