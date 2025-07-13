import http from 'k6/http'
import { pegarBaseURL } from '../Utils/variaveis.js';
const postLogin = JSON.parse(open('../Fixtures/postLogin.json'))

export function obterToken(){
    const url = pegarBaseURL() + "/login";

    //requisition body
    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json', 
        },
    };

    const response = http.post(url, payload, params);

    return response.json('token')
}