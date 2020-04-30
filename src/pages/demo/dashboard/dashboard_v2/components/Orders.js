import React from 'react';
import "../style.css"

export default () => {
    return (
        <div className="card">
            <div className="card-header border-transparent">
                <h3 className="card-title">Latest Orders</h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table m-0">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Popularity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                            <td>Call of Duty IV</td>
                            <td><span className="badge badge-success">Shipped</span></td>
                            <td>
                                <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                            <td>Samsung Smart TV</td>
                            <td><span className="badge badge-warning">Pending</span></td>
                            <td>
                                <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                            <td>iPhone 6 Plus</td>
                            <td><span className="badge badge-danger">Delivered</span></td>
                            <td>
                                <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                            <td>Samsung Smart TV</td>
                            <td><span className="badge badge-info">Processing</span></td>
                            <td>
                                <div className="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                            <td>Samsung Smart TV</td>
                            <td><span className="badge badge-warning">Pending</span></td>
                            <td>
                                <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                            <td>iPhone 6 Plus</td>
                            <td><span className="badge badge-danger">Delivered</span></td>
                            <td>
                                <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                            <td>Call of Duty IV</td>
                            <td><span className="badge badge-success">Shipped</span></td>
                            <td>
                                <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card-footer clearfix">
                <a href="#" className="btn btn-sm btn-info float-left">Place New Order</a>
                <a href="#" className="btn btn-sm btn-secondary float-right">View All Orders</a>
            </div>
        </div>
    )
}
