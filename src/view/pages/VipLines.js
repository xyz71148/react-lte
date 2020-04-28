import React, {Component} from 'react';
import {Cell, CellBody, CellFooter, CellHeader,} from 'react-weui';
import {connect} from "react-redux";
import {
    clear_time_id,
    resetInstance,
    fetchInstances,
    getInstance,
    startInstance,
    stopInstance,
    removeInstance,
    noteInstance
} from "../../store/front/instanceActions"
import {get_zone_name, download_file, open_url} from "../../lib/utils";
import {onConnectServer} from "../../lib/shadowsocks";
import IconSs from "../components/IconSs"
import IconOvpn from "../components/IconOvpn"
import "../Home.css";
import FreeLines from "./FreeLines";

import PageTopActionIcon from "../components/PageTopActionIcon"

class VipLines extends Component {
    state = {
        visiblePort: false,
        titlePort: null
    }

    componentDidMount() {
        this.props.dispatch(fetchInstances())
    }

    componentWillUnmount() {
        clear_time_id()
    }

    onSelectCell(instance) {
        const {id, server_type} = instance
        if (server_type === "openvpn") {
            this.props.dispatch(getInstance(id, ({body}) => {
                this.onSelectCell1(body)
            }))
        } else {
            this.onSelectCell1(instance)
        }
    }

    onSelectCell1(instance) {
        const {id, zone, server_type, note, ovpn_config, name, status, port_status, ip, port} = instance;
        let menus = []
        console.log(status)
        if (status === "TERMINATED") {
            menus = [
                {
                    label: '启动',
                    onClick: () => {
                        let msg = "确定要启动么"
                        window.weui.confirm(msg, () => {
                            this.props.dispatch(startInstance(id, () => {
                                this.props.dispatch(fetchInstances())
                            }))
                        });
                    }
                }
            ]
        }
        if (status === "RUNNING" || status === "OK") {
            menus = [
                {
                    label: '停止',
                    onClick: () => {
                        let msg = "确定要停止么"
                        window.weui.confirm(msg, () => {
                            this.props.dispatch(stopInstance(id, () => {
                                this.props.dispatch(fetchInstances())
                            }))
                        });
                    }
                },
                {
                    label: '重启(更换IP)',
                    onClick: () => {
                        let msg = "重启将会删除此线路,创建一条新的线路"
                        if (window.location.host === `${ip}:${port}`) {
                            msg += ",当前网址所在线路跟需要重启的线路在同一个服务器,重启之后此网址不能再访问,因此,请关注您的邮箱新获取访问地址";
                        }
                        window.weui.confirm(msg, () => {
                            this.props.dispatch(resetInstance(id, () => {
                                this.props.dispatch(fetchInstances())
                            }))
                        });
                    }
                },
            ]
        }


        if ((server_type === "ovpn" || server_type === "openvpn") && port_status === "UP") {
            menus.unshift({
                label: '导出OVPN',
                onClick: () => {
                    this.props.dispatch({
                        type: "app/hideActionSheet",
                    })
                    if (ovpn_config && ovpn_config.length > 0) {
                        download_file(name + ".ovpn", ovpn_config);
                    } else {
                        window.weui.alert("导出OVPN错误")
                    }
                }
            })

        }

        menus.unshift({
            label: '备注',
            onClick: () => {
                window.weui.prompt("请输入", (note) => {
                    this.props.dispatch(noteInstance(id, "note", note, () => {
                        this.props.dispatch(fetchInstances())
                    }))
                }, () => {
                }, {
                    title: "备注",
                    value: note ? note : ""
                })
            }
        })
        const t = name.split("-");
        const ii = t[t.length - 1]
        const {me} = this.props;

        if (ip) {
            menus.unshift({
                label: "测速",
                onClick: () => {
                    open_url("http://ping.chinaz.com/" + ip, "_blank")
                }
            })

        }
        if (port_status === 'UP') {
            menus.unshift({
                label: "连接",
                onClick: () => {
                    onConnectServer(instance, this.props.dispatch)
                }
            })
        }
        if (me && me.level === 0) {
            menus.unshift({
                label: "查看详情",
                onClick: () => {
                    this.props.dispatch({type: "instance/setState", payload: {item: instance}})
                    this.props.dispatch({
                        type: "route/showPage", payload: {
                            id: "instance",
                            onAdd: server_type === "shadowsocks" ? () => {
                                this.props.dispatch({
                                    type: "route/showPage", payload: {
                                        id: "instance_port_add",
                                        title: "添加端口"
                                    }
                                })
                            } : undefined,
                            title: (<span style={{marginRight: 8}}>{ii} {get_zone_name(zone)}</span>)
                        }
                    })
                }
            })
        }

        const actions = [
            {
                label: '删除此线路',
                onClick: () => {
                    let msg
                    if (window.location.host === `${ip}:${port}`) {
                        msg = ",当前网址所在线路跟需要删除的线路在同一个服务器,删除之后此网址不能再访问,因此,请关注您的邮箱新获取访问地址";
                    } else {
                        msg = "确认要删除此线路?"
                    }

                    window.weui.confirm(msg, () => {
                        this.props.dispatch(removeInstance(id, () => {
                            this.props.dispatch(removeInstance(id, () => {
                                this.props.dispatch(fetchInstances())
                            }))
                        }))
                    });
                }
            }
        ]
        window.weui.actionSheet([...menus, ...actions], [], {
            title: ""
        });

    }

