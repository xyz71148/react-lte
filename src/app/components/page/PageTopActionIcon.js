import React from 'react';
import "./components.css"
import {MdAdd, MdCheck, MdChevronLeft, MdDelete} from 'react-icons/md';
import {connect} from "react-redux";
import {close_page} from "../../lib/utils"

const size = "1.8em"
const Icons = {
    "close": (<MdChevronLeft size={size}/>),
    "add": (<MdAdd size={size}/>),
    "check": (<MdCheck size={size}/>),
    "del": (<MdDelete size={size}/>),
};
export default connect()(({dispatch, type, style = {}, onClick, index = 1, action = "left"}) => {
    const style_ = {}
    let onClose_ = (e) => {
        if (onClick) {
            onClick(e.target);
        } else {
            if (type === "close") {
                close_page(dispatch, e.target)
            }
        }
    };
    style_[action] = (parseInt(index) - 1) * 52
    return (
        <div style={{...style_, ...style}} className={"page_top_icons"} onClick={(e) => {
            onClose_(e)
        }}>
            {Icons[type]}
        </div>
    )
})
