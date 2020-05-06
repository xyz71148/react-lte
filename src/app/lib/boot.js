import axios from "axios";
import {go_login} from "./utils";
export const initApp = ()=>{
    set_axios_default();
};
const set_axios_default = ()=>{
    axios.defaults.timeout = 15000;
    axios.interceptors.request.use(request => {
        const {url} = request;
        const base_api_url = window.globalObject.base_api_url;
        if ( url && (url.indexOf("http") === 0)) {
            request["url"] = `${url}`
        }else{
            request["url"] = `${base_api_url}${url}`
        }
        return request
    }, error => {
        console.error("request",error);
        return Promise.reject(error);
    })
axios.interceptors.response.use((response) => {
        //console.log(response)

        if(response.data && response.data.code && response.data.code === 403){
            return weui.alert("没有权限")
        }
        return response;
    }, error => {
        console.error("response",error.message);
        if(error.message.indexOf("401") > 0 || (error.response && error.response.status === 401)){
            localStorage.removeItem("access_token");
            return weui.alert("请先登陆", () => go_login())
            //return Promise.reject(error);
        }else{
            //weui.topTips(error.message)
            return Promise.reject(error);
        }
    });
}
