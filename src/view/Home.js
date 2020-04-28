import React, {Component} from 'react';
import {FaBars} from 'react-icons/fa';
import {connect} from "react-redux";
import {del_access_token, is_logged} from '../lib/utils'
import './Home.css';
import Star from './pages/Star';

class Home extends Component {
    state = {};

    componentDidMount() {

    }

    render() {
        const menus = [];
        if(is_logged()){
            if(this.props.me && this.props.me.level === 0){
                menus.push(
                    {
                        label: 'Admin',
                        onClick:  () => {
                            this.props.dispatch({
                                type:"route/showPage",
                                payload:{
                                    id:"admin"
                                }
                            })
                        }
                    }
                )
            }
            menus.push(
                {
                    label: '退出登录',
                    onClick:  () => {
                        del_access_token();
                        this.props.dispatch({
                            type:"app/setState",
                            payload:{
                                access_token:null
                            }
                        });
                        window.location.href = "/";
                        window.location.reload();
                    }
                }
            )
        }else{
             menus.push(
                {
                    label: '登录',
                    onClick:  () => {
                        window.location.href = "#login";
                        window.location.reload();
                    }
                }
            )
        }
        return (
            <div className="Home fade-in">
                <div onClick={()=>{
                    window.weui.actionSheet(menus, [
                        {
                            label: '取消',
                            onClick: function () {
                                console.log('取消');
                            }
                        }
                    ], {
                        title: '',
                        className: "weui-custom",
                        onClose: function(){
                            console.log('关闭');
                        }
                    });


                }}  className={"setting"}>
                    <FaBars size={"1.5em"} color={"white"}/>
                </div>
                <Star />
            </div>
        );
    }
}

export default connect(({instance,user}) => ({
    showVipLines: instance.showVipLines,
    me: user.me,
    showVipLinesActionSheet: instance.showVipLinesActionSheet,
}))(Home);
