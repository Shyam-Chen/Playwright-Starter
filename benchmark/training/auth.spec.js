import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, RUN_SPEC, HEADERS_OPTS } from './_env';

import auth from './auth';

(async () => {
  await autocannon(
    {
      ...RUN_SPEC,
      title: 'auth',
      url: API_URL,
      headers: { ...HEADERS_OPTS },
      requests: [...auth],
    },
    report,
  );
})();
