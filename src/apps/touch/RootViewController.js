import React, {Component} from 'react';
import {View, ViewManager} from "lib/touch-js";
import TabViewController from "./TabViewController"
import MainViewController from "./MainViewController"

class RoowController extends Component {
    render () {
        return (
            <ViewManager name={"app"} defaultView={"main"}>
                <View name="main" component={MainViewController} />
                <View name="transitions-target-over" component={TabViewController} />
            </ViewManager>

        );
    }
}
export default RoowController
