import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchRows} from "./store"
import "./style.css"
import {Cell, CellBody, CellFooter, CellHeader} from "react-weui";
import EmptyRecord from "components/EmptyRecord"
import {timeStamp2String} from "lib/utils"
import PageTopActionIcon from "components/page/PageTopActionIcon";

class Index extends Component {
    componentDidMount() {
        this.props.dispatch(fetchRows())
    }

    onSelectCell({id}) {
        window.location.href="#order/detail?id="+id
    }

    getStatus(status) {
        if (status === "approved") {
            return (
                <span style={{color: "green"}}>已支付</span>
            )
        }
        if (status === "cancel") {
            return (
                <span style={{color: "gray"}}>已取消</span>
            )
        }
        if (status === "timeout") {
            return (
                <span style={{color: "firebrick"}}>超时</span>
            )
        }
        if (status === "created") {
            return (
                <span style={{color: "dodgerblue"}}>支付中</span>
            )
        }

        return "-"
    }

    render() {
        const {items} = this.props;
        return (
            <div className={"Order"}>
                <PageTopActionIcon type={"close"}/>
                <div style={{margin: "0 2px"}}>
                    {items.length > 0 ? items.map((item, i) => {
                            return (
                                <Cell key={i} onClick={this.onSelectCell.bind(this, item)} access>
                                    <CellHeader style={{display: "block"}}>
                                        <p>{item.desc}</p>
                                        <p> {timeStamp2String(1000 * item.created_at)}</p>
                                    </CellHeader>
                                    <CellBody style={{marginLeft: 24}}>
                                        <div>
                                            $ {item.amount}
                                        </div>
                                        <div>

                                        </div>
                                    </CellBody>
                                    <CellFooter>
                                        <span>{this.getStatus(item.status)}</span>
                                    </CellFooter>
                                </Cell>
                            )
                        }) :
                        <EmptyRecord/>
                    }
                </div>
            </div>
        )
    }
}

export default connect(({order}) => ({
    items: order.items,
    showDetail: order.showDetail,
    order_no: order.order_no,
}))(Index);
