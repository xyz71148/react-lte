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
        /* BOOTSTRAP SLIDER */
        // $('.slider').bootstrapSlider()
        /* ION SLIDER */
        $('#range_1').ionRangeSlider({
            min     : 0,
            max     : 5000,
            from    : 1000,
            to      : 4000,
            type    : 'double',
            step    : 1,
            prefix  : '$',
            prettify: false,
            hasGrid : true
        })
        $('#range_2').ionRangeSlider()
        $('#range_5').ionRangeSlider({
            min     : 0,
            max     : 10,
            type    : 'single',
            step    : 0.1,
            postfix : ' mm',
            prettify: false,
            hasGrid : true
        })
        $('#range_6').ionRangeSlider({
            min     : -50,
            max     : 50,
            from    : 0,
            type    : 'single',
            step    : 1,
            postfix : '°',
            prettify: false,
            hasGrid : true
        })
        $('#range_4').ionRangeSlider({
            type      : 'single',
            step      : 100,
            postfix   : ' light years',
            from      : 55000,
            hideMinMax: true,
            hideFromTo: false
        })
        $('#range_3').ionRangeSlider({
            type    : 'double',
            postfix : ' miles',
            step    : 10000,
            from    : 25000000,
            to      : 35000000,
            onChange: function (obj) {
                var t = ''
                for (var prop in obj) {
                    t += prop + ': ' + obj[prop] + '\r\n'
                }
                $('#result').html(t)
            },
            onLoad  : function (obj) {
                //
            }
        })
    }

    render() {
        return (
            <div className={`view`}>

                <div className="row">
                    <div className="col-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Ion Slider</h3>
                            </div>
                            <div className="card-body">
                                <div className="row margin">
                                    <div className="col-sm-6">
                                        <input readOnly id="range_1" type="text" name="range_1" value=""/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input readOnly id="range_2" type="text" name="range_2" value="1000;100000"
                                               data-type="double"
                                               data-step="500" data-postfix=" &euro;" data-from="30000" data-to="90000"
                                               data-hasgrid="true" />
                                    </div>
                                </div>
                                <div className="row margin">
                                    <div className="col-sm-6">
                                        <input readOnly id="range_5" type="text" name="range_5" value=""/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input readOnly id="range_6" type="text" name="range_6" value=""/>
                                    </div>
                                </div>
                                <div className="row margin">
                                    <div className="col-sm-12">
                                        <input readOnly id="range_4" type="text" name="range_4" value="10000;100000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Bootstrap Slider</h3>
                            </div>
                            <div className="card-body">
                                <div className="row margin">
                                    <div className="col-sm-6">
                                        <div className="slider-red">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="horizontal"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <p>.slider-red input readOnly.slider</p>
                                        <div className="slider-blue">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="horizontal"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <p>.slider-blue input readOnly.slider</p>
                                        <div className="slider-green">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="horizontal"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <p>.slider-green input readOnly.slider</p>
                                        <div className="slider-yellow">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="horizontal"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <p>.slider-yellow input readOnly.slider</p>
                                        <div className="slider-teal">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="horizontal"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <p>.slider-teal input readOnly.slider</p>
                                        <div className="slider-purple">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="horizontal"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <p>.slider-purple input readOnly.slider</p>
                                    </div>
                                    <div className="col-sm-6 d-flex justify-content-center">
                                        <div className="slider-red mx-3">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="vertical"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <div className="slider-blue mx-3">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="vertical"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <div className="slider-green mx-3">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="vertical"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <div className="slider-yellow mx-3">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="vertical"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <div className="slider-teal mx-3">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="vertical"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
                                        </div>
                                        <div className="slider-purple mx-3">
                                            <input readOnly type="text" value="" className="slider form-control"
                                                   data-slider-min="-200" data-slider-max="200"
                                                   data-slider-step="5" data-slider-value="[-100,100]"
                                                   data-slider-orientation="vertical"
                                                   data-slider-selection="before" data-slider-tooltip="show" />
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
