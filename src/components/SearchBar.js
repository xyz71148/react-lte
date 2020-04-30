import React from 'react';
import "./components.css"
import {MdAdd, MdCheck, MdChevronLeft} from 'react-icons/md';
import {connect} from "react-redux";

const size = "1.8em"
const Icons = {
    "close": (<MdChevronLeft size={size}/>),
    "add": (<MdAdd size={size}/>),
    "check": (<MdCheck size={size}/>),
};
export default connect()(({focused, value, onChange, onCancel, onFocus}) => {
    return (
        <div className={
            focused ?
                "weui-search-bar weui-search-bar_focusing" :
                "weui-search-bar"
        } id="searchBar">
            <form className="weui-search-bar__form">
                <div className="weui-search-bar__box">
                    <i className="weui-icon-search"/>
                    <input
                        value={value}
                        onChange={onChange}
                        type="search"
                        className="weui-search-bar__input" id="searchInput"
                        placeholder="搜索"
                    />
                    <a onClick={onCancel} className="weui-icon-clear" id="searchClear"/>
                </div>
                <label onClick={() => {
                    onFocus()
                    document.querySelector("#searchInput").focus()
                }} className="weui-search-bar__label" id="searchText">
                    <i className="weui-icon-search"/>
                    <span>搜索</span>
                </label>
            </form>
            <a onClick={onCancel} className="weui-search-bar__cancel-btn"
               id="searchCancel">取消</a>
        </div>
    )
})
