

import React from 'react';

export default ({fetching})=>{
    if(!fetching) return null
    return (
        <div className="weui-loadmore position_absolute" style={{top:-7,zIndex:1,width:"100%"}}>
            <i className="weui-loading"/>
            <span className="weui-loadmore__tips">正在加载</span>
        </div>
    )
}
