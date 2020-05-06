import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"

export default connect(
    ({route}) => {
        return {
            page: route.page
        }
    }
)(class extends Component {
    state = {};

    componentDidMount() {
    }

    render() {
        return (
            <div className={`view`}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="timeline">
                            <div className="time-label">
                                <span className="bg-red">10 Feb. 2014</span>
                            </div>
                            <div>
                                <i className="fas fa-envelope bg-blue"></i>
                                <div className="timeline-item">
                                    <span className="time"><i className="fas fa-clock"></i> 12:05</span>
                                    <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                                    <div className="timeline-body">
                                        Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                        weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                        jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                        quora plaxo ideeli hulu weebly balihoo...
                                    </div>
                                    <div className="timeline-footer">
                                        <a className="btn btn-primary btn-sm">Read more</a>
                                        <a className="btn btn-danger btn-sm">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <i className="fas fa-user bg-green"></i>
                                <div className="timeline-item">
                                    <span className="time"><i className="fas fa-clock"></i> 5 mins ago</span>
                                    <h3 className="timeline-header no-border"><a href="#">Sarah Young</a> accepted your
                                        friend request</h3>
                                </div>
                            </div>
                            <div>
                                <i className="fas fa-comments bg-yellow"></i>
                                <div className="timeline-item">
                                    <span className="time"><i className="fas fa-clock"></i> 27 mins ago</span>
                                    <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post
                                    </h3>
                                    <div className="timeline-body">
                                        Take me to your leader!
                                        Switzerland is small and neutral!
                                        We are more like Germany, ambitious and misunderstood!
                                    </div>
                                    <div className="timeline-footer">
                                        <a className="btn btn-warning btn-sm">View comment</a>
                                    </div>
                                </div>
                            </div>
                            <div className="time-label">
                                <span className="bg-green">3 Jan. 2014</span>
                            </div>
                            <div>
                                <i className="fa fa-camera bg-purple"></i>
                                <div className="timeline-item">
                                    <span className="time"><i className="fas fa-clock"></i> 2 days ago</span>
                                    <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>
                                    <div className="timeline-body">
                                        <img src="http://placehold.it/150x100" alt="..."/>
                                        <img src="http://placehold.it/150x100" alt="..."/>
                                        <img src="http://placehold.it/150x100" alt="..."/>
                                        <img src="http://placehold.it/150x100" alt="..."/>
                                        <img src="http://placehold.it/150x100" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <i className="fas fa-video bg-maroon"></i>
                                <div className="timeline-item">
                                    <span className="time"><i className="fas fa-clock"></i> 5 days ago</span>
                                    <h3 className="timeline-header"><a href="#">Mr. Doe</a> shared a video</h3>
                                    <div className="timeline-body">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title={"iframe"} className="embed-responsive-item"
                                                    src="https://www.youtube.com/embed/tMWkeBIohBs" frameBorder="0"
                                                    allowFullScreen=""></iframe>
                                        </div>
                                    </div>
                                    <div className="timeline-footer">
                                        <a href="#" className="btn btn-sm bg-maroon">See comments</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <i className="fas fa-clock bg-gray"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
