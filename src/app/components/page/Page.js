import React from 'react';
import {connect} from "react-redux";
import BaseComponent from "components/BaseComponent"
import classNames from 'lib/classnames';
import "./style.css"
import {MdAdd, MdCheck, MdChevronLeft} from 'react-icons/md';
import {get_platform,body_overflow_hidden} from "lib/utils";

export default connect(({route}) => {
    return {
        go_1: route.go_1,
        pages_history: route.pages_history
    }
})((props) => {
    const {children, go_1,topGlobal, className , pages_history, id, title, showHeader, visible, onClose, onConfirm, onAdd} = props;
    if (!id) return null;
    const sid = id.replace(/-/g, "_").replace(/\//g, "_");
    //console.log(window.go_1,go_1,sid,visible,window.page_close_id)
    const clz = classNames({
        "topGlobal":topGlobal,
        "page": true,
        "slideIn": (visible && go_1) ? false : visible,
        "slideOut": window.page_close_id && sid === window.page_close_id,
    });

    if(topGlobal && visible){
        body_overflow_hidden()
    }

    function scrolled(e) {
        const o = document.body
        window.is_scroll_end = o.offsetHeight + o.scrollTop === o.scrollHeight;
        console.log(window.is_scroll_end,o.offsetHeight , o.scrollTop , o.scrollHeight)
    }
    window.document.body.onscroll = scrolled
    return (
        visible ?
            <BaseComponent className={className? className:"portal"} onScroll={(e) => {scrolled(e)}}>
                <div className={clz} onAnimationEnd={() => {
                    if (window.page_close_id && window.page_close_id === sid) {
                        window.page_close_id = null;
                        if (pages_history.length === 0) {
                            window.location.href = "#"
                        } else {
                            window.history.go(-1)
                        }
                    }
                    const page = document.querySelector("#page_" + sid)
                    page.className = topGlobal ? "topGlobal page" : "page"
                }} id={"page_" + sid}>
                    {
                        showHeader &&
                        <div className="header">
                            <div className="left">
                                {
                                    onClose &&
                                    <div className={"icon"} onClick={({target}) => {
                                        onClose()
                                    }}>
                                        <MdChevronLeft size={"1.8em"}/>
                                    </div>
                                }
                            </div>
                            <div className={"title"}>{title}</div>
                            <div className="right">
                                {
                                    onConfirm &&
                                    <div className={"icon"} onClick={() => {
                                        onConfirm()
                                    }}>
                                        <MdCheck size={"1.8em"}/>
                                    </div>
                                }
                                {
                                    onAdd &&
                                    <div className={"icon"} onClick={() => {
                                        onAdd()
                                    }}>
                                        <MdAdd size={"1.8em"}/>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    <div className="body">
                        {children}
                        {
                            get_platform() === "android" && <div style={{height: 60}}/>
                        }
                    </div>
                </div>
            </BaseComponent> :
            null
    )
});
