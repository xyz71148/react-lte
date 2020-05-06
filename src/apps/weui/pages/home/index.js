import React, {Component} from 'react';
import {connect} from "react-redux";
import "./style.css"
import {MdAdd, MdCheck, MdChevronLeft, MdDelete} from 'react-icons/md';

class Home extends Component {
    state = {
        star_css: "star_off",
        tipTxt: null
    };

    componentDidMount() {
    }

    render() {
        const {app_loading} = this.props
        console.log(app_loading)

        return (
            <div className={"Home"}>
                <div className="tabbar">
                    <div className="page__bd" style={{height: "100%"}}>
                        <div className="weui-tab">
                            <div className="weui-tab__panel">
                                <div className={"tabbar_body"}>dd</div>
                            </div>
                            <div className="weui-tabbar">
                                <div className="weui-tabbar__item weui-bar__item_on" onClick={() => {
                                    alert(11)
                                }}>
                                    <div><MdAdd className={"weui-tabbar__icon"}/></div>
                                    <p className="weui-tabbar__label">微信</p>
                                </div>
                                <div className="weui-tabbar__item">
                                    <div><MdCheck className={"weui-tabbar__icon"}/></div>
                                    <p className="weui-tabbar__label">通讯录</p>
                                </div>
                                <div className="weui-tabbar__item">
                                    <div><MdChevronLeft className={"weui-tabbar__icon"}/></div>
                                    <p className="weui-tabbar__label">发现</p>
                                </div>
                                <div className="weui-tabbar__item">
                                    <div><MdDelete className={"weui-tabbar__icon"}/></div>
                                    <p className="weui-tabbar__label">我</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(({app}) => ({
    app_loading: app.loading,
}))(Home);
