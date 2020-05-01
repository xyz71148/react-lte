import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"
import {Cell, CellBody, CellFooter, CellHeader} from "react-weui";
import Page from "../../../../components/page";
import {download_file} from "../../../../lib/utils";
import {base64encode} from "nodejs-base64";
import {fetchInstances, saveInstanceServices} from "./store"
import {onConnect} from "../../../../lib/shadowsocks"
import PageTopActionIcon from "../../../../components/page/PageTopActionIcon";

var QRCode = require('qrcode');

class Detail extends Component {
    state = {
        port: "",
        pwd: "",
        is_public: false,
        name: ""
    }

    showQrCode(item) {
        const {pwd, ip, port} = item;
        const qr_code = "ss://" + base64encode(`aes-256-cfb:${pwd}@${ip}:${port}`)
        QRCode.toDataURL(qr_code, function (err, url) {
            window.weui.alert("<div style='flex-direction:column;margin-bottom:16px;display: flex;justify-content: center;align-items: center'>" +
                `<h4 style='margin-bottom: 8px'>${ip} : ${port}</h4>` +
                `<h4 style='margin-bottom: 8px'>密码: ${pwd}</h4>` +
                `<h4 style='margin-bottom: 8px'>算法: aes-256-cfb</h4>` +
                `<img style='height: 180px;width: 180px' src='${url}' />` +
                "</div>")
        })
    }

    onRemove(services, port, instance) {
        window.weui.confirm("确定要删除么?", () => {
            const s = []
            services.map(service => {
                if (service.port !== port) {
                    s.push(service)
                }
                return service
            })
            instance.services = s
            const loading = window.weui.loading("保存中...")
            this.props.dispatch(saveInstanceServices(instance, () => {
                loading.hide()
                this.props.dispatch(fetchInstances())
                this.props.dispatch({
                    type: "instance/setState",
                    payload: {
                        item: instance
                    }
                })
            }))
        })
    }

    onSelectedRow({port, pwd}, instance, flag) {
        const {services, server_type, ip} = instance
        const menus = []
        if (ip && server_type === "shadowsocks") {
            const menus1 = []
            if (flag !== 1) {
                menus1.push({
                    label: '删除',
                    onClick: () => {
                        this.onRemove(services, port, instance)
                    }
                })
            }
            return onConnect({...instance, port, pwd}, menus1, this.props.dispatch)
        }
        if (server_type === "openvpn" && instance.ovpn_config && instance.ovpn_config.length > 0) {
            menus.push({
                label: '导出Ovpn文件',
                onClick: function () {
                    download_file(instance.name + ".ovpn", instance.ovpn_config);
                }
            })

        } else {
            if (server_type === "openvpn") {
                window.weui.alert("无法导出")
            }
        }

        if (flag !== 1) {
            menus.push({
                label: '删除',
                onClick: () => {
                    this.onRemove(services, port, instance)
                }
            })
        }
        window.weui.actionSheet(menus, [
            {
                label: '取消',
                onClick: function () {
                    console.log('取消');
                }
            }
        ], {
            title: '',
            className: "custom-classname",
            onClose: () => {

            }
        });
    }

    onChangeInput(key, {target}) {
        const state = {}
        state[key] = key === "is_public" ? target.checked : target.value;
        this.setState({...state})
    }

