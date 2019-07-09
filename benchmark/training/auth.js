import { API_PATH } from './_env';

export default [
  // 登入
  {
    method: 'POST',
    path: `${API_PATH}/permissions/login`,
    body: JSON.stringify({ userName: '858142', password: '858142' }),
  },
];
