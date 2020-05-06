import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchRows} from "./store"
import {get_zone_name} from "lib/utils";
import {Cell, CellBody, CellFooter, CellHeader} from "react-weui";
import IconOvpn from "../../components/icons/IconOvpn";
import IconSs from "../../components/icons/IconSs";
import {base64encode} from "nodejs-base64";
import QRCode from "qrcode"
import {onConnect} from "lib/shadowsocks"
import PageTopActionIcon from "components/page/PageTopActionIcon";

class FreeLines extends Component {
    componentDidMount() {
        this.props.dispatch(fetchRows())
    }

    componentWillUnmount() {
        //clear_time_id()
    }

    onSelectCell(item) {
        onConnect({...item, name: item.id}, [], this.props.dispatch)
    }

    showQrCode(item) {
        const {server_type, pwd, ip, port} = item;
        if (server_type === "shadowsocks") {
            const qr_code = "ss://" + base64encode(`aes-256-cfb:${pwd}@${ip}:${port}`)
            console.log(qr_code)
            QRCode.toDataURL(qr_code, function (err, url) {
                weui.alert("<div style='flex-direction:column;margin-bottom:16px;display: flex;justify-content: center;align-items: center'>" +
                    `<h4 style='margin-bottom: 8px'>${ip} : ${port}</h4>` +
                    `<h4 style='margin-bottom: 8px'>密码: ${pwd}</h4>` +
                    `<h4 style='margin-bottom: 8px'>算法: aes-256-cfb</h4>` +
                    `<img style='height: 180px;width: 180px' src='${url}' />` +
                    "</div>")
            })
        }
    }

    render() {
        const {items, timestamp} = this.props;
        return (
            <div className={"FreeLines"}>
                <PageTopActionIcon type={"close"}/>

                <div style={{margin: "0 2px"}}>
                    {items.length > 0 && items.map((item, i) => {
                        const {server_type, ip, port, zone} = item;
                        const zone_name = get_zone_name(zone)
                        const {delays} = window.globalObject;
                        const delay = delays[ip] ? delays[ip].toFixed(1) : null;
                        return (
                            <Cell key={i} t={timestamp} onClick={this.onSelectCell.bind(this, item)} access>
                                <CellHeader>
                                    <span>{zone_name}</span>
                                    <span className={"hide"}>
                                        {
                                            delay ?
                                                <span className="weui-badge weui-badge-green" style={{
                                                    display: "inline-block",
                                                    marginLeft: 8,
                                                    marginRight: 8
                                                }}>{delay} ms</span> :
                                                <span className="weui-badge"
                                                      style={{display: "inline-block", marginLeft: 12}}>
                                                    超时
                                            </span>
                                        }
                                    </span>
                                </CellHeader>
                                {port}
                                <CellBody>
                                </CellBody>
                                <CellFooter>

                                        <span style={{fontSize: 12, marginRight: 12}}>
                                            免费共享
                                        </span>
                                    {
                                        server_type === "openvpn" ?
                                            <IconOvpn/> :
                                            <IconSs/>
                                    }
                                </CellFooter>
                            </Cell>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default connect(({app, line}) => ({
    items: line.items,
    timestamp: app.timestamp,
}))(FreeLines);
