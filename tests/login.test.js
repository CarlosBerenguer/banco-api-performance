import http from 'k6/http'
import {sleep} from 'k6'
import {check} from 'k6'

export const options = {
    vus: 10,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
         http_req_failed: ['rate<0.01']
    }
}

export default function() {
    const url = "http://localhost:3000/login";

    //requisition body
    const payload = JSON.stringify({
        username:'julio.lima',
        senha:'123456'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json', 
        },
    };

    const response = http.post(url, payload, params);
    
    check(response, {
        'Validar Status 200': (resp) => resp.status === 200,
        'Validar Token String': (resp) => typeof(resp.json().token) == 'string'
    });
    
    sleep(1)   
}