    render() {
        const {instance, services} = this.props
        if (!services) {
            window.location.href = "#"
            window.location.reload()
            return null;
        }
        return (
            <div className={"InstanceView"}>

                <PageTopActionIcon type={"close"}/>
                {
                    instance.ip &&
                    <div style={{paddingTop: 16, paddingLeft: 24, marginBottom: 24}}>
                        IP: {instance.ip}
                    </div>
                }
                {
                    instance.server_type === "shadowsocks" ?
                        <Cell access onClick={() => {
                            this.onSelectedRow({port: instance.port, pwd: instance.pwd}, instance, 1)
                        }}>
                            <CellHeader>
                                端口: {instance.port}
                            </CellHeader>
                            <CellBody>
                            </CellBody>
                            <CellFooter>
                                密码:{instance.pwd}
                            </CellFooter>
                        </Cell> :
                        <Cell access onClick={() => {
                            this.onSelectedRow({port: instance.port, pwd: instance.pwd}, instance, 1)
                        }}>
                            <CellHeader>
                                默认
                            </CellHeader>
                            <CellBody>
                            </CellBody>
                            <CellFooter>
                                导出Ovpn文件
                            </CellFooter>
                        </Cell>

                }


                {
                    services.map((service, i) => {
                        return (
                            instance.server_type === "shadowsocks" ?

                                <Cell access key={i} onClick={() => {
                                    this.onSelectedRow(service, instance, 0)
                                }}>
                                    <CellHeader>
                                        <div>
                                            端口: {service.port}
                                        </div>
                                    </CellHeader>
                                    <CellBody style={{marginLeft: 12}}>
                                        {service.is_public ? "公开" : ""}
                                    </CellBody>
                                    <CellFooter>
                                        密码:{service.pwd}
                                    </CellFooter>
                                </Cell> :
                                <Cell access key={i} onClick={() => {
                                    this.onSelectedRow(service, instance, 0)
                                }}>
                                    <CellHeader>
                                        <div>
                                            {service.name}
                                        </div>
                                        <div>
                                        </div>
                                    </CellHeader>
                                    <CellBody style={{marginLeft: 12}}>
                                    </CellBody>
                                    <CellFooter>

                                    </CellFooter>
                                </Cell>
                        )
                    })
                }
                <Page title={"添加"}
                      id={"instance_port_add"}
                      visible={this.props.page.instance_port_add && this.props.page.instance_port_add.visible}
                      onConfirm={() => {
                          const {port, pwd, is_public, name} = this.state;

                          if (instance.server_type === 'shadowsocks') {

                              const p = parseInt(port);
                              if ((p < 9000 || p > 9999) || port === "") {
                                  return window.weui.alert("端口号需在9000-9999之间")
                              }
                              let f = false
                              instance.services.map(service => {
                                  const {port} = service;
                                  if (port === p) {
                                      f = true
                                  }
                                  return service
                              })
                              if (f || p === instance.port) {
                                  return window.weui.alert("端口号已存在")
                              }
                              if (("" + pwd).length !== 6) {
                                  return window.weui.alert("密码需要是6位字符")
                              }

                              instance.services.push({
                                  port: p,
                                  pwd,
                                  is_public
                              })
                          } else {
                              if (("" + name).length === 0) {
                                  return window.weui.alert("请输入名称")
                              }
                              instance.services.push({
                                  name
                              })
                          }

                          const loading = window.weui.loading("保存中...")
                          this.props.dispatch(saveInstanceServices(instance, () => {
                              loading.hide();
                              window.weui.toast("保存成功")
                              this.props.dispatch(fetchInstances())
                              this.props.dispatch({
                                  type: "route/hidePage"
                              })
                          }))
                      }} onClose={() => {
                    this.props.dispatch({
                        type: "route/hidePage"
                    })
                }}>

                    <div className="">
                        <div className="weui-cells__group weui-cells__group_form">
                            <div className="weui-cells weui-cells_form">
                                {
                                    instance.server_type === "shadowsocks" ?
                                        <div>
                                            <div className="weui-cell weui-cell_active">
                                                <div className="weui-cell__hd"><label className="weui-label">端口</label>
                                                </div>
                                                <div className="weui-cell__bd">
                                                    <input className="weui-input" type="number" max="9999" min="9000"
                                                           onChange={this.onChangeInput.bind(this, "port")}
                                                           placeholder="请输入9000-9999之间的端口号" value={this.state.port}/>
                                                </div>
                                                <div className="weui-cell__ft">

                                                </div>
                                            </div>
                                            <div className="weui-cell weui-cell_active">
                                                <div className="weui-cell__hd"><label className="weui-label">密码</label>
                                                </div>
                                                <div className="weui-cell__bd">
                                                    <input className="weui-input" type="text"
                                                           onChange={this.onChangeInput.bind(this, "pwd")}
                                                           placeholder="请输入6位字符密码" value={this.state.pwd}/>
                                                </div>
                                                <div className="weui-cell__ft">

                                                </div>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="weui-cell weui-cell_active">
                                                <div className="weui-cell__hd"><label className="weui-label">名称</label>
                                                </div>
                                                <div className="weui-cell__bd">
                                                    <input className="weui-input" type="text"
                                                           onChange={this.onChangeInput.bind(this, "name")}
                                                           placeholder="请输入名称" value={this.state.name}/>
                                                </div>
                                                <div className="weui-cell__ft">

                                                </div>
                                            </div>
                                        </div>
                                }


                                <div className="weui-cell weui-cell_active weui-cell_switch">
                                    <div className="weui-cell__hd"><label className="weui-label">公开</label></div>
                                    <div className="weui-cell__bd">
                                        <input className="weui-switch"
                                               checked={this.state.is_public}
                                               onChange={this.onChangeInput.bind(this, "is_public")} type="checkbox"/>
                                    </div>
                                    <div className="weui-cell__ft">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
        )
    }
}

export default connect(({instance, route}) => ({
    instance: instance.item,
    services: instance.item.services,
    page: route.page,
    showAddService: instance.showAddService
}))(Detail);
