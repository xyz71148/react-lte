import React from 'react';
import "../style.css"

export default () => {
    return (
        <div className="card">
            <div className="card-header border-0">
                <h3 className="card-title">Products</h3>
                <div className="card-tools">
                    <a href="#" className="btn btn-tool btn-sm">
                        <i className="fas fa-download"></i>
                    </a>
                    <a href="#" className="btn btn-tool btn-sm">
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </div>
            <div className="card-body table-responsive p-0">
                <table className="table table-striped table-valign-middle">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>More</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <img src="static/dist/img/default-150x150.png" alt="Product 1"
                                 className="img-circle img-size-32 mr-2" />
                                Some Product
                        </td>
                        <td>$13 USD</td>
                        <td>
                            <small className="text-success mr-1">
                                <i className="fas fa-arrow-up"></i>
                                12%
                            </small>
                            12,000 Sold
                        </td>
                        <td>
                            <a href="#" className="text-muted">
                                <i className="fas fa-search"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="static/dist/img/default-150x150.png" alt="Product 1"
                                 className="img-circle img-size-32 mr-2" />
                                Another Product
                        </td>
                        <td>$29 USD</td>
                        <td>
                            <small className="text-warning mr-1">
                                <i className="fas fa-arrow-down"></i>
                                0.5%
                            </small>
                            123,234 Sold
                        </td>
                        <td>
                            <a href="#" className="text-muted">
                                <i className="fas fa-search"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="static/dist/img/default-150x150.png" alt="Product 1"
                                 className="img-circle img-size-32 mr-2" />
                                Amazing Product
                        </td>
                        <td>$1,230 USD</td>
                        <td>
                            <small className="text-danger mr-1">
                                <i className="fas fa-arrow-down"></i>
                                3%
                            </small>
                            198 Sold
                        </td>
                        <td>
                            <a href="#" className="text-muted">
                                <i className="fas fa-search"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="static/dist/img/default-150x150.png" alt="Product 1"
                                 className="img-circle img-size-32 mr-2" />
                                Perfect Item
                                <span className="badge bg-danger">NEW</span>
                        </td>
                        <td>$199 USD</td>
                        <td>
                            <small className="text-success mr-1">
                                <i className="fas fa-arrow-up"></i>
                                63%
                            </small>
                            87 Sold
                        </td>
                        <td>
                            <a href="#" className="text-muted">
                                <i className="fas fa-search"></i>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
