import React, {Component} from 'react';
import {Cell, CellBody, CellFooter, CellHeader, Cells} from "react-weui";
import {connect} from "react-redux";
import {get_platform, go_login, is_logged} from "../../../../lib/utils";
import {createInstance, fetchInstances} from "../instance/store";
import {MdAccountBox, MdAddShoppingCart, MdGamepad, MdReceipt, MdSwapCalls} from "react-icons/md";

class Index extends Component {
    state = {
        star_css: "star_off",
        tipTxt: null
    };

    onCreateLine() {
        const {me} = this.props;
        const items = [{
            label: 'Shadowsocks',
            value: "shadowsocks"
        }];

        if (me && me.level === 0) {
            items.push({
                label: 'OpenVpn',
                value: "openvpn"
            })
        }
        window.weui.picker(items, {
            defaultValue: ["shadowsocks"],
            className: 'weui-custom',
            onChange: function (result) {
                //console.log(item, index);
                console.log(result);
            },
            onConfirm: (result) => {
                const server_type = result[0]
                setTimeout(() => {
                    window.weui.picker(window.globalObject.constant.zones, {
                        className: 'weui-custom',
                        container: 'body',
                        title: "选择区域",
                        defaultValue: window.globalObject.constant.default_zone,
                        onChange: (result) => {
                            console.log(result)
                        },
                        onConfirm: (result) => {
                            const zone = `${result['0']['value']}-${result['1']['value']}-${result['2']['value']}`;
                            this.props.dispatch(createInstance({zone, server_type}, () => {
                                document.querySelector('.weui-toast__content').innerText = "加载中...";
                                this.props.dispatch(fetchInstances())
                            }))
                        }
                    });
                }, 500)
            },
            id: 'picker',
            title: '选择类型'
        });
    }

    onSelectCell({id}) {
        if (['instance', "line", "order", "plan", "account"].includes(id) && !is_logged()) {
            return window.weui.alert("请先登陆", () => go_login())
        } else {
            window.location.href = "#" + id
        }
    }

    connect() {
        const {current_connect_id, current_connect_status} = this.props;
        console.log(JSON.stringify({current_connect_id, current_connect_status}))
        if (current_connect_status === "CONNECTED") {
            this.props.dispatch({
                type: "ss_server/setState",
                payload: {
                    current_connect_status: "DISCONNECTED",
                }
            });
            this.setState({
                star_css: "star_off"
            })

            this.clearTimeId();
            window.ss_server.stop(current_connect_id, ({status}) => {
                console.log(JSON.stringify({current_connect_id, status}))
            })
        }
        if (["RECONNECTING", "DISCONNECTED"].includes(current_connect_status)) {
            this.connecting()
            window.ss_server.start(current_connect_id, ({msg, status}) => {
                console.log(JSON.stringify({current_connect_id, status}))
                this.props.dispatch({
                    type: "ss_server/setState",
                    payload: {
                        current_connect_status: status,
                    }
                });

                if (status === "CONNECTED") {
                    this.setState({
                        star_css: "star_on_2"
                    })
                    this.clearTimeId();
                }

                if (status === "ERROR") {
                    window.weui.toast(msg)
                }
                this.clearTimeId()
            })
        }
    }

    connecting() {
        this.stop_interval = false;
        let i = 0;
        this.setState({
            star_css: "star_on_0",
        });

        window.connecting_time_id && clearInterval(window.connecting_time_id)
        window.connecting_time_id = setInterval(() => {
            if (this.stop_interval) return;
            i++;
            const j = ((i) % 3);
            var rep;
            switch (j) {
                case 0:
                    rep = "..";
                    break;
                case 1:
                    rep = "...";
                    break;
                case 2:
                    rep = ".";
                    break;
                default:
                    break;
            }
            console.log(rep)
            this.setState({
                star_css: "star_on_" + j,
                tipTxt: "Connecting" + rep
            })
        }, 1400)
    }

    onClickStar() {
        const {current_connect_id, current_connect_status} = this.props;
        console.log(current_connect_id)
        console.log(current_connect_status)
        console.log(get_platform())
        if (get_platform() === "cordova" && current_connect_id) {
            this.connect()
        } else {
            this.onSelectCell({
                id: "vip",
                title: "我的线路"
            })
        }
    }

    stop_interval = true;

    clearTimeId() {
        this.stop_interval = true;
        window.connecting_time_id && clearInterval(window.connecting_time_id)
    }

    componentDidMount() {
        const {current_connect_status} = this.props;
        if (current_connect_status === "CONNECTED") {
            this.setState({
                star_css: "star_on_2"
            })
        }
    }

    componentWillUnmount() {
        this.clearTimeId()
    }

    render() {
        const {star_css} = this.state;
        const size = "1.4em"
        const Icons = {
            "line": (<MdGamepad size={size}/>),
            "instance": (<MdSwapCalls size={size}/>),
            "order": (<MdReceipt size={size}/>),
            "plan": (<MdAddShoppingCart size={size}/>),
            "account": (<MdAccountBox size={size}/>)
        };

        return (
            <div className={"Star"}>
                <div className="star_wrap">
                    <div onClick={() => {
                        this.onClickStar()
                    }}>
                        <div className={"star " + (get_platform() === "cordova" ? star_css : "star_on_2")}>
                        </div>
                    </div>
                </div>
                <div>
                    <Cells>
                        {
                            [
                                {
                                    title: "我的实例",
                                    id: "instance"
                                },
                                {
                                    title: "线路",
                                    id: "line"
                                }
                            ].map(item => {
                                return (
                                    <Cell key={item.id} onClick={this.onSelectCell.bind(this, item)} access>
                                        <CellHeader>
                                            {Icons[item.id]}
                                            {item.title}
                                        </CellHeader>
                                        <CellBody>
                                        </CellBody>
                                        <CellFooter/>
                                    </Cell>

                                )
                            })
                        }
                    </Cells>

                    <Cells>
                        {
                            [
                                {
                                    title: "Vip套餐",
                                    id: "plan"
                                },
                                {
                                    title: "我的订单",
                                    id: "order"
                                },
                                {
                                    title: "我的帐户",
                                    id: "account"
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

                    <Cells>
                        {
                            [
                                // {
                                //     title: "使用帮助",
                                //     id: "help"
                                // }
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
}

const mapStateToProps = state => ({
    instances: state.instance.items,
    loading: state.instance.loading,
    error: state.instance.error,
    me: state.user.me,
    current_connect_id: state.ss_server.current_connect_id,
    current_connect_status: state.ss_server.current_connect_status
});

export default connect(mapStateToProps)(Index);
