import React, {Component} from 'react';
import {connect} from "react-redux";
import "../Home.css"
import {fetchMe} from "../../store/front/userActions"
import {Cell, CellBody, CellFooter, CellHeader, Cells} from "react-weui";
import {timeStamp2String} from '../../lib/utils'
import PageTopActionIcon from "../components/PageTopActionIcon";

class Account extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMe())
    }

    render() {
        const {me} = this.props;
        if (!me) return null;
        return (
            <div className={"Account"}>

                <PageTopActionIcon type={"close"}/>
                <Cells>
                    <Cell>
                        <CellHeader>
                            Email
                        </CellHeader>
                        <CellBody/>
                        <CellFooter>
                            {me.email}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            套餐过期时间
                        </CellHeader>
                        <CellBody/>
                        <CellFooter>
                            {me.expired_at > 0 ? timeStamp2String(me.expired_at * 1000) : "-"}
                        </CellFooter>
                    </Cell>
                </Cells>
            </div>
        )
    }
}

export default connect(({user}) => ({
    me: user.me,
}))(Account);
