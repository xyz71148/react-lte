import React from 'react';
import "../style.css"

export default () => {
    return (
        <div>
            <h5 className="mt-4 mb-2">Tabs in Cards</h5>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header d-flex p-0">
                            <h3 className="card-title p-3">Tabs</h3>
                            <ul className="nav nav-pills ml-auto p-2">
                                <li className="nav-item"><a className="nav-link active" href="#tab_1" data-toggle="tab">Tab
                                    1</a></li>
                                <li className="nav-item"><a className="nav-link" href="#tab_2" data-toggle="tab">Tab
                                    2</a></li>
                                <li className="nav-item"><a className="nav-link" href="#tab_3" data-toggle="tab">Tab
                                    3</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                        Dropdown <span className="caret"></span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" tabIndex="-1" href="#">Action</a>
                                        <a className="dropdown-item" tabIndex="-1" href="#">Another action</a>
                                        <a className="dropdown-item" tabIndex="-1" href="#">Something else here</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" tabIndex="-1" href="#">Separated link</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane active" id="tab_1">
                                    A wonderful serenity has taken possession of my entire soul,
                                    like these sweet mornings of spring which I enjoy with my whole heart.
                                    I am alone, and feel the charm of existence in this spot,
                                    which was created for the bliss of souls like mine. I am so happy,
                                    my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                                    that I neglect my talents. I should be incapable of drawing a single stroke
                                    at the present moment; and yet I feel that I never was a greater artist than now.
                                </div>
                                <div className="tab-pane" id="tab_2">
                                    The European languages are members of the same family. Their separate existence is a
                                    myth.
                                    For science, music, sport, etc, Europe uses the same vocabulary. The languages only
                                    differ
                                    in their grammar, their pronunciation and their most common words. Everyone realizes
                                    why a
                                    new common language would be desirable: one could refuse to pay expensive
                                    translators. To
                                    achieve this, it would be necessary to have uniform grammar, pronunciation and more
                                    common
                                    words. If several languages coalesce, the grammar of the resulting language is more
                                    simple
                                    and regular than that of the individual languages.
                                </div>
                                <div className="tab-pane" id="tab_3">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset
                                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
