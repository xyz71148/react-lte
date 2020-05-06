import React from 'react';
import ReactDOM from "react-dom";

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.container_id = props.id ? props.id : "main-content";
        if (props.onScroll) {
            this.el.onscroll = props.onScroll
        }
        if (props.className) this.el.className = props.className
        else this.el.className = "portal"
    }

    componentDidMount() {
        document.getElementById(this.container_id).appendChild(this.el);
    }

    componentWillUnmount() {
        document.getElementById(this.container_id).removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

export default BaseComponent;
