import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, API_PATH, RUN_SPEC, HEADERS_OPTS } from './_env';

(async () => {
  await autocannon(
    {
      ...RUN_SPEC,
      title: 'auth',
      url: API_URL,
      headers: { ...HEADERS_OPTS },
      requests: [
        // 登入
        {
          method: 'POST',
          path: `${API_PATH}/permissions/login`,
          body: JSON.stringify({ userName: '858142', password: '858142' }),
        },
      ],
    },
    report,
  );
})();
