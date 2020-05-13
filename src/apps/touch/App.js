import React, {Component} from 'react';
import PropTypes from "prop-types";
import RootViewController from "./RootViewController"
import "./style/style.css"

const app = {
    navigationBars: {},
    viewManagers: {},
    transitionTo (view, opts) {
        var vm = '__default';
        view = view.split(':');
        if (view.length > 1) {
            vm = view.shift();
        }
        view = view[0];
        app.viewManagers[vm].transitionTo(view, opts);
    }
};

class App extends Component {
    static childContextTypes = {
        app: PropTypes.object
    };

    getChildContext() {
        return {
            app: app
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            touchActive: false,
            pinchActive: false
        }
    }
    componentDidMount () {
        if (navigator.splashscreen) {
            navigator.splashscreen.hide();
        }
    }
    render() {
        let appWrapperClassName = 'app-wrapper device--' + (window.device || {}).platform

        return (
            <div className={appWrapperClassName}>
                <div className="device-silhouette">
                    <RootViewController />
                </div>
            </div>
        );
    }
}


App.childContextTypes = {
    app: PropTypes.object
}

export default App
