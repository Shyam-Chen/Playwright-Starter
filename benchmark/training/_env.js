import axios from 'axios';

export const API_URL = 'http://3.112.250.104:8090';
export const API_PATH = '/facts_backend-2.6/rest';

export const RUN_SPEC = {
  connections: 10,
  duration: 10,
  pipelining: 1,
};

export const HEADERS_OPTS = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const LOGIN_FUNCS = {
  url: `${API_URL + API_PATH}/permissions/login`,
  async Admin() {
    const login = await axios.post(this.url, {
      userName: '858142',
      password: '858142',
    });

    return login.data.DATA.token;
  },
  async User() {
    const login = await axios.post(this.url, {
      userName: '336716',
      password: '336716',
    });

    return login.data.DATA.token;
  },
};
