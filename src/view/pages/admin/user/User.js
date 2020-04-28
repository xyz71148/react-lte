import React, {Component} from 'react';
import {connect} from "react-redux";
import {Cell, CellBody, CellFooter, CellHeader, Cells} from "react-weui";
import Page from "../../../../lib/page"
import PageTopActionIcon from "../../../components/PageTopActionIcon";
import SearchBar from "../../../components/SearchBar";
import "./style.css"

import {changeRow, delRow, fetchRow, fetchRows, field_key, namespace} from "./store"
import {close_page} from "../../../../lib/utils"

const page_detail_url = `${namespace.replace("_", "/")}/detail`;
const page_field_url = `${namespace.replace("_", "/")}/field`;
const page_add_url = `${namespace.replace("_", "/")}/add`;

export default connect(
    ({route, ...state}) => {
        return {
            data: state[namespace].data,
            fields: state[namespace].data.fields,
            row: state[namespace].row,
            fetching: state[namespace].fetching,
            page_add: route.page[page_add_url] ? route.page[page_add_url] : {visible: false},
            page_detail: route.page[page_detail_url] ? route.page[page_detail_url] : {visible: false},
            page_field: route.page[page_field_url] ? route.page[page_field_url] : {visible: false}
        }
    }
)
(class extends Component {
    state = {
        searchBarFocused: false,
        searchTxt: "",
        fieldValue: ""
    };
    fetching = true;
    page = 1;
    limit = 15;

    componentDidMount() {
        this.props.dispatch({
            type: `${namespace}/setState`,
            payload: {
                data: {
                    rows: [],
                    page: this.page,
                    limit: this.limit
                }
            }
        });
        this.timeid && clearInterval(this.timeid)
        this.timeid = setInterval(() => {
            if (window.is_scroll_end && !this.fetching) {
                this.fetching = true
                this.props.dispatch(fetchRows({
                    page: this.page + 1,
                    limit: this.limit
                }, ({body}) => {
                    this.fetching = false;
                    this.page = body.page;
                    this.limit = body.limit
                },()=>{
                    this.fetching = false;
                }))
            }
        }, 800)
        const {page, limit} = this.props.data;
        this.props.dispatch(fetchRows({
            page,
            limit
        }, ({body}) => {
            this.page = body.page;
            this.limit = body.limit;
            this.fetching = false;
        }))
    }
    componentWillUnmount() {
        this.timeid && clearInterval(this.timeid)
    }

    onShowField(field) {
        this.setState({
            fieldValue: this.props.row[field]
        })
        this.props.dispatch({
            type: "route/showPage",
            payload: {
                id: page_field_url,
                title: field
            }
        })
    }

    onShowDetail(row) {
        this.props.dispatch(fetchRow(row.id, () => {
            this.props.dispatch({
                type: "route/showPage",
                payload: {
                    id: page_detail_url
                }
            })
        }))
    }

    render() {
        const {data,fetching, fields,row} = this.props;
        let items = [];
        data && data.rows && data.rows.map(row => {
            if (
                this.state.searchTxt.length > 0 &&
                row[field_key].toLowerCase().indexOf(this.state.searchTxt) >= 0
            ) {
                items.push(row)
            }
            return row
        });
        if (this.state.searchTxt.length === 0) {
            items = data.rows
        }

        return (
            <div className={`view_${namespace}`}>
                <PageTopActionIcon type={"add"} action="right" onClick={()=>{
                    this.props.dispatch({
                        type: "route/showPage",
                        payload: {
                            id: page_add_url
                        }
                    })
                }}/>
                <SearchBar
                    focused={this.state.searchBarFocused}
                    value={this.state.searchTxt}
                    onCancel={() => {
                        this.setState({
                            searchTxt: "",
                            searchBarFocused: false
                        })
                    }}
                    onFocus={() => {
                        this.setState({
                            searchTxt: "",
                            searchBarFocused: true
                        })
                    }}
                    onChange={({target}) => {
                        this.setState({
                            searchTxt: target.value
                        })
                    }}/>
                <Cells>
                    {
                        items.length > 0 ? items.filter(item => !item.is_deleted).map((row, i) => {
                                return (
                                    <Cell onClick={this.onShowDetail.bind(this, row)} key={i} access>
                                        <CellHeader>
                                            {row[field_key]}
                                        </CellHeader>
                                        <CellBody/>
                                        <CellFooter/>
                                    </Cell>
                                )
                            }) :

                            (
                                !fetching && <div className="weui-loadmore weui-loadmore_line">
                                    <span className="weui-loadmore__tips">暂无数据</span>
                                </div>
                            )
                    }
                    {
                        fetching ?
                            <div className="weui-loadmore">
                                <i className="weui-loading"/>
                                <span className="weui-loadmore__tips">正在加载</span>
                            </div> :
                            <span className="weui-loadmore__tips"/>
                    }

                </Cells>
                <Page {...this.props.page_add}>
                    <PageTopActionIcon type={"close"}/>
                    <PageTopActionIcon type={"check"} onClick={(target) => {
                        alert("check")
                    }} action={"right"}/>
                    <Cells>
                        {
                            this.props.fields && Object.keys(this.props.fields).map(field=>{
                                return (
                                    <Cell key={field}>
                                        <CellHeader>
                                        {field}
                                        </CellHeader>
                                        <CellBody>
                                            <input placeholder="请输入" className={"weui-input"} type="text" value={""}/>
                                        </CellBody>
                                        <CellFooter/>
                                    </Cell> 
                                )
                            })
                        }
                    </Cells>
                </Page>
                <Page {...this.props.page_detail}>
                    <PageTopActionIcon type={"close"}/>
                    <PageTopActionIcon type={"del"} onClick={(target) => {
                        window.weui.confirm("确定要删除么?", () => this.props.dispatch(delRow(row.id, () => {
                            close_page(this.props.dispatch, target)
                        })))
                    }} action={"right"}/>
                    <Cells>
                        {
                            (row && fields) && Object.keys(fields).map(field=>{
                                console.log({field},fields[field].type,row[field])                                
                                return (
                                    <Cell key={field} onClick={this.onShowField.bind(this, field)} access>
                                        <CellHeader>
                                            {field}
                                        </CellHeader>
                                        <CellBody/>
                                        <CellFooter>
                                            {row[field]}
                                        </CellFooter>
                                    </Cell>
                                )
                            })
                        }
                    </Cells>
                </Page>
                <Page {...this.props.page_field}>
                    <PageTopActionIcon type={"close"}/>
                    <PageTopActionIcon type={"check"} onClick={(target) => {
                        const row_id = row.id
                        const field = this.props.page_field.title
                        this.props.dispatch(changeRow({
                            row_id,
                            field,
                            value: this.state.fieldValue
                        }, () => close_page(this.props.dispatch, target)))
                    }} action={"right"}/>
                    <Cells>
                        <Cell>
                            <CellHeader>
                            </CellHeader>
                            <CellBody>
                                <textarea placeholder="请输入" style={{height: "90vh"}} className="weui-textarea" onChange={({target}) => {
                                    this.setState({
                                        fieldValue: target.value
                                    })
                                }} value={this.state.fieldValue}/>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                    </Cells>
                </Page>
            </div>
        )
    }
});
