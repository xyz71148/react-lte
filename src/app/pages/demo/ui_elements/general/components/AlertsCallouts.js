import React from 'react';
import "../style.css"

export default () => {
    return (
        <div>
            <h5 className="mt-4 mb-2">Alerts and Callouts</h5>
            <div className="row">
                <div className="col-md-6">
                    <div className="card card-default">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-exclamation-triangle"></i>
                                Alerts
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-danger alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert"
                                        aria-hidden="true">&times;</button>
                                <h5><i className="icon fas fa-ban"></i> Alert!</h5>
                                Danger alert preview. This alert is dismissable. A wonderful serenity has taken
                                possession of my
                                entire
                                soul, like these sweet mornings of spring which I enjoy with my whole heart.
                            </div>
                            <div className="alert alert-info alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert"
                                        aria-hidden="true">&times;</button>
                                <h5><i className="icon fas fa-info"></i> Alert!</h5>
                                Info alert preview. This alert is dismissable.
                            </div>
                            <div className="alert alert-warning alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert"
                                        aria-hidden="true">&times;</button>
                                <h5><i className="icon fas fa-exclamation-triangle"></i> Alert!</h5>
                                Warning alert preview. This alert is dismissable.
                            </div>
                            <div className="alert alert-success alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert"
                                        aria-hidden="true">&times;</button>
                                <h5><i className="icon fas fa-check"></i> Alert!</h5>
                                Success alert preview. This alert is dismissable.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card card-default">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-bullhorn"></i>
                                Callouts
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="callout callout-danger">
                                <h5>I am a danger callout!</h5>
                                <p>There is a problem that we need to fix. A wonderful serenity has taken possession of
                                    my entire
                                    soul,
                                    like these sweet mornings of spring which I enjoy with my whole heart.</p>
                            </div>
                            <div className="callout callout-info">
                                <h5>I am an info callout!</h5>
                                <p>Follow the steps to continue to payment.</p>
                            </div>
                            <div className="callout callout-warning">
                                <h5>I am a warning callout!</h5>
                                <p>This is a yellow callout.</p>
                            </div>
                            <div className="callout callout-success">
                                <h5>I am a success callout!</h5>
                                <p>This is a green callout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
