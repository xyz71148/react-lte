import React, {Component} from 'react';
import {connect} from "react-redux";
import {namespace} from "./store"
import SmallBox from "./components/SmallBox"
import Cards from "./components/Cards"
import Chat from "./components/Chat"
import Social from "./components/Social"

import "./style.css"

export default connect(
    ({route, ...state}) => {
        return {
            page: route.page
        }
    }
)
(class extends Component {
    state = {};

    componentDidMount() {

    }

    render() {
        return (
            <div className={`view_${namespace}`}>
                <SmallBox />
                <Cards />
                <Chat />
                <Social />
            </div>
        )
    }
});
