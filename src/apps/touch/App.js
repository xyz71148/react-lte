import React, {Component} from 'react';
import Container from 'lib/container';

import View from 'lib/touch-js/core/View';
import ViewManager from 'lib/touch-js/core/ViewManager';
import NavigationBar from 'lib/touch-js/ui/NavigationBar';
import "./style/app.css"
import PropTypes from "prop-types";
import Test from "./views/transitions-target-over"

class MainViewController extends Component {
    render () {
        return (
            <Container>
                <NavigationBar name="main" />
                <div>1</div>
            </Container>
        );
    }
}


const app = {
    navigationBars: {},
    viewManagers: {},
    transitionTo (view, opts) {
        console.log("++=>2",view)
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
                    <ViewManager name={"app"} defaultView={"transitions-target-over"}>
                        <View name="main" component={MainViewController} />
                        <View name="transitions-target-over" component={Test} />
                    </ViewManager>
                </div>
            </div>
        );
    }
}


App.childContextTypes = {
    app: PropTypes.object
}

export default App
