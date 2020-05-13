import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"
import "./style.less"

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
                <div className="test">
                    ss
                </div>
            </div>
        )
    }
}

export default connect(({app}) => ({
    app_loading: app.loading,
}))(Home);
