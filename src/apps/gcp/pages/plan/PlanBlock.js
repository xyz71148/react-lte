import React from 'react';
import "./style.css"
import {TiInputChecked} from "react-icons/ti";


const PlanBlock = ({selected, save,price,period,popular, onClick}) => {
    return (
        <div onClick={onClick} className={selected ? "plan selected" : "plan"}>
            {
                selected &&
                <div className="check">
                    <TiInputChecked size="2em"/>
                </div>
            }
            {
                popular &&
                <div className={"popular"}>
                     推荐
                </div>
            }
            <div className={"period"}>
                <b>{period}</b> 个月
            </div>
            {
                save &&
                <div className={"save"}>
                    <i>$</i><b> {save}</b>
                </div>
            }
            <div className={"price"}>
                <i>$</i><b>{price}</b> / 月
            </div>
            <div className="desc">
                {period}个月仅需支付 $ {price * period}
                {
                    save &&
                    <b>$ {(save * period).toFixed(1)}</b>
                }
                {
                    save &&
                    <span>,
                        <span className={"save_percent"}>节省
                            { (100 * (save - price) / save).toFixed(1) } %
                        </span>
                    </span>
                }
            </div>
        </div>
    )
}
export default PlanBlock
