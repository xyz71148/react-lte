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

                <div className="row">
                    <div className="col-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Ribbons</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="position-relative p-3 bg-gray" style={{height:180}}>
                                            <div className="ribbon-wrapper">
                                                <div className="ribbon bg-primary">
                                                    Ribbon
                                                </div>
                                            </div>
                                            Ribbon Default <br/>
                                            <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="position-relative p-3 bg-gray" style={{height:180}}>
                                            <div className="ribbon-wrapper ribbon-lg">
                                                <div className="ribbon bg-info">
                                                    Ribbon Large
                                                </div>
                                            </div>
                                            Ribbon Large <br/>
                                            <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="position-relative p-3 bg-gray" style={{height:180}}>
                                            <div className="ribbon-wrapper ribbon-xl">
                                                <div className="ribbon bg-secondary">
                                                    Ribbon Extra Large
                                                </div>
                                            </div>
                                            Ribbon Extra Large <br/>
                                            <small>.ribbon-wrapper.ribbon-xl .ribbon</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-4">
                                        <div className="position-relative p-3 bg-gray" style={{height:180}}>
                                            <div className="ribbon-wrapper ribbon-lg">
                                                <div className="ribbon bg-success text-lg">
                                                    Ribbon
                                                </div>
                                            </div>
                                            Ribbon Large <br/> with Large Text <br/>
                                            <small>.ribbon-wrapper.ribbon-lg .ribbon.text-lg</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="position-relative p-3 bg-gray" style={{height:180}}>
                                            <div className="ribbon-wrapper ribbon-xl">
                                                <div className="ribbon bg-warning text-lg">
                                                    Ribbon
                                                </div>
                                            </div>
                                            Ribbon Extra Large <br/> with Large Text <br/>
                                            <small>.ribbon-wrapper.ribbon-xl .ribbon.text-lg</small>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="position-relative p-3 bg-gray" style={{height:180}}>
                                            <div className="ribbon-wrapper ribbon-xl">
                                                <div className="ribbon bg-danger text-xl">
                                                    Ribbon
                                                </div>
                                            </div>
                                            Ribbon Extra Large <br/> with Extra Large Text <br/>
                                            <small>.ribbon-wrapper.ribbon-xl .ribbon.text-xl</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
