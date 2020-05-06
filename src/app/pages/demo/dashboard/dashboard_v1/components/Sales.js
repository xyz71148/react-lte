import React from 'react';

export default () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">
                    <i className="fas fa-chart-pie mr-1"></i>
                    Sales
                </h3>
                <div className="card-tools">
                    <ul className="nav nav-pills ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card-body">
                <div className="tab-content p-0">
                    <div className="chart tab-pane active" id="revenue-chart">
                        <canvas id="revenue-chart-canvas" height="300" style={{height: 300}}></canvas>
                    </div>
                    <div className="chart tab-pane" id="sales-chart" style={{height: 300, position: "relative"}}>
                        <canvas id="sales-chart-canvas" height="300" style={{height: 300}}></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}
