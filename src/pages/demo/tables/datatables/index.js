import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"
import Datatable from 'react-bs-datatable';

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


        const header = [
            { title: 'Username (filterable)', prop: 'username', filterable: true },
            { title: 'Name', prop: 'realname', sortable: true },
            { title: 'Location', prop: 'location' },
            { title: 'Last Updated', prop: 'date', sortable: true }
        ];

        const body = Array.from(new Array(57), () => {
            const rd = (Math.random() * 10).toFixed(1);

            if (rd > 0.5) {
                return {
                    username: 'i-am-billy',
                    realname: `Billy ${rd}`,
                    location: 'Mars',
                    date: moment()
                        .subtract(1, 'days')
                        .format('Do MMMM YYYY')
                };
            }

            return {
                username: 'john-nhoj',
                realname: `John ${rd}`,
                location: 'Saturn',
                date: moment()
                    .subtract(2, 'days')
                    .format('Do MMMM YYYY')
            };
        });

        return (
            <div className={`view`}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">DataTable</h3>
                            </div>
                            <div className="card-body">
                                <Datatable
                                    tableHeaders={header}
                                    tableBody={body}
                                    rowsPerPage={5}
                                    rowsPerPageOption={[5, 10, 15, 20]}
                                    tableClass="striped hover responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
