import React, {Component} from 'react';
import {connect} from "react-redux";
import {Cell, CellBody, CellFooter, CellHeader, Cells} from "react-weui";
import {fetchRows, delRow} from "../../../store/admin/ethAddressReducer"
import "./style.css"
import Page from "../../../lib/page"
import PageTopActionIcon from "../../components/PageTopActionIcon";
import SearchBar from "../../components/SearchBar";

export default connect(({eth_address, route}) => ({
    items: eth_address.items,
    rows: eth_address.rows,
    page: route.page['admin/eth-address/add'] ? route.page['admin/eth-address/add'] : {visible: false}
}))(class extends Component {
    state = {
        searchBarFocused: false,
        searchTxt: ""
    }

    componentDidMount() {
        this.props.dispatch(fetchRows())
    }

    onCancel() {
        this.setState({
            searchBarFocused: !this.state.searchBarFocused
        })
    }

    render() {
        const {items} = this.props;
        let rows = [];
        items && items.map(item => {
            if (this.state.searchTxt.length > 0 && item[0].toLowerCase().indexOf(this.state.searchTxt) >= 0) {
                rows.push(item)
            }
            return item
        });
        if (this.state.searchTxt.length === 0) {
            rows = items
        }

        return (
            <div className={"EthAddress"}>

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
                        rows.map(row => {
                            return (
                                <Cell onClick={() => {
                                    window.weui.actionSheet([{
                                        label:"删除",
                                        onClick:()=>{
                                            this.props.dispatch(delRow(row[0]))
                                        }
                                    }],[],{})

                                }} key={row[0]} access>
                                    <CellHeader style={{wordBreak: "break-all" }}>
                                        {row[0]}
                                    </CellHeader>
                                    <CellBody/>
                                    <CellFooter>
                                        {row[1] ? "used" : ""}
                                    </CellFooter>
                                </Cell>
                            )
                        })
                    }

                </Cells>
                <Page {...this.props.page}>

                    <PageTopActionIcon type={"close"}/>
                    <div className="weui-cells__group weui-cells__group_form">
                        <div style={{height: "100vh"}} className="weui-cells weui-cells_form">
                            <div className="weui-cell ">
                                <div className="weui-cell__bd" style={{padding: "0 6px"}}>
                                        <textarea style={{height: "90vh"}} className="weui-textarea"
                                                  onChange={({target}) => {
                                                      this.props.dispatch({
                                                          type: "eth_address/setState",
                                                          payload: {
                                                              rows:target.value
                                                          }
                                                      })
                                                  }}
                                                  placeholder="请输入"
                                                  value={this.props.rows}
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
