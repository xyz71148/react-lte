import React from "react";

export const TabHeaderItem = ({name,className,title})=>{
    return(
        <li className="nav-item"><a className={`nav-link ${className}`} id={`custom-tabs-four-${name}-tab`}
                                    data-toggle="pill" href={`#custom-tabs-four-${name}`} role="tab"
                                    aria-controls={`#custom-tabs-four-${name}`}
                                    aria-selected="true">{title}</a></li>
    )
}
export const TabBody = ({name,className,children})=>{
    return(
        <div className={`tab-pane ${className}`} id={`custom-tabs-four-${name}`} role="tabpanel"
             aria-labelledby={`custom-tabs-four-${name}`}>
            {children}
        </div>
    )
}
