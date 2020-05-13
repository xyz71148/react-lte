import React from 'react';
import Container from "lib/container";
import {UI, View, ViewManager} from "lib/touch-js";
import TabViewController from "./TabViewController"

const MainViewController = ()=>{
    return (
        <Container>
            <UI.NavigationBar name="main" />
            <ViewManager name="main" defaultView="tabs">
                <View name="tabs" component={TabViewController} />
            </ViewManager>
        </Container>
    )
}
export default MainViewController
