import blacklist from 'blacklist';
import classnames from 'classnames';
import React, {Component} from 'react';
import Tappable from 'lib/tappable';
import PropTypes from 'prop-types';

export default class extends Component {
    displayName = 'Button'
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        type: PropTypes.oneOf(['default', 'info', 'primary', 'success', 'warning', 'danger'])
    }

    static defaultProps = {
        type: 'default'
    }

    render() {
        var className = classnames('Button', 'Button--' + this.props.type, this.props.className);
        var props = blacklist(this.props, 'type');

        return (
            <Tappable {...props} className={className} component="button"/>
        );
    }
}
