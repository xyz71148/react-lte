import axios from "axios";
const querystring = require('query-string');

// import {namespace} from "./paymentReducer"

export function fetchPaymentUrl({payment_type,redirect_url, amount, desc}, callback) {
    return dispatch => {
        return axios.get("/payment/" + payment_type+"?"+querystring.stringify({
            amount,desc,redirect_url
        }))
            .then(({data}) => {
                callback(data)
            })
            .catch(error => {
                callback({error})
            });
    };
}


export function fetchPaymentStatus({payment_type, payment_id}, callback) {
    return dispatch => {
        return axios.get("/payment/" + payment_type+`/check/${payment_id}`)
            .then(({data}) => {
                callback(data)
            })
            .catch(error => {
                callback({error})
            });
    };
}
