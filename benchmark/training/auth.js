import autocannon from 'autocannon';

import { API_URL, RUN_SPEC, report } from './core';

const auth = async () => {
  await autocannon({
    ...RUN_SPEC,
    title: 'POST /permissions/login',
    url: `${API_URL}/permissions/login`,
    method: 'POST',
    body: JSON.stringify({
      userName: 'admin',
      password: 'test',
    }),
  }, report);
};

auth();
