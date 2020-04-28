import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"
import {fetchPaymentUrl} from "../../../store/front/paymentActions"
import PlanBlock from "./PlanBlock"
import PaymentBlock from "./PaymentBlock"
import IconPaypal from "../../components/IconPaypal"
import IconEth from "../../components/IconEth"
import Page from "../../../lib/page"
import EthPaymentConfirm from "./EthPaymentConfirm";
import {get_platform} from "../../../lib/utils";
import PageTopActionIcon from "../../components/PageTopActionIcon";

class Payment extends Component {
    state = {
        paymentEth: null,
        btnPaymentDisabled: false,
        payment_type: "",
        eth: false,
        selectedPlan: 0,
    }

    onPayBtnClicked(payment_type, amount, period) {
        this.setState({
            btnPaymentDisabled: true
        })
        const loading = window.weui.loading("加载中...")
        const redirect_url = window.location.href.replace("#plan","#order");
        this.props.dispatch(fetchPaymentUrl({
            payment_type: this.state.payment_type,
            amount: amount * period,
            desc: `${period}个月套餐`
        }, ({body, code, msg}) => {

            if (code === 200) {
                const {url} = body
                if (this.state.payment_type === "paypal") {
                    window.location.href = url + "&redirect_url=" + encodeURIComponent(redirect_url)
                }
                if (this.state.payment_type === "eth") {
                    this.setState({
                        paymentEth: body,
                        eth: true
                    })
                    this.props.dispatch({
                        type: "route/showPage",
                        payload: {
                            id: "eth_confirm"
                        }
                    })
                }
                loading.hide()
            } else {
                loading.hide()
                window.weui.topTips(msg)
            }
            this.setState({
                btnPaymentDisabled: false
            })
        }))

    }

    onTogglePayment(payment_type) {
        const t = this.state.payment_type === payment_type ? "" : payment_type
        this.setState({
            payment_type: t
        })
    }

    render() {
        const {plans, payment} = window.globalObject.constant
        const {price, period} = plans[this.state.selectedPlan]
        const amount = price * period;
        return (
            <div className={"Payment"}>
                <PageTopActionIcon type={"close"}/>
                <div style={{marginTop: 0, fontSize: 16, marginBottom: 12}}>
                    <b>Vip 套餐方案</b>
                </div>
                <div style={{marginTop: 16}}>
                    <div className={"step"}><b>第一步</b></div>
                    <div style={{marginTop: 16, fontSize: 16}}><b><b style={{color: "green"}}>选择</b>一个适合你的套餐</b></div>
                    <div style={{marginTop: 8}}>
                        所有套餐包括适用所有平台App,7*24小时在线客服支持以及高速不限带宽的线路
                    </div>
                    <div className={"plans"}>
                        {
                            window.globalObject.constant.plans.map(({price, save, period, popular}, i) => {
                                return (
                                    <PlanBlock {...{
                                        key: i,
                                        onClick: () => {
                                            this.setState({
                                                selectedPlan: i
                                            })
                                        },
                                        price,
                                        save,
                                        period,
                                        popular,
                                        selected: this.state.selectedPlan === i
                                    }}/>
                                )
                            })
                        }

                        <div style={{margin: "10px 0"}}>
                            所有付款金额结算货币为美元
                        </div>
                    </div>
                </div>
                <div style={{marginTop: 16}}>
                    <div className={"step"}><b>第二步</b></div>
                    <div style={{marginTop: 16, fontSize: 16}}>
                        选择支付方式
                    </div>
                    <div className={"payments"}>
                        {
                            payment.includes("paypal") &&
                            <PaymentBlock
                                btnPaymentDisabled={this.state.btnPaymentDisabled}
                                onPayBtnClicked={this.onPayBtnClicked.bind(this, "paypal", price, period)}
                                period={period} price={price}
                                payment_type="paypal"
                                onClick={this.onTogglePayment.bind(this, "paypal")}
                                title={"Paypal"} selected_payment_type={this.state.payment_type} icon={(<IconPaypal/>)}
                                amount={amount}/>
                        }
                        {
                            payment.includes("eth") &&
                            <PaymentBlock
                                btnPaymentDisabled={this.state.btnPaymentDisabled}
                                onPayBtnClicked={this.onPayBtnClicked.bind(this, "eth", price, period)}
                                period={period}
                                price={price}
                                payment_type="eth"
                                onClick={this.onTogglePayment.bind(this, "eth")}
                                title={"Eth"} selected_payment_type={this.state.payment_type} icon={(<IconEth/>)}
                                amount={amount}/>
                        }
                    </div>
                </div>

                <Page title={"Eth支付"}
                      id={"eth_confirm"}
                      visible={this.props.page.eth_confirm && this.props.page.eth_confirm.visible}
                >
                    <EthPaymentConfirm paymentEth={this.state.paymentEth}/>
                </Page>
            </div>
        )
    }
}

export default connect(({route}) => {
    return {
        page: route.page
    }
})(Payment);
