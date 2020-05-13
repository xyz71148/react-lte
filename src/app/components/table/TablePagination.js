import React from 'react';

export default ({data,onChangePage})=>{
    if( Math.round(data.total / data.limit) <= 1 || data.total === 0) return null;
    return (
        <div className="card-footer clearfix">
            <ul className="pagination pagination-sm m-0 float-right">
                {
                    data.page > 1 &&
                    <li className="page-item">
                        <a className="page-link"
                           onClick={() => onChangePage(data.page - 1)}>«</a>
                    </li>
                }
                <li className="page-item"><span className="page-link">{data.page}</span>
                </li>
                <li className="page-item"><span className="page-link">/</span></li>
                <li className="page-item"><span
                    className="page-link">{Math.round(data.total / data.limit)}</span></li>
                <li className="page-item"><span
                    className="page-link">Total: {data.total}</span></li>
                {
                    data.page < (Math.round(data.total / data.limit)) &&
                    <li className="page-item"><a className="page-link"
                                                 onClick={() => onChangePage(data.page + 1)}>»</a>
                    </li>
                }
            </ul>
        </div>
    )
}
