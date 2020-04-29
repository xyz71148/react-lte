import React from 'react';
import "../style.css"

export default () => {
    return (

        <div>

            <div className="row">
                <div className="col-12">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar"></i>
                                Interactive Area Chart
                            </h3>
                            <div className="card-tools">
                                Real time
                                <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                                    <button type="button" className="btn btn-default btn-sm active"
                                            data-toggle="on">On
                                    </button>
                                    <button type="button" className="btn btn-default btn-sm" data-toggle="off">Off
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="interactive" style={{height:300}}></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar"></i>
                                Line Chart
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                    className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                    className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="line-chart" style={{height:300}}></div>
                        </div>

                    </div>
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar"></i>
                                Area Chart
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                    className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                    className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="area-chart" style={{height:338}} className="full-width-chart"></div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar"></i>
                                Bar Chart
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="bar-chart" style={{height:300}}></div>
                        </div>

                    </div>
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar"></i>
                                Donut Chart
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                    className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                    className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div id="donut-chart" style={{height:300}}></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
