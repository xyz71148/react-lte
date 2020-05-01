import React, {Component} from 'react';
import axios from 'axios'
import "./style.css"
import {connect} from "react-redux";
import {validateEmail, set_access_token, get_platform, parse_url} from "../../../../lib/utils"
import {open_url} from "../../../../lib/utils"
import PageTopActionIcon from "../../../../components/page/PageTopActionIcon";

class Index extends Component {
    state = {
        email: '',
        code: "",
        sendTxt: "获取验证码",
        sendBtnDisabled: false,
        agree: true,
        pass: false
    };

    onSendCapthca() {
        if (!validateEmail(this.state.email)) {
            return window.weui.topTips('请输入正确的Email地址');
        }
        const loading = window.weui.loading("获取中...")
        axios.post("/auth/email/captcha", {
            email: this.state.email
        }).then(({data}) => {
            const {code, msg} = data;
            loading.hide()
            if (code === 200) {
                window.weui.toast("发送成功")
                this.setState({
                    sendBtnDisabled: true,
                    sendTxt: "60"
                })
                window.___t_id = setInterval(() => {
                    let {sendTxt} = this.state;
                    sendTxt = parseInt(sendTxt) - 1;
                    if (sendTxt <= 0) {
                        this.setState({
                            sendTxt: "获取验证码",
                            sendBtnDisabled: false
                        })
                        clearInterval(window.___t_id)
                    } else {
                        this.setState({
                            sendTxt
                        })
                    }

                }, 1000)
            } else {
                window.weui.topTips(msg)
            }
        }).catch(() => loading.hide())

    }

    onChangeInput(key, {target}) {
        const state = {};
        state[key] = target.value;
        this.setState({...state}, () => {
            this.onCheckInput()
        })
    }

    onLogin() {
        this.onCheckInput();
        const loading = window.weui.loading("登录中...");
        axios.post("/auth/email/captcha/verify", {
            email: this.state.email,
            code: this.state.code,
        }).then(({data}) => {
            const {code, body, msg} = data;
            loading.hide();
            if (code === 200) {
                window.weui.toast(msg);
                const {access_token, user} = body;
                this.props.dispatch({
                    type: "user/setState",
                    payload: {
                        me: {
                            ...user,
                            email: this.state.email
                        }
                    }
                });
                set_access_token(access_token);
                this.props.dispatch({
                    type: "app/logged",
                    payload: {
                        access_token
                    }
                })
                window.location.href = "#index"
                window.location.reload()
                this.props.dispatch({
                    type: "app/hideHalfScreenDialog"
                })
            } else {

                window.weui.topTips(msg)
            }
        }).catch(() => loading.hide())
    }

    onCheckInput() {
        const {email, code, agree} = this.state;
        if (agree && validateEmail(email) && code.length === 4) {
            this.setState({pass: true})
        } else {
            this.setState({pass: false})
        }
    }

    onChangeAgree({target}) {
        this.setState({agree: target.checked}, () => {
            this.onCheckInput()
        })
    }

    render() {
        return (
            <div className={"Login"}>
                <PageTopActionIcon type={"close"} onClick={()=>{
                    window.history.go(-1)
                }}/>
                <div className="weui-form" style={{paddingTop: 32}}>
                    <div className="weui-form__text-area">
                        <h2 className="weui-form__title">登录</h2>
                        <div className="weui-form__desc"/>
                    </div>
                    <div className="weui-form__control-area" style={{marginTop:16}}>
                        <div className="weui-cells__group weui-cells__group_form">
                            <div className="weui-cells weui-cells_form">
                                <div className="weui-cell weui-cell_active">
                                    <div className="weui-cell__hd"><label className="weui-label">Email</label></div>
                                    <div className="weui-cell__bd">
                                        <input className="weui-input" type="text"
                                               onChange={this.onChangeInput.bind(this, "email")}
                                               placeholder="请输入Email" value={this.state.email}/>
                                    </div>
                                    <div className="weui-cell__ft">
                                        <button className="weui-btn_reset weui-btn_icon">
                                            <i id="showIOSDialog1" className="weui-icon-info-circle"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="weui-cell weui-cell_active weui-cell_vcode">
                                    <div className="weui-cell__hd"><label className="weui-label">验证码</label></div>
                                    <div className="weui-cell__bd">
                                        <input onChange={this.onChangeInput.bind(this, "code")} autoFocus=""
                                               value={this.state.code} className="weui-input" type="number"
                                               pattern="[0-9]*"
                                               placeholder="输入验证码" maxLength="6"/>
                                    </div>
                                    <div className="weui-cell__ft">
                                        <button disabled={this.state.sendBtnDisabled}
                                                onClick={this.onSendCapthca.bind(this)}
                                                className="weui-btn weui-btn_default weui-vcode-btn">{this.state.sendTxt}</button>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="weui-cells__tips"><a className="weui-link" href="javascript:">收不到验证码</a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="weui-form__tips-area hide">
                        <label id="weuiAgree" htmlFor="weuiAgreeCheckbox" className="weui-agree">
                            <input id="weuiAgreeCheckbox" type="checkbox" onChange={this.onChangeAgree.bind(this)}
                                   className="weui-agree__checkbox"/>
                            <span className="weui-agree__text">
                                    阅读并同意
                                    <button href="#">《相关条款》</button>
                                </span>
                        </label>
                    </div>
                    <div className="weui-form__opr-area">
                        <button disabled={!this.state.pass} onClick={this.onLogin.bind(this)}
                                className={this.state.pass ? "weui-btn weui-btn_primary" : "weui-btn weui-btn_primary weui-btn_disabled"}>确定
                        </button>
                    </div>

                    {
                        get_platform() !== 'cordova' &&
                        <div className={"oauth"}>
                            <div className={"google"} onClick={() => {
                                const url = parse_url(window.location.href)
                                const redirect_url = `${url.protocol}//${url.host}`
                                const u = window.globalObject.google_login_url + "?redirect_url=" + encodeURIComponent(redirect_url)
                                open_url(u, "_blank")
                            }}>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Index);
