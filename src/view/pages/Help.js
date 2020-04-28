import React, {Component} from 'react';
import "../Home.css"
import {Cell, CellBody, CellFooter, CellHeader, Cells} from "react-weui";
import Page from "../../lib/page"

import Mac from "./help/Mac"
import PageTopActionIcon from "../components/PageTopActionIcon";

class Help extends Component {
    state = {
        mac:false
    }
    render() {
        return (
            <div className={"Order"}>

                <PageTopActionIcon type={"close"}/>
                <div style={{margin: "0 2px"}}>
                    <Cells>
                        <Cell access onClick={()=>this.setState({mac:true})}>
                            <CellHeader>
                                Mac安装使用
                            </CellHeader>
                            <CellBody />
                            <CellFooter />
                        </Cell>
                    </Cells>
                </div>
                <Page title={"Mac安装使用"}
                      visible={this.state.mac}
                      onClose={()=>{this.setState({mac:false})}}>
                    <Mac />
                </Page>
            </div>
        )
    }
}

export default Help;
