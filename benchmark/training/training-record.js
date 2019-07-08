import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, API_PATH, RUN_SPEC, HEADERS_OPTS, LOGIN_FUNCS } from './_env';

(async () => {
  const token = await LOGIN_FUNCS.EHS();

  await autocannon(
    {
      ...RUN_SPEC,
      title: 'training-record',
      url: API_URL,
      headers: { ...HEADERS_OPTS, token },
      requests: [
        // ...
        {
          method: 'POST',
          path: `${API_PATH}/...`,
          body: JSON.stringify(),
        },
      ],
    },
    report,
  );
})();
