import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"

export default connect(
    ({route}) => {
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
            <div className={`view`}>

            </div>
        )
    }
});
