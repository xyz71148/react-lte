import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchRow} from "./store"
import "./style.css"
import {timeStamp2String} from "../../../../lib/utils"
import PageTopActionIcon from "../../../../components/page/PageTopActionIcon";

class Detail extends Component {

    componentDidMount() {
        const loading = window.weui.loading("加载中...")
        this.props.dispatch(fetchRow(this.props.order_id, () => {
            loading.hide()
        }))
    }

    render() {
        if (this.props.loadingDetail) return null;
        const {item} = this.props;

        console.log(item)
        return (
            <div className={"OrderDetail"}>
                <PageTopActionIcon type={"close"}/>
                <div className="weui-form-preview">
                    <div className="weui-form-preview__hd">
                        <div className="weui-form-preview__item">
                            <label className="weui-form-preview__label">付款金额</label>
                            <em className="weui-form-preview__value">$ {item.amount}</em>
                        </div>
                    </div>
                    <div className="weui-form-preview__bd">
                        <div className="weui-form-preview__item">
                            <label className="weui-form-preview__label">订单号</label>
                            <span className="weui-form-preview__value">{item.order_no}</span>
                        </div>
                        <div className="weui-form-preview__item">
                            <label className="weui-form-preview__label">状态</label>
                            <span className="weui-form-preview__value">{item.status}</span>
                        </div>
                        <div className="weui-form-preview__item">
                            <label className="weui-form-preview__label">描述</label>
                            <span className="weui-form-preview__value">{item.desc}</span>
                        </div>
                        <div className="weui-form-preview__item">
                            <label className="weui-form-preview__label">付款方式</label>
                            <span className="weui-form-preview__value">{item.pay_type}</span>
                        </div>
                        <div className="weui-form-preview__item">
                            <label className="weui-form-preview__label">交易时间</label>
                            <span className="weui-form-preview__value">{timeStamp2String(item.created_at * 1000)}</span>
                        </div>
                        <div className="weui-form-preview__item">
                            <label className="weui-form-preview__label">更新时间</label>
                            <span className="weui-form-preview__value">{timeStamp2String(item.updated_at * 1000)}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(({order}) => ({
    item: order.item,
    order_id: order.order_id,
    loadingDetail: order.loadingDetail
}))(Detail);
