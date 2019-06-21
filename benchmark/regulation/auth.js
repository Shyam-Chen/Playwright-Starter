import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, RUN_SPEC } from './_env';

(async () => {
  await autocannon(
    {
      ...RUN_SPEC,
      title: 'auth',
      url: `${API_URL}/permissions/login`,
      method: 'POST',
      body: JSON.stringify({
        userName: '050001',
        password: 'test',
      }),
    },
    report,
  );
})();
