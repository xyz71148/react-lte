import React from 'react';
import "../style.css"

export default () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Area Chart</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                            <canvas id="areaChart"></canvas>
                        </div>
                    </div>
                </div>
                <div className="card card-danger">
                    <div className="card-header">
                        <h3 className="card-title">Donut Chart</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="card-body">
                        <canvas id="donutChart"></canvas>
                    </div>
                </div>
                <div className="card card-danger">
                    <div className="card-header">
                        <h3 className="card-title">Pie Chart</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="card-body">
                        <canvas id="pieChart"></canvas>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card card-info">
                    <div className="card-header">
                        <h3 className="card-title">Line Chart</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                            <canvas id="lineChart"></canvas>
                        </div>
                    </div>
                </div>
                <div className="card card-success">
                    <div className="card-header">
                        <h3 className="card-title">Bar Chart</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                            <canvas id="barChart"></canvas>
                        </div>
                    </div>
                </div>
                <div className="card card-success">
                    <div className="card-header">
                        <h3 className="card-title">Stacked Bar Chart</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                className="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart">
                            <canvas id="stackedBarChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
