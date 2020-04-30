import React from 'react';
import "../style.css"

export default () => {
    return (
        <div className="card card-default color-palette-box">
            <div className="card-header">
                <h3 className="card-title">
                    <i className="fas fa-tag"></i>
                    Color Palette
                </h3>
            </div>
            <div className="card-body">
                <div className="col-12">
                    <h5>Theme Colors</h5>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center">Primary</h4>
                        <div className="color-palette-set">
                            <div className="bg-primary color-palette"><span>#007bff</span></div>
                            <div className="bg-primary disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center">Secondary</h4>
                        <div className="color-palette-set">
                            <div className="bg-secondary color-palette"><span>#6c757d</span></div>
                            <div className="bg-secondary disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center">Info</h4>
                        <div className="color-palette-set">
                            <div className="bg-info color-palette"><span>#17a2b8</span></div>
                            <div className="bg-info disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center">Success</h4>
                        <div className="color-palette-set">
                            <div className="bg-success color-palette"><span>#28a745</span></div>
                            <div className="bg-success disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-warning">Warning</h4>
                        <div className="color-palette-set">
                            <div className="bg-warning color-palette"><span>#ffc107</span></div>
                            <div className="bg-warning disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center">Danger</h4>
                        <div className="color-palette-set">
                            <div className="bg-danger color-palette"><span>#dc3545</span></div>
                            <div className="bg-danger disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <h5 className="mt-3">Black/White Nuances</h5>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center">Black</h4>
                        <div className="color-palette-set">
                            <div className="bg-black color-palette"><span>#000000</span></div>
                            <div className="bg-black disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center">Gray Dark</h4>
                        <div className="color-palette-set">
                            <div className="bg-gray-dark color-palette"><span>#343a40</span></div>
                            <div className="bg-gray-dark disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center">Gray</h4>
                        <div className="color-palette-set">
                            <div className="bg-gray color-palette"><span>#adb5bd</span></div>
                            <div className="bg-gray disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-light">Light</h4>
                        <div className="color-palette-set">
                            <div className="bg-light color-palette"><span>#1f2d3d</span></div>
                            <div className="bg-light disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <h5 className="mt-3">Colors</h5>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-indigo">Indigo</h4>
                        <div className="color-palette-set">
                            <div className="bg-indigo color-palette"><span>#6610f2</span></div>
                            <div className="bg-indigo disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-lightblue">Lightblue</h4>
                        <div className="color-palette-set">
                            <div className="bg-lightblue color-palette"><span>#3c8dbc</span></div>
                            <div className="bg-lightblue disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-navy">Navy</h4>
                        <div className="color-palette-set">
                            <div className="bg-navy color-palette"><span>#001f3f</span></div>
                            <div className="bg-navy disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-purple">Purple</h4>
                        <div className="color-palette-set">
                            <div className="bg-purple color-palette"><span>#605ca8</span></div>
                            <div className="bg-purple disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-fuchsia">Fuchsia</h4>
                        <div className="color-palette-set">
                            <div className="bg-fuchsia color-palette"><span>#f012be</span></div>
                            <div className="bg-fuchsia disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-pink">Pink</h4>
                        <div className="color-palette-set">
                            <div className="bg-pink color-palette"><span>#e83e8c</span></div>
                            <div className="bg-pink disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-maroon">Maroon</h4>
                        <div className="color-palette-set">
                            <div className="bg-maroon color-palette"><span>#d81b60</span></div>
                            <div className="bg-maroon disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-orange">Orange</h4>
                        <div className="color-palette-set">
                            <div className="bg-orange color-palette"><span>#ff851b</span></div>
                            <div className="bg-orange disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-lime">Lime</h4>
                        <div className="color-palette-set">
                            <div className="bg-lime color-palette"><span>#01ff70</span></div>
                            <div className="bg-lime disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-teal">Teal</h4>
                        <div className="color-palette-set">
                            <div className="bg-teal color-palette"><span>#39cccc</span></div>
                            <div className="bg-teal disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2">
                        <h4 className="text-center bg-olive">Olive</h4>
                        <div className="color-palette-set">
                            <div className="bg-olive color-palette"><span>#3d9970</span></div>
                            <div className="bg-olive disabled color-palette"><span>Disabled</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
