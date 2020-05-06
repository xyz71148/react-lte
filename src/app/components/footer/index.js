import React from 'react';
import {connect} from "react-redux"
import BaseComponent from "../BaseComponent"

export default connect()(() => {
    return (
        <BaseComponent id="footer" className={"footer"}>
            <footer className="main-footer text-sm">
                <div className="float-right d-none d-sm-inline">
                    Anything you want
                </div>
                <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights
                reserved.
            </footer>
        </BaseComponent>
    )
})
