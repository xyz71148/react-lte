import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"

export default connect(
    ({route}) => {
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
                <div className="card card-primary card-outline">
                    <div className="card-header">
                        <h3 className="card-title">Icons</h3>
                    </div>
                    <div className="card-body">
                        <p>You can use any font library you like with AdminLTE 3.</p>
                        <strong>Recommendations</strong>
                        <div>
                            <a href="https://fontawesome.com/">Font Awesome</a><br/>
                            <a href="https://useiconic.com/open/">Iconic Icons</a><br/>
                            <a href="http://ionicons.com/">Ion Icons</a><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
