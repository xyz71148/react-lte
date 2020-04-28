import React from 'react';
import "./style.css"

import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";

const PaymentBlock = ({period, price, payment_type, btnPaymentDisabled, onPayBtnClicked, selected_payment_type, amount, title, icon, onClick}) => {

    return (
        <div className={"payment_type"}>
            <div onClick={onClick} className={"header " + (
                payment_type.length > 0 && payment_type === selected_payment_type && "bottom_line"
            )}>
                {
                    (payment_type.length > 0 && payment_type === selected_payment_type) ?
                        <IoIosArrowDown/> :
                        <IoIosArrowForward/>
                }
                <b className={"title"}>{title}</b> {icon}
            </div>
            {
                payment_type.length > 0 && payment_type === selected_payment_type &&
                <div className="body slideIn">
                    <div>
                        点击下面按钮完成支付,
                    </div>
                    <div style={{marginTop: 16, marginBottom: 16}}>
                        <b>金额:</b> <b style={{color: "green", fontSize: 18}}>${amount}</b>
                    </div>
                    <div>
                        {period}月套餐, (平均 ${price}/月 )
                    </div>
                    <div style={{marginTop: 24, marginBottom: 24}}>
                        <button disabled={btnPaymentDisabled}
                                onClick={onPayBtnClicked}
                                className={!btnPaymentDisabled ? "weui-btn weui-btn_primary" : "weui-btn weui-btn_primary weui-btn_disabled"}>支付
                        </button>
                    </div>
                </div>
            }

        </div>
    )
}
export default PaymentBlock
