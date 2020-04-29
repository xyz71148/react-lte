import React from 'react';
import "../style.css"

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar"></i>
                                jQuery Knob
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
                            <div className="row">
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="30" data-width="90" data-height="90"
                                           data-fgcolor="#3c8dbc" />
                                        <div className="knob-label">New Visitors</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="70" data-width="90" data-height="90"
                                           data-fgcolor="f56954" />
                                        <div className="knob-label">Bounce Rate</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="-80" data-min="-150" data-max="150"
                                           data-width="90"
                                           data-height="90" data-fgcolor="#00a65a" />
                                        <div className="knob-label">Server Load</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="40" data-width="90" data-height="90"
                                           data-fgcolor="#00c0ef" />
                                        <div className="knob-label">Disk Space</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center">
                                    <input type="text" className="knob" value="90" data-width="90" data-height="90"
                                           data-fgcolor="#932ab6" />
                                        <div className="knob-label">Bandwidth</div>
                                </div>
                                <div className="col-6 text-center">
                                    <input type="text" className="knob" value="50" data-width="90" data-height="90"
                                           data-fgcolor="#39CCCC" />
                                        <div className="knob-label">CPU</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar"></i>
                                jQuery Knob Different Sizes
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
                            <div className="row">
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="30" data-width="90" data-height="90"
                                           data-fgcolor="#3c8dbc"
                                           data-readonly="true" />
                                        <div className="knob-label">data-width="90"</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="30" data-width="120" data-height="120"
                                           data-fgcolor="f56954" />
                                        <div className="knob-label">data-width="120"</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="30" data-thickness="0.1" data-width="90"
                                           data-height="90"
                                           data-fgcolor="#00a65a" />
                                        <div className="knob-label">data-thickness="0.1"</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" data-thickness="0.2" data-angleArc="250"
                                           data-angleOffset="-125"
                                           value="30" data-width="120" data-height="120" data-fgcolor="#00c0ef" />
                                        <div className="knob-label">data-angleArc="250"</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="far fa-chart-bar"></i>
                                jQuery Knob Tron Style
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
                            <div className="row">
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="80" data-skin="tron" data-thickness="0.2"
                                           data-width="90"
                                           data-height="90" data-fgcolor="#3c8dbc" data-readonly="true" />
                                        <div className="knob-label">data-width="90"</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="60" data-skin="tron" data-thickness="0.2"
                                           data-width="120"
                                           data-height="120" data-fgcolor="f56954" />
                                        <div className="knob-label">data-width="120"</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="10" data-skin="tron" data-thickness="0.1"
                                           data-width="90"
                                           data-height="90" data-fgcolor="#00a65a" />
                                        <div className="knob-label">data-thickness="0.1"</div>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <input type="text" className="knob" value="100" data-skin="tron"
                                           data-thickness="0.2"
                                           data-angleArc="250" data-angleOffset="-125" data-width="120"
                                           data-height="120"
                                           data-fgcolor="#00c0ef" />
                                        <div className="knob-label">data-angleArc="250"</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
