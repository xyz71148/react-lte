import axios from "axios";
import URL from "url-parse";

export function timeStamp2String(time) {
    var datetime = new Date();
    datetime.setTime(time);

    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    //var second = datetime.getSeconds();
    //var mseconds = datetime.getMilliseconds();
    return  year + "年" + month + "月" + date + "日 " + hour + ":" + minute;
}

export function parent_by_selector(node, selector, stop_selector = 'body') {
    var parent = node.parentNode;
    while (true) {
        if (parent.matches(stop_selector)) break;
        if (parent.matches(selector)) break;
        parent = parent.parentNode; // get upper parent and check again
    }
    if (parent.matches(stop_selector)) parent = null; // when parent is a tag 'body' -> parent not found
    return parent;
};
export function close_page(dispatch,target) {
    const page_close_id = parent_by_selector(target,".page").id.substring(5);
    dispatch({
        type: "route/onClosePage",
        payload:{
            page_close_id
        }
    })
}
export function parse_url(url) {
    return URL(url, true)
}

export function get_access_token() {
    const access_token = localStorage.getItem("access_token");
    axios.defaults.headers.common.Authorization = access_token ? access_token : undefined;
    return access_token
}

export function is_logged() {
    return !!get_access_token()
}

export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function set_access_token(access_token) {
    localStorage.setItem("access_token", access_token);
    axios.defaults.headers.common.Authorization = access_token;
}

export function del_access_token() {
    localStorage.removeItem("access_token");
    axios.defaults.headers.common.Authorization = null;
}

export function go_login() {
    localStorage.removeItem("access_token");
    axios.defaults.headers.common.Authorization = null;
    window.location.href = "#login";
    window.location.reload()
}

export function getZoneTree(zones, names) {
    const res = []
    const state = {}
    for (let i in zones) {
        const zone = zones[i]
        const t = zone.split("-");

        const n = `${t[0]}-${t[1]}`
        if (!state[t[0]]) {
            state[t[0]] = {}
        }
        if (!state[t[0]][t[1]] && names[n]) {
            state[t[0]][t[1]] = []
        }
        if (names[n]) {
            state[t[0]][t[1]].push(t[2])
        }

    }

    for (let i in Object.keys(state)) {
        const key = Object.keys(state)[i]
        const row = {}
        const children = []
        for (let j in Object.keys(state[key])) {
            const key1 = Object.keys(state[key])[j]
            const row1 = {}
            row1.value = key1;
            const n = `${key}-${key1}`
            if (!names[n]) continue
            row1.label = names[n]
            row1.children = state[key][key1].map(k => {
                return {
                    value: k,
                    label: k
                }
            })
            children.push(row1)
        }
        if (children.length > 0) {
            row.value = key;
            row.label = names[key]
            row.children = children
            res.push(row)
        }

    }
    return res;
}

export function get_zone_name(zone) {
    const zone_t = zone.split("-");
    const {zone_names} = window.globalObject.constant;
    const zone_name = zone_names[zone_t[0] + "-" + zone_t[1]] + "-" + zone_t[2];
    return zone_name;
}

export function download_file(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export function open_url(url,target) {
    var element = document.createElement('a');
    element.setAttribute('href', url);
    if(target) element.setAttribute('target', target);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


export const Clipboard = (function (window, document, navigator) {
    var textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
            selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    copy = function (text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };

    return {
        copy: copy
    };
})(window, document, navigator);

export function get_platform() {
    const n = navigator.userAgent.toLowerCase()
    if (/(iphone|ipad|ipod|ios)/i.test(n)) {
        return "ios"
    } else if (/(macintosh|mac os x)/i.test(n)) {
        return "mac"
    } else if (/(windows|win32)/i.test(n)) {
        return "windows"
    } else if (/(android)/i.test(n)) {
        return "android"
    } else if (/(cordova)/i.test(n)) {
        return "cordova"
    } else {
        return "web"
    }
}
