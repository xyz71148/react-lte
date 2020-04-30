import React from 'react';
import "../style.css"

export default () => {
    return (
        <div className="card">
            <div className="card-header border-0">
                <h3 className="card-title">Online Store Overview</h3>
                <div className="card-tools">
                    <a href="#" className="btn btn-sm btn-tool">
                        <i className="fas fa-download"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-tool">
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                    <p className="text-success text-xl">
                        <i className="ion ion-ios-refresh-empty"></i>
                    </p>
                    <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-up text-success"></i> 12%
                    </span>
                        <span className="text-muted">CONVERSION RATE</span>
                    </p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                    <p className="text-warning text-xl">
                        <i className="ion ion-ios-cart-outline"></i>
                    </p>
                    <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-up text-warning"></i> 0.8%
                    </span>
                        <span className="text-muted">SALES RATE</span>
                    </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-0">
                    <p className="text-danger text-xl">
                        <i className="ion ion-ios-people-outline"></i>
                    </p>
                    <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-down text-danger"></i> 1%
                    </span>
                        <span className="text-muted">REGISTRATION RATE</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
