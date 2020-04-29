import React, {Component} from 'react';
import {connect} from "react-redux";
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
        $("#jsGrid1").jsGrid({
            height: "100%",
            width: "100%",

            sorting: true,
            paging: true,

            data: window.db.clients,

            fields: [
                { name: "Name", type: "text", width: 150 },
                { name: "Age", type: "number", width: 50 },
                { name: "Address", type: "text", width: 200 },
                { name: "Country", type: "select", items: window.db.countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married" }
            ]
        });
    }

    render() {
        return (
            <div className={`view`}>

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">jsGrid</h3>
                    </div>

                    <div className="card-body">
                        <div id="jsGrid1"></div>
                    </div>

                </div>
            </div>
        )
    }
});
