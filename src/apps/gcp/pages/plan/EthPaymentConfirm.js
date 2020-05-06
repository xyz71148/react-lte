import React, {Component} from 'react';
import "./style.css"
import QRCode from "qrcode"

import { MdContentCopy,MdInfoOutline } from "react-icons/md";

import {Clipboard} from "lib/utils"
import {connect} from "react-redux";
import {fetchPaymentStatus} from "./store";
import PageTopActionIcon from "components/page/PageTopActionIcon";

class EthPaymentConfirm extends Component {
    state = {
        qr_code_data_url: null,
        left_time:0
    }
    componentWillUnmount() {
        this.time_id && clearInterval(this.time_id)
    }

    componentDidMount() {
        const {paymentEth} = this.props
        const {address,created_at,payment_id} = paymentEth
        this.time_id && clearInterval(this.time_id)
        this.time_id = setInterval(()=>{
            if(this.state.left_time >= 0){
                const left_time = 15*60 - parseInt(+(new Date())/1000 - created_at)
                this.setState({
                    left_time
                })
                if(document.querySelector("#min_left"))
                    document.querySelector("#min_left").innerHTML = this.getLeftTimeCountDown(left_time)
            }else{
                if(document.querySelector("#min_left"))
                    document.querySelector("#min_left").innerHTML = "超时"
                clearInterval(this.time_id)
                this.timeout()
            }

        },1000)
        QRCode.toDataURL(address, (err, qr_code_data_url) => {
            this.setState({
                qr_code_data_url
            })
        })
        this.getPaymentStatus(payment_id)
    }
    timeout(){
        weui.alert("付款超时,请重新下单",()=>{
            window.location.reload()
        })
    }
    getPaymentStatus(payment_id){
        this.props.dispatch(fetchPaymentStatus({
            payment_type: "eth",
            payment_id,
        }, ({body, code,error}) => {
            if(code !== 200 || error){
                setTimeout(()=>{
                    this.getPaymentStatus(payment_id)
                },2000)
                return
            }
            const {status} = body;
            if(status && status !== "approved"){
                setTimeout(()=>{
                    this.getPaymentStatus(payment_id)
                },1000)
            }else{
                weui.alert("支付成功",()=>{
                    window.location.href = "#order"
                    window.location.reload()
                })
            }
        }))
    }
    onSelectQrCode(paymentEth){
        const {address} = paymentEth
        weui.toast("自动复制成功")
        setTimeout(()=>{
            weui.alert(`请将ETH 发送到: ${address}`,()=>{
                Clipboard.copy(address);
            })
        },1400)
    }
    getLeftTimeCountDown(t){
        var minutes = Math.floor((t % ( 60 * 60)) / (60));
        var seconds = Math.floor((t % ( 60)));
        //console.log(minutes,seconds)
        if(t > 0){
            return minutes + ":" + seconds;
        }else{
            return "超时"
        }
    }
    showInfo(paymentEth){
        const {amount_eth,amount_usd,exchange_price} = paymentEth
        weui.actionSheet([
            {
                label: `总价: ${amount_usd} USD`,
                onClick: function(){}
            }, {
                label: `汇率: ${exchange_price} USD`,
                onClick: function(){}
            }, {
                label: `应付金额: ${amount_eth} ETH`,
                onClick: function(){}
            }
        ], [
            {
                label: '取消',
                onClick: function(){}
            }
        ], {
            title: '请在规定时间内付款 <b id="min_left"></b>',
            className: "weui-custom",
            onClose: function(){}
        });
    }
    render() {
        const {paymentEth} = this.props
        const {amount_eth} = paymentEth
        const {qr_code_data_url} = this.state;
        return (
            <div className={"eth_payment"}>
                <PageTopActionIcon type={"close"}/>
                <div className={"tips"}>
                    扫描 QR 码或将付款详细信息复制粘贴到您的钱包
                </div>
                <div className="card">
                    <div className={"header"}>
                        <div>
                            <MdContentCopy onClick={this.onSelectQrCode.bind(this,paymentEth)} size={"2em"}/>
                        </div>
                        <div className={"title"}>
                           <b> {amount_eth} ETH</b>
                        </div>
                        <div>
                            <MdInfoOutline  onClick={this.showInfo.bind(this,paymentEth)} size={"2em"}/>
                        </div>
                    </div>
                    <div id="qr-container">
                        {
                            qr_code_data_url && <img onClick={this.onSelectQrCode.bind(this,paymentEth)} src={qr_code_data_url} alt=""/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(EthPaymentConfirm);
