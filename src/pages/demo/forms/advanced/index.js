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
        setTimeout(()=>{
            $('.select2').select2()

            $('.select2bs4').select2({
                theme: 'bootstrap4'
            })

            $('.duallistbox').bootstrapDualListbox()


            //Datemask dd/mm/yyyy
            $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
            //Datemask2 mm/dd/yyyy
            $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' })
            //Money Euro
            $('[data-mask]').inputmask()


            //Date range picker
            $('#reservation').daterangepicker()
            //Date range picker with time picker
            $('#reservationtime').daterangepicker({
                timePicker: true,
                timePickerIncrement: 30,
                locale: {
                    format: 'MM/DD/YYYY hh:mm A'
                }
            })
            //Date range as a button
            $('#daterange-btn').daterangepicker(
                {
                    ranges   : {
                        'Today'       : [moment(), moment()],
                        'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month'  : [moment().startOf('month'), moment().endOf('month')],
                        'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    },
                    startDate: moment().subtract(29, 'days'),
                    endDate  : moment()
                },
                function (start, end) {
                    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
                }
            )


            //Timepicker
            $('#timepicker').datetimepicker({
                format: 'LT'
            })


            //Colorpicker
            $('.my-colorpicker1').colorpicker()
            //color picker with addon
            $('.my-colorpicker2').colorpicker()

            $('.my-colorpicker2').on('colorpickerChange', function(event) {
                $('.my-colorpicker2 .fa-square').css('color', event.color.toString());
            });

            // $("input[data-bootstrap-switch]").each(function(){
            //     $(this).bootstrapSwitch('state', $(this).prop('checked'));
            // });

        },500)
    }

    render() {
        return (
            <div className={`view`}>

                <div >

                    <div className="card card-default">
                        <div className="card-header">
                            <h3 className="card-title">Select2 (Default Theme)</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                    className="fas fa-minus"></i></button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                    className="fas fa-times"></i></button>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Minimal</label>
                                        <select className="form-control select2" style={{width:"100%"}}>
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Disabled</label>
                                        <select className="form-control select2" disabled="disabled"
                                                style={{width:"100%"}}>
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Multiple</label>
                                        <select className="select2" multiple="multiple"
                                                data-placeholder="Select a State" style={{width:"100%"}}>
                                            <option>Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Disabled Result</label>
                                        <select className="form-control select2" style={{width:"100%"}}>
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option disabled="disabled">California (disabled)</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                </div>

                            </div>


                            <h5>Custom Color Variants</h5>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Minimal (.select2-danger)</label>
                                        <select className="form-control select2 select2-danger"
                                                data-dropdown-css-class="select2-danger" style={{width:"100%"}}>
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <label>Multiple (.select2-purple)</label>
                                        <div className="select2-purple">
                                            <select className="select2" multiple="multiple"
                                                    data-placeholder="Select a State"
                                                    data-dropdown-css-class="select2-purple" style={{width:"100%"}}>
                                                <option>Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="card-footer">
                            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and
                            information about
                            the plugin.
                        </div>
                    </div>


                    <div className="card card-default">
                        <div className="card-header">
                            <h3 className="card-title">Select2 (Bootstrap4 Theme)</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                    className="fas fa-minus"></i></button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                    className="fas fa-times"></i></button>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Minimal</label>
                                        <select className="form-control select2bs4" style={{width:"100%"}}>
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Disabled</label>
                                        <select className="form-control select2bs4" disabled="disabled"
                                                style={{width:"100%"}}>
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Multiple</label>
                                        <select className="select2bs4" multiple="multiple"
                                                data-placeholder="Select a State"
                                                style={{width:"100%"}}>
                                            <option>Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Disabled Result</label>
                                        <select className="form-control select2bs4" style={{width:"100%"}}>
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option disabled="disabled">California (disabled)</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="card-footer">
                            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and
                            information about
                            the plugin.
                        </div>
                    </div>


                    <div className="card card-default">
                        <div className="card-header">
                            <h3 className="card-title">Bootstrap Duallistbox</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                    className="fas fa-minus"></i></button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                    className="fas fa-times"></i></button>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Multiple</label>
                                        <select className="duallistbox" multiple="multiple">
                                            <option selected>Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="card-footer">
                            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and
                            information about
                            the plugin.
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6">

                            <div className="card card-danger">
                                <div className="card-header">
                                    <h3 className="card-title">Input masks</h3>
                                </div>
                                <div className="card-body">

                                    <div className="form-group">
                                        <label>Date masks:</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="far fa-calendar-alt"></i></span>
                                            </div>
                                            <input type="text" className="form-control" data-inputmask-alias="datetime"
                                                   data-inputmask-inputformat="dd/mm/yyyy" data-mask/>
                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="far fa-calendar-alt"></i></span>
                                            </div>
                                            <input type="text" className="form-control" data-inputmask-alias="datetime"
                                                   data-inputmask-inputformat="mm/dd/yyyy" data-mask/>
                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <label>US phone mask:</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fas fa-phone"></i></span>
                                            </div>
                                            <input type="text" className="form-control"
                                                   data-inputmask='"mask": "(999) 999-9999"' data-mask/>
                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <label>Intl US phone mask:</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fas fa-phone"></i></span>
                                            </div>
                                            <input type="text" className="form-control"
                                                   data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']"
                                                   data-mask/>
                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <label>IP mask:</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="fas fa-laptop"></i></span>
                                            </div>
                                            <input type="text" className="form-control" data-inputmask="'alias': 'ip'"
                                                   data-mask/>
                                        </div>

                                    </div>


                                </div>

                            </div>


                            <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title">Color & Time Picker</h3>
                                </div>
                                <div className="card-body">

                                    <div className="form-group">
                                        <label>Color picker:</label>
                                        <input type="text" className="form-control my-colorpicker1"/>
                                    </div>


                                    <div className="form-group">
                                        <label>Color picker with addon:</label>

                                        <div className="input-group my-colorpicker2">
                                            <input type="text" className="form-control"/>

                                            <div className="input-group-append">
                                                <span className="input-group-text"><i
                                                    className="fas fa-square"></i></span>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="bootstrap-timepicker">
                                        <div className="form-group">
                                            <label>Time picker:</label>

                                            <div className="input-group date" id="timepicker"
                                                 data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input"
                                                       data-target="#timepicker"/>
                                                <div className="input-group-append" data-target="#timepicker"
                                                     data-toggle="datetimepicker">
                                                    <div className="input-group-text"><i className="far fa-clock"></i>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>


                        </div>

                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Date picker</h3>
                                </div>
                                <div className="card-body">

                                    <div className="form-group">
                                        <label>Date range:</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="far fa-calendar-alt"></i>
                      </span>
                                            </div>
                                            <input type="text" className="form-control float-right" id="reservation"/>
                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <label>Date and time range:</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="far fa-clock"></i></span>
                                            </div>
                                            <input type="text" className="form-control float-right"
                                                   id="reservationtime"/>
                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <label>Date range button:</label>

                                        <div className="input-group">
                                            <button type="button" className="btn btn-default float-right"
                                                    id="daterange-btn">
                                                <i className="far fa-calendar-alt"></i> Date range picker
                                                <i className="fas fa-caret-down"></i>
                                            </button>
                                        </div>
                                    </div>


                                </div>

                            </div>


                            <div className="card card-success">
                                <div className="card-header">
                                    <h3 className="card-title">iCheck Bootstrap - Checkbox &amp; Radio Inputs</h3>
                                </div>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-sm-6">

                                            <div className="form-group clearfix">
                                                <div className="icheck-primary d-inline">
                                                    <input type="checkbox" id="checkboxPrimary1" checked/>
                                                    <label htmlFor="checkboxPrimary1">
                                                    </label>
                                                </div>
                                                <div className="icheck-primary d-inline">
                                                    <input type="checkbox" id="checkboxPrimary2"/>
                                                    <label htmlFor="checkboxPrimary2">
                                                    </label>
                                                </div>
                                                <div className="icheck-primary d-inline">
                                                    <input type="checkbox" id="checkboxPrimary3" disabled/>
                                                    <label htmlFor="checkboxPrimary3">
                                                        Primary checkbox
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">

                                            <div className="form-group clearfix">
                                                <div className="icheck-primary d-inline">
                                                    <input type="radio" id="radioPrimary1" name="r1" checked/>
                                                    <label htmlFor="radioPrimary1">
                                                    </label>
                                                </div>
                                                <div className="icheck-primary d-inline">
                                                    <input type="radio" id="radioPrimary2" name="r1"/>
                                                    <label htmlFor="radioPrimary2">
                                                    </label>
                                                </div>
                                                <div className="icheck-primary d-inline">
                                                    <input type="radio" id="radioPrimary3" name="r1" disabled/>
                                                    <label htmlFor="radioPrimary3">
                                                        Primary radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">

                                            <div className="form-group clearfix">
                                                <div className="icheck-danger d-inline">
                                                    <input type="checkbox" checked id="checkboxDanger1"/>
                                                    <label htmlFor="checkboxDanger1">
                                                    </label>
                                                </div>
                                                <div className="icheck-danger d-inline">
                                                    <input type="checkbox" id="checkboxDanger2"/>
                                                    <label htmlFor="checkboxDanger2">
                                                    </label>
                                                </div>
                                                <div className="icheck-danger d-inline">
                                                    <input type="checkbox" disabled id="checkboxDanger3"/>
                                                    <label htmlFor="checkboxDanger3">
                                                        Danger checkbox
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">

                                            <div className="form-group clearfix">
                                                <div className="icheck-danger d-inline">
                                                    <input type="radio" name="r2" checked id="radioDanger1"/>
                                                    <label htmlFor="radioDanger1">
                                                    </label>
                                                </div>
                                                <div className="icheck-danger d-inline">
                                                    <input type="radio" name="r2" id="radioDanger2"/>
                                                    <label htmlFor="radioDanger2">
                                                    </label>
                                                </div>
                                                <div className="icheck-danger d-inline">
                                                    <input type="radio" name="r2" disabled id="radioDanger3"/>
                                                    <label htmlFor="radioDanger3">
                                                        Danger radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">

                                            <div className="form-group clearfix">
                                                <div className="icheck-success d-inline">
                                                    <input type="checkbox" checked id="checkboxSuccess1"/>
                                                    <label htmlFor="checkboxSuccess1">
                                                    </label>
                                                </div>
                                                <div className="icheck-success d-inline">
                                                    <input type="checkbox" id="checkboxSuccess2"/>
                                                    <label htmlFor="checkboxSuccess2">
                                                    </label>
                                                </div>
                                                <div className="icheck-success d-inline">
                                                    <input type="checkbox" disabled id="checkboxSuccess3"/>
                                                    <label htmlFor="checkboxSuccess3">
                                                        Success checkbox
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">

                                            <div className="form-group clearfix">
                                                <div className="icheck-success d-inline">
                                                    <input type="radio" name="r3" checked id="radioSuccess1"/>
                                                    <label htmlFor="radioSuccess1">
                                                    </label>
                                                </div>
                                                <div className="icheck-success d-inline">
                                                    <input type="radio" name="r3" id="radioSuccess2"/>
                                                    <label htmlFor="radioSuccess2">
                                                    </label>
                                                </div>
                                                <div className="icheck-success d-inline">
                                                    <input type="radio" name="r3" disabled id="radioSuccess3"/>
                                                    <label htmlFor="radioSuccess3">
                                                        Success radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    Many more skins available. <a
                                    href="https://bantikyan.github.io/icheck-bootstrap/">Documentation</a>
                                </div>
                            </div>


                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Bootstrap Switch</h3>
                                </div>
                                <div className="card-body">
                                    <input type="checkbox" name="my-checkbox" checked data-bootstrap-switch/>
                                    <input type="checkbox" name="my-checkbox" checked data-bootstrap-switch
                                           data-off-color="danger" data-on-color="success"/>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
});
