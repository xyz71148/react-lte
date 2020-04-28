import React, {Component} from 'react';
import {connect} from "react-redux";
import {Cell, CellBody, CellFooter, CellHeader, Cells} from "react-weui";
import {fetchRow, saveRow, delRow} from "../../../store/admin/settingReducer"
import "./style.css"
import Page from "../../../lib/page"
import {MdDelete} from "react-icons/md";
import PageTopActionIcon from "../../components/PageTopActionIcon";
import SearchBar from "../../components/SearchBar";

export default connect(({setting, route}) => ({
    settings: setting.settings,
    page: route.page['admin/setting/item'] ? route.page['admin/setting/item'] : {visible: false}
}))(class extends Component {
    state = {
        searchBarFocused: false,
        searchTxt: "",
        name: "",
        value: ""
    }

    componentDidMount() {
        this.props.dispatch(fetchRow())
    }

    onCancel() {
        this.setState({
            searchBarFocused: !this.state.searchBarFocused
        })
    }

    render() {
        const {settings} = this.props;
        let rows = [];
        settings && settings.map(setting => {
            if (this.state.searchTxt.length > 0 && setting.name.toLowerCase().indexOf(this.state.searchTxt) >= 0) {
                rows.push(setting)
            }
            return setting
        });
        if (this.state.searchTxt.length === 0) {
            rows = settings
        }
        return (
            <div className={"Setting"}>
                <PageTopActionIcon type={"close"}/>
                <SearchBar
                    focused={this.state.searchBarFocused}
                    value={this.state.searchTxt}
                    onCancel={()=>{
                        this.setState({
                            searchTxt:"",
                            searchBarFocused:false
                        })
                    }}
                    onFocus={()=>{
                        this.setState({
                            searchTxt:"",
                            searchBarFocused:true
                        })
                    }}
                    onChange={({target})=>{
                        this.setState({
                            searchTxt:target.value
                        })
                    }} />
                <Cells>
                    {
                        rows.map((row, i) => {
                            return (
                                <Cell onClick={() => {
                                    this.setState({
                                        name: row.name,
                                        value: row.value,
                                    })
                                    this.props.dispatch({
                                        type: "route/showPage",
                                        payload: {
                                            id: "admin/setting/item",

                                            onConfirm: () => {
                                                this.props.dispatch(saveRow(this.state))
                                            }
                                        }
                                    })
                                }} key={i} access>
                                    <CellHeader>
                                        {row.name}
                                    </CellHeader>
                                    <CellBody/>
                                    <CellFooter>
                                    </CellFooter>
                                </Cell>
                            )
                        })
                    }

                </Cells>
                <Page {...this.props.page}>

                    <PageTopActionIcon type={"close"}/>
                    <Cell>
                        <CellHeader>
                        </CellHeader>
                        <CellBody>
                            <input onChange={({target}) => {
                                const {value} = target
                                this.setState({
                                    name: value
                                })
                            }} className={"weui-input"} type="text" value={this.state.name}/>
                        </CellBody>
                        <CellFooter className={"ml16"}>
                            <MdDelete onClick={() => {
                                window.weui.confirm("确定要删除么", () => {
                                    this.props.dispatch(delRow(this.state.name, () => {
                                        this.props.dispatch({type: "route/hidePage"})
                                    }))
                                })
                            }} siz={"1.5em"}/>
                        </CellFooter>
                    </Cell>
                    <div className="weui-cells__group weui-cells__group_form">
                        <div style={{height: "100vh"}} className="weui-cells weui-cells_form">
                            <div className="weui-cell ">
                                <div className="weui-cell__bd" style={{padding: "0 6px"}}>
                                        <textarea style={{height: "90vh"}} className="weui-textarea"
                                                  onChange={({target}) => {
                                                      this.setState({
                                                          value: target.value
                                                      })
                                                  }}
                                                  placeholder="请输入"
                                                  value={this.state.value}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
        )
    }
});
