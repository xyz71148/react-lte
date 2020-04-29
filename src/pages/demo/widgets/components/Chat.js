import React from 'react';
import "../style.css"

export default () => {
    return (
       <div>
           <h4 className="mt-4 mb-2">Direct Chat</h4>
           <div className="row">
               <div className="col-md-3">
                   <div className="card card-prirary cardutline direct-chat direct-chat-primary">
                       <div className="card-header">
                           <h3 className="card-title">Direct Chat</h3>
                           <div className="card-tools">
                               <span data-toggle="tooltip" title="3 New Messages" className="badge bg-primary">3</span>
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                               <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts"
                                       data-widget="chat-pane-toggle">
                                   <i className="fas fa-comments"></i></button>
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           <div className="direct-chat-messages">
                               <div className="direct-chat-msg">
                                   <div className="direct-chat-infos clearfix">
                                       <span className="direct-chat-name float-left">Alexander Pierce</span>
                                       <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                   </div>
                                   <img className="direct-chat-img" src="static/dist/img/user1-128x128.jpg"
                                        alt="Message User Image"/>
                                   <div className="direct-chat-text">
                                       Is this template really for free? That's unbelievable!
                                   </div>
                               </div>
                               <div className="direct-chat-msg right">
                                   <div className="direct-chat-infos clearfix">
                                       <span className="direct-chat-name float-right">Sarah Bullock</span>
                                       <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                   </div>
                                   <img className="direct-chat-img" src="static/dist/img/user3-128x128.jpg"
                                        alt="Message User Image"/>
                                   <div className="direct-chat-text">
                                       You better believe it!
                                   </div>
                               </div>
                           </div>

                           <div className="direct-chat-contacts">
                               <ul className="contacts-list">
                                   <li>
                                       <a href="#">
                                           <img className="contacts-list-img" src="static/dist/img/user1-128x128.jpg"/>
                                           <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                                               <span className="contacts-list-msg">How have you been? I was...</span>
                                           </div>
                                       </a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                       <div className="card-footer">
                           <form action="#" method="post">
                               <div className="input-group">
                                   <input type="text" name="message" placeholder="Type Message ..."
                                          className="form-control"/>
                                   <span className="input-group-append">
                      <button type="submit" className="btn btn-primary">Send</button>
                    </span>
                               </div>
                           </form>
                       </div>

                   </div>

               </div>
               <div className="col-md-3">
                   <div className="card card-sucress cardutline direct-chat direct-chat-success">
                       <div className="card-header">
                           <h3 className="card-title">Direct Chat</h3>
                           <div className="card-tools">
                               <span data-toggle="tooltip" title="3 New Messages" className="badge bg-success">3</span>
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                               <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts"
                                       data-widget="chat-pane-toggle">
                                   <i className="fas fa-comments"></i></button>
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           <div className="direct-chat-messages">
                               <div className="direct-chat-msg">
                                   <div className="direct-chat-infos clearfix">
                                       <span className="direct-chat-name float-left">Alexander Pierce</span>
                                       <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                   </div>
                                   <img className="direct-chat-img" src="static/dist/img/user1-128x128.jpg"
                                        alt="Message User Image"/>
                                   <div className="direct-chat-text">
                                       Is this template really for free? That's unbelievable!
                                   </div>
                               </div>
                               <div className="direct-chat-msg right">
                                   <div className="direct-chat-infos clearfix">
                                       <span className="direct-chat-name float-right">Sarah Bullock</span>
                                       <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                   </div>
                                   <img className="direct-chat-img" src="static/dist/img/user3-128x128.jpg"
                                        alt="Message User Image"/>
                                   <div className="direct-chat-text">
                                       You better believe it!
                                   </div>
                               </div>
                           </div>

                           <div className="direct-chat-contacts">
                               <ul className="contacts-list">
                                   <li>
                                       <a href="#">
                                           <img className="contacts-list-img" src="static/dist/img/user1-128x128.jpg"/>
                                           <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                                               <span className="contacts-list-msg">How have you been? I was...</span>
                                           </div>
                                       </a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                       <div className="card-footer">
                           <form action="#" method="post">
                               <div className="input-group">
                                   <input type="text" name="message" placeholder="Type Message ..."
                                          className="form-control"/>
                                   <span className="input-group-append">
                      <button type="submit" className="btn btn-success">Send</button>
                    </span>
                               </div>
                           </form>
                       </div>

                   </div>

               </div>
               <div className="col-md-3">
                   <div className="card card-warning direct-chat direct-chat-warning">
                       <div className="card-header">
                           <h3 className="card-title">Direct Chat</h3>
                           <div className="card-tools">
                               <span data-toggle="tooltip" title="3 New Messages" className="badge bg-danger">3</span>
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                               <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts"
                                       data-widget="chat-pane-toggle">
                                   <i className="fas fa-comments"></i></button>
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           <div className="direct-chat-messages">
                               <div className="direct-chat-msg">
                                   <div className="direct-chat-infos clearfix">
                                       <span className="direct-chat-name float-left">Alexander Pierce</span>
                                       <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                   </div>
                                   <img className="direct-chat-img" src="static/dist/img/user1-128x128.jpg"
                                        alt="Message User Image"/>
                                   <div className="direct-chat-text">
                                       Is this template really for free? That's unbelievable!
                                   </div>
                               </div>
                               <div className="direct-chat-msg right">
                                   <div className="direct-chat-infos clearfix">
                                       <span className="direct-chat-name float-right">Sarah Bullock</span>
                                       <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                   </div>
                                   <img className="direct-chat-img" src="static/dist/img/user3-128x128.jpg"
                                        alt="Message User Image"/>
                                   <div className="direct-chat-text">
                                       You better believe it!
                                   </div>
                               </div>
                           </div>

                           <div className="direct-chat-contacts">
                               <ul className="contacts-list">
                                   <li>
                                       <a href="#">
                                           <img className="contacts-list-img" src="static/dist/img/user1-128x128.jpg"/>
                                           <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                                               <span className="contacts-list-msg">How have you been? I was...</span>
                                           </div>
                                       </a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                       <div className="card-footer">
                           <form action="#" method="post">
                               <div className="input-group">
                                   <input type="text" name="message" placeholder="Type Message ..."
                                          className="form-control"/>
                                   <span className="input-group-append">
                      <button type="submit" className="btn btn-warning">Send</button>
                    </span>
                               </div>
                           </form>
                       </div>

                   </div>

               </div>
               <div className="col-md-3">
                   <div className="card card-danger direct-chat direct-chat-danger">
                       <div className="card-header">
                           <h3 className="card-title">Direct Chat</h3>
                           <div className="card-tools">
                               <span data-toggle="tooltip" title="3 New Messages" className="badge">3</span>
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                               <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts"
                                       data-widget="chat-pane-toggle">
                                   <i className="fas fa-comments"></i></button>
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           <div className="direct-chat-messages">
                               <div className="direct-chat-msg">
                                   <div className="direct-chat-infos clearfix">
                                       <span className="direct-chat-name float-left">Alexander Pierce</span>
                                       <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                   </div>
                                   <img className="direct-chat-img" src="static/dist/img/user1-128x128.jpg"
                                        alt="Message User Image"/>
                                   <div className="direct-chat-text">
                                       Is this template really for free? That's unbelievable!
                                   </div>
                               </div>
                               <div className="direct-chat-msg right">
                                   <div className="direct-chat-infos clearfix">
                                       <span className="direct-chat-name float-right">Sarah Bullock</span>
                                       <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                   </div>
                                   <img className="direct-chat-img" src="static/dist/img/user3-128x128.jpg"
                                        alt="Message User Image"/>
                                   <div className="direct-chat-text">
                                       You better believe it!
                                   </div>
                               </div>
                           </div>

                           <div className="direct-chat-contacts">
                               <ul className="contacts-list">
                                   <li>
                                       <a href="#">
                                           <img className="contacts-list-img" src="static/dist/img/user1-128x128.jpg"/>
                                           <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                                               <span className="contacts-list-msg">How have you been? I was...</span>
                                           </div>
                                       </a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                       <div className="card-footer">
                           <form action="#" method="post">
                               <div className="input-group">
                                   <input type="text" name="message" placeholder="Type Message ..."
                                          className="form-control"/>
                                   <span className="input-group-append">
                      <button type="submit" className="btn btn-danger">Send</button>
                    </span>
                               </div>
                           </form>
                       </div>

                   </div>

               </div>
           </div>
       </div>
    )
}
