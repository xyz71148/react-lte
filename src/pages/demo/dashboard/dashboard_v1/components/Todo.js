import React from 'react';

export default () => {
    return (

        <div className="card">
            <div className="card-header">
                <h3 className="card-title">
                    <i className="ion ion-clipboard mr-1"></i>
                    To Do List
                </h3>
                <div className="card-tools">
                    <ul className="pagination pagination-sm">
                        <li className="page-item"><a href="#" className="page-link">&laquo;</a></li>
                        <li className="page-item"><a href="#" className="page-link">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                        <li className="page-item"><a href="#" className="page-link">&raquo;</a></li>
                    </ul>
                </div>
            </div>

            <div className="card-body">
                <ul className="todo-list" data-widget="todo-list">
                    <li>

                    <span className="handle">
                      <i className="fas fa-ellipsis-v"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </span>

                        <div className="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo1" id="todoCheck1" />
                                <label htmlFor="todoCheck1"></label>
                        </div>

                        <span className="text">Design a nice theme</span>

                        <small className="badge badge-danger"><i className="far fa-clock"></i> 2 mins</small>
                        <div className="tools">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </span>
                        <div className="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo2" id="todoCheck2" checked readOnly />
                                <label htmlFor="todoCheck2"></label>
                        </div>
                        <span className="text">Make the theme responsive</span>
                        <small className="badge badge-info"><i className="far fa-clock"></i> 4 hours</small>
                        <div className="tools">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </span>
                        <div className="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo3" id="todoCheck3" />
                                <label htmlFor="todoCheck3"></label>
                        </div>
                        <span className="text">Let theme shine like a star</span>
                        <small className="badge badge-warning"><i className="far fa-clock"></i> 1 day</small>
                        <div className="tools">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </span>
                        <div className="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo4" id="todoCheck4" />
                                <label htmlFor="todoCheck4"></label>
                        </div>
                        <span className="text">Let theme shine like a star</span>
                        <small className="badge badge-success"><i className="far fa-clock"></i> 3 days</small>
                        <div className="tools">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </span>
                        <div className="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo5" id="todoCheck5" />
                                <label htmlFor="todoCheck5"></label>
                        </div>
                        <span className="text">Check your messages and notifications</span>
                        <small className="badge badge-primary"><i className="far fa-clock"></i> 1 week</small>
                        <div className="tools">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash-o"></i>
                        </div>
                    </li>
                    <li>
                    <span className="handle">
                      <i className="fas fa-ellipsis-v"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </span>
                        <div className="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo6" id="todoCheck6" />
                                <label htmlFor="todoCheck6"></label>
                        </div>
                        <span className="text">Let theme shine like a star</span>
                        <small className="badge badge-secondary"><i className="far fa-clock"></i> 1 month</small>
                        <div className="tools">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash-o"></i>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="card-footer clearfix">
                <button type="button" className="btn btn-info float-right"><i className="fas fa-plus"></i> Add item
                </button>
            </div>
        </div>
    )
}
