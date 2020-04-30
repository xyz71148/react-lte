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
            // eslint-disable-next-line no-undef
            $('#textarea').summernote()
        },500)
    }

    render() {
        console.log("==>>")
        return (
            <div className={`view`}>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-outline card-info">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Bootstrap WYSIHTML5
                                    <small>Simple and fast</small>
                                </h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool btn-sm" data-card-widget="collapse"
                                            data-toggle="tooltip"
                                            title="Collapse">
                                        <i className="fas fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool btn-sm" data-card-widget="remove"
                                            data-toggle="tooltip"
                                            title="Remove">
                                        <i className="fas fa-times"></i></button>
                                </div>
                            </div>
                            <div className="card-body pad">
                                <div className="mb-3">
                                    <textarea id={"textarea"} className="textarea"
                                              placeholder="Place some text here"></textarea>
                                </div>
                                <p className="text-sm mb-0">
                                    Editor <a href="https://github.com/summernote/summernote">Documentation and license
                                    information.</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
});
