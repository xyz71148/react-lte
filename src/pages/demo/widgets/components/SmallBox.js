import React from 'react';
import "../style.css"

export default () => {
    return (
        <div>
            <h5 className="mb-2">Info Box</h5>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-info"><i className="far fa-envelope"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Messages</span>
                            <span className="info-box-number">1,410</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-success"><i className="far fa-flag"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Bookmarks</span>
                            <span className="info-box-number">410</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-warning"><i className="far fa-copy"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Uploads</span>
                            <span className="info-box-number">13,648</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-danger"><i className="far fa-star"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Likes</span>
                            <span className="info-box-number">93,139</span>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box bg-info">
                        <span className="info-box-icon"><i className="far fa-bookmark"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Bookmarks</span>
                            <span className="info-box-number">41,410</span>
                            <div className="progress">
                                <div className="progress-bar width_percent_70"></div>
                            </div>
                            <span className="progress-description">
                  70% Increase in 30 Days
                </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box bg-success">
                        <span className="info-box-icon"><i className="far fa-thumbs-up"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Likes</span>
                            <span className="info-box-number">41,410</span>
                            <div className="progress">
                                <div className="progress-bar width_percent_70"></div>
                            </div>
                            <span className="progress-description">
                  70% Increase in 30 Days
                </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box bg-warning">
                        <span className="info-box-icon"><i className="far fa-calendar-alt"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Events</span>
                            <span className="info-box-number">41,410</span>
                            <div className="progress">
                                <div className="progress-bar width_percent_70"></div>
                            </div>
                            <span className="progress-description">
                  70% Increase in 30 Days
                </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box bg-danger">
                        <span className="info-box-icon"><i className="fas fa-comments"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Comments</span>
                            <span className="info-box-number">41,410</span>
                            <div className="progress">
                                <div className="progress-bar width_percent_70"></div>
                            </div>
                            <span className="progress-description">
                  70% Increase in 30 Days
                </span>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="mt-4 mb-2">Info Box With <code>bg-gradient-*</code></h5>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box bg-gradient-info">
                        <span className="info-box-icon"><i className="far fa-bookmark"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Bookmarks</span>
                            <span className="info-box-number">41,410</span>
                            <div className="progress">
                                <div className="progress-bar width_percent_70"></div>
                            </div>
                            <span className="progress-description">
                  70% Increase in 30 Days
                </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box bg-gradient-success">
                        <span className="info-box-icon"><i className="far fa-thumbs-up"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Likes</span>
                            <span className="info-box-number">41,410</span>
                            <div className="progress">
                                <div className="progress-bar width_percent_70"></div>
                            </div>
                            <span className="progress-description">
                  70% Increase in 30 Days
                </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box bg-gradient-warning">
                        <span className="info-box-icon"><i className="far fa-calendar-alt"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Events</span>
                            <span className="info-box-number">41,410</span>
                            <div className="progress">
                                <div className="progress-bar width_percent_70"></div>
                            </div>
                            <span className="progress-description">
                  70% Increase in 30 Days
                </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="info-box bg-gradient-danger">
                        <span className="info-box-icon"><i className="fas fa-comments"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Comments</span>
                            <span className="info-box-number">41,410</span>
                            <div className="progress">
                                <div className="progress-bar width_percent_70"></div>
                            </div>
                            <span className="progress-description">
                  70% Increase in 30 Days
                </span>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="mb-2 mt-4">Small Box</h5>
            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-info">
                        <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                        </div>
                        <div className="icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-success">
                        <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Bounce Rate</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning">
                        <div className="inner">
                            <h3>44</h3>
                            <p>User Registrations</p>
                        </div>
                        <div className="icon">
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                        </div>
                        <div className="icon">
                            <i className="fas fa-chart-pie"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-info">
                        <div className="overlay">
                            <i className="fas fa-3x fa-sync-alt"></i>
                        </div>
                        <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                        </div>
                        <div className="icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-success">
                        <div className="overlay dark">
                            <i className="fas fa-3x fa-sync-alt"></i>
                        </div>
                        <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Bounce Rate</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
