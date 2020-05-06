import React, {Component} from 'react';
import {connect} from "react-redux";
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
)(class extends Component {
    state = {};

    componentDidMount() {
    }

    render() {
        return (
            <div className={`view`}>
                <SmallBox/>
                <Cards/>
                <Chat/>
                <Social/>
            </div>
        )
    }
});
