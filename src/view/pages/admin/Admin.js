import React, {Component} from 'react';
import {connect} from "react-redux";
import {Cell, CellBody, CellFooter, CellHeader, Cells} from "react-weui";
import "./style.css"
import {MdSettings} from "react-icons/md";
import {saveRow as ethAddressSaveRow} from "../../../store/admin/ethAddressReducer"
import PageTopActionIcon from "../../components/PageTopActionIcon";

export default connect(({setting,eth_address, user, route}) => ({
    settings: setting.settings,
    rows: eth_address.rows,
    me: user.me,
    ethAddressAddPage: route.page["admin/eth-address/add"] ? route.page["admin/eth-address/add"] : {visible: false}
}))(class extends Component {
    state = {
        searchBarFocused: false,
        searchTxt: ""
    }

    componentDidMount() {
        //this.props.dispatch(fetchRow())
    }

    onSelectCell(item) {
        this.props.dispatch({
            type: "route/showPage",
            payload: {
                ...item
            }
        })
    }
    onClosePage(){
        this.props.dispatch({
            type: "route/hidePage"
        })
    }
    render() {
        const {me} = this.props;
        if (!me || me.level !== 0) {
            return <div>no access</div>
        }
        const size = "1.4em"
        const Icons = {
            "admin/setting": (<MdSettings size={size}/>),
            "admin/eth-address": (<MdSettings size={size}/>),
            "admin/user": (<MdSettings size={size}/>),
            "admin/order": (<MdSettings size={size}/>),
            "admin/line": (<MdSettings size={size}/>),
            "admin/instance": (<MdSettings size={size}/>),
        };

        return (
            <div className={"Setting"}>
                <PageTopActionIcon type={"close"}/>
                <div>
                    <Cells>
                        {
                            [
                                {
                                    title: "订单",
                                    id: "admin/order"
                                },
                                {
                                    title: "免费线路",
                                    id: "admin/line"
                                },
                                {
                                    title: "实例",
                                    id: "admin/instance"
                                },
                                {
                                    title: "用户",
                                    id: "admin/user"
                                },
                                {
                                    title: "设置",
                                    id: "admin/setting"
                                },
                                {
                                    title: "Eth地址",
                                    id: "admin/eth-address",
                                    onAdd: () => {
                                        this.props.dispatch({
                                            type: "eth_address/setState",
                                            payload: {
                                                rows:""
                                            }
                                        })
                                        this.props.dispatch({
                                            type: "route/showPage",
                                            payload: {
                                                id: "admin/eth-address/add",
                                                onConfirm: () => {
                                                    const {rows} = this.props;
                                                    if(rows.length === 0){
                                                        return window.weui.alert("保存内容不能为空")
                                                    }
                                                    this.props.dispatch(ethAddressSaveRow({rows:rows.split("\n")}))
                                                    this.props.dispatch({
                                                        type: "route/hidePage"
                                                    })
                                                }
                                            }
                                        })
                                    }
                                }
                            ].map(item => {
                                return (
                                    <Cell key={item.id} onClick={this.onSelectCell.bind(this, item)} access>
                                        <CellHeader>
                                            {Icons[item.id]}
                                            {item.title}
                                        </CellHeader>
                                        <CellBody/>
                                        <CellFooter/>
                                    </Cell>
                                )
                            })
                        }
                    </Cells>
                </div>
            </div>
        )
    }
});
