import React, {Component} from 'react';
import {connect} from "react-redux";
import ColorPalette from "./components/ColorPalette"
import AlertsCallouts from "./components/AlertsCallouts"
import TabsInCard from "./components/TabsInCard"

import "./style.css"

export default connect(
    ({route}) => {
        return {
            page: route.page
        }
    }
)
(class extends Component {
    state = {};

    componentDidMount() {

    }

    render() {
        return (
            <div className={`view`}>
                <ColorPalette/>
                <AlertsCallouts/>
                <TabsInCard/>


                <h5 className="mt-4 mb-2">Progress Bars</h5>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Progress Bars Different Sizes</h3>
                            </div>
                            <div className="card-body">
                                <p><code>.progress</code></p>
                                <div className="progress">
                                    <div className="progress-bar bg-primary progress-bar-striped" role="progressbar"
                                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:40}}>
                                        <span className="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                                <p><code>.progress-sm</code></p>
                                <div className="progress progress-sm active">
                                    <div className="progress-bar bg-success progress-bar-striped" role="progressbar"
                                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:20}}>
                                        <span className="sr-only">20% Complete</span>
                                    </div>
                                </div>
                                <p><code>.progress-xs</code></p>
                                <div className="progress progress-xs">
                                    <div className="progress-bar bg-warning progress-bar-striped" role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:60}}>
                                        <span className="sr-only">60% Complete (warning)</span>
                                    </div>
                                </div>
                                <p><code>.progress-xxs</code></p>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar progress-bar-danger progress-bar-striped"
                                         role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:60}}>
                                        <span className="sr-only">60% Complete (warning)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Progress bars</h3>
                            </div>
                            <div className="card-body">
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="40"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width:40}}>
                                        <span className="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="20"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width:20}}>
                                        <span className="sr-only">20% Complete</span>
                                    </div>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width:60}}>
                                        <span className="sr-only">60% Complete (warning)</span>
                                    </div>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{width:80}}>
                                        <span className="sr-only">80% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Vertical Progress Bars Different Sizes</h3>
                            </div>
                            <div className="card-body text-center">
                                <p>By adding the
                                    class <code>.vertical</code> and <code>.progress-sm</code>, <code>.progress-xs</code>
                                    or
                                    <code>.progress-xxs</code> we achieve:</p>
                                <div className="progress vertical active">
                                    <div className="progress-bar bg-primary progress-bar-striped" role="progressbar"
                                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{height:40}}>
                                        <span className="sr-only">40%</span>
                                    </div>
                                </div>
                                <div className="progress vertical progress-sm">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="20"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{height:100}}>
                                        <span className="sr-only">100%</span>
                                    </div>
                                </div>
                                <div className="progress vertical progress-xs">
                                    <div className="progress-bar bg-warning progress-bar-striped" role="progressbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{height:60}}>
                                        <span className="sr-only">60%</span>
                                    </div>
                                </div>
                                <div className="progress vertical progress-xxs">
                                    <div className="progress-bar bg-info progress-bar-striped" role="progressbar"
                                         aria-valuenow="60"
                                         aria-valuemin="0" aria-valuemax="100" style={{height:60}}>
                                        <span className="sr-only">60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Vertical Progress bars</h3>
                            </div>
                            <div className="card-body text-center">
                                <p>By adding the class <code>.vertical</code> we achieve:</p>
                                <div className="progress vertical">
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="40"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{height:40}}>
                                        <span className="sr-only">40%</span>
                                    </div>
                                </div>
                                <div className="progress vertical">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="20"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{height:20}}>
                                        <span className="sr-only">20%</span>
                                    </div>
                                </div>
                                <div className="progress vertical">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{height:60}}>
                                        <span className="sr-only">60%</span>
                                    </div>
                                </div>
                                <div className="progress vertical">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="80"
                                         aria-valuemin="0"
                                         aria-valuemax="100" style={{height:80}}>
                                        <span className="sr-only">80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 className="mt-4 mb-2">Bootstrap Accordion & Carousel</h5>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Collapsible Accordion</h3>
                            </div>
                            <div className="card-body">
                                <div id="accordion">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h4 className="card-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                                    Collapsible Group Item #1
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid.
                                                3
                                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                truck quinoa nesciunt
                                                laborum
                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                single-origin coffee
                                                nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred
                                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft
                                                beer
                                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                heard of them accusamus
                                                labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-danger">
                                        <div className="card-header">
                                            <h4 className="card-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                    Collapsible Group Danger
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid.
                                                3
                                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                truck quinoa nesciunt
                                                laborum
                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                single-origin coffee
                                                nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred
                                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft
                                                beer
                                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                heard of them accusamus
                                                labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-success">
                                        <div className="card-header">
                                            <h4 className="card-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseThree">
                                                    Collapsible Group Success
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid.
                                                3
                                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                                truck quinoa nesciunt
                                                laborum
                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                single-origin coffee
                                                nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred
                                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft
                                                beer
                                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                                                heard of them accusamus
                                                labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Carousel</h3>
                            </div>
                            <div className="card-body">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                            className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100"
                                                 src="https://placehold.it/900x500/39CCCC/ffffff&text=I+Love+Bootstrap"
                                                 alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100"
                                                 src="https://placehold.it/900x500/3c8dbc/ffffff&text=I+Love+Bootstrap"
                                                 alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100"
                                                 src="https://placehold.it/900x500/f39c12/ffffff&text=I+Love+Bootstrap"
                                                 alt="Third slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 className="mt-4 mb-2">Typography</h5>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Headlines
                                </h3>
                            </div>
                            <div className="card-body">
                                <h1>h1. Bootstrap heading</h1>
                                <h2>h2. Bootstrap heading</h2>
                                <h3>h3. Bootstrap heading</h3>
                                <h4>h4. Bootstrap heading</h4>
                                <h5>h5. Bootstrap heading</h5>
                                <h6>h6. Bootstrap heading</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Text Emphasis
                                </h3>
                            </div>
                            <div className="card-body">
                                <p className="lead">Lead to emphasize importance</p>
                                <p className="text-success">Text green to emphasize success</p>
                                <p className="text-info">Text aqua to emphasize info</p>
                                <p className="text-primary">Text light blue to emphasize info (2)</p>
                                <p className="text-danger">Text red to emphasize danger</p>
                                <p className="text-warning">Text yellow to emphasize warning</p>
                                <p className="text-muted">Text muted to emphasize general</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Primary Block Quotes
                                </h3>
                            </div>
                            <div className="card-body">
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.</p>
                                    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Secondary Block Quotes
                                </h3>
                            </div>
                            <div className="card-body clearfix">
                                <blockquote className="quote-secondary">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.</p>
                                    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Unordered List
                                </h3>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                    <li>Facilisis in pretium nisl aliquet</li>
                                    <li>Nulla volutpat aliquam velit
                                        <ul>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Vestibulum laoreet porttitor sem</li>
                                            <li>Ac tristique libero volutpat at</li>
                                        </ul>
                                    </li>
                                    <li>Faucibus porta lacus fringilla vel</li>
                                    <li>Aenean sit amet erat nunc</li>
                                    <li>Eget porttitor lorem</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Ordered Lists
                                </h3>
                            </div>
                            <div className="card-body">
                                <ol>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                    <li>Facilisis in pretium nisl aliquet</li>
                                    <li>Nulla volutpat aliquam velit
                                        <ol>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Vestibulum laoreet porttitor sem</li>
                                            <li>Ac tristique libero volutpat at</li>
                                        </ol>
                                    </li>
                                    <li>Faucibus porta lacus fringilla vel</li>
                                    <li>Aenean sit amet erat nunc</li>
                                    <li>Eget porttitor lorem</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Unstyled List
                                </h3>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                    <li>Facilisis in pretium nisl aliquet</li>
                                    <li>Nulla volutpat aliquam velit
                                        <ul>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Vestibulum laoreet porttitor sem</li>
                                            <li>Ac tristique libero volutpat at</li>
                                        </ul>
                                    </li>
                                    <li>Faucibus porta lacus fringilla vel</li>
                                    <li>Aenean sit amet erat nunc</li>
                                    <li>Eget porttitor lorem</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Description
                                </h3>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Description lists</dt>
                                    <dd>A description list is perfect for defining terms.</dd>
                                    <dt>Euismod</dt>
                                    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec
                                        elit.
                                    </dd>
                                    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                    <dt>Malesuada porta</dt>
                                    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <i className="fas fa-text-width"></i>
                                    Description Horizontal
                                </h3>
                            </div>
                            <div className="card-body">
                                <dl className="row">
                                    <dt className="col-sm-4">Description lists</dt>
                                    <dd className="col-sm-8">A description list is perfect for defining terms.</dd>
                                    <dt className="col-sm-4">Euismod</dt>
                                    <dd className="col-sm-8">Vestibulum id ligula porta felis euismod semper eget
                                        lacinia odio sem nec elit.
                                    </dd>
                                    <dd className="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget
                                        metus.
                                    </dd>
                                    <dt className="col-sm-4">Malesuada porta</dt>
                                    <dd className="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd>
                                    <dt className="col-sm-4">Felis euismod semper eget lacinia</dt>
                                    <dd className="col-sm-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                        condimentum nibh, ut fermentum massa justo
                                        sit amet risus.
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
