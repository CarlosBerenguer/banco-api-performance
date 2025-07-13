import http from 'k6/http'
import {sleep} from 'k6'
import {check} from 'k6'
const postLogin = JSON.parse(open('../Fixtures/postLogin.json'))

export const options = {
    stages: [
        {duration: '5s', target : 10},
        {duration: '20s', target : 10},
        {duration: '5s', target : 0}
    ],
    //iterations: 1,
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
         http_req_failed: ['rate<0.01']
    }
}

export default function() {
    
    
    check(response, {
        'Validar Status 200': (resp) => resp.status === 200,
        'Validar Token String': (resp) => typeof(resp.json().token) == 'string'
    });
    
    sleep(1)   
}