    getStatus(status) {
        if (status === "STAGING") {
            return (
                <span style={{color:"steelblue"}}>启动中</span>
            )
        }
        if (status === "OK") {
            return (
                <span style={{color:"green"}}>运行中</span>
            )
        }
        if (status === "TERMINATED") {
            return (
                <span style={{color:"orange"}}>已停止</span>
            )
        }
        return "-"
    }

    render() {
        const {items} = this.props;
        return (
            <div className={"VipLines"}>
                <PageTopActionIcon type={"close"}/>
                <div style={{margin: "0 2px"}}>
                    {items.length > 0 && items.map((item, i) => {
                            const {ip, name, status,port_status ,note, server_type, id, zone} = item;
                            const {delays} = window.globalObject;
                            const delay = delays[ip] ? delays[ip].toFixed(1) : null;
                            //console.log(timestamp, delay);
                            const t = name.split("-");
                            const ii = t[t.length - 1]
                            const zone_name = get_zone_name(zone)
                            return (
                                <Cell key={id} onClick={this.onSelectCell.bind(this, item)} access>
                                    <CellHeader>
                                        {
                                            (status !== "TERMINATED" && port_status !== 'UP') && <i className="weui-loading" />
                                        }
                                        <span>{ii} {zone_name}</span>
                                        {/*{*/}
                                        {/*    ( 0 && ip) && (*/}
                                        {/*        delay ?*/}
                                        {/*            <span className="weui-badge weui-badge-green" style={{*/}
                                        {/*                display: "inline-block",*/}
                                        {/*                marginLeft: 8,*/}
                                        {/*                marginRight: 8*/}
                                        {/*            }}>{delay} ms</span> :*/}
                                        {/*            <span className="weui-badge"*/}
                                        {/*                  style={{display: "inline-block", marginLeft: 12}}>*/}
                                        {/*            超时*/}
                                        {/*        </span>*/}
                                        {/*    )*/}
                                        {/*}*/}
                                    </CellHeader>
                                    <CellBody style={{fontSize: 12, marginLeft: 12}}>
                                       <span>
                                            {this.getStatus(status)}
                                       </span>
                                    </CellBody>
                                    <CellFooter>
                                        <span style={{fontSize: 12, marginRight: 12}}>
                                            {note}
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
                <FreeLines />
            </div>
        )
    }
}

export default connect(({app, user, instance}) => ({
    selectedVipType: instance.selectedVipType,
    items: instance.items,
    instance: instance.item,
    timestamp: app.timestamp,
    me: user.me,
    showVipLinesActionSheet: instance.showVipLinesActionSheet,
}))(VipLines);
