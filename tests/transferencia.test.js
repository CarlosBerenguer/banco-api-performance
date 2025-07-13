import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../Helpers/autenticacao.js';
import { pegarBaseURL } from '../Utils/variaveis.js';

export const options = {
  iterations:1
};

export default function() {
  const token = obterToken()

  const url = pegarBaseURL() + '/transferencias'

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino:2,
    valor:20,
    token:""
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  let res = http.post(url, payload, params);

  check(res, { "status is 201": (res) => res.status === 201 });
  sleep(1);
}
