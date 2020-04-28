import React, {Component} from 'react';
import {get_platform} from "../../../lib/utils"
class Install extends Component {
    ios(){
        return (
            <div className={"Help"}>
                <article className="weui-article">
                    <a href="https://apps.apple.com/cn/app/outline-app/id1356177741" target={"_blank"} className="weui-btn weui-btn_primary">下载</a>
                </article>
            </div>
        )

    }
    mac(){
        return (
            <div className={"Help"}>
                <article className="weui-article">
                    <a href="https://apps.apple.com/cn/app/outline-app/id1356177741" target={"_blank"} className="weui-btn weui-btn_primary">下载</a>
                </article>
            </div>
        )

    }
    android(){
        return (
            <div className={"Help"}>
                <article className="weui-article">
                    <a href="https://github.com/Jigsaw-Code/outline-releases/blob/master/client/Outline.apk?raw=true" target={"_blank"} className="weui-btn weui-btn_primary">下载</a>
                </article>
            </div>
        )
    }
    window(){
        return (
            <div className={"Help"}>
                <article className="weui-article">
                    <a href="https://apps.apple.com/cn/app/outline-app/id1356177741" target={"_blank"} className="weui-btn weui-btn_primary">下载</a>
                </article>
            </div>
        )
    }
    render() {
        const platform = get_platform();
        console.log(platform)
        switch (platform) {
            case "mac":
                return this.mac();
            case "ios":
                return this.ios;
            case "android":
                return this.android
            default:
                return this.window()

        }
    }
}

export default Install;
