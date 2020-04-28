import React, {Component} from 'react';

class Mac extends Component {
    state = {
        mac:false
    }
    render() {
        return (
            <div className={"Order"}>
                <article class="weui-article">
                    <a href="/static/release/vpn-v1.0.1.app.zip" target={"_blank"} className="weui-btn weui-btn_primary">下载</a>
                </article>
            </div>
        )
    }
}

export default Mac;
