import React from 'react';
import {connect} from "react-redux";
import BaseComponent from "../../components/BaseComponent"
import classNames from '../../lib/classnames';
import "./style.css"
import {MdChevronLeft, MdAdd, MdCheck} from 'react-icons/md';
import {get_platform} from "../../lib/utils";
export default connect(({route})=>{
    return {
        page_close_id:route.page_close_id
    }
})((props) => {
    const {children, id,page_close_id,title,dispatch, showHeader, visible, onClose, onConfirm, onAdd} = props;
if (!id) return null;
    const sid = id.replace(/-/g, "_").replace(/\//g, "_")
    const clz = classNames({
        "page": true,
        "slideIn": visible,
        "slideOut": page_close_id && sid === page_close_id,
    })
    function scrolled(e)
    {
        const o = e.target
        //visible height + pixel scrolled = total height
        window.is_scroll_end = o.offsetHeight + o.scrollTop === o.scrollHeight
    }
    return (
        visible ?
            <BaseComponent onScroll={(e)=>{scrolled(e)}} >
                <div className={clz} onAnimationEnd={() => {
                    if (page_close_id && page_close_id === sid) {
                        dispatch({
                            type:"route/hidePage"
                        })
                    }
                    const page = document.querySelector("#page_" + sid)
                    page.className = "page";
                }} id={"page_" + sid}>
                    {
                        showHeader &&
                        <div className="header">
                            <div className="left">
                                {
                                    onClose &&
                                    <div className={"icon"} onClick={() => {
                                        const page = document.querySelector("#page_" + sid)
                                        page.className = "page slideOut";
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