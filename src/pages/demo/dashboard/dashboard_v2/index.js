import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"
import InfoBox from "./components/InfoBox"
import MonthlyRecapReport from "./components/MonthlyRecapReport"
import BrowserUsage from "./components/BrowserUsage"
import RightCard2 from "./components/RightCard2"
import UsVisitorBox from "./components/UsVisitorBox"
import Members from "./components/Members"
import Chart from "./components/Chart"
import Orders from "./components/Orders"
import {namespace} from "./store"

export default connect(
    ({route, ...state}) => {
        return {
            page: route.page
        }
    }
)(class extends Component {
    state = {};

    handleMonthRecapReport() {
        /* Chart.js Charts */
        // Sales chart
        var salesChartCanvas = $('#salesChart1').get(0).getContext('2d');
        var salesChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Digital Goods',
                    backgroundColor: 'rgba(60,141,188,0.9)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    pointRadius: false,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'Electronics',
                    backgroundColor: 'rgba(210, 214, 222, 1)',
                    borderColor: 'rgba(210, 214, 222, 1)',
                    pointRadius: false,
                    pointColor: 'rgba(210, 214, 222, 1)',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
            ]
        }
        var salesChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            }
        }
// This will get the first returned node in the jQuery collection.
        var salesChart = new Chart(salesChartCanvas, {
                type: 'line',
                data: salesChartData,
                options: salesChartOptions
            }
        )
        console.log(salesChart)
    }

    handleChart() {
        var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
        var pieData = {
            labels: [
                'Chrome',
                'IE',
                'FireFox',
                'Safari',
                'Opera',
                'Navigator',
            ],
            datasets: [
                {
                    data: [700, 500, 400, 600, 300, 100],
                    backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
                }
            ]
        }
        var pieOptions = {
            legend: {
                display: false
            }
        }
        var pieChart = new Chart(pieChartCanvas, {
            type: 'doughnut',
            data: pieData,
            options: pieOptions
        })
        console.log(pieChartCanvas, pieChart)
        $('#world-map-markers').mapael({
                map: {
                    name: "usa_states",
                    zoom: {
                        enabled: true,
                        maxLevel: 10
                    },
                },
            }
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.handleChart()
        }, 500)
        setTimeout(() => {
            this.handleMonthRecapReport()
        }, 500)
    }

    render() {
        return (
            <div className={`view_${namespace}`}>
                <InfoBox/>
                <MonthlyRecapReport/>
                <div className="row">
                    <div className="col-md-8">
                        <UsVisitorBox/>
                        <div className="row">
                            <div className="col-md-6">
                                <Chart/>
                            </div>
                            <div className="col-md-6">
                                <Members/>
                            </div>
                        </div>
                        <Orders/>
                    </div>
                    <div className="col-md-4">
                        <div className="info-box mb-3 bg-warning">
                            <span className="info-box-icon"><i className="fas fa-tag"/></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Inventory</span>
                                <span className="info-box-number">5,200</span>
                            </div>
                        </div>
                        <div className="info-box mb-3 bg-success">
                            <span className="info-box-icon"><i className="far fa-heart"></i></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Mentions</span>
                                <span className="info-box-number">92,050</span>
                            </div>
                        </div>
                        <div className="info-box mb-3 bg-danger">
                            <span className="info-box-icon"><i className="fas fa-cloud-download-alt"></i></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Downloads</span>
                                <span className="info-box-number">114,381</span>
                            </div>
                        </div>
                        <div className="info-box mb-3 bg-info">
                            <span className="info-box-icon"><i className="far fa-comment"></i></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Direct Messages</span>
                                <span className="info-box-number">163,921</span>
                            </div>
                        </div>
                        <BrowserUsage/>
                        <RightCard2/>
                    </div>
                </div>
            </div>
        )
    }
});
