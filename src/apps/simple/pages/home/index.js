import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"

class Home extends Component {
    state = {
        star_css: "star_off",
        tipTxt: null
    };
    componentDidMount() {}
    render() {
        const {app_loading} = this.props
        console.log(app_loading)
        return (
            <div className={"Home"}>
                Home
            </div>
        )
    }
}

export default connect(({app}) => ({
    app_loading: app.loading,
}))(Home);
