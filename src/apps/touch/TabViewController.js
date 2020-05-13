import React, {Component} from 'react';
import Container from "lib/container";
import {View, ViewManager,UI} from "lib/touch-js";
import ViewLists from "./pages/demo/lists";
import ListSimple from "./pages/demo/list-simple";
import ListDetail from "./pages/demo/list-details";
import Form from "./pages/demo/form";
import Icons from "./pages/demo/icons";
import Controls from "./pages/demo/controls";
import Transitions from "./pages/demo/transitions";
import TransitionsTarget from "./pages/demo/transitions-target";

var lastSelectedTab = 'lists'

class TabViewController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: lastSelectedTab
        }
    }

    onViewChange (nextView) {
        lastSelectedTab = nextView

        this.setState({
            selectedTab: nextView
        });
    }

    selectTab (value) {
        let viewProps;

        this.refs.vm.transitionTo(value, {
            transition: 'instant',
            viewProps: viewProps
        });

        this.setState({
            selectedTab: value
        })
    }

    render () {
        let selectedTab = this.state.selectedTab
        let selectedTabSpan = selectedTab

        if (selectedTab === 'lists' || selectedTab === 'list-simple' || selectedTab === 'list-complex' || selectedTab === 'list-details') {
            selectedTabSpan = 'lists';
        }

        if (selectedTab === 'transitions' || selectedTab === 'transitions-target') {
            selectedTabSpan = 'transitions';
        }

        return (
            <Container>
                <ViewManager ref="vm" name="tabs" defaultView={selectedTab} onViewChange={this.onViewChange.bind(this)}>
                    <View name="lists" component={ViewLists} />
                    <View name="icons" component={Icons} />
                    <View name="list-simple" component={ListSimple} />
                    <View name="list-details" component={ListDetail} />
                    <View name="form" component={Form} />
                    <View name="control" component={Controls} />
                    <View name="transitions" component={Transitions} />
                    <View name="transitions-target" component={TransitionsTarget} />
                </ViewManager>
                <UI.Tabs.Navigator>
                    <UI.Tabs.Tab onTap={this.selectTab.bind(this, 'lists')} selected={selectedTabSpan === 'lists'}>
                        <span className="Tabs-Icon Tabs-Icon--lists" />
                        <UI.Tabs.Label>Lists</UI.Tabs.Label>
                    </UI.Tabs.Tab>
                    <UI.Tabs.Tab onTap={this.selectTab.bind(this, 'form')} selected={selectedTabSpan === 'form'}>
                        <span className="Tabs-Icon Tabs-Icon--forms" />
                        <UI.Tabs.Label>Forms</UI.Tabs.Label>
                    </UI.Tabs.Tab>
                    <UI.Tabs.Tab onTap={this.selectTab.bind(this, 'controls')} selected={selectedTabSpan === 'controls'}>
                        <span className="Tabs-Icon Tabs-Icon--controls" />
                        <UI.Tabs.Label>Controls</UI.Tabs.Label>
                    </UI.Tabs.Tab>
                    <UI.Tabs.Tab onTap={this.selectTab.bind(this, 'transitions')} selected={selectedTabSpan === 'transitions'}>
                        <span className="Tabs-Icon Tabs-Icon--transitions" />
                        <UI.Tabs.Label>Transitions</UI.Tabs.Label>
                    </UI.Tabs.Tab>
                </UI.Tabs.Navigator>
            </Container>
        );
    }
}



export default TabViewController
